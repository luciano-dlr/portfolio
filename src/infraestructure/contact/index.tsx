import BackgroundSvg from "../../assets/AnimatedShape.svg";
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
    <div
      className=" py-20"
      style={{
        backgroundImage: `url("https://raw.githubusercontent.com/luciano-dlr/portfolio/5314238915a0955ec0a82bc29045704e773f2cfe/src/assets/AnimatedShape.svg")`,
        // backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1121%26quot%3b)' fill='none'%3e%3crect width='1920' height='1080' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M91.26813232118768 237.21991018618118L-143.05650934438253 419.9350218124971 96.0428577941292 521.4266817344496z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1723.9753467777082 544.3796726609496L1596.9890663851302 576.0409083397152 1707.9740600995676 750.6897110891992z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1450.2076311877654 615.1686036400366L1306.1291177199894 886.1408770066407 1721.1799045543696 759.2471171078125z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1897.5320242011749 21.75585526271118L1696.9328565261853 123.72554566471865 1860.0131156576676 233.72456937777343z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1519.2320817502198 972.456816520907L1709.6617317980317 965.806866607193 1604.471981903555 683.4873664923318z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M960.9642793564749 302.54606441281845L662.6553160405483 518.8461493622756 954.5818276454797 654.9737173421291z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M91.41688784546426-71.65787650524427L192.50412033819572 206.07701216369512 369.15177651440365-172.74510899797573z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M557.8171885959499 627.2975580589531L542.2309043486947 449.1455139071216 282.7959802445751 561.6009623539202z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M47.36201541775785 1082.7121145769079L178.26358176208635 1181.353520060476 146.0034209013261 951.8105482325793z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M914.857042761663 448.76937179271664L806.1268648842218 629.7267759464642 1095.8144469154106 557.4995496701578z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1616.193482286098 645.7852461435552L1638.8251465303758 973.9268829359032 1879.9671058623353 817.3274635072036z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M231.64014461391753 436.1619256770446L314.4484974078216 364.1777228128965 165.0680167146473 275.9572950541144z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M288.69641929153556 826.9267778847441L420.10681799856707 757.0546294738199 249.5933960286652 594.8751056187347z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M1186.127032112345 707.6130733887004L998.3925550742687 624.0282989899522 1102.5422577135967 895.3475504267767z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M266.08050029696017 955.0113197218506L102.09398034422344 998.9513753127766 310.0205558878862 1118.9978396745873z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M150.75278977759774 28.05642226198499L87.42786184618082 133.44680053956745 277.17589322826296 175.7390032979016z' fill='rgba(99%2c 102%2c 241%2c 1)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1121'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
        // backgroundImage: `url("https://raw.githubusercontent.com/luciano-dlr/portfolio/5314238915a0955ec0a82bc29045704e773f2cfe/src/assets/AnimatedShape.svg")`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      {/* <BackgroundSvg className="absolute w-[100%] h-auto -z-10" /> */}

      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col space-y-2 pb-8 pt-6 px-5 max-w-xl mx-auto bg-white shadow-md rounded-md z-10"
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
            className="max-h-[15rem] min-h-[4rem] block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
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
