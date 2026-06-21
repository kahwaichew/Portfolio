import { motion } from 'motion/react';
import { X, Mail, Phone, MapPin, Linkedin, Globe, Printer, Copy, Check, FileText } from 'lucide-react';
import { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
CHEW KAH WAI
Johor, Malaysia | chewkw30@gmail.com | +60 11-5910 2339
LinkedIn: linkedin.com/in/kahwaichew | Portfolio: https://kahwaichew.github.io/Portfolio

SUMMARY
Product-oriented Software Engineer with experience building and maintaining cross-platform mobile and web applications across retail technology, POS systems, logistics, and smart farming platforms. Experienced in Flutter, Django, REST API integration, UI/UX design, mobile deployment, and feature ownership from requirement gathering to production release.

EDUCATION
Multimedia University
Bachelor of Information Technology, Minor in Security Technology, CGPA: 3.93

EXPERIENCE
Mobile Application Specialist (Mar 2025 – Aug 2026)
Always Marketing (M) Sdn. Bhd. | Kuala Lumpur, Malaysia
- Led feature development and enhancement for RetailAIM+, a retail workforce management platform used by merchandisers and promoters.
- Designed and implemented push notification services, Proof of Delivery (POD), offline functionality, and order picking systems.
- Collaborated with backend teams to integrate Flutter frontend with .NET REST APIs.
- Managed release cycles for Apple App Store and Google Play Store.

Programmer (Jul 2024 – Oct 2024)
Aptsys Pte. Ltd. | Singapore
- Developed Jade2.0 POS ecosystem on mobile, tablets, and kiosks in Flutter.
- Enhanced application responsiveness across multiple screen sizes and hardware configurations.
- Collaborated with hardware suppliers for device integration and deployment compatibility.

Software Engineer (Aug 2022 – Mar 2024)
iRadar Sdn. Bhd. | Malacca, Malaysia
- Developed GoTani smart farming platform with AI-based tree recognition, IoT monitoring, and drone mapping.
- Built REST APIs in Django, interactive layouts in React and Flutter.

TECHNICAL SKILLS
Flutter, Dart, Django, Python, React, JavaScript, .NET API Integration, Mobile/Web Development, RESTful APIs, SQL, Firebase, Figma, UI/UX Design.
    `.trim();

    navigator.clipboard.writeText(resumeText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto sm:py-6">
      {/* Inject print-specific styles dynamically */}
      <style>{`
        @media print {
          /* Hide everything on the page */
          body * {
            visibility: hidden !important;
          }
          /* Show only the print area and its children */
          #resume-print-area, #resume-print-area * {
            visibility: visible !important;
          }
          #resume-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            margin: 0 !important;
            padding: 24px !important;
            background: white !important;
            color: black !important;
            box-shadow: none !important;
          }
          /* Prevent page break inside single experience blocks */
          .print-section {
            page-break-inside: avoid !important;
          }
          /* Add subtle line delimiters */
          .print-divider {
            border-bottom: 2px solid #cbd5e1 !important;
          }
        }
      `}</style>

      {/* Modal Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative bg-white w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
        id="resume-modal-container"
      >
        {/* Modal Top Actions Row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50 rounded-t-2xl">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 leading-none">Chew's Resume</h2>
              <span className="text-xs font-medium text-slate-500">View, print, or copy the credentials</span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Copy Button */}
            <button
              onClick={handleCopyText}
              className="inline-flex items-center justify-center p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Copy Resume Content"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span className="text-xs font-semibold ml-1.5 hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
            </button>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center p-2 text-slate-500 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="text-xs font-semibold ml-1.5 hidden sm:inline">Print / Save PDF</span>
            </button>

            <div className="w-px h-6 bg-slate-200" />

            {/* Close modal */}
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all"
              id="close-resume-modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-slate-100/50">
          
          {/* Printable Wrapper (Standard A4 Format Preview) */}
          <div
            id="resume-print-area"
            className="w-full mx-auto bg-white border border-slate-200/60 shadow-md rounded-xl p-6 sm:p-10 md:p-12 text-slate-800 font-sans text-[13px] leading-relaxed max-w-3xl"
          >
            {/* Header / Name */}
            <div className="text-center pb-6 border-b border-slate-200 print-divider">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 font-sans mb-3">Chew Kah Wai</h1>
              
              {/* Contacts Line */}
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs text-slate-600 font-medium font-sans">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 print:hidden" /> Johor, Malaysia
                </span>
                <span className="text-slate-300">•</span>
                <a href="mailto:chewkw30@gmail.com" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">
                  <Mail className="w-3.5 h-3.5 text-slate-400 print:hidden" /> chewkw30@gmail.com
                </a>
                <span className="text-slate-300">•</span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-slate-400 print:hidden" /> +60 11-5910 2339
                </span>
              </div>

              {/* Links Line */}
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 font-medium font-sans mt-2.5">
                <a href="https://linkedin.com/in/kahwaichew" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400 print:hidden" /> linkedin.com/in/kahwaichew
                </a>
                <span className="text-slate-300">•</span>
                <a href="https://kahwaichew.github.io/Portfolio" target="_blank" rel="noreferrer" className="flex items-center gap-1 text-slate-600 hover:text-indigo-600">
                  <Globe className="w-3.5 h-3.5 text-slate-400 print:hidden" /> Portfolio Website
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="py-6 border-b border-slate-150 print-divider print-section">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mb-2.5">Summary</h3>
              <p className="text-slate-700 font-sans leading-relaxed">
                Product-oriented Software Engineer with experience building and maintaining cross-platform mobile and web applications across retail technology, POS systems, logistics, and smart farming platforms. Experienced in Flutter, Django, REST API integration, UI/UX design, mobile deployment, and feature ownership from requirement gathering to production release.
              </p>
              <p className="text-slate-700 font-sans leading-relaxed mt-2.5">
                Strong background in developing business-critical systems including retail workforce management platforms, POS ecosystems, delivery solutions, and IoT-integrated farming applications. Comfortable collaborating across product, backend, and engineering teams while driving feature implementation, testing, deployment, and ongoing production support.
              </p>
            </div>

            {/* Education */}
            <div className="py-6 border-b border-slate-150 print-divider print-section">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mb-3">Education</h3>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Multimedia University</h4>
                  <p className="text-slate-600 font-sans mt-0.5">Bachelor of Information Technology, Minor in Security Technology</p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md print:bg-none print:text-slate-800 print:p-0">
                    CGPA: 3.93
                  </span>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="py-6 border-b border-slate-150 print-divider">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mb-4">Experience</h3>
              <div className="space-y-6">
                
                {/* Job 1 */}
                <div className="print-section">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Mobile Application Specialist</h4>
                      <span className="text-slate-600 font-medium">Always Marketing (M) Sdn. Bhd.</span>
                    </div>
                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                      <p className="text-[11px] font-semibold text-[#4f46e5]">Mar 2025 – Aug 2026</p>
                      <p className="text-xs text-slate-400 font-medium">Kuala Lumpur, Malaysia</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-sans">
                    <li>Led feature development and enhancement for <strong className="text-slate-800 font-semibold">RetailAIM+</strong>, a retail workforce management platform used by merchandisers and promoters for daily operational workflows.</li>
                    <li>Designed and implemented new mobile application features including Proof of Delivery (POD), order picking workflows, leave management systems, offline functionality, and push notification services.</li>
                    <li>Collaborated with backend teams integrating Flutter frontend applications with .NET REST APIs to support scalable retail operations.</li>
                    <li>Managed end-to-end mobile release cycles including testing, debugging, deployment, and maintenance for both Apple App Store and Google Play Store.</li>
                    <li>Conducted UI/UX design and feature prototyping using Figma to improve workflow usability and operational efficiency.</li>
                    <li>Provided production support, customer issue investigation, and bug fixing for live enterprise retail systems.</li>
                    <li>Successfully migrated legacy Ionic application features into a modern Flutter-based architecture.</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="print-section">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Programmer</h4>
                      <span className="text-slate-600 font-medium">Aptsys Pte. Ltd.</span>
                    </div>
                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                      <p className="text-[11px] font-semibold text-[#4f46e5]">Jul 2024 – Oct 2024</p>
                      <p className="text-xs text-slate-400 font-medium">Singapore</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-sans">
                    <li>Developed <strong className="text-slate-800 font-semibold">Jade2.0</strong>, a cross-platform POS ecosystem supporting traditional POS terminals, iPads, handheld Android POS devices, self-order kiosks, and kitchen display systems.</li>
                    <li>Enhanced application responsiveness across multiple screen sizes and hardware configurations.</li>
                    <li>Collaborated with Android POS hardware suppliers to support new device integrations and deployment compatibility.</li>
                    <li>Developed Flutter frontend components and Android-native integrations for POS hardware support and peripheral compatibility.</li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="print-section">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Software Engineer</h4>
                      <span className="text-slate-600 font-medium">iRadar Sdn. Bhd.</span>
                    </div>
                    <div className="text-left sm:text-right mt-1 sm:mt-0">
                      <p className="text-[11px] font-semibold text-[#4f46e5]">Aug 2022 – Mar 2024</p>
                      <p className="text-xs text-slate-400 font-medium">Malacca, Malaysia</p>
                    </div>
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-700 font-sans">
                    <li>Developed and maintained <strong className="text-slate-800 font-semibold">GoTani</strong>, a smart farming platform integrating drone mapping, IoT sensors, AI-based tree recognition, and hyperspectral imaging technologies.</li>
                    <li>Developed backend APIs using Django and implemented frontend/mobile features using Flutter and JavaScript.</li>
                    <li>Collaborated with engineering teams on automated irrigation system workflows and farm monitoring solutions.</li>
                    <li>Participated in requirement gathering, feature planning, testing, and deployment activities across multiple projects.</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Projects */}
            <div className="py-6 border-b border-slate-150 print-divider print-section">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mb-4">Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-slate-950 text-sm">RetailAIM+</h4>
                  <p className="text-slate-700 mt-1">Developed operational modules supporting workforce scheduling, outlet visits, attendance tracking, AI-assisted product recognition, Proof of Delivery (POD) and order picking systems. Migrated all major legacy features into Flutter.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm">R2Home</h4>
                  <p className="text-slate-700 mt-1">Neighborhood delivery ecosystem integrating promoter workflows with commerce apps. Built promoter product management workflows enabling image uploads, price updates, and online campaigns.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm">Jade2.0</h4>
                  <p className="text-slate-700 mt-1">Transitioned iPad POS into a highly responsive, multi-platform Flutter architecture. Added dual-screen POS support for live cashier and customer interaction flows.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 text-sm">GoTani</h4>
                  <p className="text-slate-700 mt-1">Built farm analytics dashboards visualizing IoT sensor data, trees metrics, and drone mapping indices. Revamped web/mobile UI for remote farm managers.</p>
                </div>
              </div>
            </div>

            {/* Skills & General */}
            <div className="py-6 print-section">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Tech Skills List */}
                <div className="md:col-span-8">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mb-2.5">Technical Skills</h3>
                  <p className="text-slate-700 text-xs font-medium leading-relaxed">
                    Flutter, Dart, Django, Python, React, JavaScript, HTML5/CSS3, .NET API integration, Cross-platform App Development, RESTful APIs, Offline Synchronization, Push Notifications, App/Play Store Deployment, Figma, Wireframing, Agile Scrum, Git, MySQL, Firebase.
                  </p>
                </div>
                {/* Languages & Pub */}
                <div className="md:col-span-4">
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mb-2.5">Languages</h3>
                  <p className="text-slate-700 text-xs font-semibold">
                    Mandarin (Native) • English (Fluent) • Malay (Fluent) • Cantonese (Fluent)
                  </p>
                  
                  <h3 className="text-[11px] font-bold uppercase tracking-widest text-[#4f46e5] mt-4 mb-1.5">Publication</h3>
                  <p className="text-slate-700 text-xs leading-normal">
                    Email Plugin Suite for Identity-Based Encryption (CITIC 2022)
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
