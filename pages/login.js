import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

import Logo from '../assets/logo.png';

export default function Login() {
  return (
    <div className="bg w-screen h-screen">
      <div className="text-right mr-5">global-icon HERE</div>
      <div className="absolute top-1/2 left-1/2 -translate-xy-1/2 text-left">
        <Image className="" src={Logo} alt="logo" />
        <form className="flex flex-col px-5 gap-5 mx-auto">
          <div className="text-gray-400 py-5 border-b border-gray-300">Login</div>
          <div className="input-group border border-gray-300">
            <input type="email" placeholder="username: admin or user" className="w-full p-2" /> {/* focus:outline-bg-red */}
          </div>
          <div className="input-group border border-gray-300">
            <input type="password" placeholder="password" className="w-full p-2" />
          </div>
          <div className="flex flex-row items-center">
            <button type="submit" className="px-9 py-2 text-white transition-colors duration-150 bg-red"> {/* hover:bg-red/80 */}
              Sign In
            </button>
            {/* <label>
              <input type="checkbox" className="mr-1 accent-sgg-blue hover:accent-sgg-blue" />
              Remember Me
            </label> */}
          </div>

          <Link href="">
            <a className="text-red underline">Forgot your password?</a>
          </Link>
          {/* <p>
            Not a member?{" "}
            <Link href="/register">
              <a className="transition-colors duration-150 text-sgg-blue hover:text-sgg-blue/80">Sign up</a>
            </Link>{" "}
            now!
          </p> */}
        </form>
      </div>
      <div className="absolute bottom-5 right-5">qns-icon HERE</div>
      <Footer />
    </div>
  )
}