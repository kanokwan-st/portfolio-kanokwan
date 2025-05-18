import { useEffect, useRef } from 'react';
import './App.css'
import Button from './component/Button';
import ButtonRound from './component/ButtonRound';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


function App() {
  gsap.registerPlugin(TextPlugin);
  const animatedText = useRef(null);
  const wavedHand = useRef(null);

  useEffect(() => {
    // Text typing animation
    gsap.to(animatedText.current, {
      duration: 2,
      text: "I love logical thinking and planning."
    });
    
    // Hand waving animation
    gsap.to(wavedHand.current, {
      duration: 0.2,
      rotate: 20,
      yoyo: true,
      repeat: 5,
      transformOrigin: 'bottom center',
      ease: 'power1.inOut'
    })

  }, [])

  return (
    <div className="relative min-h-screen bg-[#0E100F] text-[#FEFBE0]">
      {/* NAVBAR */}
      <nav className="sticky z-20 top-0  py-5 px-32 bg-[#0E100F]">
        <div className='relative flex justify-between'>
          <div className="flex gap-4">
            <h1 className="text-lg font-medium">Kanokwan S.</h1>
            <a href="https://github.com/kanokwan-st" target='_blank'>
              <img src="/images/github.png" alt="" className="h-8" />
            </a>
            <a href="https://linkedin.com/in/kanokwan-st" target="_blank">
              <img src="/images/linkedin.png" alt="" className="h-8" />
            </a>
          </div>
          <div className="hidden lg:flex gap-16 font-medium">
            <a href="#home" className='transform hover:scale-110 transition-transform duration-300'>
              Home</a>
            <a href="#about" className='transform hover:scale-110 transition-transform duration-300'>
              About</a>
            <a href="#experience" className='transform hover:scale-110 transition-transform duration-300'
            >Experience</a>
            <a href="#skills" className='transform hover:scale-110 transition-transform duration-300'>
              Skills</a>
            <a href="#project" className='transform hover:scale-110 transition-transform duration-300'>
              Project</a>
            <a href="#miniproject" className='transform hover:scale-110 transition-transform duration-300'>
              Mini Project</a>
            <a href="#contact" className='transform hover:scale-110 transition-transform duration-300'>
              Contact</a>
          </div>
        </div>
        <hr className="absolute bottom-0 right-19 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />

      </nav>

      {/* SECTION 1 */}
      <section id="home" className="w-full h-130 px-32">
        <article className="flex w-full h-[80%]">
          <div className="flex flex-col justify-center w-[60%] h-full">
            <h2 className="text-4xl font-bold mb-5">Hello <span ref={wavedHand} className='inline-block align-text-top'>👋</span></h2>
            <h2 className="text-3xl font-bold">
              I’m <span className="text-violet-400">KANOKWAN SAE-TAE</span>, a
              software Developer
            </h2>
            <div className='relative'>
              {/* animated text */}
              <h2 ref={animatedText} className="absolute pt-10 top-0 left-0 text-2xl font-bold"></h2>
            </div>
          </div>
          <figure className="w-[40%] h-full">
            <img
              src="/images/devPic.png"
              alt="dev pic"
              className="w-full h-full object-contain"
            />
          </figure>
        </article>
        <div className="flex justify-center gap-4 py-6">
          <Button as='a' href="#project" className='px-10'>My Projects</Button>
          <Button as='a' href="#experience" className='px-10'>Experience</Button>
        </div>
      </section>
      <hr className="m-6 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />

      {/* SECTION 2 */}
      <section id="about" className="flex flex-col justify-center items-center px-64  w-full h-100 bg-[#2a1438]">
        <h2 className="text-2xl font-bold pb-6">Know Me More</h2>
        <p className="text-lg text-balance text-center">
          I am a graduate of Generation’s Junior Software Developer Bootcamp
          with a background in maintenance engineering, which has enhanced my
          problem-solving and project management skills. I am eager to apply my
          technical skills, and attention to detail in a Software Developer
          role, contributing to growth and innovation. I am passionate about
          continuous learning and excited to collaborate on projects that create
          meaningful solutions.
        </p>
      </section>
      <hr className="m-6 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />

      {/* SECTION 3 */}
      <section id="experience" className="flex flex-col justify-center items-center px-32 w-full h-150">
        <h2 className="text-2xl font-bold pb-6">Experience</h2>
          <Button as="a" href="/files/CV-Kanokwan.pdf" download>Download CV</Button>
        <div className="flex flex-col pt-10">
          {/* Exp1 */}
          <div className="flex gap-2">
            <p>⚪</p>
            <hr className="h-full w-1 bg-[#3B3C37] border-0" />
            <div>
              <h3 className='text-lg font-semibold'>Junior Software Developer Bootcamp</h3>
              <p>Feb 2025 - May 2025</p>
              <p>Generation Thailand</p>
              <p></p>
              <p className='pb-6'>- Collaborated with a team to build web applications, using React for front-end, Express for back-end, and MongoDB for database management, while gaining hands-on experience in full-stack development, problem-solving, and teamwork to deliver a functional product.</p>
            </div>
          </div>
          {/* Exp2 */}
          <div className="flex gap-2">
            <p>⚪</p>
            <hr className="h-full w-1 bg-[#3B3C37] border-0" />
            <div>
              <h3 className='text-lg font-semibold'>Maintenance Engineer</h3>
              <p>Jan 2024 - Jan 2025</p>
              <p>Microchip Technology Thailand</p>
              <p>- Identified and resolved major equipment issues by determining root causes and implementing effective solutions.</p>
              <p>- Collaborated with cross-functional teams, including engineers, production, IT, and purchasing, to optimize processes and resolve technical challenges.</p>
              <p className='pb-6'>- Managed and executed maintenance projects efficiently, minimizing downtime and ensuring optimal machine performance.</p>
            </div>
          </div>
          {/* Exp3 */}
          <div className="flex gap-2">
            <p>⚪</p>
            <hr className="h-full w-1 bg-[#3B3C37] border-0" />
            <div>
              <h3 className='text-lg font-semibold'>Compliant Robot Gripper</h3>
              <p>Aug 2021 - July 2022</p>
              <p>Senior Project (Arduino, Fusion 360, Electrical Wiring)</p>
              <p>- Designed and developed a compliant robot gripper capable of handling various objects.</p>
              <p className='pb-2'>- Programmed a Teensy 4.1 microcontroller for precise control and operation.</p>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-6 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />

      {/* SECTION 4 */}
      <section id="skills" className="flex flex-col justify-center items-center lg:px-50 xl:px-80 py-4 w-full h-100 bg-[#2a1438]">
        <h2 className="flex items-center justify-center w-full h-10 text-2xl font-bold">
          Skill Set
        </h2>
        <div className="w-full flex gap-10 p-8">
          {/* BOX 1 */}
          <div className="w-full flex flex-col items-center">
            <h3 className="pb-4 text-xl font-semibold">Frontend</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <ButtonRound>HTML</ButtonRound>
              <ButtonRound>CSS</ButtonRound>
              <ButtonRound>JavaScript</ButtonRound>
              <ButtonRound>React</ButtonRound>
              <ButtonRound>Tailwind</ButtonRound>
              <ButtonRound>MUI</ButtonRound>
            </div>
          </div>
          {/* BOX 2 */}
          <div className="w-full flex flex-col items-center">
            <h3 className="pb-4 text-xl font-semibold">Backend</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <ButtonRound>Node.js</ButtonRound>
              <ButtonRound>SQLite</ButtonRound>
              <ButtonRound>MongoDB</ButtonRound>
            </div>
          </div>
          {/* BOX 3 */}
          <div className="w-full flex flex-col items-center">
            <h3 className="pb-4 text-xl font-semibold">Tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              <ButtonRound>Git</ButtonRound>
              <ButtonRound>VScode</ButtonRound>
            </div>
          </div>
        </div>
      </section>
      <hr className="m-6 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />

      {/* SECTION 5 */}
      <section id="project" className="flex flex-col justify-center items-center px-32 py-10 w-full h-100">
        <h2 className="flex items-center justify-center w-full h-10 text-2xl font-bold">
          My Project
        </h2>
        <article className="flex w-full h-full">
          <figure className="flex items-center justify-center w-[50%] h-full bg-red-200">
            <img
              src="/images/webpic.png"
              alt="dev pic"
              className="w-[80%] h-[90%] object-contain"
            />
          </figure>
          <div className="flex flex-col p-12 w-[50%] h-full bg-gray-700">
            <div className="flex items-center gap-8">
              <h3 className="pb-4 text-2xl font-semibold">Collectico</h3>
              <div className="flex items-center gap-1">
                <ButtonRound as='a' href="https://dragon-tempura-sprint2.vercel.app/" target='_blank'>Vercel</ButtonRound>
                <ButtonRound as='a' href="https://github.com/kanokwan-st/dragon-tempura-sprint2.git" target='_blank'>Github</ButtonRound>
              </div>
            </div>
            <div className="pt-4">
              <p className='pb-1 italic'>Final Project: E-Commerce Application (MERN Stack)</p>
              <p>A web app where artists and collectors can connect and trade artwork. Anyone can post their art, buy from others, or join in on auctions. It’s not just a marketplace — it’s a space for people who love art to find each other.</p>
            </div>
            <div></div>
          </div>
        </article>
      </section>
      <hr className="m-6 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />

      {/* SECTION 6 */}
      <section id="miniproject" className="flex flex-col justify-center items-center px-32 w-full h-100 bg-[#2a1438]">
        <h2 className="flex items-center justify-center w-full h-10 pb-8 text-2xl font-bold">Mini Project</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
        </div>
      </section>
      <hr className="m-6 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />

      {/* SECTION 7 */}
      <section id="contact" className="flex flex-col justify-center items-center px-32  w-full h-50">
        <h2 className="flex items-center justify-center w-full h-10 pb-8 text-2xl font-bold">Find ME ON</h2>
        <div className="flex gap-3">
          <a href="https://github.com/kanokwan-st" target='_blank'>
            <img src="/images/github.png" alt="" className="h-14" />
          </a>
          <a href="https://linkedin.com/in/kanokwan-st" target="_blank">
            <img src="/images/linkedin-findme.png" alt="" className="h-14" />
          </a>
          <a href="https://linkedin.com/in/kanokwan-st" target="_blank">
            <img src="/images/mail-findme.png" alt="" className="h-14" />
          </a>
        </div>
      </section>
      <hr className="m-6 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />
    </div>
  );
}

export default App
