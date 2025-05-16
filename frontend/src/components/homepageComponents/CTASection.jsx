import React from "react";
import { Link } from "react-router";
import { UserPlus, Users } from "lucide-react";

const CTASection = ({ setShowTrialModal }) => {
  return (
    <section className="py-10 px-4 bg-primary/5">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">
          Ready to Start Your Language Journey?
        </h2>
        <p className="opacity-80 max-w-2xl mx-auto mb-6">
          Join thousands of language learners worldwide who are making friends,
          improving their fluency, and discovering new cultures every day.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowTrialModal(true)}
            className="btn btn-primary btn-lg"
          >
            <UserPlus className="h-5 w-5 mr-2" />
            Find Language Partners
          </button>
          <Link
            to="/communities"
            className="btn btn-outline btn-lg flex items-center justify-center"
          >
            <Users className="h-5 w-5 mr-2" />
            Join Communities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
