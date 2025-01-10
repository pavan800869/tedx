import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b bg-black via-gray-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-red-600">
          Rules & Regulations
        </h1>

        <section className="space-y-12">
          {/* Registration Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-red-600 pb-2">
              Registration Rules
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  This registration is non-refundable, non-transferable, and does not allow for cancellation or rescheduling; it is valid for one person only with no refunds for no-shows.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  By registering and making a payment, you agree that all details provided are accurate.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  All registrations are subject to verification; any discrepancy may result in the cancellation of the registration.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  Make sure you carry the ticket details on your phone or printout for verification.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  All attendees must carry a valid government identity card to obtain a conference attendee badge at the venue.
                </span>
              </li>
            </ol>
          </div>

          {/* Attendee Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-red-600 pb-2">
              Attendee Rules on the Day of Event
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  Please arrive at the venue at least 30 minutes before the scheduled start time to complete the registration process.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  Maintain decorum and follow the instructions provided by the event staff.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  Photography and videography may be restricted in certain sessions; adhere to the guidelines provided.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  Food and beverages from outside are not allowed inside the venue.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-red-600">●</span>
                <span>
                  Ensure your mobile devices are on silent mode during the sessions.
                </span>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
