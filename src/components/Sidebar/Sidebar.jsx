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
    <div className="relative flex flex-col gap-2 items-center bg-#0D0D0D h-[1125px] min-h-[1024px] w-[102px] md:w-[80px] lg:w-[102px] border-r border-[#353535] pt-4">
      <div className="flex flex-col items-center w-full h-full">
        {/* Logo */}
        <div className="mt-4 mb-8">
          <img src={UBCLogo} alt="logo" className="w-[70px] h-[55px]" />
        </div>

        {/* Navigation Icons */}
        <nav className="flex flex-col items-center space-y-10 flex-grow pt-10">
          <img src={SidebarIcon1} alt="logo1" className="w-8 h-8" />
          <img src={SidebarIcon1} alt="logo1" className="w-8 h-8" />
          <img src={SidebarIcon3} alt="logo3" className="w-8 h-8" />
          <img src={SidebarIcon4} alt="logo4" className="w-8 h-8" />
          <img src={SidebarIcon5} alt="logo5" className="w-8 h-8" />
          <img src={SidebarIcon6} alt="logo6" className="w-8 h-8" />
        </nav>

        {/* Bottom Icons */}
        <div className="flex flex-col items-center space-y-4 mb-11">
          <img src={SidebarArrow} alt="arrow" className="w-[16.86px] h-[30px] aspect-[3.75]" />
          <img src={SidebarDots} alt="dots" className="w-[30px] h-[7.5px] aspect-[0.57]" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
