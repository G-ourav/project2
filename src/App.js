import Nav from "./components/nav";
import Header from "./components/header";
import Form from "./components/form";
import SliderClick from "./components/sliderClick.js";
import Slider from "./components/Slider.js";
import Slider2 from "./components/slider2.js";
import Slider3 from "./components/slider3.js";
import "./App.css";
import { FaArrowRight } from "react-icons/fa6";

function App() {
  return (
    <div className=" ">
      <div className=" fixed top-0 z-10  w-full">
        <Nav />
      </div>
      <div
        className="px-5   lg3:px-72 "
        style={{
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${"../img/Rectangle_53.jpg"})`,
        }}
      >
        <div className="sm:px-20 sm:py-28  grid sm:grid-cols-4">
          <div className="   pt-20 sm:col-span-3 ">
            <Header />
          </div>
          <div className=" sm:col-span-1 ">
            <Form />
          </div>
        </div>
      </div>
      <div className="sm:-mt-40 py-10 px-5   lg3:px-72   contrast-100">
        <div
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${"../img/Group_1094.png"})`,
          }}
          className="sm:mx-20 py-10   rounded-2xl"
        >
          <h2 className="flex items-center py-2 uppercase  text-white text-2xl justify-center">
            {" "}
            our
          </h2>
          <h2 className="flex items-center py-2 uppercase text-yellow-400 text-4xl justify-center">
            {" "}
            Learning Approach
          </h2>
          <div className="grid md:grid-cols-5 text-center py-5  text-white grid-cols-2 gap-1  divide-white sm:divide-x-2 divide-x-0  divide-dashed  px-5">
            <div className="flex flex-col px-2    justify-center items-center">
              <div className="bg-yellow-400 p-4 rounded-full">
                <img className="" src="../img/Layer_1.1.png" />
              </div>
              <p className=" ">
                Classes are conducted during school hours on school premises
              </p>{" "}
            </div>
            <div className="flex flex-col px-2 justify-center items-center">
              <div className="bg-yellow-400 p-4 rounded-full">
                <img className="" src="../img/Layer_1.2.png" />
              </div>

              <p>ISC curriculum is covered fully with competitive exams</p>
            </div>
            <div className="flex flex-col px-2 justify-center items-center">
              <div className="bg-yellow-400 p-4 rounded-full">
                <img className="" src="../img/Layer_1.3.png" />
              </div>
              <p>Saves precious time for self-study</p>
            </div>
            <div className="flex flex-col px-2 justify-center items-center">
              <div className="bg-yellow-400 p-4 rounded-full">
                <img className="" src="../img/Layer_1.4.png" />
              </div>
              <p>Experienced faculty powered by PACE IIT & MEDICAL</p>
            </div>
            <div className="flex flex-col px-2 justify-center items-center">
              <div className="bg-yellow-400 p-4 rounded-full">
                <img className="" src="../img/Layer_1.5.png" />
              </div>
              <p>Smaller batch size for personalized attention</p>
            </div>
          </div>
          <div className="flex py-2 justify-center items-center ">
            <div
              onClick={() => (window.location = "mailto:i")}
              className=" rounded-full flex gap-5  justify-between items-center  text-blue-900 font-bold sm:text-sm text-lg p-4  bg-yellow-400"
            >
              Enquire Now
              <div className=" bg-blue-900 rounded-full p-1">
                <FaArrowRight color=" yellow" size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-40    lg3:px-96 sm:grid grid-cols-3 px-5 py-10">
        <div className="sm:py-20 my-auto  sm:block hidden    sm:-mr-40 contrast-100 col-span-1">
          <img
            className=" shadow-2xl box_shadow1 rounded-3xl "
            src="../img/Screenshot_2024-02-21_193951.png"
          />
        </div>
        <div className=" sm:text-left py-5 px-5 text-center rounded-2xl  sm:p-20 sm:pl-60 bg-yellow-100  col-span-2">
          <h2 className="  pt-2 uppercase   font-semibold"> About</h2>
          <h2 className="  pt-2 uppercase font-bold text-blue-900 text-4xl ">
            {" "}
            Universal High School
          </h2>

          <p className="pt-2">
            Universal High School, Dahisar equips every student with the right
            attitude and skills to help them find their unique place in the
            world by providing a wholesome and ever-evolving learning
            environment. So that they can fearlessly pursue a better tomorrow.
            In line with this mission, Universal is launching the best IIT JEE/
            NEET test prep program powered by PACE IIT & MEDICAL. PACE IIT &
            Medical is India’s best IIT JEE/ NEET test prep program and has
            helped more than xxx+ students prepare for IIT JEE and xxx students
            in NEET for the last few years.
          </p>
          <div className="flex py-2 justify-center items-center ">
            <div
              onClick={() => (window.location = "mailto:i")}
              className=" rounded-full flex gap-4  justify-between items-center  text-white  font-bold sm:text-sm text-lg p-4 bg-blue-950"
            >
              Enquire Now
              <div className=" bg-yellow-400 rounded-full p-1">
                <FaArrowRight color=" black" size="20" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:py-20 my-auto block sm:hidden    sm:-mr-40 contrast-100 col-span-1">
          <img
            className=" shadow-2xl box_shadow1 rounded-3xl "
            src="../img/Screenshot_2024-02-21_193951.png"
          />
        </div>
      </div>
      <div className="sm:px-40     lg3:px-72 sm:grid grid-cols-3 px-5 py-10">
        <div
          className=" rounded-2xl sm:text-left py-5 px-5 text-center  sm:p-20 sm:pr-60   bg-slate-200
 col-span-2"
        >
          <h2 className="  pt-2 uppercase   font-semibold"> About</h2>
          <h2 className="  pt-2 uppercase font-bold text-blue-900 text-4xl ">
            {" "}
            IIT PACE
          </h2>

          <p className="pt-2">
            Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT &
            Medical has embarked on a remarkable journey, transforming the lives
            of students and shaping the landscape of competitive exam coaching.
            It all began in 1999, with a humble vision to bridge the gap between
            aspirations and achievements. PACE IIT & Medical has become
            synonymous with success in competitive exams and helped xxx students
            to crack IIT and xxx students to crack NEET/ Medical exams.
          </p>
          <div className="flex py-2 justify-center items-center ">
            <div
              onClick={() => (window.location = "mailto:i")}
              className=" rounded-full flex gap-4  justify-between items-center  text-white  font-bold sm:text-sm text-lg p-4 bg-blue-950"
            >
              Enquire Now
              <div className=" bg-yellow-400 rounded-full p-1">
                <FaArrowRight color=" black" size="20" />
              </div>
            </div>
          </div>
        </div>
        <div className="sm:py-20 my-auto     sm:-ml-40 contrast-100 col-span-1">
          <img
            className=" shadow-2xl box_shadow2 rounded-3xl "
            src="../img/Rectangle_739.png"
          />
        </div>
      </div>
      <div className=" text-center">
        <h2 className="  pt-2 uppercase   font-semibold">oUR</h2>
        <h2 className="  pt-2 uppercase font-bold text-blue-900 text-4xl ">
          PROGRAMS
        </h2>
      </div>
      <div className="sm:px-20 py-14 px-5   lg3:px-72 text-center gap-32 sm:gap-10 grid sm:grid-cols-2">
        <div className=" rounded-2xl px-10   bg-slate-200  col-span-1">
          <div className="sm:px-20 -mt-10 ">
            <div className=" rounded-t-2xl bg-blue-900">
              <p className=" text-4xl py-5 text-white">ISC + NEET</p>
            </div>
          </div>
          <p className="pt-7">
            NEET is a national-level examination conducted by NTA. The
            candidates who want to get admission to medical courses must qualify
            for the entrance test. NEET questions only come from Physics,
            Chemistry, Zoology, and Botany.
          </p>
          <p className="pt-3 pb-7 ">
            Powered by IITPACE, Universal High School Dahisar will prepare
            students for both ISC and NEET (and other Medical exams) within the
            comfort of their school premises. Our coursework is specially
            created for the ISC curriculum to create a synergy between Board and
            NEET exam preparations during school hours.
          </p>
          <div className="flex py-2  -mb-10  justify-center items-center ">
            <div
              onClick={() => (window.location = "mailto:i")}
              className=" rounded-full flex gap-4  justify-between items-center  text-white  font-bold sm:text-sm text-lg p-4 bg-blue-950"
            >
              Enquire Now
              <div className=" bg-yellow-400 rounded-full p-1">
                <FaArrowRight color=" black" size="20" />
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-2xl px-10   bg-slate-200  col-span-1">
          <div className="sm:px-20 -mt-10 ">
            <div className=" rounded-t-2xl bg-blue-900">
              <p className=" text-4xl py-5 text-white">ISC + IIT JEE</p>
            </div>
          </div>
          <p className="pt-7">
            IITs are one of the most prestigious colleges in the country. All
            Engineering aspirants wish to get into one of the IITs, but getting
            into such an institution is a challenging task. A lot of hard work
            andhard and dedication is required to ace JEE Main and JEE Advanced
            to get into IIT or some other top educational institution in the
            country.
          </p>
          <p className="pt-3 pb-7">
            Powered by IITPACE, Universal High School Dahisar will prepare
            students for both ISC and IITJEE ( and other engineering exams)
            within the comfort of their school premises. Our coursework is
            specially created for the ISC curriculum to create a synergy between
            Board and NEET exam preparations during school hours
          </p>
          <div className="flex py-2 -mb-10 justify-center items-center ">
            <div
              onClick={() => (window.location = "mailto:i")}
              className=" rounded-full flex gap-4  hover:bg-blue-100 justify-between items-center  text-white  font-bold sm:text-sm text-lg p-4 bg-blue-950"
            >
              Enquire Now
              <div className=" bg-yellow-400 rounded-full p-1">
                <FaArrowRight color=" black" size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:-mb-40     lg3:px-72 -mb-10 contrast-100">
        <SliderClick />
      </div>
      <div>
        <img className=" h-90 w-full" src="../img/Group_1098.png" />
      </div>
      <div className="lg3:px-72 py-10 sm:px-20 flex px-5 items-center justify-between ">
        <div>
          <h2 className="  pt-2 uppercase   font-semibold">SUCCESS</h2>
          <h2 className="  pt-2 uppercase font-bold text-blue-900 text-4xl ">
            STORIES
          </h2>
        </div>
        <div className="flex py-2  -mb-10  justify-center items-center ">
          <div
            onClick={() => (window.location = "mailto:i")}
            className=" rounded-full flex gap-4  justify-between items-center  text-white  font-bold sm:text-sm text-lg p-4 bg-blue-950"
          >
            Enquire Now
            <div className=" bg-yellow-400 rounded-full p-1">
              <FaArrowRight color=" black" size="20" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg3:px-72  hidden py-10 sm:flex  items-center justify-center gap-4">
        <div>
          <img src="../img/Rectangle_t_1.png" />
        </div>
        <div>
          <img src="../img/Rectangle_t_2.png" />
        </div>
        <div>
          <img src="../img/Rectangle_t_3.png" />
        </div>
      </div>
      <div className="block sm:hidden">
        <Slider />
        {/* <ItemsCarousel/> */}
      </div>
      <div
        className="py-40"
        style={{
          backgroundRepeat: "no-repeat",

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${"../img/Group_99.png"})`,
        }}
      >
        <div className="lg3:px-72 py-10 sm:px-20 flex  px-5 items-center justify-between ">
          <div className="">
            <h2 className="  pt-2 uppercase  text-white font-semibold">our</h2>
            <h2 className="  pt-2 uppercase font-bold  text-yellow-400 text-4xl ">
              campuses
            </h2>
          </div>
          <div className="flex py-2  sm:-mb-10  justify-center items-center ">
            <div
              onClick={() => (window.location = "mailto:i")}
              className=" rounded-full flex gap-5  justify-between items-center  text-blue-900 font-bold sm:text-sm text-lg p-4  bg-yellow-400"
            >
              Enquire Now
              <div className=" bg-blue-900 rounded-full p-1">
                <FaArrowRight color=" yellow" size="20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pb-96 sm:pb-0 lg3:px-72  contrast-100">
        <div className="sm:block -mt-40  hidden">
          <Slider2 />
          {/* <ItemsCarousel/> */}
        </div>
        <div className="block px-5 sm:pb-0 pb-80 -mt-40 sm:hidden">
          <Slider3 />
          {/* <ItemsCarousel/> */}
        </div>
      </div>
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
}

export default App;
