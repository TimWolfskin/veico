import React from "react";
import CustomButton from "./CustomButton";

const ContactForm = () => {
  return (
    <div className="">
      <div className="max-w-lg mx-auto">
        <h1 className="text-4xl text-[#fff] sm:text-4xl font-bold mb-2">
          Contact Us
        </h1>
        <form>
          <div className="flex gap-2 mb-4">
            <div className="w-full">
              <div className="relative">
                <label className="leading-7  text-lg text-[#fff]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" w-full bg-white rounded border
                    border-gray-400 focus:border-blue-500
                     focus:bg-white focus:ring-2
                      focus:ring-blue-200 text-base outline-none
                      text-gray-900 py-1 px-1 leading-8 transition-colors
                        duration-200 ease-in-out "
                />
              </div>
            </div>
            <div className=" w-full">
              <div className="relative">
                <label className="leading-7 text-lg text-[#fff]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className=" w-full bg-white rounded border
                     border-gray-400 focus:border-blue-500
                      focus:bg-white focus:ring-2 focus:ring-blue-200 
                      text-base outline-none text-gray-900 py-1 px-1
                       leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className=" w-full">
            <div className="relative">
              <label className="leading-7  text-lg text-[#fff]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className=" w-full bg-white rounded border
                     border-gray-400 focus:border-blue-500
                      focus:bg-white focus:ring-2 focus:ring-blue-200
                       h-32 text-base outline-none text-gray-900
                        px-3 resize-none leading-6 transition-colors mb-5
                         duration-200 ease-in-out"
              ></textarea>
            </div>
          </div>
          <div className=" w-full">
            <div>
              <CustomButton
                title="Sign in"
                btnType="button"
                containerStyles="bg-primary-blue text-white  rounded-full min-w-[130px]"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
