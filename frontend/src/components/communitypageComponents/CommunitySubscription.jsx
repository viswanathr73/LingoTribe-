import React from "react";
import { Check, AlertCircle, Info } from "lucide-react";

const CommunitySubscription = ({ plans, setShowTrialModal }) => {
  return (
    <div className="lg:w-1/3">
      <div className="sticky top-4">
        <h2 className="text-3xl font-extrabold mb-6 text-base-content">Community Membership</h2>
        <div className="space-y-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card ${
                plan.highlighted ? "bg-primary/5 border-primary shadow-lg" : "bg-base-100 border-base-200"
              } shadow-md border rounded-xl relative transition-all duration-300 hover:shadow-xl`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="badge badge-primary animate-pulse">Most Popular</span>
                </div>
              )}
              <div className="card-body p-6">
                <h3 className="card-title font-extrabold text-xl mb-1">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className="text-2xl font-bold">{plan.price}</span>
                  <span className="text-sm text-base-content/70">{plan.period}</span>
                </div>
                <div className="space-y-2 mb-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 group">
                      <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm group-hover:text-primary transition-colors">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-start gap-2 opacity-70">
                      <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
                {plan.isCurrentPlan ? (
                  <button className="btn btn-disabled w-full">Current Plan</button>
                ) : (
                  <button
                    className={`btn ${plan.highlighted ? "btn-primary" : "btn-outline"} w-full hover:scale-105 transition-transform`}
                    onClick={() => setShowTrialModal(true)}
                  >
                    {plan.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
          <div className="card bg-base-100 shadow-md border border-base-200 p-6 rounded-xl">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium mb-1">Not sure which plan?</h4>
                <p className="text-sm text-base-content/80 mb-3">
                  Try our Premium features for free with a 7-day trial. No credit card required.
                </p>
                <button
                  className="btn btn-sm btn-outline w-full hover:scale-105 transition-transform"
                  onClick={() => setShowTrialModal(true)}
                >
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySubscription;