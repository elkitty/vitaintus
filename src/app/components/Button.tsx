type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "light" | "dark";
  className?: string;
};

const base =
  "inline-flex w-fit rounded-full items-center border-2 px-6 py-2 uppercase transition";

const variants = {
  light: "border-white/40 text-white",
  dark: "border-black/40 text-black",
};

export default function Button({
  children,
  href,
  variant = "light",
  className,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className ?? ""}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes}>
      {children}
    </button>
  );
}
