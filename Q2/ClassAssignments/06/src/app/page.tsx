import CustomCss from "./components/CustomCss";
import TailwindCss from "./components/TailwindCss";

export default function Home() {
  return (
    <div className="text-center flex flex-col gap-10">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-extrabold text-center">
          Responsive Navbar with:
        </h1>
        <div className="w-[80%] h-1 bg-black border border-black"></div>
      </div>
      <div className="custom ">
        <h2>Custom CSS</h2>
        <CustomCss />
      </div>

      <div>
        <h2>Tailwind CSS</h2>
        <TailwindCss />
      </div>
    </div>
  );
}
