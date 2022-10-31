import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

import Logo from "../assets/logo.png";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const username = event.target.querySelector("#username").value;
    const password = event.target.querySelector("#password").value;

    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result["status"] == true) {
          router.push("/app");
        } else {
          alert("Incorrect username or password!");
        }
      });
  };

  return (
    <div className="min-h-screen min-w-screen">
      <div className="mr-5 text-right">global-icon HERE</div>
      <div className="absolute w-full max-w-lg top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] text-left">
        <Image src={Logo} alt="logo" />
        <form className="flex flex-col gap-5 px-5 mx-auto" onSubmit={handleSubmit}>
          <div className="py-5 text-gray-400 border-b border-gray-300">Login</div>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 focus:outline focus:outline-1 focus:outline-tts-red"
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 focus:outline focus:outline-1 focus:outline-tts-red"
          />
          <div className="flex flex-row items-center">
            <button
              type="submit"
              className="py-2 text-white transition-colors duration-150 border border-gray-300 px-9 bg-tts-red hover:bg-tts-red/80"
            >
              Sign In
            </button>
          </div>

          <Link href="">
            <a className="underline transition-colors duration-150 text-tts-red hover:text-tts-red/80">Forgot your password?</a>
          </Link>
        </form>
      </div>
      <div className="absolute bottom-5 right-5">qns-icon HERE</div>
      <Footer />
    </div>
  );
}
