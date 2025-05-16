import React from "react";
import { MessageCircle, Coffee, BookOpen, ExternalLink } from "lucide-react";

const ExpertTips = () => {
  const tips = [
    {
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      title: "Active Listening Skills",
      description:
        "Train your ear to recognize speech patterns by listening actively rather than passively. Focus on intonation and rhythm, not just individual words.",
      link: "https://www.youtube.com/watch?v=xf8737RwwbU",
      linkText: "Watch Tutorial",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      icon: <Coffee className="h-6 w-6 text-secondary" />,
      title: "Cultural Etiquette Guide",
      description:
        "Understanding cultural norms can prevent misunderstandings. Learn about greeting customs, personal space, and taboo topics in different cultures.",
      link: "https://www.researchgate.net/publication/314187034_LANGUAGE_ETIQUETTE_AND_CULTURE_IN_TEACHING_OF_FOREIGN_LANGUAGES",
      linkText: "Read Guide",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-accent" />,
      title: "Immersion Techniques",
      description:
        "Create an immersive environment at home by surrounding yourself with content in your target language - podcasts, movies, books, and music.",
      link: "https://www.fluentu.com/blog/language-immersion-at-home/",
      linkText: "Learn More",
      bgColor: "bg-accent/10",
      textColor: "text-accent",
    },
  ];

  return (
    <section className="py-8 px-4 bg-base-200">
      <div className="container mx-auto">
        <h2 className="text-xl font-bold mb-6">Expert Language Learning Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tips.map((tip, index) => (
            <div key={index} className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`rounded-full ${tip.bgColor} p-3`}>
                    {tip.icon}
                  </div>
                  <h3 className="card-title text-lg">{tip.title}</h3>
                </div>
                <p className="opacity-80 mb-4">{tip.description}</p>
                <a
                  href={tip.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-outline gap-2"
                >
                  {tip.linkText} <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertTips;