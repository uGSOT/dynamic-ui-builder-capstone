import { ChevronDown } from "lucide-react";

export default function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  questionClass = "text-base font-semibold text-gray-900",
  answerClass   = "text-sm leading-relaxed text-gray-500",
  borderClass   = "border-gray-100",
  accentClass   = "text-[#e50913]",
}) {
  return (
    <div className={`border-b ${borderClass}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 py-4 text-left ${questionClass}`}
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-200 ${accentClass} ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <p className={`pb-4 ${answerClass}`}>
          {answer}
        </p>
      )}
    </div>
  );
}