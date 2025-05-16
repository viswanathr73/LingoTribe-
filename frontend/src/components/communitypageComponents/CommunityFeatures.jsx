import React from "react";
import { Video, Users, Award, Check } from "lucide-react";

const CommunityFeatures = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "Live Community Events",
      description:
        "Join scheduled voice and video events focused on specific language topics, cultural discussions, and guided practice sessions with community experts.",
      benefits: ["Guided pronunciation workshops", "Cultural exchange discussions", "Grammar Q&A sessions"],
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Community Discussion Forums",
      description:
        "Engage in threaded discussions about language topics, get help with translations, share resources, and connect with members who share your interests.",
      benefits: ["Topic-specific channels", "Resource sharing libraries", "Translation assistance"],
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Community Challenges",
      description:
        "Participate in weekly language challenges, earn achievements, track your progress, and compete friendly with other community members to stay motivated.",
      benefits: ["Vocabulary building contests", "Writing prompts and feedback", "Achievement badges and levels"],
    },
  ];

  return (
    <section className="py-12 px-6 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-base-content">Community Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              <div className="card-body p-6">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="card-title text-lg mb-2">{feature.title}</h3>
                <p className="text-base-content/80 mb-4">{feature.description}</p>
                <ul className="text-sm space-y-1 text-base-content/80">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-success" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityFeatures;