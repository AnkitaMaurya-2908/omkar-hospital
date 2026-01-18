import Contact from "../models/Contact.js";

export const createContact = async (req, res) => {
  try {
    const { fullName, phone, category, message } = req.body;

    if (!fullName || !phone || !category || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = await Contact.create({
      fullName,
      phone,
      category,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      contact,
    });
  } catch (error) {
  if (error.name === "ValidationError") {
    const messages = Object.values(error.errors).map(
      (err) => err.message
    );

    return res.status(400).json({
      success: false,
      message: messages[0], // send first clear error
    });
  }

  res.status(500).json({
    success: false,
    message: "Server error",
  });
}

};



// export const getAllContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       contacts,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



export const getAllContacts = async (req, res) => {
  try {
    const { search = "", category = "", page = 1, limit = 10 } = req.query;

    const query = {};

    if (search) {
      query.$or = [
        { fullName: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
      ];
    }

    if (category) {
      query.category = category;
    }

    const skip = (Number(page) - 1) * Number(limit);

    const total = await Contact.countDocuments(query);

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      contacts,
      pages: Math.ceil(total / limit),
      total,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
