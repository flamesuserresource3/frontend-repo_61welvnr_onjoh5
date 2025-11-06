import React from 'react';
import { BookMarked, ExternalLink } from 'lucide-react';

const BookSection = () => {
  return (
    <section id="book" className="py-20 bg-white">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 rounded-full px-3 py-1 text-xs font-medium">
            <BookMarked size={14}/> Featured Book
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">Dr. Seth's Love Prescription</h2>
          <p className="mt-4 text-slate-600 text-lg">
            A practical guide to building healthier relationships through the core skill that matters most: self‑esteem. Learn how strengthening your sense of self can transform how you love and connect.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-medium shadow-lg shadow-blue-600/25"
            >
              Buy on Amazon <ExternalLink size={16}/>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-medium ring-1 ring-slate-200 text-slate-700 hover:bg-slate-50"
            >
              Learn more
            </a>
          </div>
        </div>
        <div>
          <div className="relative aspect-[3/4] w-full max-w-sm mx-auto">
            <img
              src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200&auto=format&fit=crop"
              alt="Cover of Dr. Seth's Love Prescription"
              className="absolute inset-0 h-full w-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
