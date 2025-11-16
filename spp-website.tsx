import React, { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function SPPWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b-4 border-green-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="https://i.imgur.com/placeholder.png" 
                alt="SPP Logo" 
                className="h-16 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <div style={{display: 'none'}} className="text-green-800">
                <div className="text-3xl font-bold tracking-wider" style={{fontFamily: 'Arial Black, sans-serif'}}>SPP</div>
                <div className="text-xs font-semibold uppercase tracking-wide">Saskatchewan Prosperity Project</div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-green-800 hover:text-yellow-600 transition font-semibold">Home</a>
              <a href="#about" className="text-green-800 hover:text-yellow-600 transition font-semibold">About</a>
              <a href="#mission" className="text-green-800 hover:text-yellow-600 transition font-semibold">Mission</a>
              <a href="#initiatives" className="text-green-800 hover:text-yellow-600 transition font-semibold">Initiatives</a>
              <a href="#signup" className="text-green-800 hover:text-yellow-600 transition font-semibold">Sign Up</a>
              <a href="#volunteer" className="text-green-800 hover:text-yellow-600 transition font-semibold">Volunteer</a>
              <a href="#contact" className="text-green-800 hover:text-yellow-600 transition font-semibold">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-green-800"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              <a href="#home" className="block py-2 text-green-800 hover:text-yellow-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="block py-2 text-green-800 hover:text-yellow-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#mission" className="block py-2 text-green-800 hover:text-yellow-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>Mission</a>
              <a href="#initiatives" className="block py-2 text-green-800 hover:text-yellow-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>Initiatives</a>
              <a href="#signup" className="block py-2 text-green-800 hover:text-yellow-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>Sign Up</a>
              <a href="#volunteer" className="block py-2 text-green-800 hover:text-yellow-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>Volunteer</a>
              <a href="#contact" className="block py-2 text-green-800 hover:text-yellow-600 font-semibold" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 150" fill="currentColor">
            <path d="M50,10 L55,30 L60,25 L55,45 L60,40 L55,60 L60,55 L55,75 L60,70 L55,90 L50,85 L45,90 L40,70 L45,75 L40,55 L45,60 L40,40 L45,45 L40,25 L45,30 Z"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Saskatchewan Prosperity Project
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
            Reclaiming our autonomy, defending our resources, and securing Saskatchewan's future on our own terms
          </p>
          <a 
            href="#about" 
            className="inline-flex items-center bg-yellow-500 text-green-900 px-8 py-4 rounded font-bold hover:bg-yellow-400 transition shadow-lg text-lg"
          >
            Stand With Us <ChevronRight className="ml-2" size={24} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">About SPP</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-800">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Saskatchewan Prosperity Project stands for provincial autonomy, resource sovereignty, and economic freedom. We believe Saskatchewan has been overlooked for too long, and it's time we took control of our own destiny. Our province has the resources, the people, and the determination to chart our own course.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through grassroots advocacy, policy research, and community mobilization, we fight against federal overreach and promote policies that put Saskatchewan first. From resource development to interprovincial trade, fiscal fairness to constitutional rights, we're building a movement that refuses to be ignored.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-green-800 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800 text-center">Resource Sovereignty</h3>
              <p className="text-gray-700 text-center">
                Assert Saskatchewan's constitutional right to develop and profit from our own natural resources without federal interference or punitive policies.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-yellow-500 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800 text-center">Provincial Autonomy</h3>
              <p className="text-gray-700 text-center">
                Defend Saskatchewan's jurisdictional authority and push back against federal overreach that threatens our way of life and economic freedom.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-green-800 hover:shadow-xl transition">
              <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800 text-center">Citizen Power</h3>
              <p className="text-gray-700 text-center">
                Build a powerful coalition of Saskatchewan citizens, businesses, and communities united in taking our future into our own hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section id="initiatives" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Our Fight</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Constitutional Rights</h3>
              <p className="text-gray-700">
                Researching and advocating for Saskatchewan's constitutional authority over natural resources, interprovincial trade, and provincial jurisdiction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500 hover:border-green-800 transition">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Energy Independence</h3>
              <p className="text-gray-700">
                Fighting for Saskatchewan's right to develop our oil, gas, potash, and uranium sectors free from federal carbon taxes and regulatory barriers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500 hover:border-green-800 transition">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Fiscal Fairness</h3>
              <p className="text-gray-700">
                Demanding equitable treatment in equalization payments and federal transfers. Saskatchewan deserves to keep more of what we earn.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-800 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-green-800">Community Mobilization</h3>
              <p className="text-gray-700">
                Organizing town halls, rallies, and citizen campaigns to ensure Saskatchewan voices are heard loud and clear across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section id="signup" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Sign Up</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Stay informed about Saskatchewan's fight for sovereignty and economic freedom
            </p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-t-4 border-green-800">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-green-800 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-green-800 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Phone Number (Optional)</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                  placeholder="(306) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Priority Issues</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-2 text-gray-700">Resource Sovereignty & Energy Independence</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-2 text-gray-700">Provincial Autonomy & Constitutional Rights</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-2 text-gray-700">Fiscal Fairness & Equalization</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-2 text-gray-700">Agricultural Freedom & Property Rights</span>
                  </label>
                </div>
              </div>

              <div className="pt-4">
                <button className="w-full bg-green-800 text-white px-8 py-4 rounded font-bold hover:bg-green-700 transition shadow-lg text-lg">
                  Stand With Saskatchewan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Volunteer With Us</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700">
              Actively fight for Saskatchewan's sovereignty. Share your skills and expertise to defend our province.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-yellow-500">
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-green-800 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-green-800 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                  placeholder="(306) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Your Skills and Expertise</label>
                <p className="text-sm text-gray-600 mb-3">Select all that apply</p>
                <div className="space-y-3">
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Communications & Media Relations</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Policy Research & Analysis</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Event Organization & Rallies</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Digital Strategy & Web Development</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Graphic Design & Content Creation</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Legal & Constitutional Expertise</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Business & Economic Analysis</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Community Organizing & Canvassing</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Public Speaking & Advocacy</span>
                  </label>
                  <label className="flex items-center p-3 bg-gray-50 rounded hover:bg-gray-100 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-green-800 border-gray-300 rounded focus:ring-green-800" />
                    <span className="ml-3 text-gray-700 font-medium">Fundraising & Campaign Management</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Availability</label>
                <select className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none">
                  <option value="">Select your availability</option>
                  <option value="1-5">1-5 hours per week</option>
                  <option value="5-10">5-10 hours per week</option>
                  <option value="10-20">10-20 hours per week</option>
                  <option value="20+">20+ hours per week</option>
                  <option value="flexible">Flexible/Project-based</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-green-800 mb-2">Why Saskatchewan Matters to You</label>
                <textarea 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:border-green-800 focus:outline-none"
                  rows="4"
                  placeholder="Tell us why you're passionate about defending Saskatchewan's autonomy and what you hope to contribute..."
                ></textarea>
              </div>

              <div className="pt-4">
                <button className="w-full bg-yellow-500 text-green-900 px-8 py-4 rounded font-bold hover:bg-yellow-400 transition shadow-lg text-lg">
                  Join the Fight
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Take Action</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Ready to defend Saskatchewan's sovereignty? Connect with us and be part of a movement that refuses to back down.
          </p>
          <a 
            href="mailto:info@saskprosperity.ca" 
            className="inline-block bg-yellow-500 text-green-900 px-10 py-4 rounded font-bold hover:bg-yellow-400 transition shadow-lg text-lg"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 border-t-4 border-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-green-200">
            &copy; 2025 Saskatchewan Prosperity Project. Standing strong for our province.
          </p>
        </div>
      </footer>
    </div>
  );
}