
import { Instagram, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = [
    {
      title: "About",
      links: ["About Us", "How We Work", "Careers", "Press", "Blog"]
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Safety Center", "Community Guidelines", "Sitemap"]
    },
    {
      title: "Legal",
      links: ["Terms & Conditions", "Privacy Policy", "Cookie Settings", "Trust & Safety"]
    },
    {
      title: "Discover",
      links: ["Travel Guides", "Seasonal Travel", "Travel Tips", "City Breaks", "Beach Getaways"]
    }
  ];

  return (
    <footer className="bg-slate-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-travel-darkBlue mb-4">TravelEscape</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Find your perfect accommodation with TravelEscape. 
              From luxury hotels to cozy apartments, we have everything 
              you need for your next adventure.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-travel-blue">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-travel-blue">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-travel-blue">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-travel-blue">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-travel-blue">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-travel-blue text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TravelEscape. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
