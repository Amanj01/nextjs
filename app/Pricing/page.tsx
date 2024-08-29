import React from 'react'

const page = () => {
  return (
    <section className="bg-gray-200 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Our Pricing</h2>
      <p className="text-gray-600">
        Choose the plan that best fits your camping needs.
      </p>
      <div className="mt-8">
        {/* Pricing cards */}
        {/* Example card */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
          <p className="text-gray-600">$9.99/month</p>
        </div>
        {/* Add more pricing cards here */}
      </div>
    </div>
  </section>
);
}

export default page
