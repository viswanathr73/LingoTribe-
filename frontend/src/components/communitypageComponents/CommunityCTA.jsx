import React from "react";
import { Globe, Users, MessageSquare, Calendar, ArrowRight } from "lucide-react";

const CommunityCTA = ({ setShowTrialModal }) => {
  const stats = [
    { icon: <Globe className="h-8 w-8 text-primary" />, label: "42 Languages" },
    { icon: <Users className="h-8 w-8 text-primary" />, label: "Active Communities" },
    { icon: <MessageSquare className="h-8 w-8 text-primary" />, label: "Native Speakers" },
    { icon: <Calendar className="h-8 w-8 text-primary" />, label: "Weekly Events" },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary/20 to-secondary/20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-4 text-base-content">Ready to Join Our Language Communities?</h2>
        <p className="text-base-content/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Connect with language enthusiasts worldwide, participate in community events, and accelerate your learning with authentic practice opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            className="btn btn-primary btn-lg hover:scale-105 transition-transform animate-pulse"
            onClick={() => setShowTrialModal(true)}
          >
            Join a Community Now
            <ArrowRight className="h-5 w-5 ml-1" />
          </button>
          <button className="btn btn-outline btn-lg hover:scale-105 transition-transform">
            Explore All Languages
          </button>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              {stat.icon}
              <div className="text-sm font-medium mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityCTA;