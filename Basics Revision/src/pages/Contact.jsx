import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <div className="min-h-[calc(100vh-68px)] bg-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500 mb-2 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-center text-gray-400 text-sm mb-8">
          Have questions or want to collaborate? Drop a message!
        </p>

        {submitted ? (
          <div className="bg-blue-900/20 border border-blue-500/30 text-blue-200 p-6 rounded-xl text-center space-y-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto text-blue-400 font-bold text-xl">
              ✓
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Message Sent!</h3>
              <p className="text-sm text-gray-400">Thank you for reaching out. We will get back to you shortly.</p>
            </div>
            <button 
              onClick={() => setSubmitted(false)} 
              className="mt-2 text-xs font-semibold text-blue-400 hover:text-blue-300 underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1.5">Name</label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1.5">Email</label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                placeholder="your.email@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-1.5">Message</label>
              <textarea
                id="message"
                rows="4"
                required
                className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 resize-none"
                placeholder="Type your message here..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-blue-500/10 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Contact
