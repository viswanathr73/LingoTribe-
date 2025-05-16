import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Check } from "lucide-react";
import CommunityHero from "../components/communitypageComponents/CommunityHero.jsx";
import CommunityStats from "../components/communitypageComponents/CommunityStats.jsx";
import CommunityList from "../components/communitypageComponents/CommunityList.jsx";
import CommunitySubscription from "../components/communitypageComponents/CommunitySubscription.jsx";
import CommunityFeatures from "../components/communitypageComponents/CommunityFeatures.jsx";
import CommunityTestimonials from "../components/communitypageComponents/CommunityTestimonials.jsx";
import CommunityCTA from "../components/communitypageComponents/CommunityCTA.jsx";
import useAuthUser from "../hooks/useAuthUser";

const Communities = () => {
  const { authUser } = useAuthUser();
  const [selectedLanguage, setSelectedLanguage] = useState("all");
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const languageCommunities = [
    {
      id: 1,
      language: "Spanish",
      members: 12453,
      icon: "🇪🇸",
      activeConversations: 42,
      events: 3,
      description:
        "One of our largest and most active communities. Practice Spanish with native speakers from Spain, Mexico, Colombia, Argentina and more. Regular conversation clubs, grammar workshops and cultural exchange events.",
      popularTopics: ["Travel", "Cooking", "Literature", "Movies", "Music"],
      upcomingEvents: [
        { title: "Beginner Spanish Hour", time: "Today, 6:00 PM", participants: 8 },
        { title: "Latin American Film Discussion", time: "Tomorrow, 7:30 PM", participants: 12 },
      ],
    },
    {
      id: 2,
      language: "Japanese",
      members: 8932,
      icon: "🇯🇵",
      activeConversations: 35,
      events: 2,
      description:
        "Join our Japanese language community to practice with native speakers and fellow learners. From anime discussions to business Japanese, we cover all aspects of the language and culture.",
      popularTopics: ["Anime & Manga", "Travel", "Technology", "Traditional Culture", "Food"],
      upcomingEvents: [
        { title: "Kanji Study Group", time: "Today, 8:00 PM", participants: 6 },
        { title: "Japanese Conversation Club", time: "Saturday, 10:00 AM", participants: 15 },
      ],
    },
    {
      id: 3,
      language: "French",
      members: 7621,
      icon: "🇫🇷",
      activeConversations: 28,
      events: 4,
      description:
        "Our French community connects learners with native speakers from France, Belgium, Canada, and other Francophone regions. Regular events include conversation practice, pronunciation workshops, and cultural discussions.",
      popularTopics: ["Cuisine", "Cinema", "Literature", "Travel", "Fashion"],
      upcomingEvents: [
        { title: "French Pronunciation Workshop", time: "Tomorrow, 5:00 PM", participants: 10 },
        { title: "Book Club: 'Le Petit Prince'", time: "Sunday, 3:00 PM", participants: 7 },
      ],
    },
    {
      id: 4,
      language: "German",
      members: 5834,
      icon: "🇩🇪",
      activeConversations: 19,
      events: 1,
      description:
        "Practice German with native speakers and fellow learners. Our community includes members from Germany, Austria, and Switzerland, offering authentic language practice and cultural insights.",
      popularTopics: ["Business German", "Travel", "Philosophy", "Technology", "Music"],
      upcomingEvents: [
        { title: "Intermediate German Conversation", time: "Friday, 6:00 PM", participants: 8 },
        { title: "German Grammar Q&A", time: "Monday, 7:00 PM", participants: 12 },
      ],
    },
    {
      id: 5,
      language: "Mandarin Chinese",
      members: 6742,
      icon: "🇨🇳",
      activeConversations: 26,
      events: 3,
      description:
        "Our Mandarin Chinese community brings together native speakers and learners of all levels. Practice character writing, tones, and conversational skills in a supportive environment.",
      popularTopics: ["Business Chinese", "Characters & Calligraphy", "Pop Culture", "History", "Food"],
      upcomingEvents: [
        { title: "Chinese Characters Workshop", time: "Saturday, 9:00 AM", participants: 14 },
        { title: "Mandarin Conversation Hour", time: "Sunday, 7:00 PM", participants: 9 },
      ],
    },
    {
      id: 6,
      language: "Russian",
      members: 4521,
      icon: "🇷🇺",
      activeConversations: 15,
      events: 2,
      description:
        "Join our Russian language community to master this fascinating language. From beginners to advanced learners, everyone is welcome to practice and share cultural insights.",
      popularTopics: ["Literature", "History", "Travel", "Music", "Cinema"],
      upcomingEvents: [
        { title: "Russian Grammar Workshop", time: "Friday, 7:00 PM", participants: 6 },
        { title: "Russian Culture Discussion", time: "Tuesday, 6:30 PM", participants: 11 },
      ],
    },
    {
      id: 7,
      language: "Italian",
      members: 4238,
      icon: "🇮🇹",
      activeConversations: 17,
      events: 2,
      description:
        "Immerse yourself in Italian language and culture with our vibrant community. Practice conversation, learn about Italian cuisine, art, and lifestyle with native speakers and fellow enthusiasts.",
      popularTopics: ["Cuisine", "Art & History", "Travel", "Fashion", "Cinema"],
      upcomingEvents: [
        { title: "Italian Cooking & Language", time: "Saturday, 4:00 PM", participants: 12 },
        { title: "Italian for Travelers", time: "Monday, 6:00 PM", participants: 8 },
      ],
    },
    {
      id: 8,
      language: "Arabic",
      members: 3752,
      icon: "🇦🇪",
      activeConversations: 14,
      events: 1,
      description:
        "Our Arabic language community connects learners with speakers of Modern Standard Arabic and various dialects. Learn about the rich cultural traditions while improving your language skills.",
      popularTopics: ["Dialects", "Calligraphy", "Literature", "History", "Travel"],
      upcomingEvents: [
        { title: "Arabic Script Workshop", time: "Sunday, 2:00 PM", participants: 7 },
        { title: "MSA vs. Dialects Discussion", time: "Wednesday, 7:00 PM", participants: 9 },
      ],
    },
  ];

  const subscriptionPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      features: [
        "Join up to 3 language communities",
        "5 community chat messages per day",
        "Access to public community events",
        "Community forums access",
      ],
      limitations: [
        "No private community rooms",
        "Limited event participation",
        "Basic community features only",
      ],
      buttonText: "Current Plan",
      isCurrentPlan: true,
    },
    {
      name: "Standard",
      price: "$9.99",
      period: "per month",
      features: [
        "Join up to 8 language communities",
        "Unlimited community messages",
        "Create private community rooms",
        "Priority access to community events",
        "Community voice chat access",
      ],
      limitations: [],
      buttonText: "Upgrade",
      isCurrentPlan: false,
      highlighted: false,
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "per month",
      features: [
        "Join unlimited language communities",
        "Create and moderate community events",
        "Advanced community analytics",
        "Community video chats with recording",
        "Early access to new community features",
        "Priority support for communities",
      ],
      limitations: [],
      buttonText: "Upgrade",
      isCurrentPlan: false,
      highlighted: true,
    },
  ];

  const handleRequestFreeTrial = () => {
    setRequestSent(true);
  };

  const filteredCommunities =
    selectedLanguage === "all"
      ? languageCommunities
      : languageCommunities.filter((community) =>
          community.language.toLowerCase().includes(selectedLanguage.toLowerCase())
        );

  return (
    <div className="flex-1 min-h-screen bg-base-100 overflow-y-auto">
      <CommunityHero
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <CommunityStats />
      <div className="py-10 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            <CommunityList
              communities={filteredCommunities}
              selectedLanguage={selectedLanguage}
              setSelectedLanguage={setSelectedLanguage}
              setShowTrialModal={setShowTrialModal}
            />
            <CommunitySubscription
              plans={subscriptionPlans}
              setShowTrialModal={setShowTrialModal}
            />
          </div>
        </div>
      </div>
      <CommunityFeatures />
      <CommunityTestimonials />
      <CommunityCTA setShowTrialModal={setShowTrialModal} />

      {showTrialModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
          <div className="modal-box max-w-md relative bg-base-100 shadow-2xl rounded-2xl animate-fade-in">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2 hover:bg-primary/20 transition-colors"
              onClick={() => setShowTrialModal(false)}
            >
              ✕
            </button>
            <h3 className="font-extrabold text-2xl mb-4 text-center">
              {requestSent ? "Request Received!" : "Start Your Free 7-Day Trial"}
            </h3>
            {requestSent ? (
              <div>
                <div className="flex justify-center mb-4">
                  <div className="rounded-full bg-success/20 p-4 animate-pulse">
                    <Check className="h-8 w-8 text-success" />
                  </div>
                </div>
                <p className="mb-4 text-center text-base-content/80">
                  Thank you for your interest! We've sent you an email with instructions to activate your free 7-day trial.
                </p>
                <button
                  className="btn btn-primary btn-block hover:scale-105 transition-transform"
                  onClick={() => {
                    setShowTrialModal(false);
                    setRequestSent(false);
                  }}
                >
                  Continue Exploring
                </button>
              </div>
            ) : (
              <div>
                <p className="mb-4 text-base-content/80">
                  Get full access to all Premium features for 7 days completely free:
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Join unlimited language communities",
                    "Access all community events and discussions",
                    "Create your own community rooms and events",
                    "No credit card required",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-success mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <form className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="input input-bordered focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-block hover:scale-105 transition-transform"
                    onClick={handleRequestFreeTrial}
                  >
                    Start My Free Trial
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Communities;