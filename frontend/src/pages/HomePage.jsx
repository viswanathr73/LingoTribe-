import React, { useState } from "react";
import useAuthUser from "../hooks/useAuthUser";
import worldMapAnimation from  '../assets/world-map-animation.json';
import HeroBanner from "../components/homepageComponents/HeroBanner.jsx";
import LiveActivityStats from "../components/homepageComponents/LiveActivityStats.jsx";
import FeaturedPartners from "../components/homepageComponents/FeaturedPartners.jsx";
import LiveConversationRooms from "../components/homepageComponents/LiveConversationRooms.jsx";
import LanguageCommunities from "../components/homepageComponents/LanguageCommunities.jsx";

import QuickLanguageMatching from "../components/homepageComponents/QuickLanguageMatching.jsx";
import SuccessStories from "../components/homepageComponents/SuccessStories.jsx";
import AppFeatures from "../components/homepageComponents/AppFeatures.jsx";
import CTASection from "../components/homepageComponents/CTASection.jsx";
import ExpertTips from "../components/homepageComponents/ExpertTips.jsx";
import FreeTrialModal from "../components/homepageComponents/FreeTrialModal.jsx";

const HomePage = () => {
  const { authUser } = useAuthUser();
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  // Sample featured language partners
  const featuredPartners = [
    {
      id: 1,
      name: "Sofia Chen",
      avatar: "https://avatar.iran.liara.run/public/82.png",
      nativeLanguage: "Mandarin",
      learningLanguage: "Spanish",
      country: "China",
      bio: "University student passionate about Latin American culture. Looking for Spanish conversation practice!",
      onlineStatus: "online",
    },
    {
      id: 2,
      name: "Miguel Herrera",
      avatar: "https://avatar.iran.liara.run/public/53.png",
      nativeLanguage: "Spanish",
      learningLanguage: "Japanese",
      country: "Mexico",
      bio: "Software engineer and anime enthusiast. Happy to help with Spanish in exchange for Japanese practice.",
      onlineStatus: "online",
    },
    {
      id: 3,
      name: "Julia Schmidt",
      avatar: "https://avatar.iran.liara.run/public/52.png",
      nativeLanguage: "German",
      learningLanguage: "English",
      country: "Germany",
      bio: "Literature student seeking to improve conversational English. Can offer German language help.",
      onlineStatus: "offline",
    },
    {
      id: 4,
      name: "Ahmed Al-Farsi",
      avatar: "https://avatar.iran.liara.run/public/12.png",
      nativeLanguage: "Arabic",
      learningLanguage: "French",
      country: "UAE",
      bio: "Travel blogger looking to improve my French. Happy to help with Arabic or English.",
      onlineStatus: "online",
    },
  ];

  // Sample active language communities
  const languageCommunities = [
    {
      language: "Spanish",
      members: 12453,
      icon: "🇪🇸",
      activeConversations: 42,
      events: 3,
    },
    {
      language: "Japanese",
      members: 8932,
      icon: "🇯🇵",
      activeConversations: 35,
      events: 2,
    },
    {
      language: "French",
      members: 7621,
      icon: "🇫🇷",
      activeConversations: 28,
      events: 4,
    },
    {
      language: "German",
      members: 5834,
      icon: "🇩🇪",
      activeConversations: 19,
      events: 1,
    },
  ];

  // Sample upcoming live conversation sessions
  const upcomingConversations = [
    {
      id: 1,
      title: "Spanish Beginner Chat: Daily Routines",
      time: "Today, 3:00 PM",
      participants: 6,
      maxParticipants: 8,
      level: "Beginner",
      host: "Maria G.",
    },
    {
      id: 2,
      title: "Japanese Practice: Describe Yourself",
      time: "Today, 7:30 PM",
      participants: 4,
      maxParticipants: 6,
      level: "Intermediate",
      host: "Kenji T.",
    },
    {
      id: 3,
      title: "French Conversation Club: Cinema & Arts",
      time: "Tomorrow, 4:00 PM",
      participants: 7,
      maxParticipants: 10,
      level: "Advanced",
      host: "Claire D.",
    },
  ];

  return (
    <div className="flex">
      <div className="flex-1 min-h-screen bg-base-100 overflow-y-auto">
        <HeroBanner
          authUser={authUser}
          worldMapAnimation={worldMapAnimation}
          setShowTrialModal={setShowTrialModal}
        />
        <LiveActivityStats />
        <FeaturedPartners
          partners={featuredPartners}
          setShowTrialModal={setShowTrialModal}
        />
        <LiveConversationRooms conversations={upcomingConversations} />
        <LanguageCommunities
          communities={languageCommunities}
          setShowTrialModal={setShowTrialModal}
        />
        <QuickLanguageMatching setShowTrialModal={setShowTrialModal} />
        <SuccessStories />
        <AppFeatures />
        <CTASection setShowTrialModal={setShowTrialModal} />
        <ExpertTips />
        <FreeTrialModal
          showTrialModal={showTrialModal}
          setShowTrialModal={setShowTrialModal}
          requestSent={requestSent}
          setRequestSent={setRequestSent}
        />
      </div>
    </div>
  );
};

export default HomePage;
