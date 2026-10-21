import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Users,
  Award,
  ChevronRight,
  Menu,
  X,
  Send,
  MessageSquare,
  Building2,
  Briefcase,
  HardHat,
  Sparkles,
  Stethoscope,
  Factory,
  Truck,
  UtensilsCrossed,
  ArrowUpRight,
  Star,
  Globe2,
  Check
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Construction & Civil Workers');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: 'Construction & Civil Workers',
    headcount: '10-25',
    message: ''
  });

  const categories = [
    {
      id: 'construction',
      title: 'Construction & Civil Workers',
      titleAr: 'عمال البناء والتشييد المدني',
      desc: 'Expert masons, certified electricians, industrial plumbers, shuttering carpenters, and steel fixers for high-velocity infrastructure projects.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=600',
      icon: HardHat,
      trades: ['Masons & Plasterers', 'Industrial Electricians', 'Steel Fixers', 'Pipefitters']
    },
    {
      id: 'cleaning',
      title: 'Cleaning & Facility Management',
      titleAr: 'خدمات النظافة وإدارة المرافق',
      desc: 'Well-trained commercial janitorial teams, industrial sanitation personnel, and hospital-grade deep cleaning specialists.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=600',
      icon: Sparkles,
      trades: ['Commercial Cleaners', 'Façade Technicians', 'Housekeeping Teams', 'Waste Handlers']
    },
    {
      id: 'medical',
      title: 'Medical & Healthcare Support',
      titleAr: 'الكوادر الطبية والمساندة الصحية',
      desc: 'Screened hospital attendants, lab helpers, nursing aides, and healthcare facility maintenance crew compliant with Ministry of Health regulations.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
      icon: Stethoscope,
      trades: ['Patient Care Aides', 'Sanitization Stewards', 'Lab Attendants', 'Medical Orderlies']
    },
    {
      id: 'factory',
      title: 'Factory & Industrial Operators',
      titleAr: 'مشغلو المصانع والعمليات الصناعية',
      desc: 'Disciplined assembly-line workers, machine operators, packaging specialists, and plant technicians drilled in industrial safety protocols.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
      icon: Factory,
      trades: ['Machine Operators', 'Assembly Workers', 'Packing Crews', 'Quality Checkers']
    },
    {
      id: 'logistics',
      title: 'Logistics, Warehousing & Drivers',
      titleAr: 'اللوجستيات والمستودعات والسائقين',
      desc: 'Licensed heavy/light vehicle drivers, certified forklift operators, inventory pickers, and organized warehouse dispatch staff.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
      icon: Truck,
      trades: ['Heavy Truck Drivers', 'Forklift Operators', 'Inventory Pickers', 'Dispatch Crews']
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Catering Staff',
      titleAr: 'طواقم الضيافة والإعاشة والفندقة',
      desc: 'Groomed hotel waitstaff, industrial kitchen stewards, banquet servers, and commercial kitchen utility workers for high-volume venues.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
      icon: UtensilsCrossed,
      trades: ['Bilingual Waitstaff', 'Kitchen Stewards', 'Baristas & Servers', 'Line Cooks']
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed', labelAr: 'مشروع منجز في المملكة' },
    { value: '10,000+', label: 'Skilled Workers Deployed', labelAr: 'كوادر مؤهلة تم توظيفها' },
    { value: '100%', label: 'Saudi Labor Law Compliant', labelAr: 'التزام تام بأنظمة قوى وأجير' },
    { value: '99%', label: 'Client Satisfaction Rate', labelAr: 'نسبة رضا شركائنا في الأعمال' }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleSelectService = (categoryTitle) => {
    setSelectedCategory(categoryTitle);
    setFormData((prev) => ({ ...prev, category: categoryTitle }));
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* =========================================================================
          TOP BANNER / ANNOUNCEMENT BAR
      ========================================================================== */}
      <div className="bg-[#002244] text-slate-300 text-xs sm:text-sm border-b border-white/10 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-200">
              <Globe2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              Kingdom of Saudi Arabia | Vision 2030 Manpower Partner
            </span>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              Qiwa, Ajeer & Muqeem Fully Accredited
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+966114567890"
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#D4AF37]" />
              <span>+966 11 456 7890</span>
            </a>
            <a
              href="mailto:inquiry@afaqalmitana.com"
              className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
            >
              <Mail className="w-3 h-3 text-[#D4AF37]" />
              <span>inquiry@afaqalmitana.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================================
          NAVIGATION HEADER
      ========================================================================== */}
      <header className="sticky top-0 z-50 bg-[#003366] text-white shadow-xl border-b border-[#D4AF37]/20 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Company Title */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#997A15] p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-[#003366] rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-serif">
                    AFAQ AL MITANA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#D4AF37] font-semibold tracking-wider uppercase">
                    Manpower Solutions
                  </span>
                  <span className="text-xs text-slate-300 font-arabic font-medium">
                    (أفاق المتانة)
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <a href="#home" className="hover:text-[#D4AF37] transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                About Us
              </a>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                Services
              </a>
              <a href="#categories" className="hover:text-[#D4AF37] transition-colors">
                Workforce Categories
              </a>
              <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">
                Why Us
              </a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                className="bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5BF45] hover:to-[#C49E2E] text-[#002244] font-bold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2 text-sm"
              >
                <span>Request Workforce</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#002850] border-t border-white/10 px-4 pt-3 pb-6 space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-[#D4AF37] font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-[#D4AF37] font-medium"
            >
              About Us
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-[#D4AF37] font-medium"
            >
              Services
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-[#D4AF37] font-medium"
            >
              Workforce Categories
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-[#D4AF37] font-medium"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-[#D4AF37] font-medium"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#D4AF37] text-[#002244] font-bold py-2.5 rounded-lg mt-4 shadow"
            >
              Request Workforce
            </a>
          </div>
        )}
      </header>

      {/* =========================================================================
          HERO SECTION
      ========================================================================== */}
      <section id="home" className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Navy Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200"
            alt="Saudi Construction Workforce"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001D3D]/95 via-[#003366]/90 to-[#002244]/85" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide">
                <ShieldCheck className="w-4 h-4" />
                <span>Premier Manpower Supply & Contracting in KSA</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Reliable & Skilled{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D068] to-[#D4AF37]">
                  Workforce Supply
                </span>{' '}
                Across Saudi Arabia
              </h1>

              <p className="text-base sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
                Empowering Saudi Vision 2030 giga-projects, industrial plants, and commercial developments with trade-tested, legally regularized, and rapidly mobilizable manpower cadres.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#categories"
                  className="bg-[#D4AF37] hover:bg-[#c49e2e] text-[#002244] font-extrabold px-7 py-3.5 rounded-xl shadow-xl hover:shadow-[#D4AF37]/20 transition-all flex items-center gap-2 group text-base"
                >
                  <span>Explore Our Services</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#contact"
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl backdrop-blur-md border border-white/20 transition-all text-base flex items-center gap-2"
                >
                  <span>Contact Sales</span>
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-white/15">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    100% Qiwa & Ajeer Legal
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    48-72h Rapid Mobilization
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    Fully Insured & Supervised
                  </span>
                </div>
              </div>
            </div>

            {/* Right Mini Card / Fast Quote Form Summary */}
            <div className="lg:col-span-4">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl text-white">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <h3 className="font-bold text-lg text-white">Need Workers Urgently?</h3>
                    <p className="text-xs text-slate-300">Direct KSA Field Operations Desk</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available Now
                  </span>
                </div>

                <div className="space-y-4 py-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Immediate Dispatch</p>
                      <p className="text-xs text-slate-300">Riyadh, Dammam, Jeddah, NEOM & Western Coast</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Dedicated Camp Accommodations</p>
                      <p className="text-xs text-slate-300">Managed lodging & private AC bus fleets</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Trade-Tested Qualifications</p>
                      <p className="text-xs text-slate-300">Pre-screened with certified technical skills</p>
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full mt-2 block text-center bg-gradient-to-r from-[#D4AF37] to-[#B38F24] hover:from-[#E5BF45] hover:to-[#C49E2E] text-[#002244] font-bold py-3 rounded-xl shadow-lg transition-all"
                >
                  Request a Formal Proposal
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS STRIP
      ========================================================================== */}
      <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i > 0 ? 'pt-4 lg:pt-0' : ''}`}>
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003366] font-serif">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 font-arabic mt-0.5">
                {stat.labelAr}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          ABOUT US SECTION
      ========================================================================== */}
      <section id="about" className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=700"
                    alt="Engineers and Manpower"
                    className="w-full h-[420px] object-cover"
                  />
                </div>
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#003366] text-white p-5 rounded-2xl shadow-xl border border-[#D4AF37]/30 max-w-[220px]">
                  <p className="text-3xl font-extrabold text-[#D4AF37] font-serif">15+ Years</p>
                  <p className="text-xs text-slate-200 font-medium mt-1">
                    Delivering workforce excellence across Saudi infrastructure.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#003366]/10 text-[#003366] text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                About Afaq Al Mitana (شركة أفاق المتانة)
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#003366] tracking-tight leading-snug">
                Building Tomorrow's Saudi Arabia with Skilled, Disciplined Manpower
              </h2>

              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                <strong>Afaq Al Mitana</strong> is a premier Saudi-owned workforce supply and contracting solutions provider. We deliver flexible, compliant, and scalable manpower cadres to general contractors, industrial manufacturers, healthcare facilities, and logistics centers throughout the Kingdom.
              </p>

              {/* Mission / Vision Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#003366] font-bold">
                    <Award className="w-5 h-5 text-[#D4AF37]" />
                    <span>Our Strategic Mission</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    To furnish the Kingdom's mega-construction and operational sectors with thoroughly screened, verified tradesmen who uphold international occupational safety and productivity benchmarks.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#003366] font-bold">
                    <Globe2 className="w-5 h-5 text-[#D4AF37]" />
                    <span>Vision 2030 Commitment</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Fully invested in Saudi Arabia’s national transformation pipeline by supporting regional giga-projects with lawful Qiwa documentation, high-tier Saudization, and welfare compliance.
                  </p>
                </div>
              </div>

              {/* Pillars List */}
              <div className="space-y-2.5 pt-2">
                {[
                  'Turnkey mobilization including visa sponsorship, IQAMA issuance, and camp management.',
                  'Rigorous pre-departure trade testing and medical fitness clearances.',
                  'Dedicated multilingual field supervisors (Arabic, English, Urdu, Hindi).'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES & WORKFORCE CATEGORIES GRID
      ========================================================================== */}
      <section id="categories" className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#003366]/5 border border-[#003366]/10 text-[#003366] text-xs font-bold tracking-wider uppercase">
              <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
              Manpower Categories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight">
              Specialized Labor Supply Across 6 Core Divisions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Choose from our pre-vetted technical, civil, medical, industrial, and facility management cadres ready for deployment across the Kingdom.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Image Header with Badge */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
                      <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-[#003366]/90 backdrop-blur-md text-[#D4AF37] border border-white/20 shadow-md">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div className="absolute bottom-3 left-4 right-4">
                        <span className="text-xs font-semibold text-[#D4AF37] block font-arabic">
                          {cat.titleAr}
                        </span>
                        <h3 className="text-lg font-bold text-white leading-tight">
                          {cat.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cat.desc}
                      </p>

                      {/* Trade pills */}
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                          Available Trades:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.trades.map((trade, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
                            >
                              {trade}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => handleSelectService(cat.title)}
                      className="w-full py-2.5 px-4 rounded-xl border border-[#003366]/20 bg-white group-hover:bg-[#003366] text-[#003366] group-hover:text-[#D4AF37] font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Request This Crew</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHY CHOOSE US SECTION
      ========================================================================== */}
      <section id="why-us" className="py-20 lg:py-28 bg-[#002244] text-white relative overflow-hidden">
        {/* Subtle patterned overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-wider uppercase">
              <ShieldCheck className="w-3.5 h-3.5" />
              Strategic Advantages
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Leading Saudi Contractors Partner With Afaq Al Mitana
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              We mitigate operational risks through regulatory excellence, logistical superiority, and proactive human resource management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 backdrop-blur-md transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">48–72h Rapid Mobilization</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pre-screened standby labor pools stationed in key hubs (Riyadh, Jeddah, Dammam) ensuring uninterrupted site continuity.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 backdrop-blur-md transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">100% Legal & Ministry Compliant</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Full transparency through official Qiwa digital contracts, Ajeer permits, GOSI contributions, and medical insurance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 backdrop-blur-md transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Trade-Tested Workforce</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hands-on practical assessments conducted at accredited technical workshops prior to site dispatch, minimizing rework.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 backdrop-blur-md transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Dedicated Account Managers</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                A single point-of-contact handling timesheets, on-site gang replacements, camp logistics, and shift coordination 24/7.
              </p>
            </div>
          </div>

          {/* Replacement Guarantee Banner */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-[#D4AF37] text-[#002244]">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Instant Replacement Guarantee</h4>
                <p className="text-xs sm:text-sm text-slate-300">
                  Should any staff member fail to satisfy your site engineering benchmarks, we provide immediate replacement within 48 hours.
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="whitespace-nowrap px-6 py-2.5 rounded-xl bg-[#D4AF37] text-[#002244] font-bold text-xs sm:text-sm hover:bg-[#e4be42] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE CONTACT & WORKFORCE INQUIRY FORM
      ========================================================================== */}
      <section id="contact" className="py-20 lg:py-28 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Information & Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#003366]/10 text-[#003366] text-xs font-bold uppercase tracking-wider mb-3">
                  <Send className="w-3.5 h-3.5 text-[#D4AF37]" />
                  Direct Procurement
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight">
                  Request a Formal Workforce Proposal
                </h2>
                <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                  Tell us about your project requirements, location, and headcount. Our technical recruiters will prepare a competitive commercial quotation within 24 hours.
                </p>
              </div>

              {/* Direct Reach Cards */}
              <div className="space-y-4">
                <a
                  href="tel:+966114567890"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#D4AF37] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#003366] text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Head Office Line (Riyadh)</span>
                    <span className="text-sm sm:text-base font-bold text-slate-800">+966 11 456 7890</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/966501234567?text=Hello%20Afaq%20Al%20Mitana,%20I%20would%20like%20to%20inquire%20about%20manpower%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 shadow-sm hover:border-emerald-500 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-700 block font-semibold">Immediate WhatsApp Support (24/7)</span>
                    <span className="text-sm sm:text-base font-bold text-emerald-950">+966 50 123 4567</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-[#003366] text-[#D4AF37] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Headquarters Location</span>
                    <span className="text-sm sm:text-base font-bold text-slate-800">
                      King Fahd Road, Al Olaya District, Riyadh, KSA
                    </span>
                  </div>
                </div>
              </div>

              {/* Saudi Compliance Badge Box */}
              <div className="p-4 rounded-xl bg-slate-200/70 border border-slate-300 text-xs text-slate-600 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#003366] shrink-0" />
                <span>
                  Official CR: <strong>1010XXXXXX</strong> | Licensed by the Ministry of Human Resources and Social Development under classification category (A).
                </span>
              </div>
            </div>

            {/* Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-10">
                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#003366]">Inquiry Received Successfully!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting <strong>Afaq Al Mitana</strong>. Our commercial procurement team is reviewing your requirements and will contact you within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-[#003366] text-white text-xs sm:text-sm font-semibold hover:bg-[#002244] transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="border-b border-slate-100 pb-4">
                      <h3 className="text-lg font-bold text-[#003366]">Workforce Requisition Form</h3>
                      <p className="text-xs text-slate-400">Fill in your requirements below for an instant preliminary quote.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleFormChange}
                          placeholder="e.g. Eng. Abdullah Al-Otaibi"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                        />
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Company / Contractor Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleFormChange}
                          placeholder="e.g. Saudi Construction Co."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          placeholder="name@company.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Contact Phone (KSA) *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleFormChange}
                          placeholder="+966 5X XXX XXXX"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Category */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Primary Labor Category *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleFormChange}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm bg-white transition-all"
                        >
                          {categories.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                          <option value="General Support">Multiple / Mixed Trades</option>
                        </select>
                      </div>

                      {/* Headcount */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                          Estimated Headcount *
                        </label>
                        <select
                          name="headcount"
                          value={formData.headcount}
                          onChange={handleFormChange}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm bg-white transition-all"
                        >
                          <option value="1-10">1 – 10 Personnel</option>
                          <option value="10-25">10 – 25 Personnel</option>
                          <option value="25-50">25 – 50 Personnel</option>
                          <option value="50-100">50 – 100 Personnel</option>
                          <option value="100+">100+ Enterprise Mobilization</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Details */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Specific Project Details & Location
                      </label>
                      <textarea
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleFormChange}
                        placeholder="Specify job site (e.g. Riyadh Metro, NEOM, Red Sea, Dammam Port), project duration, and trade specializations..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#003366] hover:bg-[#002244] text-[#D4AF37] hover:text-white font-extrabold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Official Requisition</span>
                    </button>

                    <p className="text-[11px] text-center text-slate-400">
                      By submitting, you agree to receive commercial correspondence compliant with Saudi MHRSD terms.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOOTER
      ========================================================================== */}
      <footer className="bg-[#001D3D] text-slate-300 pt-16 pb-8 border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
            {/* Brand Summary */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37] flex items-center justify-center text-[#002244]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xl font-black text-white tracking-tight font-serif block">
                    AFAQ AL MITANA
                  </span>
                  <span className="text-xs text-[#D4AF37] font-semibold tracking-wider font-arabic">
                    شركة أفاق المتانة للمقاولات وتوريد الكوادر البشرية
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
                Saudi Arabia’s trusted workforce partner. Delivering certified technical, civil, mechanical, and logistical personnel in full compliance with the Kingdom’s Vision 2030 development objectives.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <div className="text-xs text-slate-300 font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  Qiwa Certified
                </div>
                <div className="text-xs text-slate-300 font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  Ajeer Authorized
                </div>
                <div className="text-xs text-slate-300 font-semibold px-2.5 py-1 rounded bg-white/5 border border-white/10">
                  GOSI Registered
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#D4AF37] transition-colors">About Our Firm</a></li>
                <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Labor Categories</a></li>
                <li><a href="#why-us" className="hover:text-[#D4AF37] transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact & Locations</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Specialties</h4>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Civil Construction Trades</a></li>
                <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Janitorial & FM Staff</a></li>
                <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Factory Machine Operators</a></li>
                <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Logistics Drivers & Forklifts</a></li>
                <li><a href="#categories" className="hover:text-[#D4AF37] transition-colors">Hospitality Waitstaff</a></li>
              </ul>
            </div>

            {/* Regional Branches */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Operations Hubs</h4>
              <p className="text-xs text-slate-400">
                <strong>Riyadh Central HQ:</strong><br />
                King Fahd Road, Al Olaya
              </p>
              <p className="text-xs text-slate-400">
                <strong>Eastern Province:</strong><br />
                Al Khobar / Dammam Industrial Area
              </p>
              <p className="text-xs text-slate-400">
                <strong>Western Hub:</strong><br />
                Jeddah Industrial City & Yanbu
              </p>
            </div>
          </div>

          {/* Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Afaq Al Mitana Manpower Supply Co. (شركة أفاق المتانة). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-200 transition-colors">Saudi Labor Law Compliance</span>
              <span className="hover:text-slate-200 transition-colors">Terms of Supply</span>
              <span className="hover:text-slate-200 transition-colors">Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
