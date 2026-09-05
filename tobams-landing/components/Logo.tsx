import Image from "next/image";

interface LogoProps {
  dark?: boolean;
}

export default function Logo({ dark = false }: LogoProps) {
  return (
    <div className="flex-shrink-0">
      <Image
        src="/images/logo.png"
        alt="Tobams Group"
        width={140}
        height={40}
        className={dark ? "brightness-0 invert" : ""}
        priority
      />
    </div>
  );
}