import InstagramFeed from "react-ig-feed";
import Art from "../assets/prexplore.png";
import "react-ig-feed/dist/index.css";
const Token =
  "IGQVJYc1dDU2MxVHBPWk85WWZA1VGMwMmh4LTJXUlh2VHQ2WmtVbzBwUEFqMHJTYlQyeVQxOC1KYW85Q1pKMVBjNTlBTXl0MjlsTWJ4b05yM2dTTldQVWhPMGlyQ1BuTXd4RHpwcTVrYllTZAFdJSmtEUgZDZD";

const Beats = () => {
  return (
    <div
      name="about"
      className="px-12 py-24 w-full h-screen bg-[#f2f2f2] text-[#303030]"
    >
      <p className="px-2 py-4 text-4xl font-bold inline-block ">
        Beats
      </p>
      <div className = "z-10">
      <InstagramFeed token={Token} counter="24" />
      </div>
      </div>
  );
};

export default Beats;
