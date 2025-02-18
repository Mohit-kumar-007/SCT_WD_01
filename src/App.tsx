import { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              } hover:text-blue-600`}>
                Skill Craft Technology
              </h1>
            </div>
            
            {/* Desktop Menu - Enhanced with better hover effects */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`relative px-3 py-2 rounded-lg ${
                      isScrolled ? 'text-gray-900' : 'text-white'
                    } hover:text-blue-600 font-medium transition-all duration-300
                    before:absolute before:left-0 before:bottom-0 before:h-0.5 
                    before:w-0 before:bg-blue-600 before:transition-all before:duration-300
                    hover:before:w-full`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button - Enhanced with smoother transitions */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                } hover:bg-blue-100/10 hover:text-blue-500 transition-all duration-300 focus:outline-none`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with animations */}
        <div className={`md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm shadow-lg">
            {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 
                rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-700 to-indigo-800">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Crafting Digital Excellence</h1>
          <p className="text-xl md:text-2xl mb-8">Innovative Technology Solutions for Your Business</p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-200 shadow-lg">
            Explore Our Services
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                desc: 'Custom web solutions built with cutting-edge technologies for optimal performance and user experience.'
              },
              {
                title: 'Mobile Apps',
                desc: 'Native and cross-platform mobile applications that deliver seamless experiences across all devices.'
              },
              {
                title: 'Cloud Solutions',
                desc: 'Scalable cloud infrastructure and services to power your digital transformation journey.'
              }
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold">Skill Craft Technology</h2>
              <p className="mt-2 text-gray-400">Transforming Ideas into Digital Reality</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Skill Craft Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;