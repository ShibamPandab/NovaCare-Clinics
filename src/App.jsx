import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Brain, Activity, ShieldAlert, Baby, Stethoscope, 
  MapPin, Phone, Mail, Clock, User, Calendar, CheckCircle2, 
  ChevronDown, ChevronUp, Search, Award, ShieldCheck, Sparkles, 
  MessageSquare, Check, Menu, X, ArrowRight, Video, FileText,
  AlertTriangle, CheckCircle, ExternalLink, HelpCircle
} from 'lucide-react';

// Department Data
const DEPARTMENTS = [
  {
    id: 'cardiology',
    name: 'Cardiology',
    icon: Heart,
    description: 'Comprehensive cardiovascular care including preventive screenings, non-invasive diagnostics, and advanced treatment for heart conditions.',
    color: 'text-rose-500 bg-rose-50',
    borderColor: 'border-rose-100',
    stats: '98% Success Rate'
  },
  {
    id: 'neurology',
    name: 'Neurology',
    icon: Brain,
    description: 'Expert diagnostics and therapies for neurological disorders affecting the brain, spinal cord, nerves, and neuromuscular systems.',
    color: 'text-indigo-500 bg-indigo-50',
    borderColor: 'border-indigo-100',
    stats: '12+ Specialists'
  },
  {
    id: 'orthopedics',
    name: 'Orthopedics',
    icon: Activity,
    description: 'Advanced joint replacements, sports medicine, spinal surgeries, and physical rehabilitation for optimal musculoskeletal health.',
    color: 'text-amber-500 bg-amber-50',
    borderColor: 'border-amber-100',
    stats: '2.5k Joint Surgeries'
  },
  {
    id: 'pediatrics',
    name: 'Pediatrics',
    icon: Baby,
    description: 'Dedicated and compassionate healthcare for children, infants, and adolescents, covering milestones, vaccinations, and acute illnesses.',
    color: 'text-cyan-500 bg-cyan-50',
    borderColor: 'border-cyan-100',
    stats: 'Child-friendly Ward'
  },
  {
    id: 'oncology',
    name: 'Oncology',
    icon: ShieldAlert,
    description: 'Holistic cancer treatments incorporating chemotherapy, targeted immunotherapies, and support services tailored to each patient.',
    color: 'text-emerald-500 bg-emerald-50',
    borderColor: 'border-emerald-100',
    stats: 'State-of-the-Art Labs'
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    icon: Stethoscope,
    description: 'Primary care services focusing on preventive health, regular checkups, management of chronic diseases, and general well-being.',
    color: 'text-sky-500 bg-sky-50',
    borderColor: 'border-sky-100',
    stats: '24/7 OPD Available'
  }
];

// Doctor Data
const DOCTORS = [
  {
    id: 'sarah-johnson',
    name: 'Dr. Sarah Johnson',
    department: 'cardiology',
    title: 'Senior Cardiovascular Surgeon',
    education: 'MD, FACC - Harvard Medical School',
    experience: '16+ Years Experience',
    availabilityToday: '10:00 AM - 6:00 PM',
    status: 'Available Today',
    rating: 4.9,
    reviews: 312,
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'david-miller',
    name: 'Dr. David Miller',
    department: 'cardiology',
    title: 'Consultant Cardiologist',
    education: 'MD - Johns Hopkins University',
    experience: '12+ Years Experience',
    availabilityToday: 'Tomorrow: 09:00 AM - 03:00 PM',
    status: 'Mon, Wed, Fri',
    rating: 4.8,
    reviews: 245,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'elena-rostova',
    name: 'Dr. Elena Rostova',
    department: 'neurology',
    title: 'Chief Neurologist & Researcher',
    education: 'MD, PhD - Stanford University',
    experience: '18+ Years Experience',
    availabilityToday: 'Tue, Thu: 11:00 AM - 5:00 PM',
    status: 'Available Tue & Thu',
    rating: 4.9,
    reviews: 189,
    avatar: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'marcus-vance',
    name: 'Dr. Marcus Vance',
    department: 'orthopedics',
    title: 'Sports Medicine Specialist',
    education: 'MD - Mayo Clinic College of Medicine',
    experience: '14+ Years Experience',
    availabilityToday: 'Mon, Tue, Thu: 8:00 AM - 2:00 PM',
    status: 'Available Mon, Tue, Thu',
    rating: 4.7,
    reviews: 420,
    avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'aisha-rahman',
    name: 'Dr. Aisha Rahman',
    department: 'pediatrics',
    title: 'Lead Pediatrician',
    education: 'MD - Yale School of Medicine',
    experience: '10+ Years Experience',
    availabilityToday: 'Wed, Thu, Sat: 10:00 AM - 4:00 PM',
    status: 'Available Wed, Thu, Sat',
    rating: 4.9,
    reviews: 350,
    avatar: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=300&h=300&id=2' // Fallback handled beautifully
  },
  {
    id: 'robert-chen',
    name: 'Dr. Robert Chen',
    department: 'oncology',
    title: 'Senior Oncologist',
    education: 'MD, PhD - Columbia University',
    experience: '20+ Years Experience',
    availabilityToday: 'Mon, Wed: 1:00 PM - 6:00 PM',
    status: 'Available Mon, Wed',
    rating: 5.0,
    reviews: 154,
    avatar: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    id: 'grace-martinez',
    name: 'Dr. Grace Martinez',
    department: 'general-medicine',
    title: 'Family Medicine Specialist',
    education: 'MD - University of California SF',
    experience: '8+ Years Experience',
    availabilityToday: 'Mon-Sat: 09:00 AM - 05:00 PM',
    status: 'Available Daily',
    rating: 4.8,
    reviews: 512,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
  }
];

// FAQs Data
const FAQS = [
  {
    question: 'How do I book an appointment online?',
    answer: 'You can book an appointment by selecting your preferred department, choosing a doctor, filling out your contact information in the Appointment Form below, and clicking "Confirm Appointment". You can also call our central booking desk at +1 (800) 555-0199.'
  },
  {
    question: 'Which insurance plans are accepted?',
    answer: 'NovaCare Clinic accepts all major national and international health insurance providers, including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, and Medicare. Please upload or bring your insurance card during your visit for verification.'
  },
  {
    question: 'Do you offer 24/7 emergency support?',
    answer: 'Yes, our emergency and trauma wing is operational 24/7, 365 days a year. We feature on-call cardiologists, orthopedicians, and pediatric specialists supported by our advanced critical care and ICU facilities.'
  },
  {
    question: 'What are the standard consultation fees?',
    answer: 'Standard consultation fees range from $60 to $120, depending on the speciality and level of senior care. Diagnostic tests, imaging, and pharmaceutical prescriptions are billed separately. Detailed pricing is shared prior to consultation.'
  },
  {
    question: 'Can I consult a doctor online via video?',
    answer: 'Yes, NovaCare offers telehealth consultations for general medicine, follow-up evaluations, and mental health checkups. Select the "Telehealth Consult" checkbox in the booking form, and our coordinators will guide you through the setup.'
  }
];

// Testimonials Data
const TESTIMONIALS = [
  {
    name: 'Sarah Thompson',
    role: 'Cardiology Patient',
    content: 'The cardiac team at NovaCare saved my husband. From emergency admission to post-op recovery, the doctors and nursing staff were exceptionally skilled and kind. The hospital layout is modern and clean.',
    rating: 5,
    date: 'May 12, 2026'
  },
  {
    name: 'Michael K. Chen',
    role: 'Orthopedic Patient',
    content: 'I had my knee replacement surgery at NovaCare. Dr. Marcus Vance explained the procedure thoroughly. The physical therapy team was phenomenal, helping me get back on my feet in record time.',
    rating: 5,
    date: 'April 28, 2026'
  },
  {
    name: 'Elena Rostova',
    role: 'Pediatric Care Parent',
    content: 'Finding a pediatrician who makes your child feel safe is rare. Dr. Aisha Rahman is an absolute gem. She took her time, answered every question, and the kids-friendly waiting area kept my son happy.',
    rating: 5,
    date: 'June 01, 2026'
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deptFilter, setDeptFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Appointment form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    department: '',
    doctor: '',
    timeSlot: '',
    telehealth: false,
    reason: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [successModal, setSuccessModal] = useState(false);
  const [successData, setSuccessData] = useState(null);
  
  // FAQ state
  const [faqOpen, setFaqOpen] = useState(null);

  // WhatsApp Widget Chat Open
  const [wsChatOpen, setWsChatOpen] = useState(false);
  const [wsMessage, setWsMessage] = useState('');

  // Handle department card click (filters doctors and scrolls)
  const handleDepartmentSelect = (deptId) => {
    setDeptFilter(deptId);
    
    // Auto-select in form
    setFormData(prev => ({
      ...prev,
      department: deptId,
      // Reset doctor since department changed
      doctor: ''
    }));

    // Scroll to Doctors Section
    const element = document.getElementById('doctors-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle doctor book click
  const handleBookDoctor = (doc) => {
    setFormData(prev => ({
      ...prev,
      doctor: doc.id,
      department: doc.department
    }));
    
    const element = document.getElementById('appointment-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Form inputs change
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Submit appointment
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    
    if (!formData.name.trim()) errors.name = 'Patient name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[+0-9\s-]{8,15}$/.test(formData.phone)) {
      errors.phone = 'Invalid phone format';
    }
    if (!formData.date) errors.date = 'Appointment date is required';
    if (!formData.department) errors.department = 'Please select a department';
    if (!formData.doctor) errors.doctor = 'Please select a specialist';
    if (!formData.timeSlot) errors.timeSlot = 'Please select a preferred slot';
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      // Scroll to first error
      const firstErrorKey = Object.keys(errors)[0];
      const errorEl = document.getElementsByName(firstErrorKey)[0];
      if (errorEl) {
        errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Generate confirmation ID
    const refId = `NC-${Math.floor(100000 + Math.random() * 900000)}`;
    const selectedDocObj = DOCTORS.find(d => d.id === formData.doctor);
    const selectedDeptObj = DEPARTMENTS.find(d => d.id === formData.department);
    
    const bookingDetails = {
      ...formData,
      refId,
      doctorName: selectedDocObj?.name || 'Specialist',
      departmentName: selectedDeptObj?.name || 'General Clinic'
    };

    setSuccessData(bookingDetails);
    setSuccessModal(true);

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      doctor: '',
      timeSlot: '',
      telehealth: false,
      reason: ''
    });
    setFormErrors({});
  };

  // Filter doctors
  const filteredDoctors = DOCTORS.filter(doc => {
    const matchesDept = deptFilter === 'all' || doc.department === deptFilter;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.education.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // Handle WhatsApp Submit
  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!wsMessage.trim()) return;
    const text = encodeURIComponent(wsMessage);
    window.open(`https://wa.me/18005550199?text=${text}`, '_blank');
    setWsMessage('');
    setWsChatOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-clinic-blue selection:text-white">
      
      {/* Emergency Contact Top Bar */}
      <div className="bg-clinic-navy text-white text-sm py-2 px-4 border-b border-slate-800 flex justify-between items-center z-50 relative">
        <div className="flex items-center gap-6 max-w-7xl mx-auto w-full justify-between">
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="flex items-center gap-1.5 font-medium text-clinic-teal">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-clinic-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-clinic-teal"></span>
              </span>
              24/7 Critical Trauma Line:
            </span>
            <a href="tel:+18005550199" className="hover:underline font-bold text-white tracking-wide">+1 (800) 555-0199</a>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 500 Medical Plaza, NY</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Mon-Sat: 8 AM - 8 PM</span>
          </div>
        </div>
      </div>

      {/* Main Header / Sticky Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-custom">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-clinic-blue flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-custom">
              <Stethoscope className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-clinic-navy">NovaCare</span>
              <span className="block text-[10px] uppercase font-bold tracking-widest text-clinic-blue -mt-1">Clinic</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-sm font-semibold text-slate-600 hover:text-clinic-blue transition-custom">Home</a>
            <a href="#departments" className="text-sm font-semibold text-slate-600 hover:text-clinic-blue transition-custom">Departments</a>
            <a href="#doctors" className="text-sm font-semibold text-slate-600 hover:text-clinic-blue transition-custom">Specialists</a>
            <a href="#why-choose-us" className="text-sm font-semibold text-slate-600 hover:text-clinic-blue transition-custom">Why Choose Us</a>
            <a href="#faqs" className="text-sm font-semibold text-slate-600 hover:text-clinic-blue transition-custom">FAQs</a>
            <a href="#contact" className="text-sm font-semibold text-slate-600 hover:text-clinic-blue transition-custom">Contact</a>
          </nav>

          {/* Sticky Appointment CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="#appointment-form-section" 
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-clinic-blue hover:bg-clinic-navy shadow-sm transition-custom hover:shadow-md cursor-pointer"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50 transition-custom"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-slate-100 bg-white px-4 py-6 shadow-inner absolute top-20 left-0 w-full"
            >
              <div className="flex flex-col gap-4">
                <a 
                  href="#home" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-600 hover:text-clinic-blue py-2 border-b border-slate-50"
                >
                  Home
                </a>
                <a 
                  href="#departments" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-600 hover:text-clinic-blue py-2 border-b border-slate-50"
                >
                  Departments
                </a>
                <a 
                  href="#doctors" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-600 hover:text-clinic-blue py-2 border-b border-slate-50"
                >
                  Specialists
                </a>
                <a 
                  href="#why-choose-us" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-600 hover:text-clinic-blue py-2 border-b border-slate-50"
                >
                  Why Choose Us
                </a>
                <a 
                  href="#faqs" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-600 hover:text-clinic-blue py-2 border-b border-slate-50"
                >
                  FAQs
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-600 hover:text-clinic-blue py-2 border-b border-slate-50"
                >
                  Contact
                </a>
                <a 
                  href="#appointment-form-section" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-full py-3 rounded-lg text-base font-bold text-white bg-clinic-blue hover:bg-clinic-navy transition-custom text-center cursor-pointer mt-2"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 bg-linear-to-b from-slate-50 via-white to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-clinic-blue font-bold text-xs sm:text-sm tracking-wide">
                <Award className="w-4 h-4" /> Trusted Multi-Speciality Healthcare
              </div>
              
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-clinic-dark leading-tight">
                Your Health, Our <span className="text-clinic-blue">Highest Priority</span>
              </h1>
              
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                Experience world-class clinical excellence. NovaCare Clinic integrates top specialists, advanced diagnostic labs, and compassionate care to keep you and your family thriving.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#appointment-form-section" 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-white bg-clinic-blue hover:bg-clinic-navy shadow-md hover:shadow-lg transition-custom cursor-pointer text-center"
                >
                  Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                </a>
                <a 
                  href="#doctors" 
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-xs transition-custom text-center"
                >
                  Meet Our Specialists
                </a>
              </div>

              {/* Trust Badge Grid */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-teal-50 text-clinic-teal">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-extrabold text-slate-800 text-sm">NABH Accredit</span>
                    <span className="text-xs text-slate-500 font-medium">Global Standards</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-extrabold text-slate-800 text-sm">99.2% Rate</span>
                    <span className="text-xs text-slate-500 font-medium">Patient Relief</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-blue-50 text-clinic-blue">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-extrabold text-slate-800 text-sm">24/7 Support</span>
                    <span className="text-xs text-slate-500 font-medium">Emergency Wing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Image / Graphics */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:max-w-none">
                {/* Visual backdrops */}
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-clinic-teal/5 rounded-full blur-3xl -z-10"></div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-clinic-blue/5 rounded-full blur-3xl -z-10"></div>
                
                {/* Image Container with Styled Clinic Building Mock */}
                <div className="relative bg-white rounded-3xl p-3 shadow-xl border border-slate-100 overflow-hidden transform hover:scale-[1.01] transition-custom">
                  <img 
                    src="/hospital_exterior.png" 
                    alt="NovaCare Clinic Hospital Building" 
                    className="w-full h-[320px] sm:h-[400px] object-cover rounded-2xl" 
                  />
                  {/* Floating Trust Indicator Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-md flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block font-bold text-slate-900 text-sm sm:text-base">OPD & Diagnostics Open</span>
                      <span className="text-xs text-slate-500">Regular Consultation: 08:00 AM - 08:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hero Quick Action Cards */}
      <section className="relative z-10 -mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Emergency */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md flex flex-col justify-between hover:border-red-100 hover:shadow-lg transition-custom group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center group-hover:scale-110 transition-custom">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">24/7 Emergency Wing</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Critical trauma support, ambulance services, cardiac emergencies, and trauma surgeons available round-the-clock.
              </p>
            </div>
            <a href="tel:+18005550199" className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wider hover:underline mt-6">
              Call Hotline <Phone className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2: Doctors List Scroll */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md flex flex-col justify-between hover:border-clinic-blue/20 hover:shadow-lg transition-custom group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-clinic-blue flex items-center justify-center group-hover:scale-110 transition-custom">
                <User className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">Find Specialists</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Meet our board-certified surgeons and consultants across cardiology, neurology, pediatrics, and oncology.
              </p>
            </div>
            <a href="#doctors" className="inline-flex items-center gap-1.5 text-xs font-bold text-clinic-blue uppercase tracking-wider hover:underline mt-6">
              Search Doctors <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Card 3: Easy Appointment */}
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md flex flex-col justify-between hover:border-clinic-teal/20 hover:shadow-lg transition-custom group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-clinic-teal flex items-center justify-center group-hover:scale-110 transition-custom">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display font-extrabold text-lg text-slate-900">Easy Online Booking</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Select your preferred slot, department, and expert. Receive confirmation on your phone instantly.
              </p>
            </div>
            <a href="#appointment-form-section" className="inline-flex items-center gap-1.5 text-xs font-bold text-clinic-teal uppercase tracking-wider hover:underline mt-6">
              Reserve Slot Now <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </section>

      {/* Statistics Counter Section */}
      <section className="py-20 bg-white border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            
            <div className="text-center space-y-2">
              <span className="block font-display text-4xl sm:text-5xl font-extrabold text-clinic-navy tracking-tight">15K+</span>
              <span className="block text-sm font-semibold uppercase text-slate-500 tracking-wider">Patients Treated Successfully</span>
            </div>

            <div className="text-center space-y-2 border-l border-slate-100">
              <span className="block font-display text-4xl sm:text-5xl font-extrabold text-clinic-blue tracking-tight">150+</span>
              <span className="block text-sm font-semibold uppercase text-slate-500 tracking-wider">Board Certified Doctors</span>
            </div>

            <div className="text-center space-y-2 border-l border-slate-100">
              <span className="block font-display text-4xl sm:text-5xl font-extrabold text-clinic-teal tracking-tight">25+</span>
              <span className="block text-sm font-semibold uppercase text-slate-500 tracking-wider">Medical Departments</span>
            </div>

            <div className="text-center space-y-2 border-l border-slate-100">
              <span className="block font-display text-4xl sm:text-5xl font-extrabold text-emerald-500 tracking-tight">99.2%</span>
              <span className="block text-sm font-semibold uppercase text-slate-500 tracking-wider">Patient Satisfaction Score</span>
            </div>

          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section id="departments" className="py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-clinic-blue">Clinical Disciplines</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-clinic-dark">Our Medical Specialities</h2>
            <p className="text-slate-500 leading-relaxed">
              We provide comprehensive diagnostic, surgical, and therapeutic services across specialized fields managed by industry-leading consultants.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div 
                  key={dept.id}
                  className="bg-white rounded-2xl p-7 border border-slate-100 shadow-xs hover:shadow-md transition-custom flex flex-col justify-between hover:border-clinic-blue/10 group cursor-pointer"
                  onClick={() => handleDepartmentSelect(dept.id)}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${dept.color} group-hover:scale-105 transition-custom`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100">
                        {dept.stats}
                      </span>
                    </div>
                    
                    <h3 className="font-display font-extrabold text-xl text-slate-900 group-hover:text-clinic-blue transition-custom">
                      {dept.name}
                    </h3>
                    
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {dept.description}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1 text-xs font-bold text-clinic-blue group-hover:gap-2 transition-custom mt-6">
                    Consult Specialists <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left side: Doctor Team Image */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
              <div className="relative w-full max-w-md">
                {/* Grid backdrop */}
                <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-clinic-teal/10 rounded-full blur-2xl -z-10"></div>
                
                {/* Styled Team Photo */}
                <div className="bg-slate-50 rounded-3xl p-3 border border-slate-100 shadow-lg relative overflow-hidden">
                  <img 
                    src="/doctor_team.png" 
                    alt="NovaCare Specialist Team" 
                    className="w-full h-[400px] object-cover rounded-2xl" 
                  />
                  {/* Overlay Badge */}
                  <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md py-2 px-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-2">
                    <Award className="w-4 h-4 text-clinic-blue" />
                    <span className="text-xs font-bold text-clinic-navy">NABH Accredited Hospital</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Trust Points */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-clinic-blue">Clinical Excellence</span>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-clinic-dark">Why Patients Trust NovaCare</h2>
                <p className="text-slate-500 leading-relaxed">
                  We blend state-of-the-art clinical technology with gentle human empathy to make sure you get the premium, safe recovery you deserve.
                </p>
              </div>

              {/* Pillars list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="space-y-2 p-5 rounded-xl border border-slate-50 bg-slate-50/30 hover:border-slate-100 transition-custom">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-clinic-blue flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-800 text-base">Top Certified Specialists</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Our doctors hold credentials from Harvard, Stanford, and Mayo Clinic with decades of clinical experience.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl border border-slate-50 bg-slate-50/30 hover:border-slate-100 transition-custom">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 text-clinic-teal flex items-center justify-center">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-800 text-base">Advanced Diagnostic Labs</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Ultra-precise MRI, multi-slice CT scans, and automated clinical chemistry panels for speedy diagnoses.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl border border-slate-50 bg-slate-50/30 hover:border-slate-100 transition-custom">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-800 text-base">Transparent Billing</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    No hidden charges or surprise costs. Upfront treatments breakdown, accepted insurance networks.
                  </p>
                </div>

                <div className="space-y-2 p-5 rounded-xl border border-slate-50 bg-slate-50/30 hover:border-slate-100 transition-custom">
                  <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-500 flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-extrabold text-slate-800 text-base">Patient Centric ICU</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Empathetic post-operative monitoring, family counselling, and high staff-to-patient ratio for acute support.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-linear-to-r from-clinic-navy to-clinic-dark text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(ellipse at center, rgba(13,148,136,0.1) 0%, transparent 70%)"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/25 border border-red-500/30 rounded-md text-red-300 font-bold text-xs uppercase tracking-wide">
              Critical Trauma Response
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">Emergency Case? Get Ambulance Immediately</h3>
            <p className="text-slate-300 text-sm max-w-xl">
              Equipped with life-saving monitors, oxygen supply, and emergency medical technicians. Reaches location within minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a 
              href="tel:+18005550199" 
              className="inline-flex items-center justify-center px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg text-sm font-bold text-white transition-custom shadow-md w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 mr-2" /> Speed-Dial Hotline
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 rounded-lg text-sm font-bold text-slate-200 transition-custom w-full sm:w-auto"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Doctors & Availability Section */}
      <section id="doctors" className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16" id="doctors-section">
            <div className="text-left space-y-4 max-w-2xl">
              <span className="text-xs uppercase font-extrabold tracking-widest text-clinic-blue">Meet Our Experts</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-clinic-dark">Board Certified Specialists</h2>
              <p className="text-slate-500 leading-relaxed">
                Consult with our international department heads. Filter by speciality or check live availability status.
              </p>
            </div>
            
            {/* Search Input */}
            <div className="relative w-full lg:max-w-xs">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                <Search className="w-4 h-4" />
              </span>
              <input 
                type="text" 
                placeholder="Search name, title..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 focus:border-clinic-blue focus:ring-1 focus:ring-clinic-blue rounded-xl text-sm transition-custom outline-none shadow-xs"
              />
            </div>
          </div>

          {/* Department filter tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar border-b border-slate-200 mb-8">
            <button 
              onClick={() => setDeptFilter('all')}
              className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-custom border ${
                deptFilter === 'all' 
                  ? 'bg-clinic-blue text-white border-clinic-blue shadow-sm' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              All Departments
            </button>
            {DEPARTMENTS.map(dept => (
              <button
                key={dept.id}
                onClick={() => setDeptFilter(dept.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-custom whitespace-nowrap border ${
                  deptFilter === dept.id 
                    ? 'bg-clinic-blue text-white border-clinic-blue shadow-sm' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Doctor Profiles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map(doc => (
                <div 
                  key={doc.id}
                  className="bg-white rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-custom flex flex-col justify-between overflow-hidden relative"
                >
                  
                  {/* Top Photo & Special availability tag */}
                  <div className="relative">
                    <img 
                      src={doc.avatar} 
                      alt={doc.name} 
                      className="w-full h-56 object-cover" 
                      onError={(e) => {
                        // In case of broken images, replace with medical blue placeholder pattern
                        e.target.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=300&h=300';
                      }}
                    />
                    
                    {/* Availability Tag */}
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-md border shadow-xs ${
                        doc.id === 'sarah-johnson' 
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-100' 
                          : 'bg-blue-50 text-clinic-blue border-blue-100'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${doc.id === 'sarah-johnson' ? 'bg-emerald-500 animate-pulse' : 'bg-clinic-blue'}`}></span>
                        {doc.status}
                      </span>
                    </div>

                    {/* Department badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="inline-flex text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-slate-900/80 backdrop-blur-xs text-white rounded-md">
                        {doc.department.replace('-', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between text-left space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-display font-extrabold text-lg text-slate-900 leading-tight">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-bold text-clinic-blue uppercase tracking-wide">
                        {doc.title}
                      </p>
                      <p className="text-xs text-slate-500">
                        {doc.education}
                      </p>
                    </div>

                    <div className="border-t border-slate-100 pt-3 text-xs space-y-2">
                      <div className="flex justify-between items-center text-slate-600">
                        <span className="font-semibold">{doc.experience}</span>
                        <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                          ★ {doc.rating} <span className="text-slate-400 font-normal">({doc.reviews})</span>
                        </span>
                      </div>
                      
                      {/* Availability Detail */}
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <div>
                          <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-wider">Visiting Hours</span>
                          <span className="text-xs text-slate-700 font-semibold">{doc.availabilityToday}</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleBookDoctor(doc)}
                      className="w-full py-2.5 rounded-lg text-xs font-bold text-clinic-blue bg-blue-50 hover:bg-clinic-blue hover:text-white transition-custom cursor-pointer text-center"
                    >
                      Book Appointment
                    </button>
                  </div>

                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center bg-white border border-slate-150 rounded-2xl">
                <p className="text-slate-400 text-sm font-semibold">No specialists found matching your search criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setDeptFilter('all'); }} 
                  className="mt-4 text-xs font-bold text-clinic-blue hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Appointment Form Section */}
      <section id="appointment-form-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Form Left: Guideline Panel */}
            <div className="lg:col-span-5 text-left space-y-6 lg:sticky lg:top-28">
              <span className="text-xs uppercase font-extrabold tracking-widest text-clinic-blue">Online Scheduling</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-clinic-dark">Schedule Your Visit</h2>
              <p className="text-slate-500 leading-relaxed">
                Book a consultation in under a minute. Your details are securely encrypted and sent directly to our patient coordinators.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 text-clinic-teal flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Instant SMS Confirmation</h4>
                    <p className="text-xs text-slate-500">Receive booking coordinates on your phone immediately.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-clinic-blue flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">Telehealth Consultations</h4>
                    <p className="text-xs text-slate-500">Consult from the comfort of your home via HD video feed.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">No Immediate Charges</h4>
                    <p className="text-xs text-slate-500">Pay at the clinic desk using insurance, cards, or digital wallets.</p>
                  </div>
                </div>
              </div>

              {/* Call support */}
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-clinic-navy text-white flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Prefer phone booking?</span>
                  <a href="tel:+18005550199" className="text-sm font-bold text-clinic-navy hover:underline">+1 (800) 555-0199</a>
                </div>
              </div>
            </div>

            {/* Form Right: Booking Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-xl p-6 sm:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-clinic-blue"></div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Patient Name *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. John Doe"
                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${formErrors.name ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-clinic-blue'} rounded-xl text-sm outline-none transition-custom focus:ring-1 focus:ring-clinic-blue`}
                      />
                    </div>
                    {formErrors.name && <p className="text-xs text-red-500 font-medium">{formErrors.name}</p>}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Email Address *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="johndoe@example.com"
                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${formErrors.email ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-clinic-blue'} rounded-xl text-sm outline-none transition-custom focus:ring-1 focus:ring-clinic-blue`}
                      />
                    </div>
                    {formErrors.email && <p className="text-xs text-red-500 font-medium">{formErrors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Phone Number *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input 
                        type="text" 
                        name="phone" 
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${formErrors.phone ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-clinic-blue'} rounded-xl text-sm outline-none transition-custom focus:ring-1 focus:ring-clinic-blue`}
                      />
                    </div>
                    {formErrors.phone && <p className="text-xs text-red-500 font-medium">{formErrors.phone}</p>}
                  </div>

                  {/* Preferred Date */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Preferred Date *</label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <input 
                        type="date" 
                        name="date" 
                        value={formData.date}
                        onChange={handleFormChange}
                        min={new Date().toISOString().split('T')[0]} // Block historical dates
                        className={`w-full pl-10 pr-4 py-2.5 bg-white border ${formErrors.date ? 'border-red-400 focus:border-red-400' : 'border-slate-200 focus:border-clinic-blue'} rounded-xl text-sm outline-none transition-custom focus:ring-1 focus:ring-clinic-blue`}
                      />
                    </div>
                    {formErrors.date && <p className="text-xs text-red-500 font-medium">{formErrors.date}</p>}
                  </div>

                  {/* Department */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Medical Department *</label>
                    <select 
                      name="department" 
                      value={formData.department}
                      onChange={(e) => {
                        handleFormChange(e);
                        // Reset doctor since department changed
                        setFormData(prev => ({ ...prev, doctor: '' }));
                      }}
                      className={`w-full px-4 py-2.5 bg-white border ${formErrors.department ? 'border-red-400' : 'border-slate-200'} rounded-xl text-sm outline-none transition-custom focus:ring-1 focus:ring-clinic-blue`}
                    >
                      <option value="">Select Speciality</option>
                      {DEPARTMENTS.map(dept => (
                        <option key={dept.id} value={dept.id}>{dept.name}</option>
                      ))}
                    </select>
                    {formErrors.department && <p className="text-xs text-red-500 font-medium">{formErrors.department}</p>}
                  </div>

                  {/* Doctor */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Specialist Doctor *</label>
                    <select 
                      name="doctor" 
                      value={formData.doctor}
                      onChange={handleFormChange}
                      disabled={!formData.department}
                      className={`w-full px-4 py-2.5 bg-white border ${formErrors.doctor ? 'border-red-400' : 'border-slate-200'} rounded-xl text-sm outline-none transition-custom focus:ring-1 focus:ring-clinic-blue disabled:bg-slate-50 disabled:cursor-not-allowed`}
                    >
                      <option value="">Select Doctor</option>
                      {DOCTORS.filter(d => d.department === formData.department).map(doc => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name} ({doc.id === 'sarah-johnson' ? 'Available Today' : 'Schedule Slots'})
                        </option>
                      ))}
                    </select>
                    {formErrors.doctor && <p className="text-xs text-red-500 font-medium">{formErrors.doctor}</p>}
                  </div>

                  {/* Time Slot */}
                  <div className="space-y-1.5 sm:col-span-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Preferred Time Slot *</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['09:00 AM - 11:00 AM', '11:00 AM - 01:00 PM', '02:00 PM - 04:00 PM', '04:00 PM - 06:00 PM'].map(slot => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, timeSlot: slot }));
                            if (formErrors.timeSlot) {
                              setFormErrors(prev => ({ ...prev, timeSlot: '' }));
                            }
                          }}
                          className={`py-2 px-3 border rounded-xl text-xs font-bold text-center transition-custom cursor-pointer ${
                            formData.timeSlot === slot 
                              ? 'bg-clinic-blue text-white border-clinic-blue' 
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    {formErrors.timeSlot && <p className="text-xs text-red-500 font-medium">{formErrors.timeSlot}</p>}
                  </div>

                </div>

                {/* Telehealth consult checkbox */}
                <div className="flex items-center gap-2.5 p-3.5 bg-blue-50/50 border border-blue-50 rounded-xl">
                  <input 
                    type="checkbox" 
                    id="telehealth"
                    name="telehealth"
                    checked={formData.telehealth}
                    onChange={handleFormChange}
                    className="w-4.5 h-4.5 text-clinic-blue rounded-md border-slate-300 focus:ring-clinic-blue cursor-pointer"
                  />
                  <label htmlFor="telehealth" className="text-xs sm:text-sm font-semibold text-slate-700 cursor-pointer">
                    Request Online Video (Telehealth) Consultation instead of clinic visit.
                  </label>
                </div>

                {/* Reason */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wide">Symptoms / Reason (Optional)</label>
                  <textarea 
                    name="reason"
                    value={formData.reason}
                    onChange={handleFormChange}
                    placeholder="Briefly describe your symptoms or medical concern..."
                    rows="3"
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 focus:border-clinic-blue focus:ring-1 focus:ring-clinic-blue rounded-xl text-sm outline-none transition-custom"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold text-white bg-clinic-blue hover:bg-clinic-navy shadow-md hover:shadow-lg transition-custom cursor-pointer text-center uppercase tracking-wider"
                >
                  Confirm Appointment
                </button>
              </form>

            </div>

          </div>

        </div>
      </section>

      {/* Appointment Success Modal */}
      <AnimatePresence>
        {successModal && successData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSuccessModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
            ></motion.div>

            {/* Content box */}
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 max-w-lg w-full relative overflow-hidden text-center z-10"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-emerald-500"></div>
              
              {/* Success Mark */}
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2">Appointment Scheduled!</h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
                Your consultation has been successfully logged. Our coordinators will contact you shortly to complete onboarding.
              </p>

              {/* Summary Details */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 mb-6 text-left space-y-3">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-200">
                  <span className="text-slate-400 font-bold uppercase tracking-wider">Reference Code</span>
                  <span className="font-mono font-bold text-slate-800 tracking-wide">{successData.refId}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs pt-1">
                  <div>
                    <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">Patient</span>
                    <span className="font-semibold text-slate-700">{successData.name}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">Consultation Mode</span>
                    <span className="font-semibold text-slate-700">{successData.telehealth ? 'Video Call (Telehealth)' : 'In-Person Visit'}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">Department</span>
                    <span className="font-semibold text-slate-700">{successData.departmentName}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">Specialist</span>
                    <span className="font-semibold text-slate-700">{successData.doctorName}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">Date</span>
                    <span className="font-semibold text-slate-700">{successData.date}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-bold uppercase tracking-wider text-[10px]">Time Slot</span>
                    <span className="font-semibold text-slate-700">{successData.timeSlot}</span>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="text-xs text-slate-400 flex items-start gap-2 max-w-sm mx-auto mb-6 text-left">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <p>Please arrive 15 minutes prior to your slot if opting for an In-Person visit. Remember to carry your government ID and insurance card.</p>
              </div>

              {/* Button */}
              <button 
                onClick={() => setSuccessModal(false)}
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-custom cursor-pointer"
              >
                Close Summary
              </button>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FAQs Section */}
      <section id="faqs" className="py-24 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-clinic-blue">Patient Information</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-clinic-dark">Frequently Asked Questions</h2>
            <p className="text-slate-500 leading-relaxed">
              Find instant responses to typical doubts on checkups, insurance approvals, emergency rooms, and pricing.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = faqOpen === index;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs hover:border-slate-200 transition-custom"
                >
                  <button
                    onClick={() => setFaqOpen(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="font-display font-extrabold text-slate-800 sm:text-base pr-4">
                      {faq.question}
                    </span>
                    <span className={`p-1 bg-slate-50 border border-slate-100 rounded-md text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-clinic-blue">Patient Stories</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-clinic-dark">Real Reviews from Verified Patients</h2>
            <p className="text-slate-500 leading-relaxed">
              Read how our dedicated medical experts and support staff helped people get back to healthy, happy lives.
            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div 
                key={i}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-100 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t border-slate-100 mt-6">
                  <div className="w-10 h-10 rounded-full bg-clinic-blue text-white font-extrabold flex items-center justify-center text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <span className="block font-bold text-slate-800 text-sm">{t.name}</span>
                    <span className="block text-xs text-slate-400">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Location, Contacts & Open Hours */}
      <section id="contact" className="py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left side: Contact Details */}
            <div className="lg:col-span-5 text-left space-y-8 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase font-extrabold tracking-widest text-clinic-blue">Get In Touch</span>
                <h2 className="font-display text-3xl font-extrabold text-clinic-dark">We Are Ready to Help You</h2>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Visit us at our central healthcare facility, email our support crew, or phone us directly for prompt answers.
                </p>
              </div>

              {/* Grid elements */}
              <div className="space-y-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-clinic-blue flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Our Address</span>
                    <p className="text-sm font-semibold text-slate-800">500 Medical Plaza, East River Road, NY 10021</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-clinic-teal flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Phone Bookings</span>
                    <p className="text-sm font-semibold text-slate-800">+1 (800) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">Email Support</span>
                    <p className="text-sm font-semibold text-slate-800">helpdesk@novacareclinic.com</p>
                  </div>
                </div>

              </div>

              {/* Open Hours */}
              <div className="p-5 bg-white border border-slate-100 rounded-2xl space-y-3">
                <span className="block text-xs uppercase font-extrabold tracking-wider text-slate-400">Consultation Schedules</span>
                <div className="space-y-1.5 text-xs text-slate-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">08:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">09:00 AM - 05:00 PM</span>
                  </div>
                  <div className="flex justify-between text-red-500 font-bold">
                    <span>Sunday</span>
                    <span>Emergency Services Only</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right side: Styled Mock Map Widget */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-lg p-3 relative overflow-hidden flex flex-col min-h-[380px] justify-center items-center text-center">
              
              {/* Map SVG Pattern Design (Premium, modern visual representation of a map) */}
              <div className="absolute inset-0 bg-slate-50 opacity-40 -z-10"></div>
              
              {/* Abstract Map Graphic */}
              <svg className="w-full h-full max-h-[300px] text-slate-200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Road patterns */}
                <path d="M-50,80 L450,80" stroke="currentColor" strokeWidth="12" />
                <path d="M-50,150 L450,150" stroke="currentColor" strokeWidth="8" />
                <path d="M100,-50 L100,250" stroke="currentColor" strokeWidth="12" />
                <path d="M280,-50 L280,250" stroke="currentColor" strokeWidth="8" />
                {/* Building blocks */}
                <rect x="20" y="20" width="60" height="40" rx="4" fill="#E2E8F0" />
                <rect x="120" y="10" width="140" height="50" rx="4" fill="#CBD5E1" />
                <rect x="300" y="20" width="80" height="40" rx="4" fill="#E2E8F0" />
                <rect x="20" y="100" width="60" height="40" rx="4" fill="#E2E8F0" />
                {/* NovaCare Clinic Hospital Area */}
                <rect x="120" y="100" width="140" height="40" rx="6" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="2" />
                <rect x="300" y="100" width="80" height="40" rx="4" fill="#E2E8F0" />
              </svg>

              {/* Pin Indicator */}
              <div className="relative -mt-16 z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-clinic-blue text-white flex items-center justify-center shadow-lg animate-bounce">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="bg-slate-900 text-white py-2 px-4 rounded-xl shadow-md border border-slate-800 text-xs font-bold mt-2">
                  NovaCare Medical Plaza
                </div>
                <p className="text-[10px] text-slate-400 mt-1">500 Medical Plaza, NY (Parking Available)</p>
                
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-bold text-slate-700 shadow-sm transition-custom"
                >
                  Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-clinic-navy text-white pt-16 pb-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
            
            {/* Brand column */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <a href="#home" className="flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-clinic-blue flex items-center justify-center text-white shadow-md">
                  <Stethoscope className="w-5.5 h-5.5" />
                </div>
                <div>
                  <span className="font-display font-extrabold text-xl tracking-tight text-white">NovaCare</span>
                  <span className="block text-[10px] uppercase font-bold tracking-widest text-clinic-teal -mt-1">Clinic</span>
                </div>
              </a>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                NovaCare Clinic is a premium multi-speciality medical facility accredited by NABH. Our mission is to integrate top-tier clinical operations with compassionate patient attention.
              </p>
              <div className="pt-2 text-xs text-slate-400 space-y-1 font-semibold">
                <span className="block">Hospital Registration: #NC-NY-98124</span>
                <span className="block">Emergency Services: 24 Hours Open</span>
              </div>
            </div>

            {/* Nav links */}
            <div className="lg:col-span-2 text-left space-y-4">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-clinic-teal">Explore Links</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><a href="#home" className="hover:text-white transition-custom">Home Base</a></li>
                <li><a href="#departments" className="hover:text-white transition-custom">Specialities</a></li>
                <li><a href="#doctors" className="hover:text-white transition-custom">Expert Doctors</a></li>
                <li><a href="#why-choose-us" className="hover:text-white transition-custom">Our Standards</a></li>
                <li><a href="#faqs" className="hover:text-white transition-custom font-medium">FAQs Accordion</a></li>
              </ul>
            </div>

            {/* Specialities links */}
            <div className="lg:col-span-3 text-left space-y-4">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-clinic-teal">Primary Disciplines</h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li><button onClick={() => handleDepartmentSelect('cardiology')} className="hover:text-white transition-custom cursor-pointer">Cardiology Wing</button></li>
                <li><button onClick={() => handleDepartmentSelect('neurology')} className="hover:text-white transition-custom cursor-pointer">Neurology Clinic</button></li>
                <li><button onClick={() => handleDepartmentSelect('orthopedics')} className="hover:text-white transition-custom cursor-pointer">Orthopedic Surgery</button></li>
                <li><button onClick={() => handleDepartmentSelect('pediatrics')} className="hover:text-white transition-custom cursor-pointer">Pediatrics Ward</button></li>
                <li><button onClick={() => handleDepartmentSelect('general-medicine')} className="hover:text-white transition-custom cursor-pointer">General Family OPD</button></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="lg:col-span-3 text-left space-y-4">
              <h4 className="text-xs uppercase font-extrabold tracking-wider text-clinic-teal">Stay Updated</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Subscribe to our quarterly health newsletter for tips and screening updates.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to health newsletter!'); }} className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Enter email address" 
                  required
                  className="w-full px-3.5 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-clinic-blue transition-custom"
                />
                <button 
                  type="submit" 
                  className="w-full py-2 bg-clinic-blue hover:bg-clinic-blue/90 text-white font-bold rounded-lg text-xs transition-custom cursor-pointer"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

          </div>

          {/* Sub-Footer details */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} NovaCare Clinic. All Rights Reserved. Designed for Premium Health Care.</p>
            <div className="flex gap-4">
              <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
              <a href="#billing" className="hover:text-slate-300">Billing Policies</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {/* Chat Window */}
        <AnimatePresence>
          {wsChatOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-2xl overflow-hidden max-w-xs w-72 mb-4 text-left border-b-4 border-emerald-500"
            >
              {/* Header */}
              <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
                    N
                  </div>
                  <div>
                    <span className="block font-bold text-sm leading-tight">NovaCare Support</span>
                    <span className="block text-[10px] text-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-pulse"></span> Online Now
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setWsChatOpen(false)}
                  className="p-1 rounded-md hover:bg-white/10 text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-4 bg-slate-50 text-xs space-y-3 min-h-[120px] max-h-56 overflow-y-auto">
                <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs max-w-[85%] text-slate-700 leading-relaxed">
                  Hello! How can we assist you today? You can ask about consultation schedules, ambulance services, or booking.
                </div>
              </div>

              {/* Chat Input */}
              <form onSubmit={handleWhatsAppSend} className="p-3 border-t border-slate-100 bg-white flex gap-2">
                <input 
                  type="text" 
                  placeholder="Type message..." 
                  value={wsMessage}
                  onChange={(e) => setWsMessage(e.target.value)}
                  className="flex-1 px-3 py-1.5 border border-slate-200 focus:outline-none focus:border-emerald-500 rounded-xl text-xs"
                />
                <button 
                  type="submit" 
                  className="w-8 h-8 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shrink-0 transition-custom cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button Widget */}
        <button 
          onClick={() => setWsChatOpen(!wsChatOpen)}
          className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-custom z-50 cursor-pointer relative group"
          aria-label="WhatsApp Support"
        >
          {/* Custom SVG WhatsApp Logo */}
          <svg className="w-7 h-7 fill-white" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.197-1.36a9.927 9.927 0 0 0 4.814 1.244h.005c5.504 0 9.99-4.478 9.99-9.985A9.99 9.99 0 0 0 12.012 2zm4.857 14.227c-.266.748-1.534 1.348-2.139 1.405-.579.056-1.127.329-3.692-.684-3.282-1.298-5.328-4.647-5.49-4.861-.162-.213-1.3-1.727-1.3-3.297 0-1.571.821-2.342 1.11-2.656.29-.314.637-.393.85-.393.212 0 .424.002.61.011.196.009.46-.073.72.553.266.639.91 2.213.989 2.378.079.166.133.359.024.577-.11.218-.165.344-.326.527-.162.184-.338.411-.482.551-.16.155-.327.324-.141.642.186.318.828 1.36 1.773 2.2 1.215 1.08 2.238 1.413 2.557 1.572.318.16.505.132.693-.083.189-.215.808-.94.102-1.265-.18-.083-1.139-.537-1.325-.62-.187-.083-.324-.124-.463.083-.14.208-.538.685-.66 1.82-.122.25-.244.29-.51.155-1.567-.783-2.585-1.543-3.618-3.32-.26-.448.26-.416.743-1.378.07-.138.035-.259-.018-.367-.053-.109-.463-1.114-.634-1.527-.167-.403-.335-.347-.463-.353-.122-.006-.26-.008-.399-.008-.139 0-.365.052-.556.259-.19.208-.73.714-.73 1.74 0 1.027.75 2.022.854 2.162.104.14 1.478 2.253 3.58 3.161.5.216.89.345 1.195.44.503.16.96.137 1.32.083.402-.06 1.238-.506 1.414-1.002.176-.496.176-.922.123-1.002-.053-.08-.196-.129-.408-.235z"/>
          </svg>
          
          {/* Notification Dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-emerald-500"></span>
        </button>
      </div>

    </div>
  );
}
