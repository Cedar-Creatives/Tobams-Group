interface LogoProps {
  dark?: boolean;
}

export default function Logo({ dark = false }: LogoProps) {
  const textFill = dark ? "#FFFFFF" : "#7B2D8B";

  return (
    <div className="flex items-center gap-2">
      {/* Tobams Group icon: overlapping petal/circle shapes */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        {/* Left petal — dark purple */}
        <ellipse cx="14" cy="14" rx="9" ry="12" fill="#7B2D8B" fillOpacity="0.90" />
        {/* Right petal — coral/red */}
        <ellipse cx="22" cy="14" rx="9" ry="12" fill="#E8415A" fillOpacity="0.90" />
        {/* Bottom petal — dark purple, lower overlap */}
        <ellipse cx="18" cy="23" rx="9" ry="10" fill="#7B2D8B" fillOpacity="0.75" />
        {/* Center highlight overlap */}
        <ellipse cx="18" cy="16" rx="5" ry="7" fill="#C03070" fillOpacity="0.40" />
      </svg>

      {/* TOBAMS GROUP text — two lines, bold uppercase */}
      <svg
        width="96"
        height="32"
        viewBox="0 0 96 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="TOBAMS GROUP"
        role="img"
      >
        <text
          x="0"
          y="13"
          fontFamily="Inter, sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="0.04em"
          fill={textFill}
          textAnchor="start"
        >
          TOBAMS
        </text>
        <text
          x="0"
          y="28"
          fontFamily="Inter, sans-serif"
          fontSize="13"
          fontWeight="700"
          letterSpacing="0.04em"
          fill={textFill}
          textAnchor="start"
        >
          GROUP
        </text>
      </svg>
    </div>
  );
}
