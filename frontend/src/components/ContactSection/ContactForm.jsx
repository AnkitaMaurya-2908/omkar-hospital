"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ContactInfoItem from "./ContactInfoItem";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormTextarea from "./FormTextarea";
import API from "@/app/services/api";

const ContactForm = ({
  heading = "Get in Touch with our team",
  subText = "Skilled care for every patient’s health.",
  categories = [
    "General Inquiry",
    "Appointment",
    "Emergency",
    "Follow-up",
    "Others",
  ],
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    category: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    const cleanValue = name === "category" ? value.trim() : value;

    setFormData((prev) => ({ ...prev, [name]: cleanValue }));
  };

  const allowedCategories = [
    "General Inquiry",
    "Appointment",
    "Emergency",
    "Follow-up",
    "Others",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const cleanedCategory = formData.category.replace(/\s+/g, " ").trim();

    if (!allowedCategories.includes(cleanedCategory)) {
      alert("Invalid category selected");
      setLoading(false);
      return;
    }

    try {
      const res = await API.post("/api/contact", {
        ...formData,
        category: cleanedCategory,
      });

      if (res.data.success) {
        setSuccess("Message sent successfully!");

        setTimeout(() => {
          setSuccess("");
        }, 3000);

        setFormData({
          fullName: "",
          phone: "",
          category: "",
          message: "",
        });
        setErrorMsg("");
      }
    } catch (error) {
      setErrorMsg(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-12 lg:py-28 px-4 md:px-24 lg:px-48">
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

        {/* Right Form Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter full name"
              required
            />

            <FormInput
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />

            <FormSelect
              name="category"
              value={formData.category}
              onChange={handleChange}
              options={categories}
              placeholder="Select category"
              required
            />

            <FormTextarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message here"
              required
              maxLength={1000}
            />

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-8 py-2 bg-[#293241] hover:bg-[#3d5a80] text-white font-semibold rounded-full transition-all duration-300 disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
              <ArrowRight className="w-4 h-4" />
            </button>

            {success && (
              <p className="text-green-600 font-medium mt-2">{success}</p>
            )}
            {errorMsg && (
              <p className="text-red-600 font-medium mt-2">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
