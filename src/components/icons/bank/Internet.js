export const Internet = ({ size, color = "#09B188", ...props }) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.8092 3.3335H12.1902C6.74571 3.3335 3.33301 7.18697 3.33301 12.6421V27.3582C3.33301 32.8134 6.72983 36.6668 12.1902 36.6668H27.8092C33.2695 36.6668 36.6663 32.8134 36.6663 27.3582V12.6421C36.6663 7.18697 33.2695 3.3335 27.8092 3.3335Z"
        stroke="#42526E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M16.999 23.3332C19.0163 21.1109 21.6484 21.1109 23.6657 23.3332"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M30.8172 16.6665C30.336 16.0663 29.804 15.5085 29.2276 14.9998C28.5653 14.4153 27.8445 13.8955 27.075 13.4503C25.1139 12.3158 22.837 11.6665 20.4084 11.6665C17.0275 11.6665 13.9402 12.9254 11.5897 14.9998C11.0133 15.5085 10.4812 16.0663 10 16.6665"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M27.0762 19.9991C26.6022 19.3682 26.0406 18.8066 25.4096 18.3326C24.9848 18.0135 24.5285 17.7341 24.0463 17.4998C23.4284 17.1997 22.7679 16.9736 22.0762 16.8332C21.5377 16.7239 20.9803 16.6665 20.4096 16.6665C19.8389 16.6665 19.2816 16.7239 18.7432 16.8332C18.1634 16.9509 17.6055 17.1288 17.0762 17.3601C16.4814 17.6201 15.9227 17.9475 15.41 18.3326C14.7789 18.8066 14.2173 19.3682 13.7432 19.9991"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <ellipse
        rx="1.66667"
        ry="1.66667"
        transform="matrix(1 0 0 -1 20.4098 26.6663)"
        fill="#09B188"
      ></ellipse>
    </svg>
  );
};
