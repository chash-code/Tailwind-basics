import React, { useState } from 'react';

export default function TailwindBasicsExploration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Tailwind CSS Basics Exploration
        </h1>

        {/* Problem 1: Button Styling */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">1. Button Styling</h2>
          <button className="rounded-lg bg-gray-200 px-6 py-3 hover:bg-gray-300 active:bg-gray-400 transition-colors">
            Click Me
          </button>
        </section>

        {/* Problem 2: Image with Hover Effect */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">2. Image with Hover Effect</h2>
          <div className="overflow-hidden rounded-lg shadow-lg w-64">
            <img 
              src="https://via.placeholder.com/300x200" 
              alt="Placeholder" 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </section>

        {/* Problem 3: Responsive Text */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">3. Responsive Text</h2>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Responsive Heading
          </h2>
        </section>

        {/* Problem 4: List Styling */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">4. List Styling</h2>
          <ul className="list-disc list-inside pl-5 space-y-2">
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Item 1</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Item 2</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Item 3</li>
            <li className="hover:text-blue-600 transition-colors cursor-pointer">Item 4</li>
          </ul>
        </section>

        {/* Problem 5: Card Component */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">5. Card Component</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-sm">
            <img 
              src="https://via.placeholder.com/400x200" 
              alt="Card" 
              className="w-full"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Card Title</h3>
              <p className="text-gray-600 mb-4">
                This is a description of the card with some interesting content.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Problem 6: Table Styling */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">6. Table Styling</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left hover:bg-gray-200">Column 1</th>
                  <th className="border border-gray-300 px-4 py-2 text-left hover:bg-gray-200">Column 2</th>
                  <th className="border border-gray-300 px-4 py-2 text-left hover:bg-gray-200">Column 3</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4].map((row) => (
                  <tr key={row} className="even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 hover:bg-gray-100">Data {row * 3 - 2}</td>
                    <td className="border border-gray-300 px-4 py-2 hover:bg-gray-100">Data {row * 3 - 1}</td>
                    <td className="border border-gray-300 px-4 py-2 hover:bg-gray-100">Data {row * 3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Problem 7: Input Form */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">7. Input Form</h2>
          <div className="space-y-4 max-w-md">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input 
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                placeholder="Enter your password"
              />
            </div>
            <button 
              onClick={handleSubmit}
              className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </section>

        {/* Problem 8: Navigation Bar */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">8. Navigation Bar</h2>
          <nav className="bg-gray-800 text-white rounded-lg">
            <div className="flex flex-col md:flex-row md:justify-around md:items-center p-4 space-y-2 md:space-y-0">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
            </div>
          </nav>
        </section>

        {/* Problem 9: Responsive Grid Layout */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">9. Responsive Grid Layout</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg">Card 1</div>
            <div className="bg-green-100 p-6 rounded-lg">Card 2</div>
            <div className="bg-yellow-100 p-6 rounded-lg">Card 3</div>
            <div className="bg-red-100 p-6 rounded-lg">Card 4</div>
            <div className="bg-purple-100 p-6 rounded-lg">Card 5</div>
            <div className="bg-pink-100 p-6 rounded-lg">Card 6</div>
          </div>
        </section>

        {/* Problem 10: Mini Responsive Page */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">10. Mini Responsive Page (Combine All)</h2>
          
          {/* Navbar */}
          <nav className="bg-gray-800 text-white p-4 rounded-t-lg">
            <div className="flex flex-col md:flex-row md:justify-around md:items-center space-y-2 md:space-y-0">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-12 text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="https://via.placeholder.com/300x200" 
                alt="Hero" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-white mb-4">
              Welcome to Our Site
            </h1>
          </div>

          {/* Features Section */}
          <div className="p-8 bg-gray-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src="https://via.placeholder.com/400x200" 
                    alt={`Feature ${num}`} 
                    className="w-full"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Feature {num}</h3>
                    <p className="text-gray-600 mb-4">
                      {num === 1 ? 'Amazing feature description here.' : 
                       num === 2 ? 'Another great feature.' : 
                       'One more excellent feature.'}
                    </p>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Section */}
          <div className="p-8 bg-white">
            <h2 className="text-2xl font-bold mb-4">Data Overview</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
                    { name: 'Jane Smith', email: 'jane@example.com', status: 'Active' }
                  ].map((user, idx) => (
                    <tr key={idx} className="even:bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 hover:bg-gray-100">{user.name}</td>
                      <td className="border border-gray-300 px-4 py-2 hover:bg-gray-100">{user.email}</td>
                      <td className="border border-gray-300 px-4 py-2 hover:bg-gray-100">{user.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-gray-50 rounded-b-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <div className="space-y-4 max-w-md mx-auto">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                  rows="4"
                />
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
