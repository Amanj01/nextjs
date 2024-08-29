import React from 'react'

const page = () => {
  return (
    <section className="bg-blue-500 text-white py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <p className="text-gray-300">
        Have questions? Reach out to our support team!
      </p>
      <a
        href="mailto:support@hilinkcampingapp.com"
        className="mt-4 inline-block bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
      >
        Email Support
      </a>
    </div>
  </section>
  )
}

export default page
