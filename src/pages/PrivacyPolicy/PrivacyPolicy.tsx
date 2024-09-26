import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Privacy Policy
      </motion.h1>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          1. Introduction
        </motion.h2>
        <p>
          Car Rent BD (“we,” “us,” “our”) is committed to protecting the privacy
          of our customers. This Privacy Policy outlines how we collect, use,
          disclose, and safeguard your information when you visit our website
          and use our services.
        </p>
      </motion.section>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          2. Information We Collect
        </motion.h2>
        <p>
          <strong>Personal Information:</strong> When you make a reservation, we
          may collect personal details such as your name, address, email, phone
          number, and payment information.
        </p>
        <p>
          <strong>Usage Data:</strong> We collect information on how you access
          and use our website. This includes your IP address, browser type, and
          pages visited.
        </p>
      </motion.section>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          3. How We Use Your Information
        </motion.h2>
        <p>We use your information to:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Process and manage your bookings.</li>
          <li>
            Communicate with you about your reservations and our services.
          </li>
          <li>Improve our website and customer service.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          4. Sharing Your Information
        </motion.h2>
        <p>
          We do not sell or rent your personal information to third parties.
          However, we may share your information with:
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <strong>Service Providers:</strong> Third-party companies that
            perform services on our behalf, such as payment processing and
            vehicle maintenance.
          </li>
          <li>
            <strong>Legal Authorities:</strong> When required by law or to
            protect our rights.
          </li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          5. Data Security
        </motion.h2>
        <p>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, use, or disclosure.
        </p>
      </motion.section>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          6. Your Rights
        </motion.h2>
        <p>You have the right to:</p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Access and update your personal information.</li>
          <li>Request the deletion of your data.</li>
          <li>Opt-out of marketing communications.</li>
        </ul>
      </motion.section>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.6 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          7. Changes to This Privacy Policy
        </motion.h2>
        <p>
          We may update this policy periodically. We will notify you of any
          changes by posting the new policy on our website with an updated
          effective date.
        </p>
      </motion.section>

      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        <motion.h2
          className="text-3xl font-semibold mb-4 text-gray-800"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
        >
          8. Contact Us
        </motion.h2>
        <div className="bg-gray-100 p-4 border border-gray-300 rounded-lg">
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@carrentbd.com"
              className="text-blue-500 hover:underline"
            >
              info@carrentbd.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+8801935660304"
              className="text-blue-500 hover:underline"
            >
              +8801935660304
            </a>
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default PrivacyPolicy;
