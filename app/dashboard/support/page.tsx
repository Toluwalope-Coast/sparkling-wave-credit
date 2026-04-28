"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSingleApiRequest } from "@/lib/apiRequest";

const SupportPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectionOption, setSelectionOption] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await getSingleApiRequest("/api/borrowers_me/");
        const { first_name, last_name, phone_number } = data;
        setName(`${first_name} ${last_name}`);
        setPhoneNumber(phone_number);
      } catch (error) {
        toast.error("Failed to load user data");
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const formData = {
      name,
      phone_number: phoneNumber,
      selectionOption,
      message: comments,
    };

    try {
      // Send form data via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success("Complaint submitted successfully");

      // Show success message for Email Sent
      setLoading(false);

      // Send message to WhatsApp
      sendToWhatsApp();
    } catch (error) {
      toast.error("Failed to submit complaint. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const sendToWhatsApp = () => {
    const whatsappMessage = `Hello, my name is ${name}.\n\nPhone: ${phoneNumber}\nSelected Option: ${selectionOption}\n\nComments:\n${comments}`;
    const whatsappUrl = `https://wa.me/2347014101340?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div>
      <ToastContainer />
      <section className="flex items-center justify-center h-full w-full">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 shadow-xl lg:shadow-none mx-auto w-full md:max-w-[45vw] p-10 rounded-md dark:bg-[#272727]"
          aria-label="borrower-form"
        >
          <div className="space-y-2">
            <h2 className="text-xl font-bold dark:text-foreground">
              We{"'"}re Here to Help.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Submit your Complaint.
            </p>
          </div>

          <div className="dark:text-foreground">
            <div className="border-b border-gray-300 flex items-center gap-2">
              <Input
                id="full-name"
                value={name}
                readOnly
                placeholder="Full Name"
                className="border-b-0 border-gray-300 bg-transparent p-0 text-[1rem]"
              />
            </div>
          </div>

          <div className="dark:text-foreground">
            <div className="border-b border-gray-300 flex items-center gap-2">
              <Input
                id="phone-number"
                value={phoneNumber}
                readOnly
                placeholder="Phone Number"
                className="border-b-0 border-gray-300 bg-transparent p-0 text-[1rem]"
              />
            </div>
          </div>

          <div className="dark:text-foreground">
            <div className="border-b border-gray-300 flex items-center gap-2">
              <select
                id="selection"
                value={selectionOption}
                onChange={(e) => setSelectionOption(e.target.value)}
                className="w-full bg-transparent focus:outline-none px-0 py-2"
              >
                <option className="dark:text-black" value="" disabled>
                  Select an option
                </option>
                <option className="dark:text-black" value="option1">
                  Option 1
                </option>
                <option className="dark:text-black" value="option2">
                  Option 2
                </option>
                <option className="dark:text-black" value="option3">
                  Option 3
                </option>
                <option className="dark:text-black" value="option4">
                  Option 4
                </option>
              </select>
            </div>
          </div>

          <div className="dark:text-foreground">
            <div className="border-b border-gray-300 flex flex-col gap-2">
              <textarea
                id="comments"
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments"
                rows={6}
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full primary-button dark:bg-emerald-500"
          >
            {loading ? (
              <span className="flex items-center">
                Submitting...
                <span className="spin mx-2 w-4 h-4 border-2 border-t-2 border-white rounded-full"></span>
              </span>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </section>
    </div>
  );
};

export default SupportPage;
