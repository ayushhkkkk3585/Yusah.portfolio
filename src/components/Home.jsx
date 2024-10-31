import React from "react";
import Cursor from "./Cursor";

const Home = () => {
  return (
    <>
      <Cursor />
      <div className="w-full  overflow-hidden ">
        <div className="w-full md:h-svh  px-2 md:px-4  lg:px-6 py-1 md:py-2 lg:py-3">
          <div className="grid h-full  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 w-full opacity-85">
            {/* Card 1 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 lg:row-span-2 col-span-1 a overflow-hidden">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      Projects
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600 max-w-prose">
                      Wanna see my Projects? Click here
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-24 sm:h-full">
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
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      Ayush Khalate
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Mid at Dev, but funny IRL?
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-24 sm:h-full">
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
              <div className="flex flex-col sm:flex-row h-full w-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      Education
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Thakur College of Engineering and Technology
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-24 sm:h-full">
                  <img
                    src="/school.webp"
                    alt="Education"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 sm:col-span-2 a overflow-hidden">
              <div className="flex flex-col sm:flex-row h-full w-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      About
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      We Feining!!. Well yeah, I am a 3rd year student who's
                      pursuing B.E in Information Technology.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 aspect-video relative">
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
              <div className="flex flex-col sm:flex-row h-full w-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      Techstack
                    </h2>
                    <div className="flex flex-row flex-wrap gap-2 items-center">
                      {[
                        "/tailwind.png",
                        "/ex.png",
                        "/fl.png",
                        "/java.png",
                        "/mongo.png",
                        "/node.png",
                        "/react.png",
                        "/spring.png",
                      ].map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt="Tech Icon"
                          className="w-6 md:w-8 lg:w-10 h-auto"
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
              <div className="flex flex-col sm:flex-row h-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      Check out my resume
                    </h2>
                    <p className="text-sm md:text-base lg:text-lg font-medium text-gray-600 max-w-prose">
                      Explore my projects
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 h-24 sm:h-full b">
                  <img
                    src="/project-section.png"
                    alt="Resume"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-white hover-target rounded-lg hover:scale-105 lg:hover:scale-110 transition-transform duration-300 a overflow-hidden">
              <div className="flex flex-col sm:flex-row h-full w-full">
                <div className="flex-1 flex flex-col justify-center p-2 md:p-3 lg:p-4">
                  <div className="space-y-1 md:space-y-2">
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      Contact Me
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Mid at Dev, but Funny IRL?
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-24 sm:h-full">
                  <img
                    src="/luffy.jpeg"
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
                    <h2 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 tracking-tight">
                      My Blog
                    </h2>
                    <p className="text-xs md:text-sm lg:text-base font-medium text-gray-600 max-w-prose">
                      Insights and experiences
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-2/5 md:w-1/3 h-24 sm:h-full">
                  <img
                    src="/luffy.jpeg"
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