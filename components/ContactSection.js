const contacts = [
  {
    label: "Email",
    value: "muhammadcandrairawan.business@gmail.com",
    href: "mailto:muhammadcandrairawan.business@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammadcandrairawan",
    href: "https://id.linkedin.com/in/muhammadcandrairawan",
  },
  {
    label: "GitHub",
    value: "github.com/muhammadcandrairawan",
    href: "https://github.com/muhammadcandrairawan",
  },
  {
    label: "WhatsApp",
    value: "+62 812 1505 6825",
    href: "https://wa.me/6281215056825"
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
          Contact
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg text-center">
          Feel free to reach out — I'm open to new opportunities and
          collaborations.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition group"
            >
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                {contact.label}
              </p>
              <p className="text-sm text-blue-600 group-hover:text-blue-700 break-all">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}