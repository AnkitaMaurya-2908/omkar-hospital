"use client";
import Image from "next/image";
import { doctorInfo } from "@/data/DoctorInfo";
export default function Doctor() {
  return (
    <div className="pt-6 sm:pt-8 lg:pt-12 pb-18 ">
      <section className="px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
          Connecting You to{" "}
          <span className="text-[#ee6c4d] italic font-semibold">
            Trusted Health Experts
          </span>
        </h2>

        <p className="mt-2 mb-8 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          Meet our experienced and compassionate doctors dedicated to your care.
        </p>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden py-4 border border-slate-200">
                <div className="relative h-80 sm:h-96 transition-transform duration-500 ease-out hover:scale-101 hover:shadow:lg">
                  <Image
                    src={doctorInfo.image}
                    alt={doctorInfo.name}
                    className="w-full h-full object-contain object-center"
                    height={200}
                    width={200}
                  />
                  <div className="absolute pointer-events-none"></div>
                </div>

                <div className="text-center p-2">
                  <h2 className="text-2xl font-bold">{doctorInfo.name}</h2>
                  <p> {doctorInfo.title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 my-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 lg:p-10">
              <div className="space-y-6 animate-fadeIn">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  About {doctorInfo.name}
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {doctorInfo.about}
                </p>
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">
                    Philosophy of Care
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {doctorInfo.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
