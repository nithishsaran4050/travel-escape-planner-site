
import { useIsMobile } from "@/hooks/use-mobile";

const FeaturedDestinations = () => {
  const isMobile = useIsMobile();
  
  const destinations = [
    {
      name: "New York",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1200&h=600&auto=format&fit=crop",
      properties: 532
    },
    {
      name: "Paris",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&h=600&auto=format&fit=crop",
      properties: 412
    },
    {
      name: "London",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&h=600&auto=format&fit=crop",
      properties: 487
    },
    {
      name: "Tokyo",
      image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&h=600&auto=format&fit=crop",
      properties: 320
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Explore destinations</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {destinations.map((destination, index) => (
          <a 
            key={destination.name}
            href="#"
            className="group relative rounded-lg overflow-hidden h-60 shadow-md transition-transform hover:scale-[1.02]"
          >
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="font-bold text-xl">{destination.name}</h3>
              <p className="text-sm">{destination.properties} properties</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinations;
