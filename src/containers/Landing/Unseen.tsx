import React, { useEffect, useState } from "react";
import { Unseen as Unseens } from "../../assets";
import Typography from "../../components/Typography";
import { CustomBtn } from "../../components";

const Unseen: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: windowWidth > 949 ? "row" : "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        gap: "2rem",
        margin: "2rem 7vw",
      }}
    >
      <div
        className="left mt-8"
        style={{
          width: "140vw",
          height: "40vh",
        //   background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <img src={Unseens} style={{ width: "100%", height: "100%" }} alt="" />
      </div>
      <div className="left flex flex-col gap-6">
        {/* <p style={{ textAlign: "center" }}> */}
          <Typography
            variant="h2"
            children="The unseen of spending three years at Pixelgrade"
          />
        {/* </p> */}
          <Typography
            variant="body2"
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
          />
        <div>
          <CustomBtn
            // icon={Plus}
            // iconTwo={Right}
            loading={false}
            disabled={false}
            // onClick={handleClick}
            label="Learn more"
            type="type_one"
            size="normal"
            active={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Unseen;
