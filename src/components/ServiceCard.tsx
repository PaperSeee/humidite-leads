import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  symptoms?: string[];
  color?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  symptoms,
  color = "text-[#F97316]",
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <div className={`mb-4 ${color}`}>
        <Icon size={32} />
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#1E3A5F] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {description}
      </p>
      {symptoms && symptoms.length > 0 && (
        <ul className="space-y-1">
          {symptoms.map((s, i) => (
            <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
              <span className="text-[#F97316] font-bold mt-0.5">›</span>
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
