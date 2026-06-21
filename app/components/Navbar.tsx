import Image from "next/image";
import Logo from "@/public/images/icon-nav.webp";

export default function Navbar() {
  return (
    <nav className="navbar flex items-center justify-between h-[7.3rem] mx-16 my-0 bg-main-white text-main-color">
      <div className="navbar-logo flex justify-center items-center gap-5 font-bold text-[2rem] tracking-[-0.15rem] text-main-color">
        <Image src={Logo} alt="iconLogo" width={50} height={50} />
        <span>naufal</span>
      </div>
      <ul className="navbar-list inline-flex items-center list-none gap-8 font-semibold cursor-pointer">
        <li>Home</li>
        <li>Google Ads Services</li>
        <li>Google Ads Resources</li>
        <li>About Me</li>
        <li>Contact</li>
        <li className="flex items-center justify-center gap-1 leading-none">
          <svg
            className="navbar-flag shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.5)] translate-y-[0.9px]"
            xmlns="https://www.w3.org/2000/svg"
            width={20}
            height={10}
          >
            <rect width={20} height={5} fill="red" />
            <rect y={5} width={20} height={5} fill="white" />
          </svg>
          ID
        </li>
      </ul>
    </nav>
  );
}
