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
      "trial periods let you evaluate candidates based on actual work performance, not theoretical knowledge. see how they tackle real challenges, collaborate with your team, and deliver results before making a full-time commitment.",
  },
  {
    icon: "Clock",
    title: "save time",
    description:
      "streamline your hiring process by evaluating candidates through actual work performance rather than lengthy interviews.",
  },
  {
    icon: "Users",
    title: "flexible staffing",
    description:
      "easily scale your team up or down based on project needs, maintaining agility in your startup's growth.",
  },
  {
    icon: "Target",
    title: "find the right talent",
    description:
      "assess candidates' skills, work ethic, and cultural fit through hands-on projects tailored to your startup's needs.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider lowercase-text">benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 lowercase-text gradient-text">
            your shortcut to startup success
          </h2>
          <p className="text-xl text-muted-foreground mb-8 lowercase-text minimalist">
          probie is a platform that manages talent filtering for startups through real world projects instead of in-house "cookie cutter" technical interviews.
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
