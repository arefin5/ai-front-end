"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react';
import Toggle from "@/components/Toggle";
export default function Home() {
  const [email, setEmail] = useState<string>(' ');
  const [password, setPassword] = useState<string>(' ');
  const { responseData, error, loading, makeRequest } = useApiRequest();
  const router = useRouter();
    return (
      <>
        <div className="">
          <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full h-full flex flex-col justify-center items-center md:w-1/2 bg-white">
              <div className=" max-w-lg w-full ml-0">
                <h3 className="text-center font-bold text-3xl drop-shadow-2xl text-gray-700 mb-16">
                  Welcome Back to <br />
                  <Link
                    href="/"
                    className="text-blue-500"
                  >
                    Textory
                  </Link>
                </h3>
                <p className="uppercase text-center mb-6 font-light text-sm">
                SIGN IN WITH SOCIAL MEDIA
                </p>
                <div className="flex md:flex-row flex-col text-sm font-light items-center md:space-x-4 md:space-y-0 space-y-4 px-6 md:px-0 w-full">
                  <Link
                    href="/"
                    className="border rounded-xl py-2 w-full flex items-center justify-center">
                      <Icon icon="logos:facebook" className='mr-2' fontSize={25} />
                      Facebook
                  </Link>
                  <Link
                    href="/"
                    className="border rounded-xl py-2 w-full flex items-center justify-center">
                      <Icon icon="flat-color-icons:google" className='mr-2' fontSize={25} />
                      Google
                  </Link>
                  <Link
                    href="/"
                    className="border rounded-xl py-2 w-full flex items-center justify-center">
                      <Icon icon="openmoji:apple" className='mr-2' fontSize={25} />
                      Apple
                  </Link>
                </div>

                <p className="uppercase text-center my-6 font-light text-sm">
                OR SIGN IN WITH EMAIL
                </p>
                <div className="flex flex-col justify-center items-center px-4">
                  <div className="w-full">
                    <h1>
                    Email Address
                    </h1>
                    <input
                      type="email"
                      className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      
                      required
                    />
                  </div>
                  <div className="w-full">
                    <h1>
                    Password
                    </h1>
                    <input
                      type="password"
                      className="broder rounded-md py-3 px-4 bg-slate-50 w-full my-4 focus:outline-blue-500"
                      name="password"
                      value={password}

                      onChange={(e) => setPassword(e.target.value)}
                    
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="flex flex-wrap items-center w-full my-6 space-x-2">
                    <Toggle label="on" />
                    <span className="text-xs">Keep me logged in</span>
                    <Link className="text-blue-500 text-xs" href="/forgot-password">Forgot Your Password?</Link>
                  </div>
                  <Link
                    href="/"
                    className="bg-blue-500 text-white font-bold hover:bg-gray-700 rounded-full px-20 py-2"
                  >
                    Sign In
                  </Link>
                  <p
                    className="text-xs text-muted pt-5 mb-0"
                  >
                    New to  <Link href="/">Textory?</Link>
                  </p>
                  <Link
                    href="/register"
                    className="font-bold"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 h-full md:flex flex-col justify-center items-center hidden bg-[linear-gradient(230deg,_#007bff,_#000)] bg-[length:300%_300%]">
              <Image
                src="/login.png"
                width={600}
                height={600}
                alt='hero'
                className=''
              />
            </div>
          </div>
        </div>
      </>
    );
}