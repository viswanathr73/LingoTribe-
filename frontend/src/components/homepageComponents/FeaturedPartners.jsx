import React from "react";
import { MapPin } from "lucide-react";

const FeaturedPartners = ({ partners, setShowTrialModal }) => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl font-bold">Featured Language Partners</h2>
            <p className="opacity-70">
              Connect with native speakers of your target language
            </p>
          </div>
          <button
            onClick={() => setShowTrialModal(true)}
            className="btn btn-sm btn-ghost"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="card bg-base-100 shadow-md border border-base-200 hover:border-primary transition-colors"
            >
              <div className="card-body p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="avatar relative">
                    <div className="w-12 h-12 rounded-full">
                      <img src={partner.avatar} alt={partner.name} />
                    </div>
                    <span
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${
                        partner.onlineStatus === "online"
                          ? "bg-success"
                          : "bg-base-300"
                      }`}
                    ></span>
                  </div>
                  <div>
                    <h3 className="font-bold">{partner.name}</h3>
                    <div className="flex items-center text-xs opacity-70">
                      <MapPin className="h-3 w-3 mr-1" />
                      {partner.country}
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Speaks:</span>
                    <span className="font-medium text-primary">
                      {partner.nativeLanguage}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Learning:</span>
                    <span className="font-medium">{partner.learningLanguage}</span>
                  </div>
                </div>

                <p className="text-sm opacity-80 mb-4 line-clamp-2">
                  {partner.bio}
                </p>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => setShowTrialModal(true)}
                    className="btn btn-sm btn-outline"
                  >
                    View Profile
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

export default FeaturedPartners;