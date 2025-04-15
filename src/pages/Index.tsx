
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchForm from "@/components/SearchForm";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import FeaturedProperties from "@/components/FeaturedProperties";
import TravelTips from "@/components/TravelTips";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <SearchForm />
        <FeaturedDestinations />
        <FeaturedProperties />
        <TravelTips />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
