import { useState } from "react";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import { Bounce, toast } from "react-toastify";
import "./index.css";
import BackgroundSvg from "../../assets/CircuitBoard.svg";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);

      try {
        const response = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            user_name: values.name,
            user_email: values.email,
            message: values.message,
          },
          import.meta.env.VITE_EMAILJS_LEIO_KEY
        );

        console.log("SUCCESS!", response.status, response.text);
        toast.success("Form Submitted Successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
        resetForm();
      } catch (error) {
        console.log("FAILED...", error);
        toast.error("Failed to send the message, please try again.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <div
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >


      {/* Fondo alternativo cuando el SVG está oculto */}
      <div className="block sm:hidden absolute inset-0 w-full h-full z-[-1] bg-white dark:bg-[#737373] transition-colors duration-300"></div>

      {/* SVG de fondo */}
      <BackgroundSvg className="hidden sm:block absolute inset-0 w-full h-full z-[-1] filter dark:invert-[.80] dark:hue-rotate-180 dark:bg-[#737373] bg-white opacity-25 dark:opacity-100 transition-opacity duration-300" />


      <div>
        <h1 className="py-12 text-4xl font-semibold text-center dark:text-neutral-50">
          Contact
        </h1>
      </div>

      <div className="relative w-full max-w-xl px-5 py-8 bg-white shadow-md rounded-md dark:bg-[#1F1F1F]">

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-2"
        >
          <div className="py-2 px-4 block">
            <label
              htmlFor="name"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="bg-gray-50 dark:bg-[#333] dark:text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            />
          </div>
          <div className="py-4 px-4">
            <label
              htmlFor="email"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="bg-gray-50 dark:bg-[#333] dark:text-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="py-4 px-4">
            <label
              htmlFor="message"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              className="max-h-[15rem] min-h-[4rem] block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-gray-50 dark:bg-[#333] rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Leave a comment..."
              onChange={formik.handleChange}
              value={formik.values.message}
            ></textarea>
          </div>
          <button
            className="transition ease-in-out hover:bg-indigo-600 dark:hover:bg-indigo-950 shadow-sm shadow-indigo-500/50 dark:shadow-neutral-900 rounded-md bg-indigo-500 dark:bg-neutral-500 text-white text-base py-1 px-2 mx-4"
            type="submit"
          >
            {isLoading ? (
              <span className="loader cursor-not-allowed ">
                <span className="">.</span>
                <span className="">.</span>
                <span className="">.</span>
                <span className="">.</span>
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
