import { FC } from "react";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";

const ScreenEmpty: FC = () => {
  return (
    <div style= {{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }}> 
      <ScreenSearchDesktopIcon
        style={{ width: "86px", height: "86px", fill: "#85b0f2" }}
      />
      <p style={{ fontSize: "24px", color: "#85b0f2"}}>
        Search Results Will Appear Here
      </p>
    </div>
  );
};

export default ScreenEmpty;
