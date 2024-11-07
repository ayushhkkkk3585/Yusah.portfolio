import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll"; // Import Link from react-scroll

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden w-full rounded-lg mt-1 bg-white shadow-md mb-3">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold text-gray-900">Ayush Khalate</h1>
        <button onClick={toggleMenu} className="text-gray-900">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu with Animation and Scroll Links */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 py-2 px-4 space-y-2 shadow-md rounded-lg"
          >
            <Link 
              to="projects" 
              smooth={true} 
              duration={500} 
              className="block text-gray-900 hover:text-blue-500" 
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="education" 
              smooth={true} 
              duration={500} 
              className="block text-gray-900 hover:text-blue-500" 
              onClick={() => setIsOpen(false)}
            >
              Education
            </Link>
            <Link 
              to="about" 
              smooth={true} 
              duration={500} 
              className="block text-gray-900 hover:text-blue-500" 
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              to="technologies" 
              smooth={true} 
              duration={500} 
              className="block text-gray-900 hover:text-blue-500" 
              onClick={() => setIsOpen(false)}
            >
              Technologies
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              className="block text-gray-900 hover:text-blue-500" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="resume" 
              smooth={true} 
              duration={500} 
              className="block text-gray-900 hover:text-blue-500" 
              onClick={() => setIsOpen(false)}
            >
              Resume
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
