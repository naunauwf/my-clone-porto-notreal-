import Image from "next/image";
import ApplImg from "@/public/images/AAPL.svg";
import AmznImg from "@/public/images/AMZN_BIG.svg";
import AmdImg from "@/public/images/AMD_BIG.svg";
import WlmrtImg from "@/public/images/WMT_BIG.svg";
import TeslaImg from "@/public/images/TSLA_BIG.svg";
import SpaceXImg from "@/public/images/SPCX_BIG.svg";
import McrsftImg from "@/public/images/microsoft.svg";
import NvdaImg from "@/public/images/NVDA_BIG.svg";
import IntlImg from "@/public/images/INTC.svg";
import JPMImg from "@/public/images/JPM_BIG.svg";
import MaImg from "@/public/images/MA.svg";
import GoogImg from "@/public/images/GOOG_BIG.svg";

export default function PartnerSection() {
  return (
    <section className="partners">
      <div className="partners-container flex flex-col justify-center items-center text-center w-4/5 mt-20 mr-auto mb-0 ml-auto text-main-color ">
        <div className="partners-title text-main-color font-bold text-[2rem]">
          I work with the best companies
        </div>
        <svg width={200} height={50}>
          <path
            d="M0 25 Q 25 0, 50 25 T 100 25 T 150 25 T 200 25"
            stroke="#d6c49e"
            fill="transparent"
          />
        </svg>
        <div className="partners-title-questions font-medium">
          May i add you to the list?
        </div>
        <div className="partners-images grid grid-cols-6 gap-8 my-12 mx-0">
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={ApplImg}
            alt="img-APPLL"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={AmznImg}
            alt="img-AMZN"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={AmdImg}
            alt="img-AMD"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={WlmrtImg}
            alt="img-WLMRT"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={TeslaImg}
            alt="img-TESLA"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={SpaceXImg}
            alt="img-spcX"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={McrsftImg}
            alt="img-MCRSFT"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={NvdaImg}
            alt="img-NVDA"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={IntlImg}
            alt="img-INTEL"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={JPMImg}
            alt="img-JPM"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={MaImg}
            alt="img-MSTRCRD"
          />
          <Image
            className="partners-logo block py-0 px-4 w-40 h-[90px] object-contain"
            src={GoogImg}
            alt="img-GOOGLE"
          />
        </div>
      </div>
    </section>
  );
}
