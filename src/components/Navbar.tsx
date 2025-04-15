
import { Button } from "@/components/ui/button";
import { BedDouble, User, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const NavItems = ({ className }: { className?: string }) => (
  <ul className={cn("flex items-center gap-6", className)}>
    <li>
      <a href="#" className="flex items-center gap-1 text-travel-darkBlue font-medium hover:text-travel-blue">
        <BedDouble size={18} />
        <span>Stays</span>
      </a>
    </li>
    <li>
      <a href="#" className="text-gray-500 hover:text-travel-blue">Flights</a>
    </li>
    <li>
      <a href="#" className="text-gray-500 hover:text-travel-blue">Car Rentals</a>
    </li>
    <li>
      <a href="#" className="text-gray-500 hover:text-travel-blue">Attractions</a>
    </li>
  </ul>
);

const Navbar = () => {
  const isMobile = useIsMobile();
  
  return (
    <nav className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-travel-darkBlue">
          TravelEscape
        </a>
        
        {!isMobile && <NavItems />}
        
        <div className="flex items-center gap-4">
          {!isMobile && (
            <>
              <Button variant="ghost" size="sm">
                List your property
              </Button>
              <Button variant="outline" size="sm">Register</Button>
            </>
          )}
          
          <Button className="bg-travel-blue hover:bg-travel-darkBlue">
            <User size={18} className="mr-2" /> Sign In
          </Button>
          
          {isMobile && (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 mt-8">
                  <NavItems className="flex-col items-start" />
                  <hr />
                  <Button variant="ghost" size="sm" className="justify-start">
                    List your property
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">Register</Button>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
