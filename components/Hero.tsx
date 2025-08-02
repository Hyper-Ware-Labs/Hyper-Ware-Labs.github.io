import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Advanced Technology Solutions';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2"  />
            {/* Innovation at its Core */}
            Where Hype Meets Software
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              HyperWare Labs
            </span>
            <span className="block text-2xl md:text-3xl mt-4 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We transform ideas into reality through cutting-edge technology, innovative solutions, 
            and unparalleled expertise in digital transformation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
          >
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { number: '5+', label: 'Solutions in Development' },
            { number: '20+', label: 'Technologies We Specialize In' },
            { number: '100%', label: 'Commitment to Innovation' }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;