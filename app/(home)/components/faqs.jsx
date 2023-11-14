import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs({ data }) {
  return (
    <section className="bg-themeBg px-2 py-20 md:px-0 w-full">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">{data.subtitle}</p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-1"
          >
            {data?.faqs?.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="cursor-pointer rounded-md border border-gray-400 transition-all duration-200 px-4 bg-white"
              >
                <AccordionTrigger className="flex justify-between items-center text-start text-lg font-semibold text-black hover:no-underline">{item?.question}</AccordionTrigger>
                <AccordionContent>{item?.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
