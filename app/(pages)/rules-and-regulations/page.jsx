import React from 'react'

function page() {
    return (
        <div className="min-h-screen bg-black text-white p-6">
          <div className="max-w-4xl mx-auto  shadow-md rounded-lg p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Rules and Regulations</h1>
            
            <section className="space-y-8">
              {/* Registration Rules */}
              <div>
                <h2 className="text-xl font-semibold">Registration Rules</h2>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-300">
                  <li>
                    This registration is non-refundable, non-transferable, and does not allow for cancellation or rescheduling; it is valid for one person only with no refunds for no-shows.
                  </li>
                  <li>
                    By registering and making a payment, you agree that all details provided are accurate.
                  </li>
                  <li>
                    All registrations are subject to verification; any discrepancy may result in the cancellation of the registration.
                  </li>
                  <li>
                    Make sure you carry the ticket details on your phone or printout for verification.
                  </li>
                  <li>
                    All attendees must carry a valid government identity card to obtain a conference attendee badge at the venue.
                  </li>
                </ol>
              </div>
    
              {/* Attendee Rules */}
              <div>
                <h2 className="text-xl font-semibold">Attendee Rules on the Day of Event</h2>
                <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-300">
                  <li>
                    Please arrive at the venue at least 30 minutes before the scheduled start time to complete the registration process.
                  </li>
                  <li>
                    Maintain decorum and follow the instructions provided by the event staff.
                  </li>
                  <li>
                    Photography and videography may be restricted in certain sessions; adhere to the guidelines provided.
                  </li>
                  <li>
                    Food and beverages from outside are not allowed inside the venue.
                  </li>
                  <li>
                    Ensure your mobile devices are on silent mode during the sessions.
                  </li>
                </ol>
              </div>
            </section>
          </div>
        </div>
      );
}

export default page