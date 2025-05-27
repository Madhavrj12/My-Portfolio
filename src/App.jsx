import { useCallback, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { TypeAnimation } from 'react-type-animation';
import "./App.css";
import SkillsMarquee from "./SkillsMarquee";


const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap"];
const backendSkills = ["Node.js", "Express", "MongoDB", "SQL"];
const toolsSkills = ["Git/GitHub", "Socket.io", "REST APIs", "MVC Architecture","VS Code"];

const NAVBAR_HEIGHT = 80; 

function App() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (index) => {
    if (expandedProject === index) {
      setExpandedProject(null);
    } else {
      setExpandedProject(index);
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    if (section) {
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      let y;
      if (sectionHeight < windowHeight) {

        const yOffset = -windowHeight / 2 + sectionHeight / 2;
        y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      } else {
 
        y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      }
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#000000" }
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: { enable: true, area: 800 }
            },
            color: { value: "#646cff" },
            links: {
              color: "#646cff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1.5
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "bounce" }
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } }
          },
          detectRetina: true
        }}
      />
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">V MADHAV</div>
          <ul className="nav-links">
            <li><a href="#home" onClick={e => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#about" onClick={e => handleNavClick(e, 'about')}>About</a></li>
            <li><a href="#projects" onClick={e => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" onClick={e => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#contact" onClick={e => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="content">
        <section id="home" className="section">
          <div className="hero">
            <h1>
              <TypeAnimation
                sequence={[
                  'Welcome to my portfolio',
                  1000,
                  'Hi, I\'m V MADHAV',
                  
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
               
              />
            </h1>
            <p className="subtitle">
              <TypeAnimation
                sequence={[
                  'Full Stack Web Developer',
                  1000,
                  'MERN Stack Developer',
                  1000,
                  'Java Engineer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn primary" onClick={e=>handleNavClick(e,'projects')}>View My Work</a>
              <a href="#contact" className="btn secondary" onClick={e=>handleNavClick(e,'contact')}>Contact Me</a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>I am a results-driven Full Stack Web Developer with hands-on experience in designing and building scalable web applications using the MERN stack. I possess strong skills in data structures & algorithms (Java), real-time communication systems, and RESTful APIs.</p>
              <p>I have a proven ability to deliver high-quality, responsive projects in team-based environments, and I am passionate about coding education platforms and collaborative tools.</p>
              <div className="education">
                <h3>Education</h3>
                <ul>
                  <li>Bachelor of Technology, Mohan Babu University (2020 - Present)</li>
                  <li>Intermediate, Narayana Junior College (2020 - 2022)</li>
                  <li>Secondary School Certificate, Camford English Medium High School (2019 - 2020)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>My Projects</h2>
          <div className="projects-container">
            <div className="projects-grid">
              <div 
                className={`project-card ${expandedProject === 0 ? 'expanded' : ''}`} 
                onClick={() => toggleProject(0)}
              >
                <div className="project-header">
                  <h3>Learning Management System for Coding</h3>
                  <span className="expand-icon">{expandedProject === 0 ? '−' : '+'}</span>
                </div>
                {expandedProject === 0 && (
                  <div className="project-details">
                    <p>Tech Stack: React.js, Node.js, Express.js, MongoDB, Socket.io, Judge0 API, Monaco Editor</p>
                    <ul>
                      <li>Developed a full-stack LMS using MERN stack for coding education</li>
                      <li>Integrated real-time collaborative coding environment</li>
                      <li>Implemented authentication and role-based access controls</li>
                      <li>Designed responsive interface for all devices</li>
                    </ul>
                    <div className="project-links">
                      <a href="#" className="btn small">View Demo</a>
                      <a href="#" className="btn small">Source Code</a>
                    </div>
                  </div>
                )}
              </div>
              <div 
                className={`project-card ${expandedProject === 1 ? 'expanded' : ''}`} 
                onClick={() => toggleProject(1)}
              >
                <div className="project-header">
                  <h3>Real-Time Chat Application</h3>
                  <span className="expand-icon">{expandedProject === 1 ? '−' : '+'}</span>
                </div>
                {expandedProject === 1 && (
                  <div className="project-details">
                    <p>Tech Stack: React.js, Node.js, Express.js, MongoDB, Socket.io</p>
                    <ul>
                      <li>Developed real-time chat with group and private messaging</li>
                      <li>Integrated Socket.io for instant communication</li>
                      <li>Implemented secure authentication and privacy controls</li>
                      <li>Created responsive front-end components</li>
                    </ul>
                    <div className="project-links">
                      <a href="#" className="btn small">View Demo</a>
                      <a href="#" className="btn small">Source Code</a>
                    </div>
                  </div>
                )}
              </div>
              <div 
                className={`project-card ${expandedProject === 2 ? 'expanded' : ''}`} 
                onClick={() => toggleProject(2)}
              >
                <div className="project-header">
                  <h3>Hackathon Website</h3>
                  <span className="expand-icon">{expandedProject === 2 ? '−' : '+'}</span>
                </div>
                {expandedProject === 2 && (
                  <div className="project-details">
                    <p>Tech Stack: React.js, Node.js, Express.js, MongoDB, Socket.io</p>
                    <ul>
                      <li>Developed event management platform for hackathons</li>
                      <li>Implemented user authentication and role-based access</li>
                      <li>Created MVC architecture with efficient error handling</li>
                      <li>Integrated external developer resources</li>
                    </ul>
                    <div className="project-links">
                      <a href="#" className="btn small">View Demo</a>
                      <a href="#" className="btn small">Source Code</a>
                    </div>
                  </div>
                )}
              </div>
              <div 
                className={`project-card ${expandedProject === 4 ? 'expanded' : ''}`} 
                onClick={() => toggleProject(4)}
              >
                <div className="project-header">
                  <h3>Online Movie Tickets Bookings 2024</h3>
                  <span className="expand-icon">{expandedProject === 4 ? '−' : '+'}</span>
                </div>
                {expandedProject === 4 && (
                  <div className="project-details">
                    <p>Tech Stack: HTML, CSS, Bootstrap, Node.js, Express.js, MongoDB</p>
                    <ul>
                      <li>Developed a full-stack web application for online movie ticket booking</li>
                      <li>Implemented user authentication, seat selection, and payment integration</li>
                      <li>Designed a responsive UI for a seamless booking experience</li>
                      <li>Optimized database queries for efficient ticket management</li>
                    </ul>
                    <div className="project-links">
                      <a href="#" className="btn small">View Demo</a>
                      <a href="#" className="btn small">Source Code</a>
                    </div>
                  </div>
                )}
              </div>
              <div 
                className={`project-card ${expandedProject === 5 ? 'expanded' : ''}`} 
                onClick={() => toggleProject(5)}
              >
                <div className="project-header">
                <h3>WonderLust – Travel Accommodation Discovery</h3>
                <span className="expand-icon">{expandedProject === 5 ? '−' : '+'}</span>
                </div>
                {expandedProject === 5 && (
                  <div className="project-details">
                    <p>Tech Stack: HTML, CSS, Node.js, Express.js, MongoDB, Multer, Cloudinary</p>
                    <ul>
                      <li>Developed a full-stack accommodation discovery platform inspired by Airbnb</li>
                      <li>Implemented image upload functionality using Multer for property listings</li>
                      <li>Built backend using Node.js, Express.js, and MongoDB for listing and user data</li>
                      <li>Designed responsive UI with category-wise filtering for different types of stays</li>
                      <li>Enabled dynamic rendering of listings by categories like apartments, villas, and shared spaces</li>
                    </ul>
                   <div className="project-links">
                     <a href="https://wanderlust-3-t15z.onrender.com" className="btn small">View Demo</a>
                    <a href="https://github.com/Madhavrj12/wanderlust" className="btn small">Source Code</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <SkillsMarquee skills={frontendSkills} />
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <SkillsMarquee skills={backendSkills} />
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <SkillsMarquee skills={toolsSkills} />
            </div>
          </div>
          <div className="achievements-certificates">
            <div className="achievements">
              <h3>Key Achievements</h3>
              <ul>
                <li>Solved 120+ problems on LeetCode</li>
                <li>Participated in multiple hackathons and tech fests</li>
              </ul>
            </div>
            <div className="certificates">
              <h3>Certificates</h3>
              <ul>
                <li>MERN Full Stack Development by Apna College</li>
                <li>Programming in Java by Apna College</li>
                <li>Data Structures and Algorithms by Apna College</li>
                <li>Pearson Mepro Level 10 Expert in English</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact Me</h2>
          <div className="contact-content">
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn primary">Send Message</button>
            </form>
            <div className="contact-info">
              <p>Email: rjmadhav1201@gmail.com</p>
              <p>Location: Chittoor, India</p>
              <div className="social-links">
                <a href="https://linkedin.com/in/madhav-v-3765352a5" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
