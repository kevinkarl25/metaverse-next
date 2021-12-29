import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative bg-white text-white">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src="/profile_pic_png3-removebg.png"
          height={250}
          width={250}
          className="rounded-full object-cover"
        />

        <button
          onClick={authenticate}
          className="bg-black rounded-lg p-5 font-bold animate-pulse"
        >
          Login to Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image src="/login-form-image.jpeg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;