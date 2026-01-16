"use client";
import FeaturedTestimonial from "./FeaturedTestimonial";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonialData";

const PatientTestimonials = () => {
  const featured = testimonials.find((t) => t.featured);
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section className="bg-zinc-50 py-16 px-4 sm:px-6 lg:px-38">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-semibold text-[#ee6c4d] uppercase px-4 py-1 rounded-full">
            Testimonial
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences that inspire us to keep delivering exceptional
            care.
          </p>
        </div>

        {featured && (
          <div className="mb-6">
            <FeaturedTestimonial {...featured} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((item, index) => (
            <div
              key={index}
              className={index === others.length - 1 ? "hidden lg:block" : ""}
            >
              <TestimonialCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
