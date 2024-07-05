import React from 'react';
import Button from '@/components/button/Button';
import IconButton from '@/components/icon/icon';
import Edu_Exp_Box from '@/components/education_and_experince_box/Edu_Exp_Box';
import Cod_Pro_Box from '@/components/cod_pro_box/Cod_Pro_Box';
import Heading from '@/components/heading/Heading';
import Input_Box from '@/components/input_box/Input_Box';
import Footer from '@/components/footer/Footer';

export default function Home() {
  return (
    // bg-[#081b29] Background Color of Pic
    <main className="font-Poppins h-screen w-screen text-[#ededed] py-0 bg-custom-bg bg-no-repeat bg-cover bg-center">
      {/* Home Section */}
      <section id="Home" className="min-h-screen flex items-center px-[10%]">
        <div className="max-w-[50rem]">
          <h1 className="text-[3.25rem] font-bold leading-[1.3]">
            Hi, I'm Muhammad Qasim Ali
          </h1>
          <h3 className="text-[2rem] font-bold text-[#00abf0]">
            Frontend Developer
          </h3>
          <p className="text-[1rem] mx-0 mt-5 mb-10 tracking-wide">
            Asslam o Alaikum! I am expert Frontend Developer.I have experience
            of 2 Years in Frontend Web Developemnt. I am working as in intern in
            Software House Islamabad.I am in 5th Semester of BSSE from
            International Islamic University Islamabad.I Live in Rawalpindi. I
            am expert in languages HTML, CSS, JavaScript, BootStrap, Tailwind
            CSS, React, NextJS etc.
          </p>

          <div className="w-[21.6rem] h-[3.12rem] flex justify-between">
            <Button text="Hire Me" textColor="#081b29" bgColor="#00abf0" />
            <Button
              text="Let's Talk"
              textColor="#00abf0"
              bgColor="transparent"
            />
          </div>
        </div>

        <div className="absolute bottom-10 w-[190px] flex justify-between">
          <IconButton
            iconClass="fa-brands fa-facebook-f"
            borderColor="#00abf0"
          />

          <IconButton iconClass="fa-brands fa-twitter" borderColor="#00abf0" />

          <IconButton
            iconClass="fa-brands fa-linkedin-in"
            borderColor="#00abf0"
          />
        </div>
      </section>

      {/* About Section */}
      <section
        id="About"
        className="flex justify-center items-center flex-col gap-[2rem] bg-[#112e42] pb-[6rem] font-Poppins px-[10%]">
        <h2 className="text-[5rem] mt-[6rem] text-center font-extrabold">
          About <span className="text-[#00abf0]">Me</span>
        </h2>

        <div className="relative w-[25rem] h-[25rem] rounded-[50%]flex justify-center items-center">
          <img
            className="w-[90%] rounded-[50%] border-[.2rem] border-solid border-[#00abf0]"
            src="images/my_about.jpg"
            alt="My_Pic"
          />
          <span
            className="absolute top-[50%] left-[50%] transform translate-x-[-55%] translate-y-[-55%] rotate-0 w-[100%] h-[100%] rounded-[50%] border-t-[.2rem] border-t-[#112e42]
        border-b-[.2rem] border-b-[#112e42] border-l-[.2rem] border-l-[#00abf0] border-r-[.2rem] border-r-[#00abf0]"></span>
        </div>

        <div className="text-center text-white">
          <h3 className="text-[2.6rem] font-extrabold">Frontend Developer!</h3>

          <p className="text-[1.6rem] mt-[2rem] mx-0 mb-[3rem]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt natus
            sit odio error facere nobis ipsa cupiditate molestiae harum possimus
            deleniti, totam asperiores laborum, aspernatur dolorum
            exercitationem tenetur ex expedita adipisci, veritatis qui nemo?
            Laborum commodi et autem, sit facere temporibus tenetur sed, esse
            saepe consectetur beatae, distinctio eos aspernatur.
          </p>

          <div className="h-[3.12rem] flex justify-center">
            <Button
              text="Read More"
              textColor="#00abf0"
              bgColor="transparent"
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="Education"
        className="flex justify-center items-center flex-col min-h-[auto] bg-[#081b29] pb-[5rem] font-Poppins px-[10%]">
        <h2 className="text-[5rem] mt-[6rem] text-center font-bold">
          My <span className="text-[#00abf0]">Journey</span>
        </h2>

        <div className="flex flex-wrap gap-[5rem]">
          <div className="flex-grow flex-shrink basis-[40rem]">
            <Heading
              heading="Education"
              marg_t="1rem"
              marg_l="2rem"
              marg_r="0"
            />

            <div className="border-l-[.2rem] border-l-[#00abf0] max-w-[45rem]">
              <Edu_Exp_Box
                duration="2009 - 2019"
                heading="Matric Degree - SHS"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis minima vel, blanditiis quisquam sunt dolore
                    voluptatum adipisci consectetur delectus tempora."
              />

              <Edu_Exp_Box
                duration="2019 - 2021"
                heading="FSc Pre-Eng Degree - Askaria College Boys Wing,Saddar"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis minima vel, blanditiis quisquam sunt dolore
                    voluptatum adipisci consectetur delectus tempora."
              />

              <Edu_Exp_Box
                duration="2022 - 2026"
                heading="Bachelor Degree - International Islamic University Islamabad"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis minima vel, blanditiis quisquam sunt dolore
                    voluptatum adipisci consectetur delectus tempora."
              />
            </div>
          </div>

          <div>
            <Heading
              heading="Experience"
              marg_t="1rem"
              marg_l="2rem"
              marg_r="0"
            />

            <div className="border-l-[.2rem] border-l-[#00abf0] max-w-[45rem]">
              <Edu_Exp_Box
                duration="2022 - 2023"
                heading="Full Stack Web Developer - IIUI Freelancing Society"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis minima vel, blanditiis quisquam sunt dolore
                    voluptatum adipisci consectetur delectus tempora minima vel, blanditiis quisquam sunt."
              />

              <Edu_Exp_Box
                duration="2023 - 2024"
                heading="Frontend Web Development - AS Community Hub"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis minima vel, blanditiis quisquam sunt dolore
                    voluptatum adipisci consectetur delectus tempora minima vel, blanditiis quisquam sunt"
              />

              <Edu_Exp_Box
                duration="2024 - Onwards"
                heading="Certified Full Stack .Net Core Developer - AdanIT Center"
                info="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corporis minima vel, blanditiis quisquam sunt dolore
                    voluptatum adipisci consectetur delectus tempora Corporis minima vel, blanditiis quisquam sunt dolore adipisicing elit."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="Skills"
        className="flex justify-center flex-col min-h-[auto] bg-[#112e42] pb-[7rem] font-Poppins px-[10%]">
        <h2 className="text-[5rem] mt-[6rem] text-center font-bold">
          My <span className="text-[#00abf0]">Skills</span>
        </h2>

        <div className="flex flex-wrap gap-[5rem]">
          <div className="flex-shrink flex-grow basis-[40rem]">
            <Heading heading="Coding Skills" marg_t="0" marg_l="0" marg_r="0" />

            <div className="relative border-[.2rem] border-[#00abf0] rounded-[.6rem] py-[.5rem] px-[1.5rem]">
              <Cod_Pro_Box heading="HTML" percent="90%" length="90%" />
              <Cod_Pro_Box heading="CSS" percent="80%" length="80%" />
              <Cod_Pro_Box heading="JavaScript" percent="75%" length="75%" />
              <Cod_Pro_Box heading="Python" percent="65%" length="65%" />
            </div>
          </div>

          <div className="flex-shrink flex-grow basis-[40rem]">
            <Heading
              heading="Professional Skills"
              marg_t="0"
              marg_l="0"
              marg_r="0"
            />

            <div className="relative border-[.2rem] border-[#00abf0] rounded-[.6rem] py-[.5rem] px-[1.5rem]">
              <Cod_Pro_Box heading="Web Design" percent="95%" length="95%" />
              <Cod_Pro_Box
                heading="Web Development"
                percent="67%"
                length="67%"
              />
              <Cod_Pro_Box
                heading="Graphic Design"
                percent="85%"
                length="85%"
              />
              <Cod_Pro_Box heading="SEO Expert" percent="70%" length="70%" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="Contact"
        className="min-h-[auto] bg-[#081b29] pb-[7rem] font-Poppins px-[10%] py-[1%]">
        <h2 className="text-[5rem] mt-[6rem] mb-4 text-center font-bold">
          Contact <span className="text-[#00abf0]">Me!</span>
        </h2>

        <form className="max-w-[70rem] my-0 mx-auto text-center" action="/">
          <Input_Box
            type1="text"
            place1="Full Name"
            type2="text"
            place2="Email Address"
          />
          <Input_Box
            type1="tel"
            place1="Mobile Number"
            type2="text"
            place2="Email Subject"
          />

          <div className="relative mt-[.8rem] mx-0 mb-[2.7rem] flex">
            <textarea
              className="w-[100%] h-[100%] p-[1.5rem] text-[1.6rem] text-[#ededed] bg-transparent rounded-[.6rem] border-[.2rem] border-[#00abf0] placeholder:text-[#ededed] resize-none focus:outline-none"
              cols={30}
              rows={10}
              placeholder="Your Messege"
              required></textarea>
          </div>

          <div className="h-[3.5rem] flex justify-center ">
            <Button text="Submit" textColor="#081b29" bgColor="#00abf0" />
          </div>
        </form>
      </section>
      {/* Footer */}
      <Footer />
    </main>
  );
}
