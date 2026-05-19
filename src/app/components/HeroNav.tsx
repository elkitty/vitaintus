type NavItem = { label: string; href: string };

type HeroNavProps = {
  items: NavItem[];
  logo: React.ReactNode;
  cta: React.ReactNode;
};

const HeroNav = ({ items, logo, cta }: HeroNavProps) => {
  return (
    <nav className="h-[45px] w-full">
      <div className="flex h-full items-center">
        {/* Left (mismo ancho que Right) */}
        <div className="w-[180px] shrink-0">
          <div className="flex items-center justify-start">{logo}</div>
        </div>

        {/* Center */}
        <nav className="menu-text flex flex-1 justify-center gap-8">
          {items.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right (mismo ancho que Left) */}
        <div className="w-[180px] shrink-0">
          <div className="flex items-center justify-end">{cta}</div>
        </div>
      </div>
    </nav>
  );
};

export default HeroNav;
