import BackgroundSvg from '../../assets/bf-triangule.svg'
import { useFormik } from 'formik';

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
//   use questioneri category resultl ditails styles
    
  return (
    <div className=''>
          <BackgroundSvg className="absolute h-auto -z-10"/>

    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4 w-full max-w-lg mx-auto bg-white shadow-md rounded">
      <div>
        <label htmlFor="name" className=" text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
          className="block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          
        />
      </div>

      <button
        type="submit"
        className=" bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
    </div>
  );
};
