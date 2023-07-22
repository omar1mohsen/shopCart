"use client";
import React, { useRef, useState } from "react";
import { GrMail } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import MailMessage from "./MailMessage";
import { motion } from "framer-motion";
import { UserAuth } from "../context/AuthContext";
import Message from "../product/[slug]/components/Message";
import internal from "stream";
import IsValidEmail from "../utilts/helpers/IsVaildEmail";

interface FormData {
  name?: string;
  email?: string;
}

function SubForm() {
  const form = useRef<any>();
  const [message, setMessage] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const { user } = UserAuth();
  const [showMsg, setShowMsg] = React.useState(true);
  const [error, setError] = useState("");
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "email") {
      setFormData({ ...FormData, email: e.target.value });
    } else {
      setFormData({ ...FormData, name: e.target.value });
    }
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (FormData.email === "" || FormData.email === " " || FormData.name === "" || FormData.name === " ") {
      setError("Please check inputs fields");
    } else {
      if (!IsValidEmail(FormData.email)) {
        setError("Please enter a valid email.");
      } else {
        if (user) {
          setError('')
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
                setError(error.text);
              }
            );
        } else {
          setShowMsg(true);
          setAuthMessage("Please login to add products");
        }
      }
    }
  };

  return (
    <>
      {authMessage && (
        <Message
          message={authMessage}
          showMsg={showMsg}
          setShowMsg={setShowMsg}
        />
      )}
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
          {error ? (
            <p className="bg-gray-500/30 text-red-500 my-2 py-2 px-2 rounded">
              {error}
            </p>
          ) : null}
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
                onChange={(e) => handleChange(e)}
                name="user_name"
                type="text"
                placeholder="Name"
                className=" text-[var(--main-color)] placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-100 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              />
              <input
                onChange={(e) => handleChange(e)}
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
    </>
  );
}

export default SubForm;
