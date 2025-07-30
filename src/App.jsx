import React, { useState, useEffect } from 'react';

// Main App Component
export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Content />
      <Footer />
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
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue.
        </p>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Pellentesque vel nulla. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Fusce aliquet pede non pede. Suspendisse dapibus lorem pellentesque magna. Integer nulla. Donec blandit feugiat ligula. Donec hendrerit, felis et imperdiet euismod, purus ipsum pretium metus, in lacinia nulla nisl eget sapien.
        </p>
         <div className="grid md:grid-cols-2 gap-8 my-12">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop" className="rounded-lg shadow-xl w-full h-full object-cover" alt="Restaurant Interior"/>
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop" className="rounded-lg shadow-xl w-full h-full object-cover" alt="Restaurant Dining Area"/>
        </div>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          Donec quis gubergren. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
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
