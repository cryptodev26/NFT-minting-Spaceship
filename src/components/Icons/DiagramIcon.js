import * as React from "react"

const DiagramIcon = (props) => (
  <svg
    width={28}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#97BFC9">
      <path d="M25.993 3.853a1.774 1.774 0 1 0 0-3.548 1.774 1.774 0 0 0 0 3.548ZM13.883 26.53C2.005 26.53 0 22.484 0 13.416 0 9.534.237 5.525 3.066 2.941 5.988.274 11.112-.51 20.194.311a1.542 1.542 0 1 1-.28 3.073c-7.917-.721-12.61-.135-14.768 1.837-1.723 1.574-2.06 4.197-2.06 8.196 0 7.998 1.06 10.027 10.797 10.027 9.738 0 10.799-2.029 10.799-10.027a1.542 1.542 0 1 1 3.085 0c0 9.068-2.005 13.112-13.884 13.112Z" />
      <path d="M7.713 18.816a1.543 1.543 0 0 1-1.09-2.633l6.17-7.713a1.542 1.542 0 0 1 2.181 0l3.433 3.433 3.19-4.319a1.544 1.544 0 1 1 2.37 1.977l-4.27 5.616a1.543 1.543 0 0 1-2.276.102l-3.538-3.537-5.08 6.622a1.54 1.54 0 0 1-1.09.452Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h27.767v26.529H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default DiagramIcon