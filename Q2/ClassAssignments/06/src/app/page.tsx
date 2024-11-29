import Image from "next/image";
import CustomCss from "./components/CustomCss";
import TailwindCss from "./components/TailwindCss";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Responsive Navbar with</h1>
      {/* <div className="line"></div> */}
      <div className="custom">
        <h2>Custom CSS</h2>
        <CustomCss />
      </div>

      {/* <div>
        <h2>Tailwind CSS</h2>
        <TailwindCss />
      </div> */}
    </div>
  );
}
