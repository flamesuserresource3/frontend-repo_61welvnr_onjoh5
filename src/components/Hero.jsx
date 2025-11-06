import React from 'react';
import Spline from '@splinetool/react-spline';
import { Calendar, Shield, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[580px] overflow-hidden bg-slate-900">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient overlay for contrast (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/70 via-slate-900/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 text-blue-200 px-3 py-1 text-xs font-medium ring-1 ring-inset ring-blue-300/30">
            <Shield size={14} /> Licensed Psychologist · Los Angeles, CA
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Strengthening Relationships by Building Self‑Esteem
          </h1>
          <p className="mt-4 text-slate-200/90 text-lg md:text-xl">
            Dr. Seth Meyers is a trusted psychologist specializing in relationships and self‑esteem. His approach helps you grow both—because each strengthens the other.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:appointments@drsethmeyers.com?subject=New%20Patient%20Appointment%20Request"
              className="inline-flex items-center gap-2 rounded-md bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-3 font-medium shadow-lg shadow-blue-500/25"
            >
              <Calendar size={18} /> Book Patient Appointment
            </a>
            <a
              href="mailto:office@drsethmeyers.com?subject=Business%20Consultation%20Request"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 hover:bg-white/20 transition text-white px-5 py-3 font-medium backdrop-blur ring-1 ring-white/20"
            >
              <Calendar size={18} /> Book Business Meeting
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-md text-blue-200 hover:text-white transition px-3 py-2"
              aria-label="Learn about Dr. Seth's book"
            >
              <BookOpen size={18} /> Dr. Seth's Love Prescription
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
