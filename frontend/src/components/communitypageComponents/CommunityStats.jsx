import React from "react";

const CommunityStats = () => {
  const stats = [
    { value: "42", label: "Language Communities" },
    { value: "158,234", label: "Community Members" },
    { value: "326", label: "Active Discussions" },
    { value: "48", label: "Events This Week" },
  ];

  return (
    <section className="py-10 px-6 bg-base-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-xl p-6 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-br from-base-100 to-base-200"
            >
              <div className="text-3xl font-extrabold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-base-content/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;