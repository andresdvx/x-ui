const CheckIcon = ({ className = "w-4 h-4 text-gray-800" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M4.293 12.293a1 1 0 011.414 0L9 15.586l9.293-9.293a1 1 0 111.414 1.414l-10 10a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default CheckIcon;
