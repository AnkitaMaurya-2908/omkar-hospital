import ContactForm from '@/components/ContactSection/ContactForm'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/HeroSection/Navbar'
import React from 'react'
import Image from 'next/image'
import CallToAction from '@/components/HeroSection/CallToAction'

export default function ContactPage() {
  return (
    <>
    <div className='bg-zinc-50 pt-28 lg:pt-32'></div>
    <Navbar/>
    <ContactForm/>
    <CallToAction/>
    <Footer/>
    </>
  )
}
