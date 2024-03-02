'use client'
import Image from "next/image";
import Hero from "./_components/Hero";
import Service from "./_components/Service";
import Offer from "./_components/Offer";
import Order from "./_components/Order";
import Testimonial from "./_components/Testimonial";
import Aboutus from "./_components/Aboutus";
import Banner from "./_components/Banner";
import Link from "next/link";
import { useRef } from "react";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Service id="service"/>
      <Offer/>
      <Banner/>
      <Aboutus id="aboutus"/>
      <Testimonial id="review"/>
      <Order id="order"/>
    </div>
  );
}
