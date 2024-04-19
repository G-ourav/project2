import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="sm:grid block py-10 px-5 lg3:px-72  bg-blue-900 sm:px-20  grid-cols-2">
        <div className=" col-span-1">
          <h2 className="  pt-4 uppercase  text-white font-semibold">
            dahisar
          </h2>
          <h2 className="  pt-4 uppercase font-bold  text-yellow-400 text-4xl ">
            universal high school
          </h2>
          <div className="flex gap-4 ">
            <div className=" my-auto bg-yellow-400 rounded-full p-3">
              <img src="../img/Layer_2.png" />
            </div>
            <div>
              <p className=" text-xl pt-4 text-white  font-semibold ">
                ADDRESS
              </p>
              <p className=" text-lg pt-4 text-white  ">
                Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068
              </p>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className=" my-auto bg-yellow-400 rounded-full p-3">
              <img src="../img/Layer_1.png" />
            </div>
            <div>
              <p className=" text-xl pt-4 text-white    font-semibold ">
                Admissions Enquiry{" "}
              </p>
              <p className=" text-lg pt-4 text-white    font-semibold ">
                +91 224 194 7733 | admissions.dahisar@universal.edu.in
              </p>
            </div>
          </div>
        </div>
        <div className=" sm:p-10 col-span-1 ">
          <div className=" rounded-2xl  ">
            <div className=" shadow-2xl">
              <iframe
                className="w-full h-72"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7342.4874002966935!2d72.55190441410426!3d23.051525466265794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848492335355%3A0x78261ae9eba404ba!2sSundar%20Nagar%2C%20Naranpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713515175542!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-black">
      <p className="text-sm sm:text-lg p-5 flex items-center justify-center text-white    font-semibold ">
      Copyright © 2024 Universal Academy. All rights reserved
              </p>
      </div>
    </div>
  );
};

export default Footer;
