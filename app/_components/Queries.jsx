import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export function Query() {
    return (
        <div className="flex flex-col bg-white  text-black items-center p-8 ">
            <div>
                <h1 className="text-transparent bg-clip-text mt-16 font-bold md:text-6xl sm:text-4xl bg-gradient-to-t from-[#fa3f7b] to-[#f10f48]">FAQs</h1>
            </div>
            <Accordion type="single" collapsible className="w-1/2 border-b-2 font-bold py-8">
                <AccordionItem value="item-1">
                    <AccordionTrigger>When do tickets go on sale?</AccordionTrigger>
                    <AccordionContent>
                        Tickets can be purchased starting January 12.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>What can I expect?</AccordionTrigger>
                    <AccordionContent>
                        Prepare to be challenged and inspired as the world’s largest platform for ideas returns to Hyderabad City for an evening of TED Talks, performances, and experiences.  the lineup includes an award-winning filmmaker, a neuroscientist and NOVA series host, a journalist and podcaster, an author, philosopher, and suicide preventer, an artist with a Guggenheim Fellowship, and much more.

                        Don't miss the opportunity to extend your experience beyond the event. Join us for a post-event celebration filled with more experiences, music, and refreshments (weather permitting).
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>How much do tickets cost?</AccordionTrigger>
                    <AccordionContent>
                        TEDxAnuragU (Anurag University APJ Abdul Kalam Hall): $52 to $95 + $8 facility fee (tickets)
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Can I volunteer at TEDxKC?</AccordionTrigger>
                    <AccordionContent>
                        You can sign up to volunteer <a href="">here</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>What is TED?</AccordionTrigger>
                    <AccordionContent>
                        TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California more than 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan, and Daniel Kahneman.

                        The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>What is TEDx?</AccordionTrigger>
                    <AccordionContent>
                        In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks videos and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx prog
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
