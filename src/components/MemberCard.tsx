import React from "react";
import { Member } from "../assets";
import Typography from "./Typography";

type StyleType = "style_one" | "style_two" | "style_three";

interface MemberCardProps {
  styleType?: StyleType;
}

const getStyle = (styleType?: StyleType) => {
  switch (styleType) {
    case "style_one":
      return {
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
      };
    case "style_two":
      return {
        backgroundColor: "lightgray",
        color: "darkgray",
        border: "1px solid darkgray",
      };
    case "style_three":
      return {
        backgroundColor: "lightblue",
        color: "blue",
        border: "1px solid blue",
      };
    default:
      return {
        backgroundColor: "white",
        color: "black",
        border: "1px solid black",
      };
  }
};

const MemberCard: React.FC<MemberCardProps> = ({ styleType }) => {
  const styles = getStyle(styleType);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 6,
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "4vw",
        width: "15em",
        ...styles,
      }}
    >
      <img src={Member} style={{ width: "3em" }} alt="card-img" />
      <p style={{ textAlign: "center" }}>
        <Typography variant="h2" children="Membership Organisations" />
      </p>
      <p style={{ textAlign: "center" }}>
        <Typography
          variant="body2"
          children="Our membership management software provides full automation of membership renewals and payments"
        />
      </p>
    </div>
  );
};

export default MemberCard;

// import React from "react";
// import { Member } from "../assets";
// import Typography from "./Typography";

// const MemberCard: React.FC = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-around",
//         alignItems: "center",
//         gap: 6,
//         boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
//         padding: "4vw",
//         width: "15em",
//       }}
//     >
//       <img src={Member} style={{ width: "3em" }} alt="card-img" />
//       <p style={{textAlign: "center"}}>
//         <Typography variant="h2" children="Membership Organisations" />
//       </p>
//       <p style={{textAlign: "center"}}>
//       <Typography
//         variant="body2"
//         children="Our membership management software provides full automation of membership renewals and payments"
//       />
//       </p>
//     </div>
//   );
// };

// export default MemberCard;
