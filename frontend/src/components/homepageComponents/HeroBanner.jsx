import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import { UserPlus, Video } from "lucide-react";

const HeroBanner = ({ authUser, worldMapAnimation, setShowTrialModal }) => {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Welcome,{" "}
              <span className="text-primary">
                {authUser?.fullName.split(" ")[0]}
              </span>
              !
            </h1>
            <p className="text-lg opacity-80 mb-4">
              Connect with language partners worldwide. Practice speaking,
              improve fluency, and make friends across cultures.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowTrialModal(true)}
                className="btn btn-primary"
              >
                <UserPlus className="h-4 w-4 mr-2" />
                Find Language Trainers
              </button>
              <Link to="/live-rooms" className="btn btn-outline">
                <Video className="h-4 w-4 mr-2" />
                Join Live Conversations
              </Link>
            </div>
          </div>
          <div className="md:w-2/5">
            <Lottie
              animationData={worldMapAnimation}
              loop={true}
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;