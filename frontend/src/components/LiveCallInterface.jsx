import React,{useState} from "react";
import { useParams, Link } from "react-router";
import { Mic, MicOff, Video, VideoOff, LogOut } from "lucide-react";

const LiveCallInterface = () => {
  const { id } = useParams();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);

  // Sample participants (in a real app, fetch from API)
  const participants = [
    {
      id: 1,
      name: "Maria G.",
      avatar: "https://avatar.iran.liara.run/public/82.png",
    },
    {
      id: 2,
      name: "John D.",
      avatar: "https://avatar.iran.liara.run/public/53.png",
    },
    {
      id: 3,
      name: "Sofia C.",
      avatar: "https://avatar.iran.liara.run/public/52.png",
    },
  ];

  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Main Video Area */}
      <div className="flex-1 bg-base-200 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-gray-700 w-[800px] h-[450px] rounded-lg flex items-center justify-center mb-4">
            <span className="text-gray-400 text-lg">
              Video Feed (Room {id})
            </span>
          </div>
          <div className="flex justify-center gap-4">
            {participants.map((participant) => (
              <div key={participant.id} className="text-center">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full">
                    <img src={participant.avatar} alt={participant.name} />
                  </div>
                </div>
                <p className="text-sm mt-2">{participant.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-base-100 p-4 flex justify-center gap-4 border-t border-base-200">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`btn ${isMuted ? "btn-error" : "btn-primary"}`}
        >
          {isMuted ? (
            <MicOff className="h-5 w-5" />
          ) : (
            <Mic className="h-5 w-5" />
          )}
          {isMuted ? "Unmute" : "Mute"}
        </button>
        <button
          onClick={() => setIsVideoOn(!isVideoOn)}
          className={`btn ${isVideoOn ? "btn-primary" : "btn-error"}`}
        >
          {isVideoOn ? (
            <Video className="h-5 w-5" />
          ) : (
            <VideoOff className="h-5 w-5" />
          )}
          {isVideoOn ? "Video Off" : "Video On"}
        </button>
        <Link to="/live-rooms" className="btn btn-error">
          <LogOut className="h-5 w-5" />
          Leave Call
        </Link>
      </div>
    </div>
  );
};

export default LiveCallInterface;