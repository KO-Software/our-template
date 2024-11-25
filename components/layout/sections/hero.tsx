"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {

  return (
    <section className="container w-full bg-black text-foreground">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-16 md:py-24">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>new</Badge>
            </span>
            <span>waitlist for probie.ai is open</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1 className="minimalist">
              we validate your talent pipeline
              <span className="gradient-text px-2">
              </span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground minimalist">
            probie.ai is the first automated job trial system. have candidates solve real tickets with your stack and hire them full-time if it works out.
          </p>

          <Button
            asChild
            variant="default"
            className="w-5/6 md:w-1/4 font-bold modern-component"
          >
            <Link href="#contact">
              i'm interested
            </Link>
          </Button>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
