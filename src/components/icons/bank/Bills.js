export const Bills = ({ size, color = "#09B188", ...props }) => {
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
        d="M26.8866 6.2041C27.3884 6.2041 27.871 6.23456 28.3333 6.29404C28.5093 6.31668 28.6824 6.34352 28.8524 6.3745C28.9583 6.39379 29.0631 6.41469 29.1667 6.43717C29.3059 6.4674 29.4431 6.50049 29.578 6.5364C30.3009 6.72871 30.9611 7.00175 31.5527 7.34834C33.7492 8.63517 35 10.9358 35 13.8824V16.6208M13.045 6.21077C12.3912 6.2145 11.7702 6.27014 11.1846 6.3745C10.9321 6.41949 10.6862 6.47354 10.4471 6.5364C10.2953 6.5763 10.1463 6.61975 10 6.66669C9.86065 6.7114 9.72384 6.75928 9.58962 6.81026C9.44563 6.86495 9.30463 6.92321 9.16667 6.98497C8.98569 7.06599 8.80995 7.15303 8.63957 7.24593C6.32476 8.50814 5 10.853 5 13.8824V29.2091C5 33.4926 7.64192 36.4112 11.991 36.8343"
        stroke="#42526E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.2225 20.0391H29.7552C31.1297 20.0539 32.438 20.6126 33.3752 21.5851C34.3125 22.5576 34.797 23.859 34.716 25.1861V31.5327C34.797 32.8598 34.3125 34.1612 33.3752 35.1337C32.438 36.1062 31.1297 36.6649 29.7552 36.6797H20.2225C17.2701 36.6797 15.2803 34.3703 15.2803 31.5327V25.1861C15.2803 22.3485 17.2701 20.0391 20.2225 20.0391Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M34.7247 25.3843L15.2803 25.3843"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M20.1417 29.7571H18.1973"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M16.6663 9.95426H19.9997H23.333C24.2353 9.95426 24.8934 9.83213 25.3733 9.62093C26.0322 9.33101 26.3553 8.87325 26.5138 8.33317C26.6663 7.81328 26.6663 7.2171 26.6663 6.62093C26.6663 6.02035 26.6122 5.52798 26.5138 5.12433C26.3038 4.26356 25.8922 3.80618 25.3733 3.56315C24.7851 3.2876 24.059 3.2876 23.333 3.2876H19.9997H18.333H16.6663C16.0289 3.2876 15.3914 3.2876 14.8472 3.4741C14.2519 3.67812 13.7682 4.10532 13.5181 4.99984C13.3991 5.42557 13.333 5.95716 13.333 6.62093C13.333 7.33293 13.409 7.89285 13.5449 8.33317C13.8018 9.16583 14.2725 9.5708 14.8472 9.76776C15.3914 9.95426 16.0289 9.95426 16.6663 9.95426Z"
        stroke="#42526E"
        stroke-width="2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
