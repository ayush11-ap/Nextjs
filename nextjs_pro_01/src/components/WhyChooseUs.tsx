"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <video
          width={300}
          height={300}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332032/bynpcuidtjtmgndrmk5n.mp4"
        ></video>
      </div>
    ),
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <video
          width={300}
          height={300}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332019/zmk43mqyjsb4wr1nzgks.mp4"
        ></video>
      </div>
    ),
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
    description:
      "Embark on a musical journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <video
          width={300}
          height={300}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750332023/kv3gvoxgfpsgm7emrjhb.mp4"
        ></video>
      </div>
    ),
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of music concepts and performance techniques.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <video
          width={300}
          height={300}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355586/z255vqkbmpfzfrbj3liu.mp4"
        ></video>
      </div>
    ),
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest music education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <video
          width={300}
          height={300}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355582/sj9e8k9onszpallle9zn.mp4"
        ></video>
      </div>
    ),
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your musical skills are always advancing.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <video
          width={300}
          height={300}
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
          src="https://res.cloudinary.com/dc4yjx0dc/video/upload/v1750355564/p3bd8wszbeb42cm4s9ns.mp4"
        ></video>
      </div>
    ),
  },
];

const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
};

export default WhyChooseUs;
