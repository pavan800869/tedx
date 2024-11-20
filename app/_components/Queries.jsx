import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export function Query() {
    return (
        <div className="flex flex-col text-white items-center px-8 ">
            <div>
                <h1 className=" mt-16 font-bold md:text-6xl sm:text-4xl text-red-600">FAQs</h1>
            </div>
            <Accordion type="single" collapsible className="w-full   py-8 px-4 lg:px-40">
                <AccordionItem value="item-1" className={"py-4"}>
                    <AccordionTrigger className={"text-2xl font-bold"}>When do tickets go on sale?</AccordionTrigger>
                    <AccordionContent>
                        Tickets can be purchased starting January 12.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className={"py-4"}>
                    <AccordionTrigger className={"text-2xl font-bold"}>What can I expect?</AccordionTrigger>
                    <AccordionContent>
                        Prepare to be challenged and inspired as the world’s largest platform for ideas returns to Hyderabad City for an evening of TED Talks, performances, and experiences.  the lineup includes an award-winning filmmaker, a neuroscientist and NOVA series host, a journalist and podcaster, an author, philosopher, and suicide preventer, an artist with a Guggenheim Fellowship, and much more.

                        Don't miss the opportunity to extend your experience beyond the event. Join us for a post-event celebration filled with more experiences, music, and refreshments (weather permitting).
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className={"py-4"}>
                    <AccordionTrigger className={"text-2xl font-bold"}>How much do tickets cost?</AccordionTrigger>
                    <AccordionContent>
                        TEDxAnuragU (Anurag University APJ Abdul Kalam Hall): $52 to $95 + $8 facility fee (tickets)
                    </AccordionContent>
                </AccordionItem>
                
                
            </Accordion>
        </div>
    )
}
