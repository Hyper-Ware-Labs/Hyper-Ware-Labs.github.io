import React from 'react';
import { Zap, Github, Twitter, Linkedin, Mail, Instagram, X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/hyperwarelabs/', label: 'Instagram' },
    { icon: X, href: 'https://x.com/HyperWareLabs/', label: 'X' },
    { icon: Linkedin, href: 'http://linkedin.com/company/hyperware-labs/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:enquiry@hyperwarelabs.com', label: 'Email' }
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: ['Software Development', 'Mobile Apps', 'Design & Media Services', 'Artificial Intelligence']
    },
    {
      title: 'Company',
      links: ['About Us', 'Contact']
    },
    // {
    //   title: 'Resources',
    //   links: ['Documentation', 'Support', 'Privacy Policy', 'Terms of Service']
    // }
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-cyan-500/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                HyperWare Labs
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Pioneering the future of technology through innovative solutions, 
              expert development, and transformative digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-slate-800/50 border border-cyan-500/30 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-cyan-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} HyperWare Labs. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;