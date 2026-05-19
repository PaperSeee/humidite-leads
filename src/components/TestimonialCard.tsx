import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  text: string;
  problem: string;
  date: string;
}

export default function TestimonialCard({
  name,
  location,
  rating,
  text,
  problem,
  date,
}: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
        <span className="text-xs bg-blue-50 text-[#1E3A5F] px-2 py-1 rounded-full font-medium">
          {problem}
        </span>
      </div>
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }
          />
        ))}
      </div>
      <p className="text-gray-700 text-sm leading-relaxed">&quot;{text}&quot;</p>
      <p className="text-xs text-gray-400 mt-auto">{date}</p>
    </div>
  );
}
