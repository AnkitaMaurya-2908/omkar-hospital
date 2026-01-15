"use client";
import Image from "next/image";
import { doctorInfo } from "@/data/DoctorInfo";
export default function Doctor() {

  return (
    
    <div className="min-h-screen pt-12 sm:py-16 lg:py-20 ">
           <section className="px-4 md:px-8 lg:px-16 my-16 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
        Connecting You to{" "}
        <span className="text-[#ee6c4d] italic font-semibold">
          Trusted Health Experts
        </span>
      </h2>

      <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
        Meet our experienced and compassionate doctors dedicated to your care.
      </p>
    </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="relative h-80 sm:h-96 bg-gradient-to-br from-blue-100 to-slate-100 transition-transform duration-500 ease-out hover:scale-101 shadow-md hover:shadow:lg">
                  <Image
                    src={doctorInfo.image}
                    alt={doctorInfo.name}
                    className="w-full h-full object-cover"
                    height={200}
                    width={200}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                <div className="text-center p-2">
                  <h2 className="text-2xl font-bold">{doctorInfo.name}</h2>
                  <p> {doctorInfo.title}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
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
