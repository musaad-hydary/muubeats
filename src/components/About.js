import React from "react";
import InstagramFeed from "react-ig-feed";
import "react-ig-feed/dist/index.css";
const Token =
  "IGQVJYc1dDU2MxVHBPWk85WWZA1VGMwMmh4LTJXUlh2VHQ2WmtVbzBwUEFqMHJTYlQyeVQxOC1KYW85Q1pKMVBjNTlBTXl0MjlsTWJ4b05yM2dTTldQVWhPMGlyQ1BuTXd4RHpwcTVrYllTZAFdJSmtEUgZDZD";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#f2f2f2] text-[#303030]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#303030]">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
Hi, welcome to muubeats.          </div>

          <div>
            <p>
              I have been producing with Ableton Live for 5 years, making beats everyday for social media. I have a few projects in the works that aim to expand my artistic horizons and growth as a person.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;