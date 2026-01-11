import React from "react";

const ContactInfoItem = ({ icon: Icon, title, value }) => {
  return (
    <div className="flex items-start gap-4 group">
      <div className="w-14 h-14 rounded-2xl bg-[#ee6c4d] flex items-center justify-center flex-shrink-0 group-hover:bg-[#3d5a80] transition-colors duration-300">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h3 className="text-sm sm:text-lg font-bold text-[#3d5a80] mb-1">
          {title}
        </h3>
        <p className="text-base sm:text-lg text-gray-600">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfoItem;
