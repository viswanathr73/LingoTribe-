import React, { useState } from "react";
import { Link,useNavigate } from "react-router";
import LiveConversationRooms from "../components/homepageComponents/LiveConversationRooms.jsx";
import FreeTrialModal from "../components/homepageComponents/FreeTrialModal.jsx";
import LiveCallInterface from "../components/LiveCallInterface.jsx";
import { Search, Lock } from "lucide-react";


const LockedLiveCallInterface = ({ onUnlockClick }) => {
    
    

  return (
    <div className="relative">
      <div className="opacity-50 pointer-events-none">
        <LiveCallInterface id="preview" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-lg transition-all duration-300 hover:bg-black/70">
        <Lock className="h-14 w-14 text-primary mb-4 animate-pulse" />
        <h3 className="text-2xl font-bold text-white mb-3">
          Unlock Live Video Calls
        </h3>
        <p className="text-white/80 mb-6 text-center max-w-md px-4">
          Join live conversation rooms and practice your target language with native speakers. Start your free 7-day trial to unlock Premium features!
        </p>
        <button
          onClick={onUnlockClick}
          className="btn btn-primary btn-lg"
        >
          Start Free Trial
        </button>
      </div>
    </div>
  );
};

const LiveRooms = () => {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [requestSent, setRequestSent] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  const navigate = useNavigate();

  // Expanded live conversation rooms (more variety)
  const upcomingConversations = [
    {
      id: 1,
      title: "Spanish Beginner Chat: Daily Routines",
      time: "Today, 3:00 PM",
      participants: 6,
      maxParticipants: 8,
      level: "Beginner",
      host: "Maria G.",
      language: "Spanish",
    },
    {
      id: 2,
      title: "Japanese Practice: Describing Your Hometown",
      time: "Today, 7:30 PM",
      participants: 4,
      maxParticipants: 6,
      level: "Intermediate",
      host: "Kenji T.",
      language: "Japanese",
    },
    {
      id: 3,
      title: "French Conversation Club: Cinema & Arts",
      time: "Tomorrow, 4:00 PM",
      participants: 7,
      maxParticipants: 10,
      level: "Advanced",
      host: "Claire D.",
      language: "French",
    },
    {
      id: 4,
      title: "German Basics: Greetings and Introductions",
      time: "Today, 5:00 PM",
      participants: 3,
      maxParticipants: 8,
      level: "Beginner",
      host: "Anna S.",
      language: "German",
    },
    {
      id: 5,
      title: "Mandarin Chat: Food and Culture",
      time: "Tomorrow, 2:00 PM",
      participants: 5,
      maxParticipants: 7,
      level: "Intermediate",
      host: "Li Wei",
      language: "Mandarin",
    },
    {
      id: 6,
      title: "Arabic Conversation: Travel Phrases",
      time: "Today, 8:00 PM",
      participants: 4,
      maxParticipants: 6,
      level: "Beginner",
      host: "Ahmed K.",
      language: "Arabic",
    },
    {
      id: 7,
      title: "Italian Discussion: Fashion and Design",
      time: "Tomorrow, 6:00 PM",
      participants: 6,
      maxParticipants: 10,
      level: "Advanced",
      host: "Giulia M.",
      language: "Italian",
    },
    {
      id: 8,
      title: "Portuguese Practice: Music and Dance",
      time: "Today, 4:30 PM",
      participants: 5,
      maxParticipants: 8,
      level: "Intermediate",
      host: "Beatriz S.",
      language: "Portuguese",
    },
  ];

  // Filter rooms based on search query
  const filteredConversations = upcomingConversations.filter(
    (room) =>
      room.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      room.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle join click
  const handleJoinClick = (roomId) => {
    const isSubscribed = false; // Replace with actual subscription check
    if (isSubscribed) {
      navigate(`/live-rooms/${roomId}`);
    } else {
      setSelectedRoomId(roomId);
      setShowTrialModal(true);
    }
  };

  // Handle free trial request
  const handleRequestFreeTrial = () => {
    setRequestSent(true);
    // Simulate subscription activation for testing
    setTimeout(() => {
      if (selectedRoomId) {
        browserHistory.push(`/live-rooms/${selectedRoomId}`);
      } else {
        // For locked interface, reload page to simulate unlock
        window.location.reload();
      }
      setShowTrialModal(false);
      setRequestSent(false);
      setSelectedRoomId(null);
    }, 1000); // Delay for demo purposes
  };

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto py-8 px-4">
        {/* Locked Live Call Interface */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Live Call Preview</h2>
          <LockedLiveCallInterface
            onUnlockClick={() => setShowTrialModal(true)}
          />
        </section>

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Live Conversation Rooms</h1>
            <p className="text-lg opacity-80">
              Join voice and video chats to practice your target language
            </p>
          </div>
          <div className="relative mt-4 sm:mt-0">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-50" />
            <input
              type="text"
              placeholder="Search by language, level, or topic..."
              className="input input-bordered pl-10 w-full sm:w-80"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Subscription Notice */}
        <div className="bg-primary/10 p-4 rounded-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-lg font-medium">
              Unlock all live rooms with a Premium subscription
            </span>
          </div>
          <button
            onClick={() => setShowTrialModal(true)}
            className="btn btn-primary btn-wide"
          >
            Try 7 Days Free
          </button>
        </div>

        {/* Live Rooms */}
        <LiveConversationRooms
          conversations={filteredConversations}
          onJoinClick={handleJoinClick}
        />

        {/* Free Trial Modal */}
        <FreeTrialModal
          showTrialModal={showTrialModal}
          setShowTrialModal={setShowTrialModal}
          requestSent={requestSent}
          setRequestSent={setRequestSent}
          onRequestFreeTrial={handleRequestFreeTrial}
        />
      </div>
    </div>
  );
};

export default LiveRooms;