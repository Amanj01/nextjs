import React from 'react'

const page = () => {
  return (
    <section className="bg-gray-100 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Trail Guidance</h3>
          <p className="text-gray-600">
            Get step-by-step directions for your favorite trails. Never lose your way!
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Safety Alerts</h3>
          <p className="text-gray-600">
            Stay informed about weather changes and potential hazards. Safety first!
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Campsite Finder</h3>
          <p className="text-gray-600">
            Discover the perfect campsite based on your preferences. Reviews included!
          </p>
        </div>
      </div>
    </div>
  </section>
);
};


export default page
