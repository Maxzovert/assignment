import { useState } from "react";
import logo from "../../../assets/Logo.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () =>  {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-15 w-auto bg-white border rounded-2xl mt-8 mx-6 sm:mx-10 md:mx-30 border-gray-300">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="m-2">
          <img src={logo} alt="logo" height={45} width={45} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-row items-center justify-evenly space-x-6 w-2xl ml-28">
          {["Product", "Customer", "Resources", "About us"].map((item, index) => (
            <div className="text-sm text-black m-2" key={index}>
              {item}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4 mr-4">
          <Button variant="Ghost">Plans</Button>
          <Button variant="secondary" className="bg-[#E4875D1A] text-[#E4875D]">Login</Button>
          <Button className="bg-[#E4875D] text-white">Request a Demo</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white border-t border-gray-300 py-4 space-y-4">
          {["Product", "Customer", "Resources", "About us"].map((item, index) => (
            <div className="text-sm text-black" key={index}>
              {item}
            </div>
          ))}
          <Button variant="Ghost">Plans</Button>
          <Button variant="secondary" className="bg-[#E4875D1A] text-[#E4875D]">Login</Button>
          <Button className="bg-[#E4875D] text-white">Request a Demo</Button>
        </div>
      )}
    </div>
  );
}
export default Navbar