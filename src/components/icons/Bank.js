export const Bank = ({ size, color = "#091E42", ...props }) => {
  return (
    <svg
      color="#091E42"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.88787 3.5H16.3158C17.6752 3.51525 18.969 4.08993 19.896 5.0902C20.823 6.09048 21.3022 7.42903 21.222 8.79412V15.322C21.3022 16.6871 20.823 18.0256 19.896 19.0259C18.969 20.0262 17.6752 20.6009 16.3158 20.6161H6.88787C3.96796 20.6161 2 18.2407 2 15.322V8.79412C2 5.87545 3.96796 3.5 6.88787 3.5Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M21 9L2 9"
        stroke={color}
        stroke-width="2"
        stroke-linejoin="round"
      ></path>
      <path
        d="M7 13.5H5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
