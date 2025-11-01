"use client";

import { BlodText, Text } from "@/ui/typography";
import { sendEmail } from "@/utils/sendEmail";
import axios from "axios";
import { FormEventHandler, useState } from "react";

export const ContactForm: React.FC = () => {
  const [FirstName, setFirstName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Subject, setSubject] = useState<string>("");
  const [ProjectDatails, setProjectDatails] = useState<string>("");
  const [MessageSent, setMessageSent] = useState<boolean>(false);

  const sendMessage = async () => {
    setFirstName("");
    setSubject("");
    setEmail("");
    setProjectDatails("");
    const message = ` email :  ${Email}  , subject : ${Subject} , FirstName : ${FirstName} , projectDetails : ${ProjectDatails}`;
    const response = await axios.post("/api/sendContactEmail", { message });
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  return (
    <div
      style={{ borderTop: "0.5px solid white" }}
      id="contactForm"
      className=" flex w-full relative items-center justify-center bg-black "
    >
      <div className="flex rounded-lg flex-col w-full laptop:w-2/3  items-center justify-center px-4 py-8">
        <div className="flex flex-col gap-4 my-4">
          <BlodText className="text-4xl text-center   text-primaryLight ">
            {" "}
            CONTACT US
          </BlodText>
          {MessageSent ? (
            <BlodText className="text-xl text-center   text-whiteYellwed ">
              {" "}
              Thank you ! <br /> we received your message . we will get back to
              you asap !
            </BlodText>
          ) : (
            <Text className="text-xl text-center laptop:text-start text-white ">
              Leave us a little info, and we&apos;ll be in touch.
            </Text>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex flex-col gap-9 w-full"
        >
          <div className=" w-full">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              First name
            </label>
            <input
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your first name"
              required
            />
          </div>
          <div className=" w-full">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Email
            </label>
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your email"
              required
            />
          </div>
          <div className=" w-full">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Subject
            </label>
            <input
              value={Subject}
              onChange={(e) => setSubject(e.target.value)}
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="your subject"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-white dark:text-white">
              Project Details
            </label>
            <textarea
              value={ProjectDatails}
              onChange={(e) => setProjectDatails(e.target.value)}
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="tell us about your projcet details"
            ></textarea>
          </div>
          <div className="w-full flex  items-center justify-center">
            <button
              type="submit"
              style={{ borderWidth: "0.25px" }}
              className=" bg-gray-800 active:bg-gray-700  text-whiteYellwed rounded-lg  font-bold py-2 px-8 border-whiteYellwed hover:border-0 hover:bg-gray-900 w-fit"
            >
              <i className=" mx-1  bi bi-send-fill"></i> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
