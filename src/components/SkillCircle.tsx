import type { CSSProperties } from "react";
import type { IconType } from "react-icons";

type Props = {
  percentage: number;
  color: string;
  icon: IconType;
  label: string;
};

export default function SkillCircle({
  percentage,
  color,
  icon: Icon,
  label,
}: Props) {
  const size = 96;
  const radius = size / 2;
  const stroke = 6;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div
      className="group flex flex-col items-center gap-2 rounded-2xl border border-[rgb(var(--accent)/0.12)] bg-[rgb(var(--panel-strong)/0.4)] px-4 py-5 transition-all duration-300 hover:scale-105 hover:border-[var(--skill-color)] hover:shadow-[0_0_26px_var(--skill-color)]"
      style={{ "--skill-color": color } as CSSProperties}
    >
      <div className="relative w-24 h-24">
        <svg
          height={size}
          width={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute inset-0 transition-all duration-300 group-hover:[filter:drop-shadow(0_0_8px_var(--skill-color))]"
        >
          {/* Background circle */}
          <circle
            stroke="rgb(var(--accent) / 0.12)"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Progress circle */}
          <circle
            stroke="currentColor"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            style={{
              color: "var(--skill-color)",
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: "stroke-dashoffset 0.8s ease",
            }}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            transform={`rotate(-90 ${radius} ${radius})`}
          />
        </svg>

        {/* Icon Center */}
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-3xl leading-none">
            <Icon
              className="text-3xl transition-all duration-300 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_10px_var(--skill-color))]"
              style={{ color: "var(--skill-color)" }}
            />
          </div>
        </div>
      </div>

      <p className="text-sm">{label}</p>
      <p className="theme-accent text-sm opacity-70">{percentage}%</p>
    </div>
  );
}
