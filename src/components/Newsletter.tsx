
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      toast({
        title: "Subscription confirmed!",
        description: "You'll receive our best travel deals in your inbox.",
      });
      setEmail("");
    }
  };
  
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-3">Get travel deals in your inbox</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and we'll send you the best deals and travel inspiration.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow"
            required
          />
          <Button type="submit" className="bg-travel-blue hover:bg-travel-darkBlue">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
