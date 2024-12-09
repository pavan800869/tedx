import Marquee from "@/components/ui/marquee";
import { cn } from "@/lib/utils";


const reviews = [
  {
    name: "Amazon",
    
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Red Bull",
    
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Anurag University",
    
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "TedX Hyd",
   
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    
   
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <figure
    className={cn(
      "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
      // light styles
      "border-gray-100/[.1] bg-gray-100/[.01] hover:bg-blue-800/[.3]",
      // dark styles
      "dark:border-gray-100/[.1] dark:bg-gray-100/[.10] dark:hover:bg-gray-100/[.15]",
    )}
    >
      <div className="flex flex-row items-center mx-auto justify-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          
        </div>
      </div>
      
    </figure>
  );
};

function Sponsors() {
  return (
    <div className="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl bg-black py-8">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black"></div>
    </div>
  );
}
export default Sponsors