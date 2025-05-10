import Link from "next/link"

import { HeroSection } from "@/components/hero-section"
import { Navbar } from "@/components/navbar"
import { ProjectCard } from "@/components/project-card"
import { SectionHeading } from "@/components/section-heading"
import { SkillCard } from "@/components/skill-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />

      {/* Hero Section with Three.js Animation */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="About Me" subtitle="Get to know me better" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-slate-700 mb-6">
              Assalamu Alaikum 👋, I'm a passionate frontend developer from Pakistan specializing in creating responsive
              and user-friendly web applications using modern technologies.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              With expertise in the MERN stack, I focus on building seamless user experiences that combine aesthetic
              design with efficient functionality. I'm currently mastering JavaScript to level up my front-end
              development skills.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button asChild className="bg-slate-800 hover:bg-slate-700">
                <Link href="#contact">Contact Me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/resume.pdf" target="_blank">
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Skills & Expertise" subtitle="What I bring to the table" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SkillCard
              title="Frontend Development"
              skills={[
                "React.js",
                "Next.js",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind CSS",
                "Material UI",
                "Bootstrap",
              ]}
              icon="Code"
            />
            <SkillCard
              title="Backend Development"
              skills={["Node.js", "Express.js", "MongoDB", "Firebase", "RESTful APIs", "WebSockets"]}
              icon="Database"
            />
            <SkillCard
              title="Tools & Technologies"
              skills={["Git & GitHub", "VS Code", "Postman", "Google Maps API", "JWT", "Cloudinary", "Vercel"]}
              icon="Wrench"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="max-w-3xl mx-auto mt-12">
            <Card className="p-6 border-none shadow-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Software Engineering Intern</h3>
                  <p className="text-slate-600">Saylani Tech Ltd</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Feb 2025 – Present
                </div>
              </div>
              <p className="text-slate-700">
                As a Software Engineering Intern, I contribute to real-time MERN stack projects by handling architecture
                planning, framework selection, database design, and code structuring. My core focus includes:
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li className="flex items-start">
                  <span className="mr-2 text-slate-900">•</span>
                  Development of custom software solutions, websites, and mobile applications
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-900">•</span>
                  Conducting technical research and implementing best practices
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-900">•</span>
                  Managing documentation and ensuring consistent reporting
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-900">•</span>
                  Implementing version control throughout the project lifecycle
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section id="education" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Education & Certifications" subtitle="My academic background" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Education</h3>
              <Card className="p-6 border-none shadow-lg mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Saylani Mass IT Training (SMIT)</h4>
                    <p className="text-slate-600">Web and Mobile App Development (MERN - Stack)</p>
                  </div>
                  <div className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium whitespace-nowrap">
                    NOV 2023 - DEC 2024
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-none shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Govt Degree College 7/D North Karachi</h4>
                    <p className="text-slate-600">Intermediate (Engineering)</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Certifications</h3>
              <Card className="p-6 border-none shadow-lg mb-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Cisco CyberOps Associate</h4>
                    <p className="text-slate-600">Jawan Pakistan Institute</p>
                  </div>
                  <div className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium whitespace-nowrap">
                    15 Apr 2024
                  </div>
                </div>
                <p className="text-slate-700 mt-2">
                  <span className="font-medium">Instructor:</span> Sir Muhammad Ali Mughal
                </p>
                <p className="text-slate-700 mt-1">
                  Understanding of cybersecurity operations, including monitoring, incident response, and security
                  principles
                </p>
              </Card>
              <Card className="p-6 border-none shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Cisco IT Essentials: PC Hardware and Software</h4>
                    <p className="text-slate-600">Jawan Pakistan Institute</p>
                  </div>
                  <div className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium whitespace-nowrap">
                    24 May 2023
                  </div>
                </div>
                <p className="text-slate-700 mt-2">
                  <span className="font-medium">Instructor:</span> Sir Muhammad Ali Mughal
                </p>
                <p className="text-slate-700 mt-1">
                  Knowledge of computer hardware and software, troubleshooting, and basic networking concepts
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Featured Projects" subtitle="My recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ProjectCard
              title="SMIT Student Portal – Learning Management System"
              description="Working as a front-end developer on the official SMIT LMS, which is actively in use. Responsible for designing user interfaces and integrating APIs to support various functionalities for students, teachers, and administrators."
              techStack={["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]}
              image="/placeholder.svg?height=400&width=600"
            />
            <ProjectCard
              title="Ride Sharing Application"
              description="Built a full-featured ride-sharing application with real-time location tracking, ride suggestions, Google Maps API integration, and Socket.IO for communication between users and drivers. Includes an admin panel for managing users, rides, and earnings."
              techStack={["React Native", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Google Maps API"]}
              image="/placeholder.svg?height=400&width=600"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Get In Touch"
            subtitle="Let's work together"
            className="text-white"
            subtitleClassName="text-slate-300"
          />

          <div className="max-w-3xl mx-auto mt-12">
            <Card className="p-8 border-none shadow-lg bg-white text-slate-900">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <p className="text-slate-700 mb-6">
                    Feel free to reach out for collaborations or just a friendly chat. I'm open to discussing new
                    projects, creative ideas, or opportunities to be part of your vision.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-slate-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Phone</p>
                        <p className="font-medium">03000000000</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-slate-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Email</p>
                        <p className="font-medium">bilalahmed804@gmail.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-slate-700"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">Location</p>
                        <p className="font-medium">Pakistan</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-slate-800 hover:bg-slate-700">Send Message</Button>
                  </form>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-400">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© {new Date().getFullYear()} Bilal Ahmed. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/in/bilal-ahmed-823897201/"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <Link
                href="https://github.com/bilalahmed804"
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
