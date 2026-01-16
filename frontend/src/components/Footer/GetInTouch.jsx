import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactCard from "./ContactCard";

export default function GetInTouch() {
  return (
    <div className="space-y-1 flex flex-col items-center sm:items-start text-center sm:text-left sm:col-span-2 lg:col-span-2">
      <h3 className="text-lg font-md mb-6 relative inline-block">
        Get in Touch
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 w-12 h-1 bg-[#ee6c4d] rounded-full"></span>
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4 justify-items-center sm:justify-items-start w-full">
        <ContactCard
          icon={Phone}
          label="Call Us"
          value="+91 8756223212"
          href="tel:8756223212"
        />

        <ContactCard
          icon={Mail}
          label="Email Us"
          value="support@onkarhospital.com"
          href="mailto:support@onkarhospital.com"
        />

        <ContactCard
          icon={MapPin}
          label="Visit Us"
          value="Onkar Hospital, Barhalganj Road, near Petrol Pump, Kauriram, Gorakhpur"
          colSpan="sm:col-span-2 lg:col-span-1"
        />
      </div>
    </div>
  );
}
