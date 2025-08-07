"use client";
import React from "react";
import * as ReactGoogleMaps from "@/libraries/react-google-maps";

const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [center] = useState({ lat: 37.7749, lng: -122.4194 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const testimonials = [
    {
      quote:
        "GET AI transformed our marketing with stunning video content that converted 3x better than our previous campaigns.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      image:
        "https://ucarecdn.com/e33b2450-5556-4e34-a4c9-360be1469a7e/-/format/auto/",
    },
    {
      quote:
        "The AI-generated videos look so professional, our clients can't believe the quality and turnaround time.",
      author: "Michael Chen",
      role: "Creative Director",
      image:
        "https://ucarecdn.com/b3dc42e6-26b6-4dc7-8662-bfa840c9f18d/-/format/auto/",
    },
    {
      quote:
        "From concept to final video in days, not weeks. GET AI revolutionized our content production workflow.",
      author: "Emily Rodriguez",
      role: "Brand Manager",
      image:
        "https://ucarecdn.com/53a958f8-23c4-49be-9834-f61eaafb7dd6/-/format/auto/",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#090402] font-inter">
      <nav className="bg-[#090402] text-[#F5F5F5] p-4 fixed w-full z-50 border-b border-[#5C5C5C]">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#home"
            className="text-xl font-space-grotesk hover:text-[#1e40af] transition-colors"
          >
            GET AI
          </a>
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className={`hover:text-[#1e40af] transition-colors ${
                activeSection === "home" ? "text-[#1e40af]" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className={`hover:text-[#1e40af] transition-colors ${
                activeSection === "how-it-works" ? "text-[#1e40af]" : ""
              }`}
            >
              How it Works
            </a>
            <a
              href="#services"
              className={`hover:text-[#1e40af] transition-colors ${
                activeSection === "services" ? "text-[#1e40af]" : ""
              }`}
            >
              Services
            </a>
            <a
              href="#about"
              className={`hover:text-[#1e40af] transition-colors ${
                activeSection === "about" ? "text-[#1e40af]" : ""
              }`}
            >
              About
            </a>
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#1e40af]"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#090402] border-b border-[#5C5C5C] p-4">
            <a
              href="#home"
              className={`block py-2 hover:text-[#1e40af] transition-colors ${
                activeSection === "home" ? "text-[#1e40af]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className={`block py-2 hover:text-[#1e40af] transition-colors ${
                activeSection === "how-it-works" ? "text-[#1e40af]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#services"
              className={`block py-2 hover:text-[#1e40af] transition-colors ${
                activeSection === "services" ? "text-[#1e40af]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className={`block py-2 hover:text-[#1e40af] transition-colors ${
                activeSection === "about" ? "text-[#1e40af]" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </div>
        )}
      </nav>
      <section
        id="home"
        className="h-[900px] relative flex items-center bg-[#090402]"
      >
        <div className="container mx-auto text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-8xl font-space-grotesk mb-8 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text leading-tight">
            Video Gen On-Demand
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-[#A39F9D] font-space-grotesk">
            Studio-Quality Videos for Your Business
          </p>
          <a
            href="https://cal.com/getaisam/15min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1e40af] text-[#F5F5F5] px-10 py-4 rounded-full hover:bg-[#1e3a8a] transition-colors inline-block text-xl font-semibold"
          >
            Book a Call
          </a>
        </div>
      </section>

      {/* Client Logos Scrolling Section */}
      <section className="py-12 px-4 bg-[#090402] overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll">
            <div className="flex space-x-16 min-w-max">
              <img
                src="https://i.ibb.co/2YkJKpXH/baixados-1.jpg"
                alt="Traffic Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/JFmpK1jP/baixados-1.png"
                alt="LogicHoop AI Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/90wF4dw/baixados-2.png"
                alt="Whitmore Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/Cp6Fw1cV/baixados-3.png"
                alt="Flame Nation Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/XxrPc82F/baixados-4.png"
                alt="Clovis Bray Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/7tPMTzWv/baixados-6.png"
                alt="Blume Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              {/* Duplicate set for seamless loop */}
              <img
                src="https://i.ibb.co/2YkJKpXH/baixados-1.jpg"
                alt="Traffic Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/JFmpK1jP/baixados-1.png"
                alt="LogicHoop AI Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/90wF4dw/baixados-2.png"
                alt="Whitmore Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/Cp6Fw1cV/baixados-3.png"
                alt="Flame Nation Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/XxrPc82F/baixados-4.png"
                alt="Clovis Bray Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="https://i.ibb.co/7tPMTzWv/baixados-6.png"
                alt="Blume Logo"
                className="h-16 w-auto opacity-60 filter grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Creative Ad Samples Section */}
      <section className="py-20 px-4 bg-[#090402]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-space-grotesk text-center mb-16 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            Creative Ad Samples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <a
                href="https://youtu.be/TN9MSrBJAMQ"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video rounded-lg mb-4 overflow-hidden relative group cursor-pointer">
                  <img
                    src="https://img.youtube.com/vi/TN9MSrBJAMQ/maxresdefault.jpg"
                    alt="Hoopscope AI Video | Creative AD Spec"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                    <i className="fas fa-play text-4xl text-[#F5F5F5]"></i>
                  </div>
                </div>
              </a>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-2">
                Hoopscope AI Video | Creative AD Spec
              </h3>
            </div>
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <a
                href="https://www.youtube.com/watch?v=pZEjhpKqtJ0"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video rounded-lg mb-4 overflow-hidden relative group cursor-pointer">
                  <img
                    src="https://img.youtube.com/vi/pZEjhpKqtJ0/maxresdefault.jpg"
                    alt="Flame Nation | AI Video Gen | Ad SPEC"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                    <i className="fas fa-play text-4xl text-[#F5F5F5]"></i>
                  </div>
                </div>
              </a>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-2">
                Flame Nation | AI Video Gen | Ad SPEC
              </h3>
            </div>
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <a
                href="https://www.youtube.com/watch?v=87CM8zhDzAg"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video rounded-lg mb-4 overflow-hidden relative group cursor-pointer">
                  <img
                    src="https://img.youtube.com/vi/87CM8zhDzAg/maxresdefault.jpg"
                    alt="Super Gramps: The WILD AI Commercial!"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-20 transition-all">
                    <i className="fas fa-play text-4xl text-[#F5F5F5]"></i>
                  </div>
                </div>
              </a>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-2">
                Super Gramps: The WILD AI Commercial!
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 bg-[#080301]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-space-grotesk text-center mb-16 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            How it Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-lightbulb text-3xl text-[#F5F5F5]"></i>
              </div>
              <h3 className="text-2xl font-space-grotesk text-[#F5F5F5] mb-4">
                Share Your Vision
              </h3>
              <p className="text-[#A39F9D]">
                Share your project brief or vision with us.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-handshake text-3xl text-[#F5F5F5]"></i>
              </div>
              <h3 className="text-2xl font-space-grotesk text-[#F5F5F5] mb-4">
                Collaborate
              </h3>
              <p className="text-[#A39F9D]">
                Collaborate on style, script, and creative direction.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-video text-3xl text-[#F5F5F5]"></i>
              </div>
              <h3 className="text-2xl font-space-grotesk text-[#F5F5F5] mb-4">
                Receive Your Video
              </h3>
              <p className="text-[#A39F9D]">
                Receive your polished AI-generated video ready for use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 bg-[#090402]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-space-grotesk text-center mb-16 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-palette text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Creativity
              </h3>
              <p className="text-[#A39F9D]">
                Innovative video concepts and styles that elevate your brand and
                bring your vision to life.
              </p>
            </div>
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-users text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Collaboration
              </h3>
              <p className="text-[#A39F9D]">
                Open, seamless communication ensuring your ideas guide every
                step of production.
              </p>
            </div>
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-crosshairs text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Precision
              </h3>
              <p className="text-[#A39F9D]">
                Studio-level quality with meticulous attention to detail—no
                compromise on excellence.
              </p>
            </div>
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-bolt text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Efficiency
              </h3>
              <p className="text-[#A39F9D]">
                Smart, streamlined workflows delivering your videos on time
                without cutting corners.
              </p>
            </div>
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-shield-alt text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Reliability
              </h3>
              <p className="text-[#A39F9D]">
                Professional video production that's straightforward,
                dependable, and budget-conscious.
              </p>
            </div>
            <div className="bg-[#080301] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-chart-line text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Impact
              </h3>
              <p className="text-[#A39F9D]">
                Videos crafted to engage, inspire, and drive measurable results
                for your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-[#090402]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-space-grotesk text-center mb-16 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            Client Success Stories
          </h2>
          <div className="relative h-[400px] overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                  currentTestimonial === index
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="relative w-full h-full bg-[#080301] rounded-lg border border-[#5C5C5C]">
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-center">
                    <p className="text-2xl text-[#F5F5F5] mb-6 font-space-grotesk">
                      "{testimonial.quote}"
                    </p>
                    <h3 className="text-xl text-[#1e40af] font-bold mb-2">
                      {testimonial.author}
                    </h3>
                    <p className="text-[#A39F9D]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTestimonial === index
                      ? "bg-[#1e40af]"
                      : "bg-[#5C5C5C]"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Video Services Section */}
      <section id="services" className="py-20 px-4 bg-[#080301]">
        <div className="container mx-auto">
          <h2 className="text-5xl font-space-grotesk text-center mb-8 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            AI Video Services
          </h2>
          <p className="text-center text-xl text-[#A39F9D] mb-16">
            Fast, affordable, studio quality videos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#090402] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-bullhorn text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Strategic Ad Campaigns
              </h3>
              <p className="text-[#A39F9D]">
                Crafting high-converting video advertisements optimized for
                diverse platforms and audience demographics.
              </p>
            </div>
            <div className="bg-[#090402] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-play-circle text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Dynamic Explainer Content
              </h3>
              <p className="text-[#A39F9D]">
                Simplifying complex ideas and services into clear, engaging, and
                digestible animated or live-action explainers.
              </p>
            </div>
            <div className="bg-[#090402] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-user-cog text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Personalized Media Generation
              </h3>
              <p className="text-[#A39F9D]">
                Leveraging AI to create individualized video messages and
                campaigns, enhancing customer engagement and loyalty at scale.
              </p>
            </div>
            <div className="bg-[#090402] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-share-alt text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Scalable Social Media Videos
              </h3>
              <p className="text-[#A39F9D]">
                Producing a consistent flow of short, captivating video content
                for social media, ensuring continuous brand visibility.
              </p>
            </div>
            <div className="bg-[#090402] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-building text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Enterprise Video Solutions
              </h3>
              <p className="text-[#A39F9D]">
                Developing professional internal and external corporate videos,
                from training modules to detailed investor presentations.
              </p>
            </div>
            <div className="bg-[#090402] p-6 rounded-lg border border-[#5C5C5C]">
              <i className="fas fa-vr-cardboard text-3xl text-[#1e40af] mb-4"></i>
              <h3 className="text-xl font-space-grotesk text-[#F5F5F5] mb-3">
                Interactive & Immersive Experiences
              </h3>
              <p className="text-[#A39F9D]">
                Innovating with cutting-edge interactive video experiences that
                engage viewers deeply and capture valuable insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#090402]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-space-grotesk mb-8 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            Get your business seen today.
          </h2>
          <a
            href="https://cal.com/getaisam/15min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1e40af] text-[#F5F5F5] px-12 py-4 rounded-full hover:bg-[#1e3a8a] transition-colors text-xl inline-block font-semibold"
          >
            Book a Call
          </a>
        </div>
      </section>

      <section id="about" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-6xl font-space-grotesk text-center mb-12 text-[#FFFFFF]"></h2>
          <div className="flex justify-center">
            <div className="flex h-[300px] gap-4 w-full">
              <img
                src="https://i.ibb.co/xtXT09WL/Feqe-Cn-S-md.jpg"
                alt="Professional team member"
                className="rounded-lg border border-[#5C5C5C] w-1/2 object-cover"
              />
              <img
                src="https://i.ibb.co/7dqckD1F/Feqeo-P9-md.jpg"
                alt="Professional team member"
                className="rounded-lg border border-[#5C5C5C] w-1/2 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#090402] text-[#F5F5F5] py-8 border-t border-[#5C5C5C]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-space-grotesk mb-4 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
              Contact Information
            </h3>
            <p className="text-[#A39F9D] mb-6">
              <i className="fas fa-envelope mr-2 text-[#1e40af]"></i>
              hello@getai.uno
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="#"
                className="text-[#A39F9D] hover:text-[#1e40af] transition-colors"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-[#A39F9D] hover:text-[#1e40af] transition-colors"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-[#A39F9D] hover:text-[#1e40af] transition-colors"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
            <div className="pt-8 border-t border-[#5C5C5C]">
              <p className="text-[#A39F9D]">
                © 2025 GET AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

<style jsx global>{`
  .transform-gpu {
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 20s linear infinite;
  }
`}</style>;

export default MainComponent;