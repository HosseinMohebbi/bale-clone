export const Charge = ({ size, color = "#09B188", ...props }) => {
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
        d="M14.4317 4.67169L13.7673 3.92428L14.4317 4.67169ZM8.17127 10.2365L7.50691 9.48907L8.17127 10.2365ZM8.5 31.8332V11.7313H6.5V31.8332H8.5ZM8.83564 10.9839L15.096 5.41909L13.7673 3.92428L7.50691 9.48907L8.83564 10.9839ZM15.7604 5.1665H28.5V3.1665H15.7604V5.1665ZM31.5 8.1665V31.8332H33.5V8.1665H31.5ZM28.5 34.8332H11.5V36.8332H28.5V34.8332ZM31.5 31.8332C31.5 33.49 30.1569 34.8332 28.5 34.8332V36.8332C31.2614 36.8332 33.5 34.5946 33.5 31.8332H31.5ZM28.5 5.1665C30.1569 5.1665 31.5 6.50965 31.5 8.1665H33.5C33.5 5.40508 31.2614 3.1665 28.5 3.1665V5.1665ZM15.096 5.41909C15.2791 5.25638 15.5155 5.1665 15.7604 5.1665V3.1665C15.0257 3.1665 14.3165 3.43614 13.7673 3.92428L15.096 5.41909ZM8.5 11.7313C8.5 11.4457 8.62215 11.1737 8.83564 10.9839L7.50691 9.48907C6.86644 10.0584 6.5 10.8744 6.5 11.7313H8.5ZM6.5 31.8332C6.5 34.5946 8.73858 36.8332 11.5 36.8332V34.8332C9.84315 34.8332 8.5 33.49 8.5 31.8332H6.5Z"
        fill="#42526E"
      ></path>
      <path
        d="M12.5 17.833V28.833C12.5 29.9376 13.3954 30.833 14.5 30.833H25.5C26.6046 30.833 27.5 29.9376 27.5 28.833V17.833C27.5 16.7284 26.6046 15.833 25.5 15.833H14.5C13.3954 15.833 12.5 16.7284 12.5 17.833Z"
        stroke={color}
        stroke-width="2"
      ></path>
      <path
        d="M17.5 21.6665L17.5 24.9998"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M22.5 21.6665L22.5 24.9998"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
};
