import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import ScrollDown from "../components/ScrollDown";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2] md:scale-[1.7] object-cover pointer-events-none"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Gaurav Ghude</p>
            <p className="subtext">
              I am an Information Technology undergraduate with hands-on experience in full-stack web development, database design, and real-world product building.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="Web Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="UI/UX"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", bottom: "25%", left: "68%" }}
              text="Photographer"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "50%", left: "0%" }}
              text="Full-Stack Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="ReactJS Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "45%", left: "75%" }}
              text="Backend Dev"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "55%" }}
              image="assets/logos/Java.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "15%", left: "65%" }}
              image="assets/logos/python.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Learning Journey</p>
            <p className="subtext ">
              Currently pursuing a B.Tech in Information Technology.<br></br>
              Focused on mastering clean code, React, and backend,Web app development
            </p>
          </div>
          <figure className="absolute left-[40%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
            My Journey (Resume)
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext hidden sm:block">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications.
            </p>
                          <span className="py-5 text-xs sm:text-sm md:text-base">
                <b>Scroll Down</b> to know more about my skills.
              </span>
              <div className="">
  <ScrollDown />
</div>

          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
