import React from "react";
import { Calendar, Clock, Filter } from "lucide-react";

const CommunityList = ({ communities, selectedLanguage, setSelectedLanguage, setShowTrialModal }) => {
  return (
    <div className="lg:w-2/3">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-base-content">Available Communities</h2>
        <div className="flex gap-2">
          <select
            className="select select-bordered select-sm focus:ring-2 focus:ring-primary transition-all"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            <option value="all">All Languages</option>
            <option value="span">Spanish</option>
            <option value="japan">Japanese</option>
            <option value="french">French</option>
            <option value="german">German</option>
            <option value="mandarin">Mandarin</option>
            <option value="russian">Russian</option>
            <option value="italian">Italian</option>
            <option value="arabic">Arabic</option>
          </select>
          <button className="btn btn-sm btn-ghost hover:bg-base-200">
            <Filter className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {communities.map((community) => (
          <div
            key={community.id}
            className="card bg-base-100 shadow-md border border-base-200 hover:border-primary hover:shadow-lg transition-all duration-300 animate-fade-in"
          >
            <div className="card-body p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-3xl">
                      {community.icon}
                    </div>
                    <div>
                      <h3 className="font-extrabold text-xl">{community.language}</h3>
                      <div className="text-sm text-base-content/70">{community.members.toLocaleString()} members</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div className="bg-base-200 p-2 rounded text-center">
                      <div className="font-medium">{community.activeConversations}</div>
                      <div className="text-xs text-base-content/70">Active Chats</div>
                    </div>
                    <div className="bg-base-200 p-2 rounded text-center">
                      <div className="font-medium">{community.events}</div>
                      <div className="text-xs text-base-content/70">Events Soon</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowTrialModal(true)}
                    className="btn btn-primary btn-block hover:scale-105 transition-transform"
                  >
                    Join Community
                  </button>
                </div>
                <div className="md:w-2/3">
                  <p className="text-sm text-base-content/80 mb-4">{community.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Popular Topics</h4>
                    <div className="flex flex-wrap gap-2">
                      {community.popularTopics.map((topic, index) => (
                        <span key={index} className="badge badge-outline hover:bg-primary/10">{topic}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Upcoming Events</h4>
                    <div className="space-y-2">
                      {community.upcomingEvents.map((event, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center bg-base-200 p-2 rounded-md text-sm"
                        >
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-base-content/70" />
                            <span>{event.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-base-content/70" />
                            <span>{event.time}</span>
                            <div className="badge badge-sm">{event.participants} joined</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityList;