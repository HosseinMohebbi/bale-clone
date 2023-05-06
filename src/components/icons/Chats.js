export const Chats = ({
    size,
    color="#200E32",
    ...props
}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      fill-rule="evenodd"
      stroke={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      transform="translate(2 2)"
    >
      <circle cx="9.767" cy="9.767" r="8.989" />
      <line x1="16.018" x2="19.542" y1="16.485" y2="20" />
    </g>
  </svg>
  );
};
