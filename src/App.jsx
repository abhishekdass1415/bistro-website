import React, { useState, useEffect } from 'react';
import pic1 from './pictures/restaurant.jpg'; // Importing the image for the hero section
import pic2 from './pictures/breakfast.jpg';
import pic3 from './pictures/lunch.jpg';
export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Content />
      <Footer  />
    </div>
  );
}

// Navigation Bar Component
const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      // If we're at the top of the page, always show the nav
      if (window.scrollY < 100) {
        setShowNav(true);
        return;
      }

      // If scrolling down, hide the navbar
      if (window.scrollY > lastScrollY) {
        setShowNav(false);
      } else { // If scrolling up, show the navbar
        setShowNav(true);
      }

      // Remember the new scroll position for the next move
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);
  
  // Base classes for the navbar
  const navClasses = "fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50 transition-transform duration-300 ease-in-out";
  
  // Conditional class for showing/hiding
  const transformClass = showNav ? 'translate-y-0' : '-translate-y-full';

  return (
    <nav className={`${navClasses} ${transformClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Bistro
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Menu</a>
              <a href="#" className="text-gray-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              <a href="#" className="bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-600 transition-colors">Book a Table</a>
            </div>
          </div>
          <div className="md:hidden">
             {/* Mobile menu button can be added here */}
             <button className="p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700">
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
             </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Hero Section Component
const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop')" }}>
      {/* Add bg-black and adjust opacity for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="absolute inset-0 bg-opacity-50"></div>
      <h1 style={{textShadow: "0px 2px 8px rgba(0,0,0,0.6)"}}/>
      <img src={pic1} alt="Restaurant Hero" className="w-full h-full object-cover opacity-70 absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Welcome to Bistro
        </h1>
        
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Experience the finest dining with a touch of modern elegance. Our chefs create culinary masterpieces just for you.
        </p>
        <a href="#" className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors">
          Explore Menu
        </a>
      </div>
    </div>
  );
};


// Content Section to make page scrollable
const Content = () => {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Story</h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Discover the charm of Bistro, an authentic English restaurant offering a taste of Ireland in every bite. Indulge in traditional English cuisine crafted with care, complemented by warm hospitality and a cozy ambiance. From hearty stews to savory pies, experience the flavors of English at Bistro. Experience the finest dining with a touch of modern elegance. Our chefs create culinary masterpieces just for you.
        </p>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Founded in 2015, Bistro was born from a lifelong dream to create a dining experience that feels both elegant and intimately familiar. Nestled in the heart of the city, our restaurant is a tribute to classic European bistro culture, reimagined with a contemporary spirit. It's a place where friends, family, and food lovers can gather to celebrate the simple joy of a great meal.
        </p>
         <div className="grid md:grid-cols-2 gap-8 my-12">
            <img src={pic2} className="rounded-lg shadow-xl w-full h-full object-cover" alt="Restaurant Interior"/>
            <img src={pic3} className="rounded-lg shadow-xl w-full h-full object-cover" alt="Restaurant Dining Area"/>
        </div>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Our journey began with a simple passion for honest cooking and warm hospitality. We believe that every dish tells a story, and ours is one of dedication to craft, community, and the timeless pleasure of sharing food and wine.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our chef, a culinary visionary with decades of experience, masterfully blends traditional techniques with modern creativity. Each plate is thoughtfully composed to deliver a harmonious balance of flavor, texture, and artistry. From our house-baked bread to our decadent desserts, every element of your meal is crafted with care and precision in our kitchen. We invite you to taste the difference that passion and quality make.
        </p>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-lg font-bold">Bistro</p>
                <p className="mt-2 text-gray-400">123 Culinary Lane, Foodie City, 12345</p>
                <p className="mt-2 text-gray-400">&copy; 2025 Bistro. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
