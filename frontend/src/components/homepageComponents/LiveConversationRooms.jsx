import React from "react";
import { Link } from "react-router";
import { Clock, Users, Coffee, Video } from "lucide-react";

const LiveConversationRooms = ({ conversations, onJoinClick }) => {
  return (
    <section className="py-8 px-4 bg-base-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold">Live Conversation Rooms</h2>
            <p className="opacity-70">
              Join voice and video chats with other language learners
            </p>
          </div>
          <Link to="/live-rooms" className="btn btn-sm btn-ghost">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {conversations.map((session) => (
            <div
              key={session.id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <h3 className="card-title text-lg">{session.title}</h3>
                  <span className="badge badge-primary">{session.level}</span>
                </div>

                <div className="my-3 space-y-2">
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 opacity-70" />
                    <span>{session.time}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 opacity-70" />
                    <span>
                      {session.participants}/{session.maxParticipants} Participants
                    </span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Coffee className="h-4 w-4 mr-2 opacity-70" />
                    <span>Hosted by {session.host}</span>
                  </div>
                </div>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => onJoinClick?.(session.id)}
                    className="btn btn-primary"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Join Room
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

export default LiveConversationRooms;