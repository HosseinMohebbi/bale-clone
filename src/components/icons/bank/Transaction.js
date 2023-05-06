export const Transaction = ({ size, color = "#42526E", ...props }) => {
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
        d="M35.8333 9.81149V13.7307C35.8333 16.2895 34.4444 17.909 32.25 17.909H27.5V6.58869C27.5 4.79105 28.7639 3.3335 30.3056 3.3335C31.8194 3.34969 33.2083 4.06227 34.2083 5.22831C35.2083 6.41054 35.8333 8.03004 35.8333 9.81149Z"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M30.3193 3.3335H12.5003H10.8337C5.83366 3.3335 4.16699 6.2324 4.16699 9.81149V11.431V34.104C4.16699 35.4482 5.73366 36.2093 6.83366 35.3996L9.68366 33.3266C10.3503 32.8408 11.2837 32.9055 11.8837 33.4886L14.6503 36.1931C14.9757 36.5093 15.4055 36.6672 15.8351 36.6668C16.2638 36.6665 16.6924 36.5086 17.017 36.1931L17.7594 35.3996"
        stroke={color}
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M10 25L17.5 25"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M13.334 18.3335H20.834"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M13.334 11.667L20.834 11.667"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.4997 23.3335C31.1811 23.3335 34.1663 26.3187 34.1663 30.0002C34.1663 33.6816 31.1811 36.6668 27.4997 36.6668C23.8175 36.6668 20.833 33.6816 20.833 30.0002C20.833 26.3187 23.8175 23.3335 27.4997 23.3335Z"
        stroke="#09B188"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M25.2344 30.0769L26.9003 31.7421L30.2309 28.4116"
        stroke="#09B188"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
