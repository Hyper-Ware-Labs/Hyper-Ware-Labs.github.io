import React from 'react';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'Focused on delivering innovative solutions that drive real business value and technological advancement.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our diverse team of skilled professionals brings years of experience in cutting-edge technologies.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, embracing new technologies and methodologies to solve complex challenges.'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Committed to excellence with rigorous testing and quality assurance in every project we deliver.'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded on the principle of technological excellence, HyperWare Labs has been at the forefront 
            of digital innovation, helping businesses transform and thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-4">
              Pioneering the Future of Technology
            </h3>
            <p className="text-gray-300 leading-relaxed">
            At HyperWare Labs, we're passionate about empowering businesses through cutting-edge IT services and innovative software development. We understand that in today's fast-paced digital landscape, a strong technological foundation is crucial for success.
            </p>
            <p className="text-gray-300 leading-relaxed">
            Our expert team specializes in crafting tailored solutions that meet your unique needs. Whether you're looking to establish a robust online presence with a stunning e-commerce website or a sleek static webpage, streamline your operations with efficient billing software and inventory management systems, or explore the transformative power of AI services, we've got you covered. We pride ourselves on delivering high-quality, scalable, and user-friendly solutions that drive growth and efficiency for our clients.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-slate-800/30 border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400">99%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-slate-800/30 border border-cyan-500/20">
                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-8 backdrop-blur-sm">
              <div className="w-full h-full rounded-xl bg-slate-800/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <Lightbulb className="w-12 h-12 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Innovation Hub</h4>
                  <p className="text-gray-300 text-sm">Where ideas become reality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 hover:bg-slate-800/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;