import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Users",
    title: "talent matching",
    description:
      "our ai-powered system matches startups with the most suitable candidates for short-term projects.",
  },
  {
    icon: "Briefcase",
    title: "real-world trials",
    description:
      "evaluate potential hires through actual project work, giving you insights beyond traditional interviews.",
  },
  {
    icon: "Shield",
    title: "risk mitigation",
    description:
      "reduce hiring risks by testing candidates' skills and cultural fit before making long-term commitments.",
  },
  {
    icon: "Clock",
    title: "time-efficient",
    description:
      "streamline your hiring process and save time by focusing on pre-vetted candidates who have proven their abilities.",
  },
  {
    icon: "TrendingUp",
    title: "scalable staffing",
    description:
      "easily scale your team up or down based on project needs, maintaining agility in your startup's growth.",
  },
  {
    icon: "Zap",
    title: "performance insights",
    description:
      "gain valuable data on candidate performance during trials to make informed hiring decisions.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        What Makes Us Different
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
        fugiat, odit similique quasi sint reiciendis quidem iure veritatis optio
        facere tenetur.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
