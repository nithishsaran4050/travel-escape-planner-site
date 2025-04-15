
import { Lightbulb, Shield, Clock, Map } from "lucide-react";

const TravelTips = () => {
  const tips = [
    {
      title: "Book early for the best deals",
      description: "The earlier you book, the better rates you typically get. Plan ahead!",
      icon: Clock
    },
    {
      title: "Free cancellation options",
      description: "Many properties offer free cancellation, giving you flexibility with your travel plans.",
      icon: Shield
    },
    {
      title: "Check the location carefully",
      description: "Make sure the property is close to attractions and areas you want to visit.",
      icon: Map
    },
    {
      title: "Read recent reviews",
      description: "Recent guest experiences can provide valuable insights into what to expect.",
      icon: Lightbulb
    }
  ];

  return (
    <section className="bg-travel-lightBlue py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Smart Travel Tips</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tips.map((tip) => (
            <div key={tip.title} className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center animate-fade-in">
              <div className="p-3 bg-travel-lightBlue rounded-full mb-4">
                <tip.icon className="h-6 w-6 text-travel-darkBlue" />
              </div>
              <h3 className="font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
