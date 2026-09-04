"use client";

interface LogoProps {
  dark?: boolean;
}

export default function Logo({ dark = false }: LogoProps) {
  const textColor = dark ? "text-white" : "text-[#7B2D8B]";
  return (
    <div className="flex items-center gap-2">
      {/* Icon: overlapping circles petal design */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="13" cy="18" r="10" fill="#7B2D8B" fillOpacity="0.85" />
        <circle cx="23" cy="18" r="10" fill="#E8415A" fillOpacity="0.85" />
        <ellipse cx="18" cy="13" rx="7" ry="10" fill="#7B2D8B" fillOpacity="0.6" />
        <ellipse cx="18" cy="23" rx="7" ry="10" fill="#E8415A" fillOpacity="0.6" />
      </svg>
      <div className={`font-bold text-sm leading-tight uppercase ${textColor}`}>
        <div>TOBAMS</div>
        <div>GROUP</div>
      </div>
    </div>
  );
}
