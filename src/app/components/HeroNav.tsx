type NavItem = { label: string; href: string };

type HeroNavProps = {
  items: NavItem[];
  logo: React.ReactNode;
  cta: React.ReactNode;
};

const HeroNav = ({ items, logo, cta }: HeroNavProps) => {
  return (
    <nav className="h-[45px] w-full">
      <div className="flex h-full items-center justify-between">
        {/* Left (mismo ancho que Right) */}
        <div className="md:w-[180px] md:shrink-0">
          <div className="flex items-center justify-start">{logo}</div>
        </div>

        {/* Center */}
        <nav className="menu-text hidden md:flex flex-1 justify-center gap-8">
          {items.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right (mismo ancho que Left) */}
        <div className="md:w-[180px] md:shrink-0">
          <div className="hidden md:flex items-center justify-end">{cta}</div>
          <div className="flex md:hidden h-10 w-10 flex-col items-center justify-center gap-1.5">
            <span className="h-[2px] w-6 bg-white" />
            <span className="h-[2px] w-6 bg-white" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeroNav;
