import React from "react";

const LanguageCommunities = ({ communities, setShowTrialModal }) => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold">Active Language Communities</h2>
            <p className="opacity-70">Join groups dedicated to specific languages</p>
          </div>
          <button
            onClick={() => setShowTrialModal(true)}
            className="btn btn-sm btn-ghost"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {communities.map((community, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md border border-base-200 hover:border-primary transition-colors"
            >
              <div className="card-body p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-base-200 flex items-center justify-center text-2xl">
                    {community.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{community.language}</h3>
                    <div className="text-xs opacity-70">
                      {community.members.toLocaleString()} members
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div className="bg-base-200 p-2 rounded text-center">
                    <div className="font-medium">{community.activeConversations}</div>
                    <div className="text-xs opacity-70">Active Chats</div>
                  </div>
                  <div className="bg-base-200 p-2 rounded text-center">
                    <div className="font-medium">{community.events}</div>
                    <div className="text-xs opacity-70">Events Soon</div>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    onClick={() => setShowTrialModal(true)}
                    className="btn btn-outline btn-block"
                  >
                    Join Community
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LanguageCommunities;