import React from "react";
import { Github, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Home = () => {
  return (
    <>
      <div className="px-2 md:hidden">
        <MobileNavbar />
      </div>
      <div className="w-full overflow-hidden ">
        <div className="w-full md:h-svh  px-2 md:px-4 lg:px-6 py-1 md:py-2 lg:py-3">
          <div className="grid h-full  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 w-full opacity-85">
            {/* Card 1 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 lg:row-span-2 col-span-1 a overflow-hidden">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      Projects
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600 max-w-prose">
                      <a
                        href="https://github.com/ayushhkkkk3585?tab=repositories"
                        target="_blank"
                      >
                        Wanna see my Projects? Click here
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-32  sm:h-full">
                  <img
                    src="/project-section.png"
                    alt="Projects"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 a overflow-hidden">
              <div className="flex flex-col sm:flex-row h-full w-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      Ayush Khalate
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Full Stack developer who's mid at dev, but funny IRL?
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-36  sm:h-full">
                  <img
                    src="/luffy.jpeg"
                    alt="Random Quotes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 a overflow-hidden">
              <div
                id="education"
                className="flex flex-col sm:flex-row h-full w-full"
              >
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      Education
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Thakur College of Engineering and Technology
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-36  sm:h-full">
                  <img
                    src="/education.jpeg"
                    alt="Education"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 sm:col-span-2 a overflow-hidden">
              <div
                id="about"
                className="flex flex-col sm:flex-row h-full w-full"
              >
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      About
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Well, I am a 3rd year student who's pursuing B.E in
                      Information Technology. I posses a calm and an eager mind.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-36 sm:h-full aspect-video relative">
                  <img
                    src="/about.png"
                    alt="About"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 sm:col-span-2 a overflow-hidden">
              <div
                id="technologies"
                className="flex flex-col sm:flex-row h-full w-full"
              >
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      Technologies I Know!
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2  items-center">
                      {[
                        "/tailwind.png",
                        "/ex.png",
                        "/fl.png",
                        "/java.png",
                        "/mongo.png",
                        "/node.png",
                        "/react.png",
                        "/spring.png",
                        "/js-icon.png",
                      ].map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt="Tech Icon"
                          className="w-6 md:w-8 lg:w-10 h-auto rounded-md"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-24 sm:h-full b">
                  <img
                    src="/tech.jpg"
                    alt="Tech Background"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 lg:row-span-2 col-span-1 a overflow-hidden">
              <div id="resume" className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      Check out my resume
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600 max-w-prose">
                      <a
                        target="_blank"
                        href="https://drive.google.com/file/d/16WoI5JYyT9dfizT9t19mvHDQK0ZKS3qE/view?usp=sharing"
                      >
                        Click here!
                      </a>
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-full">
                  <img
                    src="/gojo.jpeg"
                    alt="Resume"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 overflow-hidden">
              <div
                id="contact"
                className="flex flex-col sm:flex-row h-full w-full"
              >
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      Contact Me
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Let's work together
                    </p>
                    <div className="flex space-x-4 pt-2">
                      <a
                        href="mailto:ayushkhalate04@gmail.com"
                        target="_blank"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                      <a
                        href="https://github.com/ayushhkkkk3585"
                        target="_blank"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.instagram.com/ayushhhhh_34/profilecard/?igsh=MXE3dHdma2lhZnA5bA=="
                        target="_blank"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://x.com/Ayuzh__"
                        target="_blank"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ayush-khalate-735563261?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_blank"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-24 sm:h-full">
                  <img
                    src="/contact.jpg"
                    alt="Random Quotes"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 a overflow-hidden">
              <div className="flex flex-col sm:flex-row h-full w-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 tracking-tight">
                      Things I like
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Cats, Dogs, Sunsets, etc. Talk to me about entertainment
                      and programming i.e talk about anything.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-36 sm:h-full">
                  <img
                    src="/likes.jpeg"
                    alt="Blog"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
