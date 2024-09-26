import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    photo:
      "https://img.freepik.com/free-photo/business-man-using-his-mobile-phone_23-2148018588.jpg",
  },
  {
    name: "Jane Smith",
    role: "Chief Operating Officer",
    photo:
      "https://img.freepik.com/premium-photo/corporate-man_1164846-22755.jpg?",
  },
  {
    name: "Michael Johnson",
    role: "Head of Marketing",
    photo:
      "https://img.freepik.com/free-photo/successful-handsome-business-man-office_1303-20918.jpg",
  },
];

const fleetInfo = [
  {
    category: "Economy",
    description:
      "Our economy cars are affordable and fuel-efficient, perfect for budget-conscious travelers. Whether you're going on a solo trip or with friends, these cars offer comfort, reliability, and great value.",
  },
  {
    category: "Luxury",
    description:
      "Indulge in our luxury fleet for a refined driving experience. Our high-end vehicles are designed for those who value comfort, elegance, and top-notch performance during their journey.",
  },
  {
    category: "SUVs",
    description:
      "Need more space for family or adventure? Our SUVs provide ample room, safety features, and comfort for both short and long trips. They are perfect for families and outdoor lovers.",
  },
];

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <motion.header
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-gray-200">
          Learn more about our company's history, team, fleet, and our
          commitment to customer service.
        </p>
      </motion.header>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Company History</h2>
        <p className="text-gray-200">
          Since our founding in 2005, we’ve been dedicated to providing
          exceptional car rental services to our customers. Over the years, our
          fleet has expanded to meet the diverse needs of travelers. Today, we
          are a leader in the industry, recognized for our reliability and
          customer-first approach. Our vision is to continue offering the best
          in service, sustainability, and convenience, helping people enjoy
          their journeys with ease and confidence.
        </p>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 shadow-md rounded-lg p-6 text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Our Fleet</h2>
        <div className="space-y-4">
          {fleetInfo.map((fleet, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-semibold">{fleet.category}</h3>
              <p className="text-gray-300">{fleet.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Values & Commitment</h2>
        <p className="text-gray-200">
          We are committed to delivering the highest level of customer
          satisfaction. Our core values include integrity, quality, and
          sustainability. We aim to provide eco-friendly vehicles and uphold
          responsible practices in every aspect of our business.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
          <p className="text-lg mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p className="text-lg mb-2">
            <strong>Email:</strong> info@carrentalcompany.com
          </p>
          <p className="text-lg">
            <strong>Address:</strong> 123 Main Street, Anytown, USA
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;
