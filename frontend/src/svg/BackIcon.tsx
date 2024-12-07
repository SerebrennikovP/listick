import React from "react";

type SVGProps = React.SVGProps<SVGSVGElement>;

const BackIcon: React.FC<SVGProps> = (props) => (
  <svg
    {...props}
    xmlnsXlink="http://ns.adobe.com/Extensibility/1.0/"
    fill="#333"
    version="1.1"
    baseProfile="tiny"
    id="Layer_1"
    width="800px"
    height="800px"
    viewBox="0 0 42 42"
    xmlSpace="preserve"
  >
    <polygon
      fillRule="evenodd" 
      points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41 "
    />
  </svg>
);

export default BackIcon;
