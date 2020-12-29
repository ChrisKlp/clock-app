const ArrowIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle cx="20" cy="20" r="20" />
        <path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
      </g>
    </svg>
  );
};

export default ArrowIcon;
