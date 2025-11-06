import React, { useState } from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const Input = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm text-slate-700">{label}</span>
    <input
      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
      {...props}
    />
  </label>
);

const Textarea = ({ label, ...props }) => (
  <label className="block">
    <span className="text-sm text-slate-700">{label}</span>
    <textarea
      className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
      {...props}
    />
  </label>
);

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Get in Touch</h2>
          <p className="mt-3 text-slate-600 text-lg">Los Angeles, California</p>

          <div className="mt-6 space-y-3 text-slate-700">
            <div className="flex items-center gap-3"><MapPin size={18}/> West Los Angeles, CA</div>
            <a href="tel:+13105551234" className="flex items-center gap-3 hover:text-blue-600"><Phone size={18}/> (310) 555‑1234</a>
            <a href="mailto:office@drsethmeyers.com" className="flex items-center gap-3 hover:text-blue-600"><Mail size={18}/> office@drsethmeyers.com</a>
            <div className="flex items-center gap-3"><Calendar size={18}/> By appointment only</div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <a
              href="mailto:appointments@drsethmeyers.com?subject=New%20Patient%20Inquiry"
              className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium text-center"
            >
              New Patient Booking
            </a>
            <a
              href="mailto:office@drsethmeyers.com?subject=Business%20Meeting%20Request"
              className="rounded-md bg-white px-5 py-3 font-medium ring-1 ring-slate-200 text-slate-700 hover:bg-slate-50 text-center"
            >
              Business Consultation
            </a>
          </div>
        </div>

        <div>
          <div className="rounded-2xl bg-white p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900">Send a Message</h3>
            {!submitted ? (
              <form className="mt-4 grid gap-4" onSubmit={onSubmit}>
                <Input label="Full Name" type="text" placeholder="Jane Doe" required />
                <Input label="Email" type="email" placeholder="jane@email.com" required />
                <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
                <Textarea label="How can we help?" placeholder="Share a bit about what you’re looking for…" required />
                <button type="submit" className="rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="mt-4 text-green-700 bg-green-50 border border-green-200 rounded-md p-4">
                Thank you—your message has been recorded for this demo. We’ll be in touch soon.
              </div>
            )}
          </div>

          <div className="mt-6 rounded-2xl bg-white p-4 border border-slate-200">
            <h4 className="text-sm font-semibold text-slate-900">Newsletter</h4>
            <p className="text-sm text-slate-600 mt-1">Join a psychology‑focused newsletter with practical insights.</p>
            <form className="mt-3 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" placeholder="you@email.com" className="flex-1 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/60"/>
              <button className="rounded-md bg-slate-900 hover:bg-black text-white px-4 py-2">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
