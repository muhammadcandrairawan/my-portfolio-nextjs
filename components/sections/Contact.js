import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { contacts } from "@/data/contact";

const iconMap = {
  Email: <Mail size={18} />,
  LinkedIn: <Linkedin size={18} />,
  GitHub: <Github size={18} />,
  WhatsApp: <MessageCircle size={18} />,
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20"
    >
      {/* Section Label */}
      <p className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-3">
        Get in touch
      </p>

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 mb-3">
        Contact
      </h2>

      {/* Desc */}
      <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-12">
        Feel free to reach out for freelance projects or any questions. I'm
        always open to discussing new opportunities.
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 border border-gray-100 rounded-xl px-5 py-4 hover:bg-gray-50 transition-colors"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 shrink-0">
              {iconMap[contact.label]}
            </div>

            {/* Info */}
            <div className="flex flex-col gap-0.5 min-w-0 overflow-hidden">
              <span className="text-xs text-gray-400">{contact.label}</span>
              <span className="text-sm font-medium text-gray-900 truncate">
                {contact.value}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Note */}
      <div className="flex items-start gap-3 bg-gray-50 rounded-xl px-5 py-4">
        <span className="text-base shrink-0">⏱️</span>
        <p className="text-sm text-gray-500 leading-relaxed">
          I typically respond within 1–2 business days. For urgent inquiries,{" "}
          <span className="text-gray-900 font-medium">WhatsApp</span> is the
          fastest way to reach me.
        </p>
      </div>
    </section>
  );
}
