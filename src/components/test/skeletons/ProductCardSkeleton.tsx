import React from "react";

const ProductCardSkeleton: React.FC = () => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <div style={{ ...styles.imageSkeleton, ...styles.skeleton }}></div>
        <div style={styles.title}>
          <div style={{ ...styles.skeletonText, ...styles.skeleton }}></div>
          <div
            style={{ ...styles.skeletonText, ...styles.skeleton, width: "80%" }}
          ></div>
        </div>
      </div>
      <div style={styles.body}>
        <div style={{ ...styles.skeletonText, ...styles.skeleton }}></div>
        <div style={{ ...styles.skeletonText, ...styles.skeleton }}></div>
        <div style={{ ...styles.skeletonText, ...styles.skeleton }}></div>
        <div style={{ ...styles.skeletonText, ...styles.skeleton }}></div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "white",
    boxShadow:
      "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
    padding: "16px",
    borderRadius: "4px",
    maxWidth: "300px",
    margin: "1rem",
  },
  header: {
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
  },
  imageSkeleton: {
    width: "50px",
    height: "50px",
    borderRadius: "100%",
    marginRight: "1rem",
    flexShrink: 0,
  },
  title: {
    flexGrow: 1,
  },
  body: {
    marginTop: "16px",
  },
  skeleton: {
    opacity: 0.7,
    animation: "skeleton-loading 1s linear infinite alternate",
    backgroundColor: "hsl(200, 20%, 95%)",
  },
  skeletonText: {
    width: "100%",
    height: "0.5rem",
    marginBottom: "0.25rem",
    borderRadius: "0.125rem",
  },
  "@keyframes skeleton-loading": {
    "0%": {
      backgroundColor: "hsl(200, 20%, 70%)",
    },
    "100%": {
      backgroundColor: "hsl(200, 20%, 95%)",
    },
  },
};

// Inject keyframes into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(
  `
  @keyframes skeleton-loading {
    0% { background-color: hsl(200, 20%, 70%); }
    100% { background-color: hsl(200, 20%, 95%); }
  }
`,
  styleSheet.cssRules.length
);

export default ProductCardSkeleton;
