"use client";
import FeaturedTestimonial from "./FeaturedTestimonial";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      "Fast diagnosis, modern equipment, and extremely polite staff. The service exceeded my expectations. Highly recommended!",
    name: "Mohannad Rifat",
    department: "Diagnostics",
    image: "/doctor.jpg",
    featured: true,
  },
  {
    quote:
      "Friendly staff, advanced technology, and reliable medical solutions always available.",
    name: "Marvin McKinney",
    department: "Diagnostics",
    image: "/doctor.jpg",
  },
  {
    quote:
      "Excellent care and support from professional, friendly, and reliable staff.",
    name: "Leslie Alexander",
    department: "Physiotherapy",
    image: "/doctor.jpg",
  },
  {
    quote:
      "Skilled doctors delivered personalized treatment with compassion and professionalism.",
    name: "Arlene McCoy",
    department: "Cardiology",
    image: "/doctor.jpg",
  },
];

const PatientTestimonials = () => {
  const featured = testimonials.find(t => t.featured);
  const others = testimonials.filter(t => !t.featured);

  return (
    <section className="bg-zinc-50 py-16 px-4 sm:px-6 lg:px-38">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block text-sm font-medium text-slate-600 bg-slate-100 px-4 py-1 rounded-full mb-4">
            Testimonial
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real experiences that inspire us to keep delivering exceptional care.
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <div className="mb-6">
            <FeaturedTestimonial {...featured} />
          </div>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
