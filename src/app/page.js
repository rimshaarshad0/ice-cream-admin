import AdminLogin from "@/components/adminLogin";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#c1a089] overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-6 pt-[6rem] md:pt-[8rem] pb-10">
        <h1 className="font_style text-[1.7rem] hidden md:block md:text-[3rem] tracking-wider md:tracking-widest font-extrabold mb-4 text-center text-[#8B4513]">Ice Cream Adim Dashboard</h1>
        <h1 className="font_style text-[1.7rem] md:hidden md:text-[3rem] tracking-wider md:tracking-widest font-extrabold mb-4 text-center text-[#8B4513]">Ice Cream</h1>
        <h1 className="font_style text-[1.7rem] md:hidden md:text-[3rem] tracking-wider md:tracking-widest font-extrabold mb-4 text-center text-[#8B4513]">Adim Dashboard</h1>
        <div>
          <AdminLogin/>
        </div>
      </div>
    </div>
  );
}
