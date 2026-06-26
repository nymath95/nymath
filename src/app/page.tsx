"use client";

import { useState } from "react";
import InteractiveBackground from "@/components/InteractiveBackground";
import {
  MessageCircle, CheckCircle2, Star, BookOpen, Clock, Users, ArrowRight,
  MonitorPlay, ClipboardList, LineChart, Video, Globe, FileText, ShieldCheck, Gift,
  Layers, Shapes, Award, TrendingUp, User, Users2, School, GraduationCap, Calendar
} from "lucide-react";

export default function Home() {
  const WHATSAPP_NUMBER = "7804028258"; // Adjust this as needed
  const WHATSAPP_LINK = `https://wa.me/91${WHATSAPP_NUMBER}`;

  const [pricingCurrency, setPricingCurrency] = useState<"india" | "intl">("india");

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card border-b border-white/20 px-6 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            NYmath
          </div>
          <div className="hidden md:flex gap-8 text-foreground/80 font-medium">
            <a href="#levels" className="hover:text-primary transition-colors">Classes</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#batches" className="hover:text-primary transition-colors">Batches</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">WhatsApp now</span>
          </a>
        </div>
      </nav>

      <main className="flex-1 flex flex-col w-full relative">
        {/* Interactive Background */}
        <InteractiveBackground />

        {/* Hero Section */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-5xl mx-auto space-y-12 relative">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-bold text-primary mb-2 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Admissions open — new batches starting soon
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
                Maths tuition that actually makes <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">sense.</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed glass-card p-6 rounded-2xl">
                Online Maths classes for Class 3 to 12 — choose one-on-one attention or a small batch of up to 10 students. Built for learners in India and around the world.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-8 py-4 rounded-full font-bold transition-all text-lg shadow-xl shadow-foreground/10 hover:-translate-y-1"
                >
                  <Calendar size={22} />
                  Book a free demo class
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 glass-card hover:glass-card-hover text-[#25D366] px-8 py-4 rounded-full font-bold transition-all text-lg border border-[#25D366]/20"
                >
                  <MessageCircle size={22} />
                  WhatsApp now
                </a>
              </div>

              {/* Quick stats */}
              <div className="flex flex-wrap justify-center gap-10 md:gap-20 pt-12 border-t border-foreground/5 mt-12">
                {[
                  { label: "years teaching", value: "10+" },
                  { label: "students taught", value: "1200+" },
                  { label: "max batch size", value: "10" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl font-black text-foreground">{stat.value}</div>
                    <div className="text-sm font-bold text-foreground/60 mt-2 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* What you get notebook style */}
            <div className="max-w-xl mx-auto mt-16 glass-card p-8 rounded-3xl border-t-8 border-t-primary shadow-xl">
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-2 bg-primary/10 px-3 py-1 rounded-lg">
                <CheckCircle2 size={16} /> After every class
              </div>
              <h3 className="text-2xl font-bold mb-6">What you get</h3>
              <div className="space-y-4">
                {[
                  { icon: <Video size={20} className="text-secondary" />, text: "Recorded class video" },
                  { icon: <FileText size={20} className="text-secondary" />, text: "Practice worksheet (PDF)" },
                  { icon: <MessageCircle size={20} className="text-[#25D366]" />, text: "WhatsApp doubt-solving" },
                  { icon: <ClipboardList size={20} className="text-secondary" />, text: "Weekly test schedule" },
                  { icon: <LineChart size={20} className="text-secondary" />, text: "Monthly progress report" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 font-medium text-foreground/80">
                    <div className="bg-white p-2 rounded-lg shadow-sm">{item.icon}</div>
                    {item.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Levels Section */}
        <section id="levels" className="py-24 px-6 bg-foreground/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-primary font-bold tracking-wider uppercase mb-2">Classes covered</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Maths, Class 1 to 12</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto text-lg">CBSE, ICSE, IB and international curricula — structured for every level.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: <Layers size={32} />, cls: "Class 1–5", title: "Foundation", desc: "Building number sense" },
                { icon: <Shapes size={32} />, cls: "Class 6–8", title: "Middle school", desc: "Algebra & geometry basics" },
                { icon: <Award size={32} />, cls: "Class 9–10", title: "Board prep", desc: "CBSE / ICSE / IGCSE" },
                { icon: <TrendingUp size={32} />, cls: "Class 11–12", title: "Senior secondary", desc: "Calculus, Algebra II, IB/AP" },
              ].map((level, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-foreground/5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    {level.icon}
                  </div>
                  <div className="text-sm font-bold text-foreground/50 mb-1">{level.cls}</div>
                  <h3 className="text-xl font-bold mb-2">{level.title}</h3>
                  <p className="text-foreground/70 font-medium">{level.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-square rounded-full glass-card p-4 flex items-center justify-center shadow-2xl">
                {/* Decorative floating symbols */}
                <div className="absolute top-4 left-4 text-3xl text-primary font-serif">∑</div>
                <div className="absolute bottom-4 right-4 text-2xl text-secondary font-serif">π</div>
                <div className="absolute top-1/2 right-2 text-xl text-accent font-serif">√</div>

                <div className="w-full h-full rounded-full bg-foreground/5 flex items-center justify-center overflow-hidden border-4 border-white relative">
                  <User size={80} className="text-foreground/20" />
                  {/* Replace this div with an actual <Image> component when photo is available */}
                  <img src="/nitin-yadav.jpeg" alt="" />
                  {/* <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent flex flex-col items-center justify-end pb-8">
                    <p className="text-sm font-bold text-foreground/40 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm">Your photo here</p>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3 space-y-6">
              <div className="text-primary font-bold tracking-wider uppercase">About me</div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Hi, I'm your Maths teacher at NYmath.com</h2>
              <div className="text-lg text-foreground/70 space-y-4 leading-relaxed glass-card p-6 rounded-2xl">
                <p>I've spent 8 years teaching Maths to school students, helping over 300 learners build real confidence with numbers — not just memorise steps for an exam.</p>
                <p>Every student learns differently, so I shape each session around how they think, at a pace that actually works for them.</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <School size={18} className="text-primary" />, text: "B.Ed, Mathematics" },
                  { icon: <Clock size={18} className="text-primary" />, text: "8+ years experience" },
                  { icon: <GraduationCap size={18} className="text-primary" />, text: "CBSE, ICSE & IB expert" },
                  { icon: <Users size={18} className="text-primary" />, text: "300+ students taught" }
                ].map((cred, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl shadow-sm border border-foreground/5 font-medium">
                    {cred.icon} {cred.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Batches Section */}
        <section id="batches" className="py-24 px-6 bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-primary font-bold tracking-wider uppercase mb-2">Batch options</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Choose how you want to learn</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto text-lg">From fully personal attention to a small group setting — whatever fits your child best.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <User size={32} />, title: "One-on-one", desc: "Fully personalised pace and pacing, focused entirely on one student's needs.", featured: false },
                { icon: <Users2 size={32} />, title: "Small batch (2–5)", desc: "A few students learning together — peer motivation with still-close attention.", featured: true, badge: "Most popular" },
                { icon: <Users size={32} />, title: "Group batch (≤10)", desc: "Maximum 10 students per batch, so every learner is still seen and heard.", featured: false },
              ].map((batch, i) => (
                <div key={i} className={`relative p-8 rounded-3xl border ${batch.featured ? 'bg-primary text-white border-primary shadow-xl scale-105' : 'bg-white text-foreground border-foreground/10 shadow-sm glass-card-hover'}`}>
                  {batch.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white font-bold px-4 py-1 rounded-full text-sm shadow-md">
                      {batch.badge}
                    </div>
                  )}
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${batch.featured ? 'bg-white/20' : 'bg-primary/10 text-primary'}`}>
                    {batch.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{batch.title}</h3>
                  <p className={batch.featured ? 'text-white/80' : 'text-foreground/70'}>{batch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-primary font-bold tracking-wider uppercase mb-2">Why NYmath.com</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Not just a class, a complete system</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto text-lg">Learning support that goes well beyond the class hour.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <MonitorPlay size={28} />, title: "Live interactive whiteboard", desc: "Solve problems together in real time, just like working side-by-side at a desk." },
                { icon: <ClipboardList size={28} />, title: "Weekly tests & revision", desc: "Short weekly tests keep concepts sharp and exam pressure low." },
                { icon: <LineChart size={28} />, title: "Monthly progress reports", desc: "Clear, honest updates on strengths and areas to work on, sent every month." },
                { icon: <MessageCircle size={28} />, title: "24/7 doubt-solving on WhatsApp", desc: "Stuck on a problem at 10pm? Send a message and get an answer, not a wait." },
                { icon: <Video size={28} />, title: "Recorded classes, forever", desc: "Every session is recorded, so missed classes and revision are never a problem." },
                { icon: <Globe size={28} />, title: "Flexible global timing", desc: "Slots designed to work across time zones, for students learning from anywhere." },
                { icon: <FileText size={28} />, title: "Exam-focused question banks", desc: "Curated practice sets mapped directly to your board or curriculum's exam pattern." },
                { icon: <ShieldCheck size={28} />, title: "Money-back guarantee", desc: "Not happy after your first paid month? Get a full refund, no questions asked." },
                { icon: <Gift size={28} />, title: "Free trial class", desc: "Experience a full class before you commit to anything at all." },
              ].map((feature, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/90 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-6 bg-foreground/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-primary font-bold tracking-wider uppercase mb-2">What parents say</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by families everywhere</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Anita", role: "parent of a Class 7 student, India", text: "My son's Maths score went from 52 to 78 in just 3 months. The explanations are clear and so patient." },
                { name: "Rakesh", role: "parent of a Class 5 student, India", text: "The weekly tests and monthly reports keep us informed about exactly where our daughter needs help." },
                { name: "Sarah", role: "parent of a Class 9 student, UK", text: "Time zones were never an issue, and doubts get solved on WhatsApp the same day. Highly recommend." }
              ].map((test, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-foreground/5 flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => <Star key={j} className="text-[#FBBF24] fill-[#FBBF24]" size={20} />)}
                    </div>
                    <p className="text-foreground/80 italic leading-relaxed mb-8 text-lg">"{test.text}"</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{test.name}</div>
                      <div className="text-sm text-foreground/50">{test.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-primary font-bold tracking-wider uppercase mb-2">Fees</div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto text-lg">The first class is always free. Choose the plan that fits, in your currency.</p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="glass-card p-1 rounded-full flex gap-1">
                <button
                  onClick={() => setPricingCurrency("india")}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${pricingCurrency === "india" ? "bg-primary text-white shadow-md" : "text-foreground/70 hover:text-foreground"}`}
                >
                  India (₹)
                </button>
                <button
                  onClick={() => setPricingCurrency("intl")}
                  className={`px-6 py-3 rounded-full font-bold transition-all ${pricingCurrency === "intl" ? "bg-primary text-white shadow-md" : "text-foreground/70 hover:text-foreground"}`}
                >
                  International ($)
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "One-on-one",
                  priceIN: "₹3,500",
                  priceUS: "$200",
                  features: ["8 classes a month", "Fully personalised pace", "WhatsApp doubt support"]
                },
                {
                  title: "Small batch (2–5)",
                  priceIN: "₹1,600",
                  priceUS: "$150",
                  featured: true,
                  badge: "Most popular",
                  features: ["8 classes a month", "Weekly test + revision", "WhatsApp doubt support", "Monthly progress report"]
                },
                {
                  title: "Group batch (≤10)",
                  priceIN: "₹1,000",
                  priceUS: "$120",
                  features: ["8 classes a month", "Weekly test", "WhatsApp doubt support"]
                }
              ].map((plan, i) => (
                <div key={i} className={`relative p-8 rounded-3xl border flex flex-col ${plan.featured ? 'bg-white border-primary shadow-2xl scale-105 z-10' : 'glass-card border-foreground/10'}`}>
                  {plan.badge && (
                    <div className="absolute top-0 right-0 bg-secondary/10 text-secondary font-bold px-4 py-1 rounded-bl-xl text-sm">
                      {plan.badge}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {pricingCurrency === "india" ? plan.priceIN : plan.priceUS}
                    </span>
                  </div>
                  <div className="text-foreground/50 font-medium mb-8 uppercase tracking-wider text-sm">per month</div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle2 className={`shrink-0 mt-0.5 ${plan.featured ? 'text-primary' : 'text-foreground/40'}`} size={20} />
                        <span className="text-foreground/80 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WHATSAPP_LINK}
                    className={`block w-full py-4 px-6 rounded-full text-center font-bold transition-colors ${plan.featured ? 'bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/20' : 'bg-foreground/5 text-foreground hover:bg-foreground/10'}`}
                  >
                    Get started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-foreground/10 py-12 px-6 bg-white z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            NYmath.com
          </div>
          <p className="text-foreground/50 text-sm">© {new Date().getFullYear()} NYmath. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-foreground px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
