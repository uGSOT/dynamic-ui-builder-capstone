import { ChevronDown } from "lucide-react";

export default function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  inverted = false,
}) {
  const borderClass = inverted ? "border-border-dark" : "border-border";
  const questionClass = inverted ? "text-ink-inverse" : "text-ink";
  const answerClass = inverted ? "text-ink-inverse-muted" : "text-ink-muted";
  const iconClass = inverted ? "text-ink-inverse-muted" : "text-ink-subtle";

  return (
    <div className={`border-b ${borderClass}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={`flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold sm:text-base ${questionClass}`}
      >
        <span>{question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 transition-transform duration-200 ${iconClass} ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <p className={`pb-4 text-sm leading-relaxed ${answerClass}`}>
          {answer}
        </p>
      )}
    </div>
  );
}
