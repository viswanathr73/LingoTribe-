import React from "react";

const SuccessStories = () => {
  const stories = [
    {
      users: "Mark & Hiroshi",
      languages: "English ↔ Japanese",
      quote:
        "We've been language partners for over a year. I've improved my Japanese tremendously, and Hiroshi now speaks English confidently at work. We've even visited each other's countries!",
      author: "Mark D., United States",
      avatars: [
        "https://avatar.iran.liara.run/public/1.png",
        "https://avatar.iran.liara.run/public/52.png",
      ],
    },
    {
      users: "Amelia & Clara",
      languages: "English ↔ Spanish",
      quote:
        "The video chat feature has been amazing for practicing pronunciation. After six months of weekly conversations, I was able to travel through Spain with confidence!",
      author: "Amelia R., Canada",
      avatars: [
        "https://avatar.iran.liara.run/public/82.png",
        "https://avatar.iran.liara.run/public/54.png",
      ],
    },
    {
      users: "Paolo & Lukas",
      languages: "Italian ↔ German",
      quote:
        "What started as language exchange led to a business partnership! We now co-own a translation agency connecting Italian and German businesses.",
      author: "Paolo G., Italy",
      avatars: [
        "https://avatar.iran.liara.run/public/5.png",
        "https://avatar.iran.liara.run/public/12.png",
      ],
    },
  ];

  return (
    <section className="py rm-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Success Stories</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="card bg-base-100 shadow-md">
              <div className="card-body">
                <div className="flex gap-3 mb-4 items-center">
                  <div className="avatar-group -space-x-4">
                    {story.avatars.map((avatar, idx) => (
                      <div key={idx} className="avatar">
                        <div className="w-10">
                          <img src={avatar} alt={`User ${idx + 1}`} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="font-medium">{story.users}</div>
                    <div className="text-xs opacity-70">{story.languages}</div>
                  </div>
                </div>
                <blockquote className="italic opacity-80 text-sm mb-3">
                  {story.quote}
                </blockquote>
                <div className="text-right text-sm font-medium">
                  — {story.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;