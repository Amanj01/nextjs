import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-100 font-sans">
     <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto text-center">
            <h1 className="text-2xl font-semibold">How HiLink Works</h1>
        </div>
    </header>

     <main className="container mx-auto py-8 px-4 md:px-8">
        <section className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700">
                HiLink is your ultimate camping companion—an app that seamlessly integrates technology with nature. Whether you're a seasoned camper or a first-timer, HiLink ensures a smoother, safer, and more enjoyable camping experience.
            </p>

 
            <p className="mt-6 text-gray-600">
                Remember, HiLink enhances your camping experience without detracting from the natural beauty around you. Happy camping! 🏕️🌲
            </p>
        </section>
    </main>
    
</div>
  )
}

export default page
