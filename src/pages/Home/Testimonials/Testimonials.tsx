import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Button } from "antd";
import { motion } from "framer-motion";

// Sample testimonials data
const testimonials = [
  {
    id: 1,
    name: "Monir KHan",
    feedback:
      "This service was amazing! The car was in great condition and the booking process was smooth and hassle-free.",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/happy-business-man-wearing-grey-suit-standing-isolated-white-wall_231208-9211.jpg",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      whatsapp: "https://wa.me/1234567890",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "I had a fantastic experience. The customer service was excellent, and I would highly recommend this to others!",
    rating: 4,
    image:
      "https://img.freepik.com/free-photo/businessman-smoking-isolated-white-background_1368-6441.jpg",
    socialMedia: {
      facebook: "https://facebook.com/janesmith",
      twitter: "https://twitter.com/janesmith",
      instagram: "https://instagram.com/janesmith",
      whatsapp: "https://wa.me/1234567890",
    },
  },
  {
    id: 3,
    name: "Alex Johnson",
    feedback:
      "Great variety of cars and very competitive pricing. I found the perfect car for my trip.",
    rating: 4,
    image:
      "https://img.freepik.com/free-photo/happy-business-man-wearing-grey-suit-standing-isolated-white-wall_231208-9211.jpg",
    socialMedia: {
      facebook: "https://facebook.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      instagram: "https://instagram.com/alexjohnson",
      whatsapp: "https://wa.me/1234567890",
    },
  },
  {
    id: 4,
    name: "Arosh KHan",
    feedback:
      "This service was amazing! The car was in great condition and the booking process was smooth and hassle-free.",
    rating: 5,
    image:
      "https://img.freepik.com/free-photo/happy-business-man-wearing-grey-suit-standing-isolated-white-wall_231208-9211.jpg",
    socialMedia: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      instagram: "https://instagram.com/johndoe",
      whatsapp: "https://wa.me/1234567890",
    },
  },
];

function CustomerTestimonials() {
  return (
    <div className=" bg-slate-100">
      <div className=" w-11/12 grid md:grid-cols-2 gap-10  mx-auto px-4  my-10 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={testimonial.id}
              className="bg-slate-100 rounded-2xl shadow-2xl  p-6 flex flex-col justify-between"
            >
              <p className="text-gray-600  italic font-serif  mb-4">
                {testimonial.feedback}
              </p>
              <div className="flex items-center mb-4">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.234 3.81a1 1 0 00.95.69h4.01c.969 0 1.371 1.24.588 1.81l-3.239 2.353a1 1 0 00-.364 1.118l1.234 3.81c.3.921-.755 1.688-1.538 1.118l-3.239-2.353a1 1 0 00-1.175 0l-3.239 2.353c-.782.57-1.838-.197-1.538-1.118l1.234-3.81a1 1 0 00-.364-1.118L2.98 9.237c-.783-.57-.38-1.81.588-1.81h4.01a1 1 0 00.95-.69l1.234-3.81z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex flex-col items-center">
                  <img
                    className="w-16 h-16 rounded-full mt-2"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <div className="flex space-x-3 mt-1">
                    <a
                      href={testimonial.socialMedia.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <FaFacebook size={18} />
                    </a>
                    <a
                      href={testimonial.socialMedia.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600"
                    >
                      <FaTwitter size={18} />
                    </a>
                    <a
                      href={testimonial.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-700"
                    >
                      <FaInstagram size={18} />
                    </a>
                    <a
                      href={testimonial.socialMedia.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-700"
                    >
                      <FaWhatsapp size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="space-y-10">
            <div className=" space-y-4 my-5">
              <h1 className="text-[#050a15] text-5xl font-extrabold">
                <span className="text-[#234896]"> Thousands</span> of satisfied
                customers
              </h1>
              <p>
                At Car Rent BD, we offer a range of car rentals to cater to your
                specific needs:
              </p>
            </div>
            <p className="text-xl">
              Over the last 20 years we’ve had more reviews than we can count.
              We’ve included as many as we can here so you can see what others
              have to say about their GO experiences.
            </p>
            <Button className="bg-primary text-white">See More Reviews</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerTestimonials;
