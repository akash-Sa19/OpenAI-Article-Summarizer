import { logo } from "../assets";
import "../App.css";

const Hero = () => {
  return (
    <header className="flex flex-col items-center justify-center w-full ">
      <nav className="flex items-center justify-between w-full pt-3 mb-10">
        <img
          src={logo}
          alt="sumz logo"
        />
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/akash-Sa19/OpenAI-Article-Summarizer"
            )
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Sumize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
