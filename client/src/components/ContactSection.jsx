export default function ContactSection() {
  return (
    <section className="py-24 px-6 text-center ">
      <h2 className="text-4xl text-black font-semibold mb-10">Contact Us</h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left">
        {/* Contact Info */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
          <h3 className="text-xl font-semibold mb-6 text-indigo-900">
            Get in Touch
          </h3>

          <p className="mb-4 text-gray-900">
            📧 Email: info@softwalletinnovative technologies.cloud
          </p>

          <p className="mb-4 text-gray-900">📞 Phone: +91 7599741491</p>

          <p className="text-gray-900">📍 Location: Srinagar, Jammu & Kashmir, India</p>
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            title="Srinagar Jammu & Kashmir Map"
            src="https://www.google.com/maps?q=Srinagar%20Kashmir&output=embed"
            width="100%"
            height="100%"
            className="min-h-[300px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
