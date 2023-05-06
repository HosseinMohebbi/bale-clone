export const Maskan = ({ size, color = "#42526E", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="20"
        y="20"
        width="17"
        height="17"
        rx="5"
        stroke="#09B188"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></rect>
      <path
        d="M33 30L28.5 26.5L23.5 30"
        stroke="#09B188"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M38 16V9.87703C38 9.46813 37.751 9.10042 37.3714 8.94856L20.3714 2.14856C20.133 2.05319 19.867 2.05319 19.6286 2.14856L2.62861 8.94856C2.24895 9.10042 2 9.46813 2 9.87703V16.3C2 16.8523 2.44772 17.3 3 17.3H17"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M4.7002 18.2002V29.0002"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M15 29.8999H3C2.44772 29.8999 2 30.3476 2 30.8999V37.0999H15"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
