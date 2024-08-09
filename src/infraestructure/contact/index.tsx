import BackgroundSvg from "../../assets/bf-triangule.svg";
import { useFormik } from "formik";

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className=" py-20 bg-secondary-100">
      {/* <BackgroundSvg className="absolute h-auto -z-10" /> */}

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-2 pb-8 pt-6 px-5 w-full max-w-lg mx-auto bg-white shadow-md rounded-md"
      >
        <div className="py-2 px-4 block">
          <label
            htmlFor="name"
            className="block mb-2 text-base font-medium text-gray-900"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
          />
        </div>
        <div className="py-4 px-4">
          <label
            htmlFor="email"
            className="block mb-2 text-base font-medium text-gray-900"
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="py-4 px-4">
          <label
            htmlFor="message"
            className="block mb-2 text-base font-medium text-gray-900"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows={8}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          className="transition ease-in-out hover:-translate-y-0 hover:scale-100 hover:bg-indigo-600 shadow-sm shadow-indigo-500/50 rounded-md bg-indigo-500 text-white text-base py-1 px-2 mx-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
