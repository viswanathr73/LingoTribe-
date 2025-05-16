import React from "react";
import { Search } from "lucide-react";

const CommunityHero = ({ selectedLanguage, setSelectedLanguage }) => {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary/20 to-secondary/20 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-base-content tracking-tight">
            Discover Language Communities
          </h1>
          <p className="text-lg md:text-xl text-base-content/80 mb-8 max-w-3xl leading-relaxed">
            Connect with vibrant communities to practice languages, share cultures, and join exciting events with native speakers and learners worldwide.
          </p>
          <div className="form-control w-full max-w-lg">
            <div className="flex w-full max-w-lg">
  <input
    type="text"
    placeholder="Search communities (e.g., Spanish, Japanese)"
    className="input input-bordered flex-grow px-4 text-sm focus:ring-2 focus:ring-primary transition-all duration-300"
    value={selectedLanguage === "all" ? "" : selectedLanguage}
    onChange={(e) => setSelectedLanguage(e.target.value || "all")}
  />
  <button className="btn btn-primary ml-2 hover:scale-105 transition-transform">
    <Search className="h-5 w-5" />
  </button>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;