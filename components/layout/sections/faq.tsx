import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "how does probie.ai work?",
    answer: "probie.ai connects startups with talented professionals for short-term work trials. startups can post projects, and candidates can apply for these trials. if the trial is successful, it can lead to a full-time position.",
    value: "item-1",
  },
  {
    question: "what are the benefits for startups?",
    answer: "startups can reduce hiring risks by evaluating candidates in real-world projects before making long-term commitments. this approach saves time and ensures a better fit for your team.",
    value: "item-2",
  },
  {
    question: "how long do work trials typically last?",
    answer: "work trials usually last between 2 to 4 weeks, depending on the project scope and startup requirements. this duration allows for a comprehensive evaluation of the candidate's skills and cultural fit.",
    value: "item-3",
  },
  {
    question: "is there a fee for using probie.ai?",
    answer: "probie.ai offers a free trial for startups to post their first project. after the trial period, we have flexible pricing plans based on your hiring needs. check our pricing section for more details.",
    value: "item-4",
  },
  {
    question: "how does probie.ai ensure quality candidates?",
    answer: "we have a rigorous vetting process for all candidates, including skill assessments and background checks. we also use AI-powered matching to ensure the best fit between startups and talent.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider lowercase">
          faqs
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold lowercase">
          common questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left lowercase">
              {question}
            </AccordionTrigger>

            <AccordionContent className="lowercase">{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
