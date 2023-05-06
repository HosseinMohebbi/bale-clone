export const RoadMap = ({ size, color = "#200E32", ...props }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 64 64"
        {...props}
      >
        <path d="M8 64h48V0H22.586L8 14.586V64zm46-2H10V16h14V2h30v60zM11.414 14L22 3.414V14H11.414z" />
        <path d="M32 13h14v2H32zM18 23h28v2H18zM18 33h28v2H18zM18 43h28v2H18zM18 53h28v2H18z" />
      </svg>
    );
  };
  