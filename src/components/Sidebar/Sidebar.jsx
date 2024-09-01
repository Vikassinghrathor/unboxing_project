import UBCLogo from "../../assets/UBC.svg";
import SidebarIcon1 from "../../assets/SidebarIcon1.svg";
// import SidebarIcon2 from "../../assets/SidebarIcon2.svg";
import SidebarIcon3 from "../../assets/SidebarIcon3.svg";
import SidebarIcon4 from "../../assets/SidebarIcon4.svg";
import SidebarIcon5 from "../../assets/SidebarIcon5.svg";
import SidebarIcon6 from "../../assets/SidebarIcon6.svg";
import SidebarArrow from "../../assets/SidebarArrow.svg";
import SidebarDots from "../../assets/SidebarDots.svg";

const Sidebar = () => {
  return (
    <div className="relative flex flex-col gap-2 items-center bg-stone-950 h-full min-h-screen w-[102px] md:w-[80px] lg:w-[102px]">
      <div className="flex flex-col items-center w-full h-full">
        {/* Decorative Border */}
        <div className="absolute top-0 right-0 border-l border-neutral-700 border-opacity-50 h-full" />

        {/* Logo */}
        <div className="mt-4 mb-8">
          <img src={UBCLogo} alt="logo" className="w-[70px] h-[55px]" />
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center space-y-6 flex-grow">
          <img src={SidebarIcon1} alt="logo1" className="w-8 h-8" />
          <img src={SidebarIcon1} alt="logo1" className="w-8 h-8" />          
          <img src={SidebarIcon3} alt="logo3" className="w-8 h-8" />
          <img src={SidebarIcon4} alt="logo4" className="w-8 h-8" />
          <img src={SidebarIcon5} alt="logo5" className="w-8 h-8" />
          <img src={SidebarIcon6} alt="logo6" className="w-8 h-8" />
        </nav>

        {/* Bottom Icons */}
        <div className="flex flex-col items-center space-y-4 mb-11">
          <img
            src={SidebarArrow}
            alt="arrow"
            className="w-[30px] aspect-[3.75]"
          />
          <img
            src={SidebarDots}
            alt="dots"
            className="w-[17px] aspect-[0.57]"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
