import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../actions/AuthActions'
import { Link } from 'react-router-dom';
export default function SignIn() {
  const dispatch = useDispatch();

  return (
    <div>

      <div className="min-h-screen py-4 justify-center flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto  overflow-hidden shadow-2xl transition-transform">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-signinImg" >
              {/* <h1 className="text-gray-900 text-3xl mb-3">Welcome Back</h1> */}
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl center mb-4 text-center">Sign In</h2>

              <form onSubmit={(e) => login(e, dispatch)}>
                <div className="mt-5">
                  <input type="text"
                    placeholder="Email"
                    name='email'
                    id='email'
                    className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password"
                    autoComplete='true'
                    placeholder="Password"
                    name='password'
                    id='password'
                    className="border border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="checkbox" className="border border-gray-400" id='remember' />
                  <label className='m-2' htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <div className="mt-5">
                  <button className="w-full bg-cyan-700 py-3 text-center text-white">Sign In</button>
                </div>
              </form>
              <p className='mt-2'>
                You don't have an account? <Link className='underline' to={"/signup"}>Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
