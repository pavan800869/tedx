import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
export function Query() {
    return (
        <div className="flex flex-col bg-black text-white items-center px-8 py-8">
            <div>
                <h1 className=" mt-8 font-bold text-3xl sm:text-4xl text-red-600">FAQs</h1>
            </div>
            <Accordion type="single" collapsible className="w-full   py-8 px-4 lg:px-40">
                <AccordionItem value="item-1" className={"py-4"}>
                    <AccordionTrigger className={"text-2xl font-bold"}>
                        <a href="/speakers" className="text-white">Who are the Speakers?</a>
                    </AccordionTrigger>
                    <AccordionContent>
                        Tickets can be purchased starting January 12. For more information about the speakers, visit our <a href="/speakers" className="text-blue-400">Speakers Page</a>.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className={"py-4"}>
                    <AccordionTrigger className={"text-2xl font-bold"}>
                        Where is the Event Happening?
                    </AccordionTrigger>
                    <AccordionContent>
                        The event will take place at Anurag University, APJ Abdul Kalam Hall. For directions and more details, visit the 
                        <Link href="#footer">
                        <a className="text-blue-400"> Event Location Page</a>.
                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className={"py-4"}>
                    <AccordionTrigger className={"text-2xl font-bold"}>
                        <a href="/ticket-prices" className="text-white">What is the Ticket Price?</a>
                    </AccordionTrigger>
                    <AccordionContent>
                        TEDxAnuragU (Anurag University APJ Abdul Kalam Hall): Releasing Soon, visit our 
                        <Link href="#ticketing">
                        <a className="text-blue-400"> Ticket Prices Page</a>.
                        </Link>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className={"py-4"}>
                    <AccordionTrigger className={"text-2xl font-bold"}>
                        <a href="/event-timings" className="text-white">What are the Event Timings?</a>
                    </AccordionTrigger>
                    <AccordionContent>
                        The event is at Anurag University from 9 AM to 6 PM IST.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
