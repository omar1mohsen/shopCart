"use client";
import React, { useRef, useState } from "react";
import { GrMail } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import MailMessage from "./MailMessage";
import { motion } from "framer-motion";

function SubForm() {
  const form = useRef<any>();
  const [message, setMessage] = useState("");
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z1mrcll",
        "template_4c68pmi",
        form.current,
        "WPfj-RiLdHo_GywVs"
      )
      .then(
        (result) => {
          setMessage("");
          e.target.reset();
          setMessage("done");
          setTimeout(() => {
            setMessage("");
          }, 2300);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className="py-7 md:py-10 px-4 overflow-hidden" id="contactus">
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        transition={{ duration: 1, ease: "linear" }}
        whileInView={{ opacity: 1, y: 0 }}
        className="card w-100 md:w-[60%] py-12 px-12 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 1, ease: "linear" }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text mb-2"
        >
          <GrMail className=" text-[var(--sec-color)] w-12 h-12 mx-auto" />
          <h3 className="text-center text-[var(--sec-text)] text-xl md:text-2xl font-semibold my-3">
            Subscribe Now!
          </h3>
          <p className="text-center text-[var(--main-text)] text-lg md:text-xl my-3">
            Subscribe us for latest updates
          </p>
        </motion.div>
        <motion.form
          initial={{ opacity: 0, y: "100%" }}
          transition={{ duration: 1, ease: "linear" }}
          whileInView={{ opacity: 1, y: 0 }}
          method="post"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col space-y-7 justify-evenly items-center">
            <input
              name="user_name"
              type="text"
              placeholder="Name"
              className=" text-[var(--main-color)] placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              className=" text-[var(--main-color)] placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            />
          </div>
          <input
            id="submit"
            type="submit"
            defaultValue="Subscribe "
            className="block tex-xl font-semibold border-2 w-fit h-fit py-3 my-5 mx-auto  rounded-xl bg-[var(--main-color)] px-12  text-white  cursor-pointer hover:bg-green-600 hover:text-green-200"
          />
        </motion.form>
        <p id="print" />
      </motion.div>
      <MailMessage display={message === "done" ? "null" : "!hidden"} />
    </main>
  );
}

export default SubForm;
