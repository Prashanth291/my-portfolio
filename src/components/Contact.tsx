import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Get In Touch</h2>
        <motion.form
          action="https://formspree.io/f/myznbrez"
          method="POST"
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-slate-300 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-slate-300 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-slate-300 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-500 text-white font-bold px-8 py-3 rounded-md hover:bg-cyan-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;