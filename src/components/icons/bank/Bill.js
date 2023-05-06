export const Bill = ({ size, color = "#09B188", ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.9085 12.5H6.5882C4.79056 12.5 3.33301 11.2361 3.33301 9.69444C3.3492 8.18056 4.06178 6.79167 5.22782 5.79167C6.41006 4.79167 8.02955 4.16667 9.811 4.16667H13.7302C16.289 4.16667 17.9085 5.55556 17.9085 7.75V8.3125"
        stroke="#42526E"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6.57201 12.5002H34.1035C35.4315 12.5002 36.1926 14.0668 35.3991 15.1668L33.3261 18.0168C32.8403 18.6668 32.9051 19.6002 33.4719 20.1835L36.1926 22.9835C36.8242 23.6335 36.8242 24.7002 36.1926 25.3502L33.4881 28.1168C32.9051 28.7168 32.8403 29.6502 33.3261 30.3168L35.3991 33.1668C36.2088 34.2668 35.4477 35.8335 34.1035 35.8335H11.4305H9.811C6.23191 35.8335 3.33301 34.1668 3.33301 29.1668V27.5002L3.33301 9.68115"
        stroke="#42526E"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M10.6709 20V30"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M14.8379 20L14.8379 30"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M14.8379 28.75V30"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M19.0039 20V30"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M23.1709 20V21.25"
        stroke={color}
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M23.1709 20L23.1709 30"
        stroke={color}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.3379 20V30"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
