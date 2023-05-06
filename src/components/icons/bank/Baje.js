export const Baje = ({ size, color = "#42526E", ...props }) => {
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
        d="M10.833 28.4906C10.8422 24.8724 10.8721 16.8096 10.9149 16.2331C11.3261 11.0699 15.6638 7.5 19.9485 7.5H20.0546C24.3393 7.5 28.677 11.0699 29.1015 16.2331C29.1306 16.6256 29.1473 18.5242 29.1568 20.8333C29.159 21.3712 29.1608 21.9314 29.1623 22.5M20.002 30.8333H21.6686H23.3353H25.002H26.6686H27.1678C28.2724 30.8333 29.1684 29.9381 29.1686 28.8335C29.1687 28.4292 29.1687 27.9805 29.1686 27.5"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M6.66868 23.3335V17.9149C6.52203 9.85716 12.4415 3.3335 19.934 3.3335C27.4266 3.3335 33.3327 9.85716 33.3327 17.7572V23.3335"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M34.1663 21.6668V18.3335"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M5.83301 21.6668V18.3335"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <circle cx="21.666" cy="35.8335" r="2.5" fill="#09B188"></circle>
      <path
        d="M10.833 26.667V36.1359C10.833 36.3319 11.07 36.43 11.2086 36.2914L14.9457 32.5543C15.5334 31.9666 16.212 31.4775 16.9554 31.1058V31.1058C17.3133 30.9268 17.708 30.8337 18.1082 30.8337H20.833"
        stroke={color}
        stroke-width="2"
      ></path>
    </svg>
  );
};
