import React from "react";
import { Sparkles } from "lucide-react";

const QuickLanguageMatching = ({ setShowTrialModal }) => {
  const languages = [
    "English",
    "Spanish",
    "Mandarin",
    "French",
    "German",
    "Japanese",
    "Korean",
    "Arabic",
    "Portuguese",
    "Russian",
  ];
  const levels = ["Beginner", "Intermediate", "Advanced", "Fluent"];

  return (
    <section className="py-10 px-4 bg-gradient-to-r from-secondary/10 to-primary/10">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">
          Find Your Perfect Language Match
        </h2>
        <p className="opacity-80 max-w-2xl mx-auto mb-6">
          Our smart matching system connects you with compatible language
          partners based on your learning goals, interests, and schedule.
        </p>

        <div className="bg-base-100 max-w-3xl mx-auto rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="label">I speak</label>
              <select className="select select-bordered w-full">
                {languages.map((lang) => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">I want to learn</label>
              <select className="select select-bordered w-full">
                {languages.map((lang) => (
                  <option key={lang}>{lang}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label">My proficiency level</label>
              <select className="select select-bordered w-full">
                {levels.map((level) => (
                  <option key={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => setShowTrialModal(true)}
            className="btn btn-primary btn-lg"
          >
            <Sparkles className="h-5 w-5 mr-2" />
            Find Language Partners
          </button>
        </div>
      </div>
    </section>
  );
};

export default QuickLanguageMatching;