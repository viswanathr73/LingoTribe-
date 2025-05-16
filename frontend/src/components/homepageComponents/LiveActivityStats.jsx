import React from "react";

const LiveActivityStats = () => {
  const stats = [
    { value: "2,457", label: "Online Now" },
    { value: "183", label: "Live Conversations" },
    { value: "42", label: "Language Communities" },
    { value: "12", label: "Events Today" },
  ];

  return (
    <section className="py-6 px-4 bg-base-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-base-100 rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveActivityStats;