import React from "react";
import { UseFlexColumnBelowWidth } from "../utils";
import { SCREENWIDTH } from "../constants/theme";

interface LayoutProps {
  layout?:
    | "full-width"
    | "sidebar-left"
    | "sidebar-right"
    | "grid-2-column"
    | "grid-3-column";
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ layout = "full-width", children }) => {
  const isMobile = UseFlexColumnBelowWidth(SCREENWIDTH.MOBILE); // Example: Mobile breakpoint
  const isTablet = UseFlexColumnBelowWidth(SCREENWIDTH.TABLET); // Example: Tablet breakpoint
  const isLaptop = UseFlexColumnBelowWidth(SCREENWIDTH.LAPTOP); // Example: Laptop breakpoint
  const isDesktop = UseFlexColumnBelowWidth(SCREENWIDTH.DESKTOP); // Example: Desktop breakpoint

  const getLayoutStyles = () => {
    switch (layout) {
      case "full-width":
        return {
          width: "100%",
          maxWidth: "100%",
        };
      case "sidebar-left":
        return {
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "200px auto",
          gridGap: "20px",
        };
      case "sidebar-right":
        return {
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "auto 200px",
          gridGap: "20px",
        };
      case "grid-2-column":
        return {
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "1fr 1fr"
            : isLaptop
            ? "1fr 1fr"
            : "1fr 1fr 1fr",
          gridGap: "20px",
        };
      case "grid-3-column":
        return {
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : isTablet
            ? "1fr 1fr"
            : isLaptop
            ? "1fr 1fr 1fr"
            : "1fr 1fr 1fr 1fr",
          gridGap: "20px",
        };
      default:
        return {
          width: "100%",
          maxWidth: "100%",
        };
    }
  };

  return <div style={{ ...getLayoutStyles() }}>{children}</div>;
};

export default Layout;



 <Layout layout="full-width">
        <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
          Full-width content
        </div>
      </Layout> 

   /*   <div>

        {/* Conditional rendering for sidebar and main content */}
        {/*
           <div style={{ display: "flex" }}>
          {!isMobile && (
            <div
              style={{
                backgroundColor: "#ccc",
                padding: "20px",
                width: sidebarOpen ? "200px" : "0",
                minWidth: sidebarOpen ? "200px" : "0",
                transition: "width 0.3s ease, min-width 0.3s ease",
                overflow: "hidden",
              }}
            >
              Sidebar content
            </div>
          )}

          <div style={{ backgroundColor: "#f0f0f0", padding: "20px", flex: 1 }}>
            Main content
            {isMobile && (
              <button onClick={toggleSidebar} style={{ marginLeft: "10px" }}>
                {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
              </button>
            )}
          </div>
        </div> */}

        {/* Sidebar overlay for mobile */}
        {/* {isMobile && sidebarOpen && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              bottom: 0,
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
              transition: "opacity 0.3s ease",
            }}
            onClick={toggleSidebar}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                width: "70%",
                backgroundColor: "#ccc",
                padding: "20px",
                zIndex: 1010,
                transition: "transform 0.3s ease",
                transform: "translateX(0%)",
              }}
            >
              Sidebar content
            </div>
          </div>
        )} */}
      //</div>

      {/* Grid 2-column layout */}
      {/* <Layout layout="grid-2-column">
        <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
          Grid item 1
        </div>
        <div style={{ backgroundColor: "#ccc", padding: "20px" }}>
          Grid item 2
        </div>
        <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
          Grid item 3
        </div>
        <div style={{ backgroundColor: "#ccc", padding: "20px" }}>
          Grid item 4
        </div>
      </Layout> */}