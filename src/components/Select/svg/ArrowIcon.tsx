interface ArrowIconProps {
    open: boolean;
}

const ArrowIcon = ({open}: ArrowIconProps) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="1em"
      role="presentation"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      data-slot="selectorIcon"
      className={`absolute right-3 w-4 h-4 transition-transform duration-150 ease motion-reduce:transition-none ${
        open && "rotate-180"
      }`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
};

export default ArrowIcon;
