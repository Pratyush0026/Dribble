import React from "react";
import {
    AiOutlineLock,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlinePicture,
    AiOutlineUser,
  } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link} from "react-router-dom";



const RegistrationForm = () => {
  return (
    <div className="h-screen flex items-center justify-center px-5 lg:px-0">
      <div className="bg-white border shadow sm:rounded-lg flex justify-center w-full">
        <div className="lg:w-1/3 md:w-1/2 bg-yellow-200 text-center hidden md:flex ">
          
          <div
          
        
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(https://www.tailwindtap.com/assets/common/marketing.svg)`,
            }}
          >

          </div>
        </div>

        <div className="lg:w-2/3 md:w-1/2 p-6 sm:p-12">
          <div className="flex flex-col items-center">
          
            <div className="text-center">
              <h2 className="text-3xl font-bold text-center mb-6">
                Sign up to dribble
              </h2>
            </div>

            <form >
          <div className="flex items-center gap-5 ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                <AiOutlineUser className="inline-block mr-2 mb-1 text-lg" />
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                <AiOutlineMail className="inline-block mr-2 mb-1 text-lg" />
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="flex items-center gap-5 ">
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                <AiOutlineLock className="inline-block mr-2 mb-1 text-lg" />
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmpassword"
                className="block text-gray-700 font-bold mb-2"
              >
                <AiOutlineLock className="inline-block mr-2 mb-1 text-lg" />
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
               
                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="flex items-center gap-5 ">
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                <AiOutlinePhone className="inline-block mr-2 mb-1 text-lg" />
                Phone
              </label>
              <input
                type="tel"
                placeholder="Enter Phone"
                
                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="photoUrl"
                className="block text-gray-700 font-bold mb-2"
              >
                <AiOutlinePicture className="inline-block mr-2 mb-1 text-lg" />
                Photo URL
              </label>
              <input
                type=""
                placeholder="Enter URL"
               
                className="w-full border-gray-300 border rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-gray-700 font-bold mb-2"
              >
                <AiOutlineUser className="inline-block mr-2 mb-1 text-lg" />
                Gender
              </label>
              <select
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Select Gender</option>

                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-gray-700 font-bold mb-2"
              >
                <HiOutlineLocationMarker className="inline-block mr-2 mb-1 text-lg" />
                Address
              </label>

              <textarea
                rows="3"
                placeholder="Enter Address"
                className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-red-500 text-white py-2 px-4 rounded-md "
            >
              Create account
            </button>
          
          </div>
        </form>

            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link to="/login" className="underline text-secondary ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
