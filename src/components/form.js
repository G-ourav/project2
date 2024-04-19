import React, { useState } from "react";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const handleCaptchaChange = () => {
  //   setIsCaptchaVerified(true);
  // };

  const sendEmail = (e) => {
    e.preventDefault();
    // if (isCaptchaVerified) {
    if (!isSubmitted) {
      console.log(e);
    }
    setIsSubmitted(true);
  };
  return (
    <div class=" text-xs  rounded-2xl bg-white ">
      <div class="">
        <div className="rounded-t-2xl flex justify-center text-2xl text-blue-900 py-2 font-bold items-center  bg-yellow-400">
          Enquire Now!
        </div>
        <div class="p-4">
          <form
            enctype="multipart/form-data"
            method="post"
            onSubmit={sendEmail}
          >
            <div className="grid grid-cols-5">
              <div className=" col-span-2 flex items-center ">
                Academic Year
              </div>
              <div className=" col-span-3 text-white py-2  rounded-md flex items-center justify-center  bg-blue-900">
                2024-2026
              </div>
            </div>
            <div className="mt-2 gap-1 grid py-4 grid-cols-5">
              <div className=" col-span-2">
                Your Relationship with the Child
              </div>
              <div className=" col-span-3 text-white rounded-md border- border-2 border-blue-900    flex items-center justify-center  ">
                <div className="grid grid-cols-2   h-full w-full">
                  <div className=" col-span-1 text-white   flex items-center justify-center  bg-blue-900">
                    Father
                  </div>
                  <div className=" py-2 text-blue-900 flex items-center justify-center col-span-1">
                    Mother
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2  gap-2  h-full w-full">
              <div className=" col-span-1">
                <label className="">Child’s First Name </label>
                <br />
                <input
                  type="text"
                  required
                  name="user_name"
                  className="border   rounded-lg  p-2 mt-2 mb-2 w-full"
                  placeholder="Type Here"
                />
              </div>
              <div className=" col-span-1">
                <label className="">Child’s Last Name </label>
                <br />
                <input
                  type="text"
                  required
                  name="user_name"
                  className="border   rounded-lg  p-2 mt-2 mb-2 w-full"
                  placeholder="Type Here"
                />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2  gap-2  h-full w-full">
              <div className=" col-span-1">
                <label className="">Your First Name </label>
                <br />
                <input
                  type="text"
                  required
                  name="user_name"
                  className="border   rounded-lg  p-2 mt-2 mb-2 w-full"
                  placeholder="Type Here"
                />
              </div>
              <div className=" col-span-1">
                <label className="">Your Last Name </label>
                <br />
                <input
                  type="text"
                  required
                  name="user_name"
                  className="border   rounded-lg  p-2 mt-2 mb-2 w-full"
                  placeholder="Type Here"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="">Course Applying For</label>
              <br />
              <input
                type="text"
                required
                name="user_name"
                className="border   rounded-lg  p-2 mt-2 mb-2 w-full"
                placeholder="Choose Course"
              />
              <br />
            </div>
            <div className="mt-2">
              <label className="">Phone Number</label>
              <br />
              <input
                type="number"
                required
                name="user_phone_number"
                className="border   rounded-lg  p-2 mt-2 mb-2 w-full"
                placeholder="Enter your Phone Number"
              />
              <br />
            </div>

            <div className="mt-2">
              <label className="">Email</label>
              <br />
              <input
                type="email"
                required
                name="user_email"
                className="border    rounded-lg  p-2 mt-2 mb-2 w-full"
                placeholder="Enter your full Email"
              />
              <br />
            </div>

            <div className="py-2 flex justify-center items-center ">
              <a href="" target="_blank">
                <button className=" bg-blue-900 py-2  text-white px-5  text-sm rounded-md ">
                Enquire Now
                </button>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
