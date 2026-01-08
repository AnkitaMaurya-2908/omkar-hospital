import { FiClock } from "react-icons/fi";
import { MdEmergency } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { AiFillMedicineBox } from "react-icons/ai";

export const featuresData = [
  {
    icon: FiClock,
    text: "24/7 Healthcare",
  },
  {
    icon: MdEmergency,
    text: "Emergency",
  },
  {
    icon: FaUserMd,
    text: "Experienced Doctors",
  },
  {
    icon: AiFillMedicineBox,
    text: "Medicines",
  },
  {
    icon: RiServiceLine,
    text: "Essential services",
    onlyLg: true,
  },
];
