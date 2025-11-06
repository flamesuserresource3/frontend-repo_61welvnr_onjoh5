import React from 'react';
import { HeartHandshake, Users, Brain, ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="group rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-lg transition">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-full bg-blue-50 text-blue-600 grid place-items-center">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600">{description}</p>
    <div className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium">
      Learn more <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5"/>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: HeartHandshake,
      title: 'Relationship Counseling',
      description: 'Practical, compassionate guidance to improve communication, resolve conflict, and build trust.'
    },
    {
      icon: Brain,
      title: 'Self‑Esteem Building',
      description: 'Identify patterns, challenge inner critics, and practice new behaviors that strengthen self‑worth.'
    },
    {
      icon: Users,
      title: 'Couples & Individual Therapy',
      description: 'Dedicated sessions tailored to your goals—whether as an individual or as a couple.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600 text-lg">
            Clear, outcome‑focused therapy designed to help you feel better and relate better.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
