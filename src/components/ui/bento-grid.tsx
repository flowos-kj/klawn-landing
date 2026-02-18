import { CaretRight } from "@phosphor-icons/react";
import { cn } from "@/lib/cn";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  bullets?: string[];
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

export function BentoGridItem({
  className,
  title,
  description,
  bullets,
  header,
  icon,
}: BentoGridItemProps) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between rounded-xl border border-border bg-white p-5 shadow-sm transition duration-200 hover:border-copper/30 hover:shadow-lg sm:p-6",
        className,
      )}
    >
      {header}
      <div className="flex flex-1 flex-col transition duration-200 group-hover/bento:translate-x-1">
        <div className="mb-1">{icon}</div>
        <div className="mb-1 mt-2 text-lg font-bold text-navy-dark sm:text-xl">
          {title}
        </div>
        <div className="mb-3 text-sm font-medium text-muted">{description}</div>
        {bullets && bullets.length > 0 && (
          <ul className="mt-auto space-y-1.5">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-xs text-foreground sm:text-sm"
              >
                <CaretRight
                  weight="bold"
                  className="mt-0.5 h-3 w-3 shrink-0 text-copper"
                />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
