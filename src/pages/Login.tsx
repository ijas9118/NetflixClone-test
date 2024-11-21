import React, { useState } from "react";
import logo from "../assets/logo.png";
import bg_image from "../assets/login_bg.jpg";

const Login: React.FC = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className='m-6 px-36'>
      <img src={logo} className='w-40' alt='' />
      <div className='mt-5 flex w-full justify-center'>
        <div className='bg-black/65 rounded-md px-16 py-12 w-2/5'>
          <h1 className='text-3xl font-bold mb-8'>
            {signState === "Sign In" ? "Sign In" : "Sign Up"}
          </h1>
          <form action=''>
            {signState === "Sign Up" ? (
              <input
                type='text'
                placeholder='Name'
                className='mb-4 px-4 py-3 w-full bg-white/[0.08] border-[1.5px] border-neutral-600 rounded-md outline-none'
              />
            ) : (
              <></>
            )}
            <input
              type='email'
              placeholder='Email or mobile number'
              className='mb-4 px-4 py-3 w-full bg-white/[0.08] border-[1.5px] border-neutral-600 rounded-md outline-none'
            />
            <input
              type='password'
              placeholder='Password'
              className='mb-4 px-4 py-3 w-full bg-white/[0.08] border-[1.5px] border-neutral-600 rounded-md outline-none'
            />
            <button className='mb-4 px-4 py-2 w-full rounded-md bg-[#E60814] hover:bg-[#CC0F18] duration-200'>
              {signState === "Sign In" ? "Sign In" : "Register"}
            </button>
            <div className='flex flex-col gap-3'>
              <p className='text-center font-thin'>Forgot Password?</p>
              <div>
                <input type='checkbox' />
                <label htmlFor='' className='font-thin ml-2'>
                  Remeber Me
                </label>
              </div>
              <p className='text-neutral-300 font-thin'>
                {signState === "Sign Up" ? (
                  <>
                    Already have Netflix?{" "}
                    <span
                      className='font-normal text-white hover:underline hover:underline-offset-1'
                      onClick={() => setSignState("Sign In")}
                    >
                      Sign In
                    </span>
                  </>
                ) : (
                  <>
                    New to Netflix?{" "}
                    <span
                      className='font-normal text-white hover:underline hover:underline-offset-1'
                      onClick={() => {setSignState("Sign Up")}}
                    >
                      Sign Up
                    </span>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      </div>

      <img
        src={bg_image}
        alt=''
        className='-z-10 opacity-40 absolute top-0 right-0 w-full'
      />
    </div>
  );
};

export default Login;
