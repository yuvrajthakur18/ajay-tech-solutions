"use client";

import React, { useState, useEffect } from "react";
import {
  Code2,
  Users,
  BookOpen,
  Trophy,
  Star,
  Play,
  CheckCircle,
  Calendar,
  Clock,
  IndianRupee,
  Phone,
  Mail,
  ExternalLink,
  ChevronRight,
  Target,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const [activePhase, setActivePhase] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(0);

  const phases = [
    {
      id: 1,
      title: "Core Foundation",
      subtitle: "Core Java + MySQL + JDBC",
      duration: "65 Working Days",
      price: "₹4000",
      startDate: "07 July 2025",
      time: "09:00 PM - 10:30 PM",
      features: [
        "700+ scenario-based coding problems",
        "1000+ live-discussed interview questions",
        "Weekly assessments & progress tracking",
        "MySQL mastery with 200+ queries",
        "Layered Architecture project with JDBC",
        "Resume-ready portfolio project",
      ],
      highlight: "First 10 Days FREE Trial",
    },
    {
      id: 2,
      title: "Backend Mastery",
      subtitle: "Spring Boot + REST APIs + Advanced Java",
      duration: "Coming Soon",
      price: "TBA",
      features: [
        "Hibernate + JPA mastery",
        "Servlet & JSP fundamentals",
        "Spring Core & Spring Boot",
        "REST API development",
        "Postman testing & documentation",
        "Advanced backend project",
      ],
    },
    {
      id: 3,
      title: "Frontend + AI",
      subtitle: "React/Angular + AI Integration",
      duration: "Coming Soon",
      price: "TBA",
      features: [
        "HTML5, CSS3, JavaScript ES6+",
        "React/Angular framework mastery",
        "Bootstrap responsive design",
        "AI chatbot integration",
        "Full-stack project deployment",
        "Industry-ready portfolio",
      ],
    },
  ];

  const batchShowcase = [
    {
      id: 1,
      company: "Capgemini",
      // image:
      // "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      image: "/686d1613-efb9-4b09-8d82-157bda14bf60.jpeg",
      title: "Enterprise Java Training",
      description:
        "Delivered comprehensive Spring Boot and microservices training to 50+ developers at Capgemini's Pune office.",
      participants: "50+ Developers",
      duration: "3 Months",
      technologies: ["Spring Boot", "Microservices", "REST APIs"],
    },
    {
      id: 2,
      company: "Oracle",
      // image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      image: "/3eb67ef3-7079-43c6-bdd1-13290a593185.jpeg",
      title: "Advanced Java & Database Training",
      description:
        "Conducted intensive training on Oracle Database integration with Java applications for senior developers.",
      participants: "30+ Senior Developers",
      duration: "2 Months",
      technologies: ["Oracle DB", "JDBC", "JPA", "Hibernate"],
    },
    {
      id: 3,
      company: "LTI-Mindtree",
      // image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      image: "/8e525670-4a9c-4613-aca8-b2797632aa7b.jpeg",
      title: "Full Stack Development Bootcamp",
      description:
        "Led a comprehensive full-stack training program covering frontend and backend technologies for new hires.",
      participants: "80+ New Hires",
      duration: "4 Months",
      technologies: ["React", "Spring Boot", "MySQL", "Git"],
    },
    {
      id: 4,
      company: "KPIT",
      // image:
      // "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      image: "/438b996d-1698-40b6-b52d-ee3f0ad0d222.jpeg",
      title: "Automotive Software Training",
      description:
        "Specialized training on Java applications for automotive industry, focusing on embedded systems integration.",
      participants: "40+ Engineers",
      duration: "6 Weeks",
      technologies: ["Core Java", "Embedded Systems", "MQTT"],
    },
    {
      id: 5,
      company: "RNTBCI",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      title: "Banking Software Development",
      description:
        "Delivered specialized training on secure Java applications for banking and financial services sector.",
      participants: "25+ Developers",
      duration: "8 Weeks",
      technologies: ["Spring Security", "Banking APIs", "Encryption"],
    },
  ];
  const achievements = [
    { number: "180+", label: "Coding Problems", icon: Code2 },
    { number: "400+", label: "Interview Questions", icon: BookOpen },
    { number: "80+", label: "Topics Covered", icon: Target },
    { number: "11+", label: "Years Experience", icon: Award },
  ];

  const companies = ["Capgemini", "Oracle", "LTI-Mindtree", "KPIT", "RNTBCI"];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % batchShowcase.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + batchShowcase.length) % batchShowcase.length
    );
  };

  // Auto-advance slides
  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">ATS</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#courses"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Courses
              </a>
              <a
                href="#phases"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Phases
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://forms.gle/3GPRm3Y5sKbYfuLc6", "_blank");
              }}
            >
              Enroll Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                  🚀 Transform Your Coding Journey
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Master Full Stack
                  <span className="text-blue-600 block">Development</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  "एक हजार मील सफलता की यात्रा की शुरुआत भी एक कदम से ही होती
                  है।"
                  <br />
                  <em className="text-blue-600 font-medium">
                    Let's bring change... Let's guide youth....
                  </em>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(
                      "https://forms.gle/3GPRm3Y5sKbYfuLc6",
                      "_blank"
                    );
                  }}
                >
                  Start Free Trial
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-full text-lg font-semibold"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white rounded-2xl shadow-sm border"
                  >
                    <achievement.icon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="bg-white rounded-2xl p-8 text-gray-900 transform -rotate-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src="/facebook_1611301217036_6758287139819467721.jpg"
                      alt="Ajay Singh Thakur"
                      className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                    />
                    <div>
                      <h3 className="text-xl font-bold">Ajay Singh Thakur</h3>
                      <p className="text-blue-600 font-medium">
                        Corporate Trainer & Founder
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">
                        11+ Years Industry Experience
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">
                        Corporate Trainer at Top MNCs
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {companies.slice(0, 3).map((company, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {company}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🔥 What a Journey So Far! 🔥
            </h2>
            <p className="text-lg text-gray-600">
              Current batch progress and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">
                  19
                </CardTitle>
                <CardDescription>Classes Completed</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600">
                  180+
                </CardTitle>
                <CardDescription>Coding Problems Solved</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-600">
                  400+
                </CardTitle>
                <CardDescription>Interview Questions</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-700 mb-4">
              You're not just learning — you're evolving into an industry-ready
              developer.
            </p>
            <Button
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=oTDjjM1fl0M&list=PLbdNjM0mkvBRtWj8TvqtEmll6uk2getIx",
                  "_blank"
                )
              }
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Previous Sessions
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Training Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Corporate Training Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real training sessions delivered at top MNCs across India and
              internationally
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {batchShowcase.map((batch, index) => (
                  <div key={batch.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl">
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
                            {batch.company}
                          </Badge>
                          <h3 className="text-3xl font-bold text-gray-900">
                            {batch.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed">
                            {batch.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-white rounded-2xl p-4 shadow-sm border">
                            <Users className="h-6 w-6 text-blue-600 mb-2" />
                            <p className="font-semibold text-gray-900">
                              {batch.participants}
                            </p>
                            <p className="text-sm text-gray-600">Trained</p>
                          </div>
                          <div className="bg-white rounded-2xl p-4 shadow-sm border">
                            <Calendar className="h-6 w-6 text-green-600 mb-2" />
                            <p className="font-semibold text-gray-900">
                              {batch.duration}
                            </p>
                            <p className="text-sm text-gray-600">Duration</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="font-semibold text-gray-900">
                            Technologies Covered:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {batch.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="px-3 py-1"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-4 transform rotate-3 hover:rotate-1 transition-transform duration-300">
                          <img
                            src={batch.image}
                            alt={`${batch.company} Training Session`}
                            className="w-full h-80 object-cover rounded-2xl shadow-lg transform -rotate-3"
                          />
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 shadow-xl border">
                          <div className="flex items-center space-x-2">
                            <Trophy className="h-5 w-5 text-yellow-500" />
                            <span className="font-semibold text-sm">
                              Corporate Training
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-[45%] transform -translate-y-1/2  rounded-full p-2 shadow-lg hover:shadow-xl transition-all "
            >
              <ChevronRight className="h-6 w-6 text-gray-600 rotate-180" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-[45%] transform -translate-y-1/2 rounded-full p-2 shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {batchShowcase.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Phases */}
      <section id="phases" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Master the Complete Roadmap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basics to advanced - a comprehensive journey curated from
              real industry experience
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`relative transition-all duration-300 ${
                  phase.id === 1 ? "cursor-pointer" : "cursor-not-allowed"
                } h-full ${
                  activePhase === phase.id ? "scale-102" : "hover:scale-102"
                }`}
                onClick={() => {
                  if (phase.id === 1) setActivePhase(phase.id);
                }}
              >
                <Card
                  className={`overflow-hidden border-2 hover:shadow-xl transition-all duration-300 h-full flex flex-col ${
                    activePhase === phase.id
                      ? "border-blue-500 shadow-2xl bg-gradient-to-br from-blue-50 to-white"
                      : "border-gray-200 hover:border-blue-100 bg-white"
                  }`}
                >
                  {/* Header Section */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 relative">
                    {phase.id === 1 && (
                      <div className="absolute top-4 right-4 py-1">
                        <Badge className="bg-blue-600 text-white shadow-lg">
                          🔥 Active Now
                        </Badge>
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-600 px-3 "
                        >
                          Phase {phase.id}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {phase.subtitle}
                        </p>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{phase.duration}</span>
                          </div>
                          {phase.price && (
                            <div className="flex items-center space-x-2">
                              <IndianRupee className="h-5 w-5 text-blue-600" />
                              <span className="text-xl font-bold text-blue-600">
                                {phase.price.replace("₹", "")}
                              </span>
                            </div>
                          )}
                        </div>
                        {phase.startDate && (
                          <div className="text-xs text-gray-600">
                            <p>Starts: {phase.startDate}</p>
                            <p>{phase.time}</p>
                          </div>
                        )}
                      </div>

                      {/* {phase.highlight && (
                        <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
                          <p className="font-semibold text-sm">
                            {phase.highlight}
                          </p>
                        </div>
                      )} */}
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-6 flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">
                        What You'll Master
                      </h4>
                      <div className="space-y-3">
                        {phase.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="mt-auto">
                      {phase.id === 1 ? (
                        <div className="space-y-3">
                          <Button
                            size="lg"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                "https://forms.gle/3GPRm3Y5sKbYfuLc6",
                                "_blank"
                              );
                            }}
                          >
                            Start Free Trial
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="lg"
                            className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-xl font-semibold"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(
                                "https://www.youtube.com/watch?v=oTDjjM1fl0M&list=PLbdNjM0mkvBRtWj8TvqtEmll6uk2getIx",
                                "_blank"
                              );
                            }}
                          >
                            <Play className="mr-2 h-4 w-4" />
                            Watch Demo
                          </Button>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl p-4 text-center">
                          <p className="text-gray-600 font-medium mb-1">
                            Coming Soon
                          </p>
                          <p className="text-xs text-gray-500">
                            Complete Phase 1 to unlock
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                🚀 Complete Learning Path
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Each phase builds upon the previous one, ensuring you develop a
                strong foundation before advancing to complex topics. Start your
                journey today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold"
                  onClick={() =>
                    window.open("https://forms.gle/3GPRm3Y5sKbYfuLc6", "_blank")
                  }
                >
                  Begin Your Journey
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold"
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/CJWfJRsp9kE0mUMTefcIRW?mode=ac_t",
                      "_blank"
                    )
                  }
                >
                  Ask Questions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Trainer */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Meet Your Mentor
                </h2>
                <h3 className="text-2xl font-semibold text-blue-600 mb-6">
                  Ajay Singh Thakur
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With 11+ years of experience as a Corporate Trainer, I've
                  delivered training in top companies and guided thousands of
                  students toward successful tech careers. My approach combines
                  real industry experience with practical, hands-on learning.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">
                  Corporate Training Experience
                </h4>
                <div className="flex flex-wrap gap-3">
                  {companies.map((company, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-4 py-2 text-sm"
                    >
                      {company}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-600">
                  Including international batches for working professionals
                  across various domains.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <TrendingUp className="h-8 w-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Industry Focused
                  </h4>
                  <p className="text-sm text-gray-600">
                    Real-world projects and placement-oriented training
                  </p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border">
                  <Users className="h-8 w-8 text-green-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Proven Results
                  </h4>
                  <p className="text-sm text-gray-600">
                    Thousands of successful placements in top IT companies
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-6 transform rotate-3">
                <img
                  src="/facebook_1611301217036_6758287139819467721.jpg"
                  alt="Ajay Singh Thakur - Corporate Trainer"
                  className="w-full h-98 object-cover rounded-2xl shadow-lg transform -rotate-3"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <p className="text-sm text-gray-600">From 500+ Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Technology Stack
            </h2>
            <p className="text-xl text-gray-600">
              Master industry-standard technologies and tools
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>HTML5 & CSS3</li>
                  <li>JavaScript ES6+</li>
                  <li>React/Angular</li>
                  <li>Bootstrap</li>
                  <li>TypeScript</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Core & Advanced Java</li>
                  <li>Spring Boot</li>
                  <li>Hibernate & JPA</li>
                  <li>REST APIs</li>
                  <li>Microservices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>MySQL & Oracle</li>
                  <li>MongoDB</li>
                  <li>JDBC</li>
                  <li>Query Optimization</li>
                  <li>Database Design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Tools & AI</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Git & GitHub</li>
                  <li>Postman</li>
                  <li>Eclipse & STS</li>
                  <li>AI Integration</li>
                  <li>Cloud Deployment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Features */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Coming Soon: Advanced Learning Platform
            </h2>
            <p className="text-xl text-gray-600">
              Enhanced features to accelerate your learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <Code2 className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Integrated Code Editor</CardTitle>
                <CardDescription>
                  Practice coding directly on our platform like LeetCode
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <Play className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Video Library</CardTitle>
                <CardDescription>
                  Access recorded sessions and concept explanations anytime
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-200">
              <CardHeader>
                <Target className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Daily Practice Problems</CardTitle>
                <CardDescription>
                  Day-wise coding questions with solutions and explanations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Registration */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-900 text-white px-6 py-2 text-sm font-semibold mb-6">
              🚀 Start Your Journey Today
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful developers who started their journey
              with us and landed their dream jobs at top tech companies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative z-10">
              <div>
                <h3 className="text-3xl font-bold mb-8 text-white">
                  Get Started Today
                </h3>
                <div className="space-y-6">
                  {/* WhatsApp / Call button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // open WhatsApp Web chat for +91 8982754701
                      window.open(
                        "https://wa.me/918982754701",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    aria-label="Open WhatsApp chat with 8982754701"
                    className="w-full flex items-center justify-start space-x-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-col justify-start">
                      <p className="font-semibold text-white text-start">
                        Call/WhatsApp
                      </p>
                      <p className="text-blue-200 text-lg font-medium text-start">
                        8982754701
                      </p>
                    </div>
                  </button>

                  {/* Email button (opens Gmail compose with To prefilled) */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      // open Gmail web compose with the recipient prefilled
                      const to = encodeURIComponent(
                        "Ajaytechsolutions01@gmail.com"
                      );
                      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}`;
                      window.open(gmailUrl, "_blank", "noopener,noreferrer");
                    }}
                    aria-label="Compose email to Ajaytechsolutions01@gmail.com"
                    className="w-full flex items-center justify-start space-x-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-col justify-start">
                      <p className="font-semibold text-white text-start">
                        Email
                      </p>
                      <p className="text-blue-200 text-lg text-start font-medium">
                        Ajaytechsolutions01@gmail.com
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-semibold text-white">
                  Join Our Community
                </h4>
                <div className="flex flex-col sm:flex-row gap-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() =>
                      window.open(
                        "https://chat.whatsapp.com/CJWfJRsp9kE0mUMTefcIRW?mode=ac_t",
                        "_blank"
                      )
                    }
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    WhatsApp Group
                  </Button>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@AjayTechSolutions01",
                        "_blank"
                      )
                    }
                  >
                    <Play className="mr-2 h-4 w-4" />
                    YouTube Channel
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 text-gray-900 shadow-2xl border border-white/20">
                <div className="text-center mb-8">
                  <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold mb-4">
                    Phase 1 Registration
                  </Badge>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Start Your Journey
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Join the next batch of successful developers
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border-2 border-blue-200">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="font-bold text-blue-800">
                        🎉 First 10 Days FREE!
                      </h4>
                    </div>
                    <p className="text-blue-700 font-medium">
                      Experience the quality before enrolling fully. No risk,
                      only learning!
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-blue-50 rounded-2xl p-4 text-center border">
                      <Calendar className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Start Date</p>
                      <p className="font-bold text-gray-900">07 July 2025</p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-4 text-center border">
                      <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-gray-900">65 Days</p>
                    </div>
                    <div className="bg-purple-50 rounded-2xl p-4 text-center border">
                      <Clock className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Investment</p>
                      <p className="font-bold text-gray-900">₹4000</p>
                      {/* <p className="text-sm text-gray-500">
                        9:00 - 10:30 PM (IST)
                      </p> */}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all"
                    onClick={() =>
                      window.open(
                        "https://forms.gle/3GPRm3Y5sKbYfuLc6",
                        "_blank"
                      )
                    }
                  >
                    Register Now - Start Free Trial
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Award className="h-4 w-4" />
                      <span>Certificate Included</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>Limited Seats</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">Ajay Tech Solutions</span>
              </div>
              <p className="text-gray-400 mb-4">
                Empowering the next generation of developers with
                industry-focused training and mentorship.
              </p>
              <p className="text-sm text-gray-500">
                "Fuel your passion. Code your future. Be a part of something
                amazing."
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About Trainer
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-white transition-colors"
                  >
                    Course Phases
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://forms.gle/3GPRm3Y5sKbYfuLc6"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Register Now
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>8982754701</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>Ajaytechsolutions01@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Ajay Tech Solutions. All rights reserved. | Transforming
              careers through quality education.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
