import React from "react";
import { Flag, Star } from "lucide-react";

const CommunityTestimonials = () => {
  const testimonials = [
    {
      name: "David Kim",
      community: "Japanese Community",
      quote:
        "Joining the Japanese community changed everything for me. The weekly kanji study groups and cultural discussions have given me insights I never would have gotten from textbooks alone.",
      avatar: "https://avatar.iran.liara.run/public/1.png",
      stars: 5,
      duration: "8 months",
    },
    {
      name: "Emma Rodriguez",
      community: "French Community",
      quote:
        "The French community events are amazing! I've made friends from Paris, Quebec, and Senegal. Our weekly conversation hours have improved my speaking skills dramatically in just three months.",
      avatar: "https://avatar.iran.liara.run/public/52.png",
      stars: 4,
      duration: "3 months",
    },
    {
      name: "Carlos Mendez",
      community: "German Community",
      quote:
        "The German community challenges keep me motivated. I've learned more vocabulary through the weekly competitions than I did in a year of self-study. The feedback from native speakers is priceless.",
      avatar: "https://avatar.iran.liara.run/public/12.png",
      stars: 5,
      duration: "11 months",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center text-base-content">
          Community Member Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-md rounded-xl hover:shadow-lg transition-all duration-300 animate-fade-in"
            >
              <div className="card-body p-6">
                <div className="flex gap-3 mb-4 items-center">
                  <div className="avatar">
                    <div className="w-12 h-12 rounded-full ring ring-primary/20">
                      <img src={testimonial.avatar} alt={testimonial.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-xs flex items-center gap-1">
                      <Flag className="h-3 w-3" />
                      <span>{testimonial.community}</span>
                    </div>
                  </div>
                </div>
                <blockquote className="italic text-sm text-base-content/80 mb-3">
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 group">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.stars
                            ? "text-warning fill-warning"
                            : "text-base-content/30 fill-base-content/30"
                        } group-hover:scale-110 transition-transform duration-200`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-base-content/70">
                    Member for {testimonial.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
