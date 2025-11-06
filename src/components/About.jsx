import React from 'react';
import { User, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">About Dr. Seth Meyers</h2>
          <p className="mt-4 text-slate-600 text-lg">
            Dr. Seth Meyers is a licensed psychologist based in Los Angeles, California. With years of clinical experience, he helps individuals and couples strengthen relationships by building a solid foundation of self‑esteem.
          </p>
          <p className="mt-4 text-slate-600">
            His philosophy is simple: the quality of our relationships reflects the relationship we have with ourselves. By addressing patterns rooted in self‑worth, Dr. Meyers guides patients toward meaningful, lasting change.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-slate-700 font-medium"><Award size={18}/> Credentials</div>
              <ul className="mt-2 text-slate-600 text-sm list-disc list-inside">
                <li>Licensed Psychologist (CA)</li>
                <li>Specialist in Relationship Counseling</li>
                <li>Expert in Self‑Esteem Development</li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2 text-slate-700 font-medium"><User size={18}/> Approach</div>
              <p className="mt-2 text-slate-600 text-sm">
                Warm, direct, and collaborative. Practical tools with clear steps you can apply between sessions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <img
              src="https://images.unsplash.com/photo-1603415526960-f7e0328d13a2?q=80&w=1200&auto=format&fit=crop"
              alt="Dr. Seth Meyers professional portrait"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
