import { NavigationColumn } from "./components/NavigationColumn";
import { ContactInfo } from "./components/ContactInfo";
import { CompanyInfo } from "./components/CompanyInfo";
import { navigationLinks, servicesLinks } from "./data/navigationData";
import Logo from "../../assets/svgs/logo.svg";
import RightDots from "@/assets/images/RightDots.png";

export function Footer() {
  return (
    <footer className="flex flex-col relative">
      <div className="flex flex-col items-center px-20 pt-20 mt-16 pb-8 w-full border-t border-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-nowrap lg:flex-nowrap gap-5 w-full max-w-[1240px] max-md:flex-wrap max-md:max-w-full">
          <div className="w-[35%] lg:w-[35%] md:w-[50%] max-md:w-full">
            <CompanyInfo />
          </div>
          <div className="w-[20%] lg:w-[20%] md:w-[50%] max-md:w-full">
            <NavigationColumn title="Navigations" links={navigationLinks} />
          </div>
          <div className="w-[20%] lg:w-[20%] md:w-[50%] max-md:w-full">
            <NavigationColumn title="Main Services" links={servicesLinks} />
          </div>
          <div className="w-[25%] lg:w-[25%] md:w-[50%] max-md:w-full">
            <ContactInfo />
          </div>
        </div>
        <div className="shrink-0 mt-14 max-w-full h-px bg-white border border-solid border-zinc-300 w-[1244px] max-md:mt-10" />

        <div className="flex flex-wrap gap-5 justify-between mt-6 w-full text-base tracking-wide text-white max-w-[1240px] max-md:max-w-full">
          <div className="my-auto">© Copyright 2024 All Rights Reserved</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/51b5a421b8ff4b8e94ef9b0be6355dd5/462f7a710e83d27d3bb4dec181165b0a96511eb4f5bb7c6136fe0dec0a48c539?apiKey=51b5a421b8ff4b8e94ef9b0be6355dd5&"
            className="object-contain shrink-0 max-w-full aspect-[4.76] w-[186px]"
            alt="Social media icons"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
