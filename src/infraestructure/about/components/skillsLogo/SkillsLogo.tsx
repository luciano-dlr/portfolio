import { FC, useState, useEffect } from "react";

interface SkillsLogoProps {
  logo: JSX.Element;
  title?: string;
}

export const SkillsLogo: FC<SkillsLogoProps> = ({ logo: Logo, title }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(true);
  };

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={handleClick}
        className="flex items-center justify-center cursor-pointer"
      >
        {Logo}
      </div>

      <div
        id="tooltip-click"
        role="tooltip"
        className={`absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10 inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 ${
          showTooltip ? "opacity-100" : "opacity-0"
        }`}
      >
        {title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  );
};
