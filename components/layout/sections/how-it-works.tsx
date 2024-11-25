import React from "react";
import { ArrowRight, Briefcase, Users, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    title: "define your project",
    description: "outline short-term tasks or projects that showcase real-world challenges your team faces.",
    icon: Briefcase,
  },
  {
    title: "collaborate with skilled developers",
    description: "work alongside pre-vetted developers who contribute directly to your projects.",
    icon: Users,
  },
  {
    title: "evaluate and decide",
    description: "assess performance in real scenarios and make informed hiring decisions without long-term commitments.",
    icon: CheckCircle,
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-600">how it works: simplifying the hiring funnel</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden transition-all duration-300 hover:shadow-lg">
              <CardHeader className="flex items-center justify-center pb-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-blue-500" />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl font-semibold mb-2">{step.title}</CardTitle>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-blue-500 absolute top-1/2 -right-3 transform -translate-y-1/2 md:rotate-0 md:top-auto md:right-auto md:bottom-0 md:left-1/2 md:-translate-x-1/2 md:translate-y-1/2" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
