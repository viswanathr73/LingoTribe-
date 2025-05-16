import React from "react";
import { Video, Users, Globe } from "lucide-react";

const AppFeatures = () => {
  const features = [
    {
      icon: <Video className="h-8 w-8 text-primary" />,
      title: "High-Quality Video Chat",
      description:
        "Crystal-clear audio and video calling designed specifically for language learning, with features like subtitles and vocabulary tools.",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Smart Matching Algorithm",
      description:
        "Our AI-powered system connects you with compatible partners based on language goals, interests, and availability.",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary",
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      title: "Global Community",
      description:
        "Join a diverse network of language learners from over 150 countries speaking more than 100 languages.",
      bgColor: "bg-accent/10",
      textColor: "text-accent",
    },
  ];

  return (
    <section className="py-8 px-4 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Why Choose Our Platform
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className={`rounded-full ${feature.bgColor} p-4 mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;