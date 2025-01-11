import React from "react";

function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-8 text-red-600">
          Rules & Regulations
        </h1>

        <section className="space-y-12">
          {/* Registration Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-red-600 pb-2">
              Registration
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
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
            </ul>
          </div>

          {/* Safety and Security */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-red-600 pb-2">
              Safety and Security
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>
                Please cooperate with private security and police personnel for security checks.
              </li>
              <li>
                To ensure your safety, the organizers reserve the rights to frisk and restrict entry.
              </li>
              <li>
                The consumption of any prohibited substances is strictly banned.
              </li>
              <li>
                Carrying of food items, alcohol, cigarettes, weapons, inflammable and banned substances are strictly prohibited.
              </li>
              <li>
                The organizer does not take responsibility for injuries, loss, or theft of any personal belongings of the ticket holder.
              </li>
              <li>
                Any individual might be asked to leave the venue without any liability of a refund if there is any behavioral misdemeanor. This decision rests with the conference and venue management and is final and binding.
              </li>
              <li>
                All attendees must abide by the rules and regulations set by the organizers.
              </li>
            </ul>
          </div>

          {/* Event Day Rules */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-red-600 pb-2">
              The Event Day
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>
                Attendees reaching late at the venue will NOT be allowed inside the auditorium while talks are in progress.
              </li>
              <li>
                Entry into the auditorium will only start 15 minutes before the event timing.
              </li>
              <li>
                At TEDxAnuragU, closed gates are non-negotiable during sessions. Opening them disrupts the speaker’s flow and interrupts the audience’s experience.
              </li>
              <li>
                The attendees must wear their conference badge throughout the conference across all venues.
              </li>
              <li>
                There will be adequate breaks for networking and refreshments. Lunch and high tea are included in the ticket price.
              </li>
              <li>
                For any queries with respect to venue logistics, parking, or toilets, please reach out to our uniformed volunteers.
              </li>
            </ul>
          </div>

          {/* Best Practices */}
          <div>
            <h2 className="text-2xl font-bold mb-4 border-b border-red-600 pb-2">
              Best Practices
            </h2>
            <ul className="list-disc list-inside space-y-4 text-gray-300">
              <li>
                We request you not to leave half-finished water bottles lying around the venue.
              </li>
              <li>
                Please ensure that the event spaces are kept litter-free.
              </li>
              <li>
                During sessions, please keep your mobile phones on silent mode or switched off. A ringing phone is a disturbance to the speaker as well as other attendees.
              </li>
              <li>
                No flash photography and recording of the event is allowed.
              </li>
              <li>
                Maintain silence during speaker talks and performances to get the best out of the talk.
              </li>
              <li>
                Do not hesitate in giving the speaker a standing ovation if their talk moved you.
              </li>
              <li>
                Any movement during the talks and performances is strongly discouraged.
              </li>
            </ul>
          </div>

          {/* Official Hashtags */}
          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-gray-300">
              Official Hashtags:{" "}
              <span className="text-red-600">#TEDxAnuragU</span>{" "}
              <span className="text-red-600">#NextisNow</span>{" "}
              <span className="text-red-600">#AnuragUniversity</span>
            </p>
            <p className="mt-4 text-gray-400">
              Most importantly, have a great time. We look forward to seeing you
              there!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
