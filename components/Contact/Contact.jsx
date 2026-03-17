"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { toast } from "sonner";
import emailjs from "emailjs-com";

const Contact = () => {
  const [userdata, setUserdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // Loader state

  const postuserdata = (event) => {
    const { name, value } = event.target;
    setUserdata({ ...userdata, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();

    const { firstname, lastname, phone, email, message, services } = userdata;

    if (!firstname || !lastname || !phone || !email || !message || !services) {
      toast.warning("Please fill out all fields before submitting.", {
        className:
          "bg-accent text-black rounded-md font-semibold p-4 shadow-md border border-yellow-700",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (phone.length < 10 || isNaN(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    setLoading(true); // Start loader

    try {
      const emailData = {
        firstname,
        lastname,
        phone,
        email,
        services,
        message,
      };

      // Send email via EmailJS
      const emailResult = await emailjs.send(
        "service_48fchsl",
        "template_0o92jq3",
        emailData,
        "vS3FpQUuUgcTqkgOh"
      );
      console.log("Email sent successfully:", emailResult);

      // Send form data to Firebase
      const firebaseResponse = await fetch(
        "https://harmeetportfolioform-default-rtdb.firebaseio.com/formdata.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailData),
        }
      );

      if (!firebaseResponse.ok) {
        throw new Error("Failed to send data to Firebase");
      }
      console.log("Data saved to Firebase successfully:", firebaseResponse);

      setUserdata({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        services: "",
        message: "",
      });

      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send form data. Please try again.");
    } finally {
      setLoading(false); // Stop loader
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form with loader */}
          <div className="xl:h-[50%] order-1 xl:order-none relative">
            {/* Loader */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 rounded-xl">
                <div className="loader border-4 border-t-accent border-gray-600 rounded-full w-12 h-12 animate-spin"></div>
              </div>
            )}

            <form
              className={`flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl ${
                loading ? "blur-sm pointer-events-none" : ""
              }`}
            >
              <h3 className="text-4xl text-accent">Lets work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={userdata.firstname}
                  onChange={postuserdata}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={userdata.lastname}
                  onChange={postuserdata}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userdata.email}
                  onChange={postuserdata}
                />
                <Input
                  type="phone"
                  name="phone"
                  placeholder="Phone"
                  value={userdata.phone}
                  onChange={postuserdata}
                />
              </div>

              <Select
                value={userdata.services}
                onValueChange={(value) =>
                  setUserdata({ ...userdata, services: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI Design">UI/UX Design</SelectItem>
                    <SelectItem value="React JS Development">
                      React.js Development
                    </SelectItem>
                    <SelectItem value="Next.js Development">
                      Next.js Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[120px]"
                type="text"
                name="message"
                placeholder="Message"
                value={userdata.message}
                onChange={postuserdata}
              />

              <Button size="md" className="max-w-40" onClick={submitData}>
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-4 order-2 xl:order-none mb-8 xl:mb-0">
            <div className="bg-[#27272c] text-accent p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h4 className="text-2xl text-white mb-4">Contact Information</h4>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition-all duration-200">
                  <FaPhoneAlt className="text-2xl text-accent" />
                  <span className="text-sm sm:text-lg text-white text-center sm:text-left">{`87803-40458`}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition-all duration-200">
                  <FaEnvelope className="text-2xl text-accent" />
                  <span className="text-sm sm:text-lg text-white text-center sm:text-left">{`gauswamihariomgiri@gmail.com`}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3 hover:bg-gray-700 p-3 rounded-lg transition-all duration-200">
                  <FaMapMarkerAlt className="text-2xl text-accent" />
                  <span className="text-sm sm:text-lg text-white text-center sm:text-left">{`Based in Vadodara, India`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
