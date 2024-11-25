import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center lowercase">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">probie.ai</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg lowercase">how it works</h3>
            <div>
              <Link href="#how-it-works" className="opacity-60 hover:opacity-100 lowercase">
                trial process
              </Link>
            </div>
            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100 lowercase">
                benefits
              </Link>
            </div>
            <div>
              <Link href="#pricing" className="opacity-60 hover:opacity-100 lowercase">
                pricing
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg lowercase">for startups</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                post a project
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                find talent
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                success stories
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg lowercase">for talent</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                apply for trials
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                showcase skills
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                career growth
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg lowercase">connect</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                contact us
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                faq
              </Link>
            </div>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100 lowercase">
                blog
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="lowercase">
          <h3 className="">
            &copy; {new Date().getFullYear()} probie.ai. all rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};
