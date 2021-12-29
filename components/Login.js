import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="relative bg-white text-white">
      <Head>
        <title>Metaverse-ish: Login</title>
        <link rel="icon" href="/kktoon-icon.ico" />
      </Head>
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          src="/profile_pic.jpg"
          height={200}
          width={200}
          className="rounded-full object-cover"
        />
        {/* <h1 className="text-5xl">Welcome to Metaverse</h1> */}

        <button
          onClick={authenticate}
          className="bg-black rounded-lg p-5 font-bold animate-pulse hover:opacity-75"
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
