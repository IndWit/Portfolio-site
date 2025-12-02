import React, { useState } from 'react';

export default function Contact({ setCursorVariant }) {
  const [status, setStatus] = useState({ loading: false, ok: null, message: '' });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus({ loading: true, ok: null, message: '' });
    try {
      // Use FormSubmit to send email directly without server setup
      const endpoint = 'https://formsubmit.co/ajax/Indumawithanage1@gmail.com';
      const json = Object.fromEntries(formData.entries());
      json._subject = 'New message from portfolio site';
      json._captcha = 'false';

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(json)
      });
      const data = await res.json();
      if (res.ok && (data.success === 'true' || data.success === true || data.message)) {
        setStatus({ loading: false, ok: true, message: 'Message sent successfully. I\'ll get back to you soon.' });
        form.reset();
      } else {
        setStatus({ loading: false, ok: false, message: data.errors?.[0]?.message || data.message || 'Failed to send message. Please try again.' });
      }
    } catch (err) {
      setStatus({ loading: false, ok: false, message: 'Network error. Please check your connection and try again.' });
    }
  }
  return (
    <section id="contact" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border border-orange-500/30 rounded-full bg-orange-500/10 backdrop-blur-sm mb-6">
            <span className="text-orange-400 text-sm font-mono tracking-wider">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-orange-500 to-white bg-clip-text text-transparent">
              LET'S BUILD
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Have a project that needs world-class engineering? Let's make it happen.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md border border-gray-800 rounded-3xl p-8 md:p-12">
          <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 space-y-6">
            <div className="group">
              <input
                type="text"
                name="name"
                placeholder="YOUR NAME"
                className="w-full bg-black/50 border-2 border-gray-800 focus:border-orange-500 rounded-2xl px-6 py-5 text-lg outline-none transition-all font-mono placeholder:text-gray-600 group-hover:border-gray-700"
              />
            </div>
            <div className="group">
              <input
                type="email"
                name="email"
                placeholder="YOUR EMAIL"
                className="w-full bg-black/50 border-2 border-gray-800 focus:border-orange-500 rounded-2xl px-6 py-5 text-lg outline-none transition-all font-mono placeholder:text-gray-600 group-hover:border-gray-700"
              />
            </div>
            <div className="group">
              <textarea
                placeholder="YOUR MESSAGE"
                rows="6"
                name="message"
                className="w-full bg-black/50 border-2 border-gray-800 focus:border-orange-500 rounded-2xl px-6 py-5 text-lg outline-none transition-all resize-none font-mono placeholder:text-gray-600 group-hover:border-gray-700"
              ></textarea>
            </div>
            
            <button
              className="group relative w-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl py-6 text-xl font-bold overflow-hidden shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-500 hover:scale-105"
              onMouseEnter={() => setCursorVariant('hover')}
              onMouseLeave={() => setCursorVariant('default')}
              type="submit"
              disabled={status.loading}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {status.loading ? 'SENDING…' : 'SEND MESSAGE'}
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>

            {status.message && (
              <div className={`text-center text-sm mt-2 ${status.ok ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </div>
            )}
          </div>
        </form>

        <div className="mt-12 text-center">
          <a
            href="mailto:Indumawithanage1@gmail.com"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-transparent hover:bg-gradient-to-r hover:from-orange-400 hover:to-white hover:bg-clip-text transition-all font-mono text-lg group"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Indumawithanage1@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}