import React from 'react';
import { Code, Smartphone, Cloud, Shield, Zap, Globe, Brain, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your specific business requirements.',
      features: ['Full-stack Development', 'API Integration', 'Database Design', 'Performance Optimization']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
      features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Deployment']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your business operations and reduce costs.',
      features: ['AWS/Azure/GCP', 'DevOps Automation', 'Serverless Architecture', 'Cloud Migration']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications that drive engagement and convert visitors into customers.',
      features: ['Responsive Design', 'E-commerce Platforms', 'CMS Development', 'SEO Optimization']
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Custom AI solutions that empower your business with automation, insights, and next-gen customer experiences.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'AI Chatbots']
    },
    {
      icon: Palette,
      title: 'Design & Media Services',
      description: 'Crafting captivating visual content, from compelling video edits to distinctive logos and impactful graphic designs, our service ensures your brand shines in the digital landscape.',
      features: ['Custom Logo Design', 'Professional Graphic Design', 'Dynamic Video Editing', 'Brand Consistency & Impact']
    }
  ];

  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth 
            and drive digital innovation across all industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 w-full py-3 px-4 border border-cyan-500/30 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              Let's discuss how our expertise can help you achieve your technology goals 
              and drive innovation in your industry.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;