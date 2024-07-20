import React from "react";

interface ProductCardProps {
  images: string[];
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ images, name, price }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        {!imageLoaded && (
          <div style={{ ...styles.imageSkeleton, ...styles.skeleton }}></div>
        )}
        <img
          src={images[0]}
          alt={name}
          style={{ ...styles.image, display: imageLoaded ? "block" : "none" }}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div style={styles.info}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;


const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center" as const,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "relative" as const,
  },
  imageContainer: {
    width: "100%",
    height: "200px",
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover" as const,
    borderRadius: "8px",
  },
  imageSkeleton: {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    backgroundColor: "#e0e0e0",
  },
  info: {
    marginTop: "16px",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  price: {
    fontSize: "1rem",
    color: "#555",
  },
  skeleton: {
    opacity: 0.7,
    animation: "skeleton-loading 1s linear infinite alternate",
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

