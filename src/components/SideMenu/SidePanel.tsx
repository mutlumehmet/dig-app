import { FC } from "react";
import SideMenuLists from "./SideMenuLists";

const SidePanel: FC = () => {
  return (
    <div
      style={{
        borderRight: "1px solid",
        borderColor: "#c4c4c4",
        position: "absolute",
        top: "70px",
        left: "0px",
        width: "360px",
        height:"100%"
      }}
    >
      <SideMenuLists />
    </div>
  );
};

export default SidePanel;
