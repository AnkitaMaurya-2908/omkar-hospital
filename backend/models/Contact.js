import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      match: [/^[A-Za-z\s]+$/, "Full name must contain only letters"],
    },

    phone: {
      type: String,
      required: true,
        match: [/^[0-9]{10}$/, "Phone number must be exactly 10 digits"],
    },

    category: {
      type: String,
      required: true,
      enum: [
        "General Inquiry",
        "Appointment",
        "Emergency",
        "Follow-up",
        "Others",
      ],
    },

    message: {
      type: String,
      required: true,
      minlength: 10,
      minlength: [10, "Message must be at least 10 characters"],
    },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
