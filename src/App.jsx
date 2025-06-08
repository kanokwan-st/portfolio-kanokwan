import { useEffect, useRef } from 'react';
import './App.css'
import Button from './component/Button';
import ButtonRound from './component/ButtonRound';

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function App() {
  gsap.registerPlugin(TextPlugin);
  const animatedText = useRef(null);
  const wavedHand = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillBoxRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    // Text typing animation
    const textTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 })
    textTimeline.to(animatedText.current, {
      duration: 2,
      text: "I love logical thinking and planning."
    });
    
    // Hand waving animation
    const waveTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    waveTimeline.to(wavedHand.current, {
      duration: 0.2,
      rotate: 20,
      yoyo: true,
      repeat: 7,
      transformOrigin: 'bottom center',
      ease: 'power1.inOut'
    })
    
    // About section popup when scroll to
    gsap.to(aboutRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 90%",
        toggleActions: 'play reverse play reverse',
      },
    });

    // Experience popup when scroll to
    gsap.to(experienceRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: experienceRef.current,
        start: "top 80%",
        toggleActions: 'play reverse play reverse',
      },
    });

    // Skill box popup when scroll to
    gsap.to(skillBoxRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: skillBoxRef.current,
        start: "top 80%",
        toggleActions: 'play reverse play reverse',
      },
    });

    // Project popup when scroll to
    gsap.to(projectRef.current, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: projectRef.current,
        start: "top 80%",
        toggleActions: 'play reverse play reverse',
      },
    });

  }, [])

  return (
    <div className="relative min-h-screen bg-[#0E100F] text-[#FEFBE0]" style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* NAVBAR */}
      <nav className="sticky z-20 top-0 py-5 bg-[#0E100F]">
        {/* container */}
        <div className="w-full max-w-screen-xl mx-auto px-[8%] md:px-[8%] xl:px-[40px]">
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
            <div className="hidden lg:flex items-center gap-16 font-medium">
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
              <a href="#miniproject" className='hidden transform hover:scale-110 transition-transform duration-300'>
                Mini Project</a>
              <a href="#contact" className='transform hover:scale-110 transition-transform duration-300'>
                Contact</a>
            </div>
          </div>
          <hr className="absolute bottom-0 right-19 h-[0.5px] w-[90%] bg-[#3B3C37] border-none mx-auto" />
        </div>
      </nav>

      {/* SECTION 1 */}
      <section id="home" className="relative md:pt-8 pb-30 w-full bg-gradient-to-br from-[#0E100F] to-[#1a1c20]">
        {/* container */}
        <div className="w-full max-w-screen-xl mx-auto px-[8%] md:px-[12%] xl:px-[40px]">
          <div className='grid grid-rows-12 gap-0 md:gap-14'>
            <article className="row-span-10 grid grid-cols-12 w-full">
              <div className="col-span-12 md:col-span-8 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold italic mb-12" style={{ fontFamily: "Merriweather, serif" }}>Hello <span ref={wavedHand} className='inline-block align-text-top'>👋</span></h2>
                <p className="text-[24px] md:text-[32px] font-bold">
                  I'm <span className="text-violet-400">KANOKWAN SAE-TAE</span>, a
                  software Developer
                </p>
                <div className='relative'>
                  {/* animated text */}
                  <p ref={animatedText} className="absolute pt-16 top-0 left-0 text-[20px] md:text-[28px] font-semibold italic" style={{ fontFamily: "Merriweather, serif" }}></p>
                  {/* reserve space */}
                  <p className="pt-16 invisible text-[20px] md:text-[28px] font-semibold">I love logical thinking and planning.</p>
                  
                </div>
              </div>
              <figure className="hidden md:block col-span-4">
                <img
                  src="/images/devPic.png"
                  alt="dev pic"
                  className="w-full h-full object-contain"
                />
              </figure>
            </article>
            <div className='row-span-2'>
              <div className="relative flex flex-col md:flex-row justify-center gap-8">
                <Button as='a' href="#project" className='px-20 md:px-15 z-10 self-center'>My Projects</Button>
                <Button as='a' href="#experience" className='px-20 md:px-15 z-10 self-center'>Experience</Button>
                {/* Cat lottie */}
                <div className='absolute z-0 bottom-20 md:-bottom-20 left-auto md:left-0 w-[280px] md:w-[500px] overflow-hidden'>
                  <DotLottieReact
                    src="https://lottie.host/23d05655-a281-4505-a52b-3735fa8f0161/fQ1hYWRIE3.lottie"
                    loop
                    autoplay
                    className='w-full h-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section id="about" className="relative py-30 w-full bg-gradient-to-br from-[#2A1438] to-[#3d1a4f]">
        {/* container */}
          <div ref={aboutRef} className='opacity-0 translate-y-40 scale-95 flex flex-col justify-center items-center w-full max-w-screen-xl mx-auto px-[8%] md:px-[12%] xl:px-[40px]'>
            <h2 className="text-2xl md:text-3xl font-black mb-14" style={{ fontFamily: "Merriweather, serif" }}>Know Me More 💡</h2>
            <div className='border-2 px-2 md:px-10 py-12 md:py-16 rounded-2xl bg-[#1E0F2F] shadow-2xl hover:scale-101 transition-all duration-300 will-change-transform'>
              <p className="text-[16px] md:text-[18px] text-balance text-center leading-10">
                I am a graduate of Generation’s Junior Software Developer Bootcamp
                with a background in maintenance engineering, which has enhanced my
                problem-solving and project management skills. I am eager to apply my
                technical skills, and attention to detail in a Software Developer
                role, contributing to growth and innovation. I am passionate about
                continuous learning and excited to collaborate on projects that create
                meaningful solutions.
              </p>
            </div>
          </div>
        <div className='absolute bottom-0 right-0'>
          <DotLottieReact
            src="https://lottie.host/b7b5f672-f84f-4846-820d-e58822aed105/Wg4raHjpRV.lottie"
            loop
            autoplay
            style={{width: '400px'}}
          />
        </div>
      </section>

      {/* SECTION 3 */}
      <section id="experience" className=" py-20 w-full bg-gradient-to-br from-[#0E100F] to-[#1a1c20]">
        {/* container */}
        <div className="w-full max-w-screen-xl mx-auto px-[8%] md:px-[12%] xl:px-[40px] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-black mb-14" style={{ fontFamily: "Merriweather, serif" }}>Experience 💼</h2>
          <Button as="a" href="/files/CV-Kanokwan.pdf" download>Download CV</Button>
          <div ref={experienceRef} className="opacity-0 translate-y-20 scale-95 flex flex-col pt-16">
            {/* Exp1 */}
            <div className="flex gap-2">
              <p>⚪</p>
              <hr className="h-auto w-1 bg-[#3B3C37] border-0" />
              <div>
                <h3 className='text-xl font-semibold'>Junior Software Developer Bootcamp</h3>
                <p>Feb 2025 - May 2025</p>
                <p>Generation Thailand</p>
                <div className='w-full pl-4'>
                  <p>● Collaborated with a team to build web applications, using React for front-end, Express for back-end, and MongoDB for database management, while gaining hands-on experience in full-stack development, problem-solving, and teamwork to deliver a functional product.</p>
                  <p className='pb-8'>● Took on the Scrum Master role: planning team schedules, organized meetings and helped deliver the project on time.</p>
                </div>
              </div>
            </div>
            {/* Exp2 */}
            <div className="flex gap-2">
              <p>⚪</p>
              <hr className="h-auto w-1 bg-[#3B3C37] border-0" />
              <div>
                <h3 className='text-xl font-semibold'>Maintenance Engineer</h3>
                <p>Jan 2024 - Jan 2025</p>
                <p>Microchip Technology Thailand</p>
                <div className='w-full pl-4'>
                  <p>● Identified and resolved major equipment issues by determining root causes and implementing effective solutions.</p>
                  <p>● Collaborated with cross-functional teams, including engineers, production, IT, and purchasing, to optimize processes and resolve technical challenges.</p>
                  <p className='pb-8'>● Managed and executed maintenance projects efficiently, minimizing downtime and ensuring optimal machine performance.</p>
                </div>
              </div>
            </div>
            {/* Exp3 */}
            <div className="flex gap-2">
              <p>⚪</p>
              <hr className="h-auto w-1 bg-[#3B3C37] border-0" />
              <div>
                <h3 className='text-xl font-semibold'>Compliant Robot Gripper</h3>
                <p>Aug 2021 - July 2022</p>
                <p>Senior Project (Arduino, Fusion 360, Electrical Wiring)</p>
                <div className='w-full pl-4'>
                  <p>● Designed and developed a compliant robot gripper capable of handling various objects.</p>
                  <p className='pb-2'>● Programmed a Teensy 4.1 microcontroller for precise control and operation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section id="skills" className="flex flex-col justify-center items-center py-30 w-full  bg-gradient-to-br from-[#2A1438] to-[#3d1a4f]">
        {/* container */}
        <div className="w-full max-w-screen-xl mx-auto px-[8%] md:px-[12%] xl:px-[40px]">
          <h2 className="text-3xl font-black mb-14" style={{ fontFamily: "Merriweather, serif" }}>
            Skill Set 🛠️
          </h2>
          <div ref={skillBoxRef} className="opacity-0 translate-y-10 scale-95 w-full grid grid-cols-1 md:grid-cols-3 border-2 rounded">
            {/* BOX 1 */}
            <div className="w-full flex flex-col items-center px-5 pt-7 pb-8 border-2">
              <h3 className="pb-5 text-xl font-semibold">Frontend</h3>
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
            <div className="w-full flex flex-col items-center px-5 pt-7 pb-8 border-2">
              <h3 className="pb-5 text-xl font-semibold">Backend</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <ButtonRound>Node.js</ButtonRound>
                <ButtonRound>SQLite</ButtonRound>
                <ButtonRound>MongoDB</ButtonRound>
              </div>
            </div>
            {/* BOX 3 */}
            <div className="w-full flex flex-col items-center px-5 pt-7 pb-8 border-2">
              <h3 className="pb-5 text-xl font-semibold">Tools</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <ButtonRound>Git</ButtonRound>
                <ButtonRound>VScode</ButtonRound>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section id="project" className="flex flex-col justify-center items-center py-20 w-full bg-gradient-to-br from-[#0E100F] to-[#1a1c20]">
        {/* container */}
        <div class="w-full max-w-screen-xl mx-auto px-[8%] md:px-[12%] xl:px-[80px]">
          <div ref={projectRef} className="opacity-0 translate-y-20 scale-95">
            <h2 className="text-3xl font-black mb-14" style={{ fontFamily: "Merriweather, serif" }}>
              My Projects 💻
            </h2>
            <article className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
              {/* project video */}
              <div className="flex items-center justify-center h-full bg-[#9557eb92] rounded-2xl">
                <a href="https://dragon-tempura-sprint2.vercel.app/" target='_blank'>
                  <video
                    autoPlay
                    muted
                    loop
                    playsinline
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  >
                    <source src="/video/collectico-vid.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </a>
              </div>
              {/* project detail */}
              <div className="flex flex-col py-12 px-6 md:px-12 h-full bg-gray-700 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                  <div className='flex justify-start items-center'>
                    <h3 className="text-2xl font-semibold">Collectico</h3>
                  </div>
                  <div className="flex items-center gap-1">
                    <ButtonRound as='a' href="https://dragon-tempura-sprint2.vercel.app/" target='_blank'>Vercel ▲</ButtonRound>
                    <ButtonRound as='a' href="https://github.com/kanokwan-st/dragon-tempura-sprint2.git" target='_blank'>
                      Github
                      <img src="/images/github.png" alt="" className="inline ml-2 h-6" />
                    </ButtonRound>
                  </div>
                </div>
                <div className="pt-4">
                  <p className='pb-1 italic'>Final Project: E-Commerce Application (MERN Stack)</p>
                  <p>A web app where artists and collectors can connect and trade artwork. Anyone can post their art, buy from others, or join in on auctions. It’s not just a marketplace — it’s a space for people who love art to find each other.</p>
                </div>
                <div></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 6 */}
      <section id="miniproject" className="hidden flex flex-col justify-center items-center px-32 py-20 w-full bg-gradient-to-br from-[#2A1438] to-[#3d1a4f]">
        <h2 className="text-3xl font-black mb-14" style={{ fontFamily: "Merriweather, serif" }}>Mini Project</h2>
        <div className="grid grid-cols-3 gap-x-8 gap-y-4">
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
          <div className="w-20 h-20 bg-gray-400"></div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="w-full py-30 bg-gradient-to-br from-[#2A1438] to-[#875a9e]">
        {/* container */}
        <div className="w-full max-w-screen-xl mx-auto px-[8%] md:px-[12%] xl:px-[40px] flex flex-col justify-center items-center">
          <h2 className="text-3xl font-black mb-8" style={{ fontFamily: "Merriweather, serif" }}>Find ME ON</h2>
          <div className="relative flex gap-3">
            <a href="https://github.com/kanokwan-st" target='_blank' className='z-10'>
              <img src="/images/github.png" alt="" className="h-14" />
            </a>
            <a href="https://linkedin.com/in/kanokwan-st" target="_blank" className='z-10'>
              <img src="/images/linkedin-findme.png" alt="" className="h-14" />
            </a>
            <a href="mailto:kanokwan.stae@gmail.com" target="_blank" className='z-10'>
              <img src="/images/mail-findme.png" alt="" className="h-14" />
            </a>
            {/* Cat letter */}
            <div className='absolute -bottom-16 right-32 z-0'>
              <DotLottieReact
                src="https://lottie.host/7937b2a7-2197-45d3-85cc-b92befebdef1/SeuZnhqvak.lottie"
                loop
                autoplay
                style={{width: '450px'}}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
