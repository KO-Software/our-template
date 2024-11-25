"use client";

import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

interface FeaturedStartupProps {
  icon: string;
  name: string;
}

const featuredStartups: FeaturedStartupProps[] = [
  {
    icon: "Rocket",
    name: "technovate",
  },
  {
    icon: "Zap",
    name: "quickspark",
  },
  {
    icon: "Code",
    name: "codeforge",
  },
  {
    icon: "Cpu",
    name: "aiinnovate",
  },
  {
    icon: "Globe",
    name: "globalreach",
  },
  {
    icon: "Smartphone",
    name: "mobilemate",
  },
  {
    icon: "Cloud",
    name: "cloudpioneer",
  },
];

export const FeaturedStartupsSection = () => {
  return (
    <section id="featured-startups" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6 lowercase">
        startups that found success with probie.ai
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {featuredStartups.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium lowercase"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={32}
                color="white"
                className="mr-2"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
