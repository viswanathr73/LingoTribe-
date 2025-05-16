import React from "react";
import { Check } from "lucide-react";

const FreeTrialModal = ({
  showTrialModal,
  setShowTrialModal,
  requestSent,
  setRequestSent,
}) => {
  const handleRequestFreeTrial = () => {
    setRequestSent(true);
  };

  if (!showTrialModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="modal-box max-w-md relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={() => setShowTrialModal(false)}
        >
          ✕
        </button>

        <h3 className="font-bold text-xl mb-4">
          {requestSent ? "Request Received!" : "Start Your Free 7-Day Trial"}
        </h3>

        {requestSent ? (
          <div>
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-success/20 p-4">
                <Check className="h-8 w-8 text-success" />
              </div>
            </div>
            <p className="mb-4 text-center">
              Thank you for your interest! We've sent you an email with
              instructions to activate your free 7-day trial of our Premium
              features.
            </p>
            <button
              className="btn btn-primary btn-block"
              onClick={() => {
                setShowTrialModal(false);
                setRequestSent(false);
              }}
            >
              Continue Exploring
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-4">
              Get full access to all Premium features for 7 days completely free:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <span>Join unlimited language communities</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <span>Access all community events and discussions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <span>Create your own community rooms and events</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="h-5 w-5 text-success mt-0.5" />
                <span>No credit card required</span>
              </li>
            </ul>

            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="input input-bordered"
                />
              </div>

              <button
                type="button"
                className="btn btn-primary btn-block"
                onClick={handleRequestFreeTrial}
              >
                Start My Free Trial
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default FreeTrialModal;