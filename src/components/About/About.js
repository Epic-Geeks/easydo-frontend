import React from "react";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  // FaFacebook,
  // FaInstagram,
} from "react-icons/fa";

import Container from "../Container";
// import HomeServices2 from "./HomeServices2.jpg";
import painting from "./painting.jpg";

export default function About() {
  const aboutInfo = [
    {
      name: "Mohammed Almomani",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/106746339?v=4",
      description:
        "I am a 25 years old mechanical engineer who graduated from the University of Jordan. I am attending to be a developer now.",
    },
    {
      name: "Malek Hamdan",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/62914608?v=4",
      description:
        "I'm fresh graduate. I studied software engineering in Al Balqa Applied University. Currently I'm JS student at ASAC.",
    },
    {
      name: "Ali Mohammad",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/108058306?v=4",
      description:
        "I'm Software Enginnering With a passion of coding and learning.",
    },
    {
      name: "Amani Alsmadi",
      text: `Full Stack Developer`,
      image: "https://avatars.githubusercontent.com/u/108059931?v=4",
      description:
        "I graduated from Al-Balqa Applied University as a communications and software engineer. Now, I'm learning JavaScript programming with LTUC - ASAC.",
    },
    {
      name: "Shaima Alkhateeb",
      text: "Full Stack Developer",
      image: "https://avatars.githubusercontent.com/u/97349122?v=4",
      description:
        "I'm interested in designing and coding. I’m currently full stack.",
    },
  ];

  return (
    <div>

      <div className="antialiased bg-Anti-Flash-White overflow-hidden mb-10">
        <div className="text-center pt-12">
          <h1 className="text-4xl md:text-3xl text-Myrtle-Green font-semibold mb-10 z-10 overflow-hidden">
            About easyDo
          </h1>
        </div>
        <div className="flex w-full justify-center items-center pb-12">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-Anti-Flash-White w-full max-w-4xl sm:p-2 rounded-xl text-black ">
            <div className="relative">
              <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full drop-shadow-xl -left-60 -top-"></div>
              <div className="absolute z-0 w-20 h-20 bg-teal-400 rounded-full drop-shadow-xl -left-80 top-44"></div>
              <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full drop-shadow-xl -left-28 -bottom-28"></div>
              {/* <div className="absolute z-0 w-20 h-20 bg-teal-400 rounded-full drop-shadow-xl right-28 -top-28"></div> */}
              {/* <div className="absolute z-0 w-20 h-20 bg-teal-400 rounded-full drop-shadow-xl -right-60 -bottom-16"></div> */}
              <div className="absolute z-0 w-10 h-10 bg-teal-400 rounded-full drop-shadow-xl -left-28 -top-32"></div>

              <div className="relative z-10 md:w-96">
                <img src={painting} alt="" className=" h-96 rounded-lg " />
              </div>
            </div>
            <div className="flex flex-col space-y-8 justify-between text-gray-600 z-10">

              <div>
                {/* <h1 className="font-bold text-4xl tracking-wide">
                  About easyDo
                </h1> */}
                <p className="leading-relaxed  text-xl ">
                  easyDo is the leading platform for connecting individuals
                  looking for home services with high-quality, pre-screened
                  professionals.
                </p>
                <p className="pt-10 leading-relaxed text-xl ">
                  From home cleaning to handyman services, easyDo instantly
                  matches thousands of clients each week with the best
                  professionals in cities around the Jordan.
                </p>
                <p className="pt-10 leading-relaxed text-xl ">
                  easyDo is the easiest and most convenient way to book
                  services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <section className="md:h-full flex items-center text-gray-600 bg-cover bg-no-repeat bg-center">
          <Container>
            <div className="container px-5 py-10 mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-3xl text-Myrtle-Green font-semibold">
                  Meet our Developers
                </h1>
              </div>
              <div className="flex flex-wrap -m-4">
                {aboutInfo &&
                  aboutInfo.map((item, index) => (
                    <div
                      className={`p-4 sm:w-1/2 lg:w-1/3 flex flex-col items-center hover:drop-shadow-xl ${
                        index > 2
                          ? "p-4 sm:w-1/1 lg:w-1/2 flex flex-col items-center hover:drop-shadow-xl"
                          : ""
                      }`}
                      key={index}
                    >
                      <div className="h-full w-96 border-2 border-gray-200 mb-12 bg-Anti-Flash-White border-opacity-60 rounded-lg flex flex-col items-center overflow-hidden cursor-pointer hover:scale-105 transition-transform drop-shadow-xl">
                        <img
                          className="w-2/4 rounded-full h-auto mb-5 flex items-center mt-10 drop-shadow-xl"
                          src={item.image}
                          alt="blog"
                        />
                        <div className="p-6 text-center hover:transition duration-300 ease-in">
                          <h1 className="text-lg font-semibold mb-3">
                            {item.name}
                          </h1>
                          <p className="leading-relaxed mb-3 text-center">
                            {item.description}
                          </p>
                        </div>
                        <div className="text-center text-xl text-black mb-5 ">
                          <a href="https://www.twitter.com">
                            <FaTwitter className="w-7 h-7 cursor-pointer text-2xl m-2 hover:text-slate-600 inline-block" />
                          </a>
                          <a href="https://www.linkedin.com">
                            <FaLinkedin className="w-7 h-7 cursor-pointer text-2xl m-2 hover:text-slate-600 inline-block" />
                          </a>
                          <a href="https://github.com/Epic-Geeks">
                            <FaGithub className="w-7 h-7 cursor-pointer text-2xl m-2 hover:bg-slate-600 rounded-3xl inline-block" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}
