import Image from "next/image";
import PersonalImg from "@/public/images/me.jpg";

export default function Header() {
  return (
    <header className="header bg-header-content h-142">
      <section className="header-content flex justify-center flex-col gap-7 text-nowrap relative w-4/5 h-full my-0 mx-auto text-main-color ">
        <h1 className="header-title text-main-color font-extrabold text-[2.5rem]">
          Your Google Ads
          <br />
          Campaigns{" "}
          <span className="header-title-highlight shadow-[1px_1px_1px_rgba(0,0,0,0.5)] pr-[0.23rem]">
            Perform Better
          </span>
          <br />
          With Me Behind The Wheel. 
        </h1>
        <p className="header-description leading-8 text-main-color">
          I&apos;ll get most out of your Google Ads campaigns or teach you
          <br /> the intricacies so you can do it yourself!
        </p>
        <button className="header-cta cursor-pointer bg-main-color text-main-white  inline-block w-fit text-center border-none outline-none py-[0.7rem] px-4 text-nowrap text-[0.8rem] font-[530]">
          Here~ if you want outsource Google Ads!
        </button>
        <div className="header-profile">
          <div className="header-profile-bg absolute h-60 w-[45%] bg-profile-header right-0 bottom-0 rounded-tl-[20rem] rounded-tr-[20rem]"></div>
          <Image
            className="header-profile-img absolute -bottom-6 right-20 "
            src={PersonalImg}
            alt="personalImg"
            width={300}
            height={500}
          />
        </div>
      </section>
    </header>
  );
}
