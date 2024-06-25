import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <div className=" h-[100vh] flex flex-col">
        <HomeHeader />
        <main className="grow flex justify-center">
          <div className="w-full  flex flex-col items-center mt-10">
            <img
              className="w-[172px] md:w-[272px] mb-8"
              src={Logo}
              alt="Logo"
            />
            <SearchInput />
            <div className="flex gap-2 text-[#3c4043] mt-8">
              <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 transition duration-300">
                Google Search
              </button>
              <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2 transition duration-300">
                I'm Feeling Lucky
              </button>
            </div>
            <div className="flex gap-2 text-[#3c4043] mt-4 ">
              <p>
                Google offered in:{" "}
                <span className="text-blue-800 cursor-pointer hover:underline">
                  English
                </span>
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
