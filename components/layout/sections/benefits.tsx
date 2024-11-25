import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "reduce hiring risks",
    description:
      "the cost of a bad hire is devastating, and traditional interviews are becoming less and less effective.",
  },
  {
    icon: "Clock",
    title: "save time",
    description:
      "current recruiting tools field lot of candidates, but you're the one spending hours reviewing them.",
  },
  {
    icon: "Users",
    title: "flexible staffing",
    description:
      "your team scales with you, transitioning contractors to full-time roles as the team grows.",
  },
  {
    icon: "Target",
    title: "solve real problems",
    description:
      "evaluate candidates based on actual tickets their role would be responsible for.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-10 sm:py-12">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider lowercase-text">benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 lowercase-text gradient-text">
            your shortcut to scalable talent
          </h2>
          <p className="text-xl text-muted-foreground mb-8 lowercase-text minimalist">
          probie.ai is a platform that automates recruiting pipeline filtering for startups using real projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number modern-component"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="lowercase-text gradient-text">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground lowercase-text minimalist">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
