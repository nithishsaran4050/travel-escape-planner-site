
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const properties = [
  {
    name: "Grand Luxury Hotel & Spa",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&h=500&auto=format&fit=crop",
    location: "New York",
    rating: 9.2,
    ratingText: "Excellent",
    price: 199,
    discountedPrice: 159,
    isTopRated: true,
    description: "In the heart of Manhattan, featuring panoramic city views and a rooftop pool."
  },
  {
    name: "Oceanview Resort",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&h=500&auto=format&fit=crop",
    location: "Miami Beach",
    rating: 8.9,
    ratingText: "Very Good",
    price: 249,
    discountedPrice: 189,
    isTopRated: true,
    description: "Direct beach access with stunning ocean views and luxury amenities."
  },
  {
    name: "Urban Boutique Hotel",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&h=500&auto=format&fit=crop",
    location: "Chicago",
    rating: 8.5,
    ratingText: "Very Good",
    price: 129,
    discountedPrice: null,
    isTopRated: false,
    description: "Modern design in downtown Chicago, close to major attractions and shopping."
  },
  {
    name: "Mountain View Lodge",
    image: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=800&h=500&auto=format&fit=crop",
    location: "Denver",
    rating: 9.0,
    ratingText: "Excellent",
    price: 179,
    discountedPrice: 139,
    isTopRated: true,
    description: "Nestled in the mountains with breathtaking views and hiking trails nearby."
  }
];

const FeaturedProperties = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured properties</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.name} className="hotel-card flex flex-col h-full">
            <div className="relative">
              <img 
                src={property.image} 
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              {property.isTopRated && (
                <Badge className="absolute top-2 right-2 bg-travel-green">
                  Top Rated
                </Badge>
              )}
            </div>
            
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg">{property.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{property.location}</p>
              
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {property.description}
              </p>
              
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <div className="bg-travel-blue text-white font-bold rounded px-2 py-1 text-sm">
                    {property.rating}
                  </div>
                  <span className="font-medium text-sm">{property.ratingText}</span>
                </div>
                
                <div className="text-right">
                  <div className="flex flex-col items-end">
                    {property.discountedPrice && (
                      <span className="line-through text-gray-400 text-sm">
                        ${property.price}
                      </span>
                    )}
                    <span className="font-bold text-lg">
                      ${property.discountedPrice || property.price}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">per night</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProperties;
