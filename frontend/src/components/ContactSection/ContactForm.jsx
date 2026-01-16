"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactInfoItem from "./ContactInfoItem";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";

const ContactForm = ({
  heading = "Get in Touch with our team",
  subText = "Skilled care for every patient’s health.",
  categories = [
    "General Inquiry",
    "Appointment Booking",
    "Emergency",
    "Follow-up",
    "Others",
  ],
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    category: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 md:px-24 lg:px-48">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-sm font-medium text-[#ee6c4d] px-1 uppercase">
            Contact
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-[#293241]">
            {heading}
          </h2>

          <p className="text-gray-600">{subText}</p>

          <div className="mt-8 space-y-6">
            <ContactInfoItem
              icon={Mail}
              title="Email to us"
              value="support@onkarhospital.com"
            />
            <ContactInfoItem
              icon={Phone}
              title="Phone number"
              value="8756223212"
            />
            <ContactInfoItem
              icon={MapPin}
              title="Address"
              value="Onkar Hospital, Barhalganj Road, near Petrol Pump, Kauriram, Gorakhpur"
            />
          </div>
        </motion.div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
            />

            <FormInput
              type="tel"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Enter number"
            />

            <FormSelect
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={categories}
              placeholder="Select category"
            />

            <FormTextarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message here"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-2 bg-[#293241] hover:bg-[#3d5a80] text-white font-semibold rounded-full transition-all duration-300"
            >
              Send Message
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
