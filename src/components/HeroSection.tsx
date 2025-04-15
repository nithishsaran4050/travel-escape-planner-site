
import { useIsMobile } from "@/hooks/use-mobile";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  // Use 2 different image sizes based on screen size
  const heroImage = isMobile
    ? "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&h=600&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&h=600&auto=format&fit=crop";

  return (
    <div className="relative">
      <div 
        className="h-[400px] md:h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"
          aria-hidden="true"
        />
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 max-w-2xl">
            Find your perfect stay anywhere in the world
          </h1>
          <p className="text-lg md:text-xl max-w-2xl">
            Search thousands of hotels, apartments, and unique stays
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
