import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>📦 SnapShop Products</h1>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #eee",
                borderRadius: "10px",
                overflow: "hidden",
                padding: "10px",
                position: "relative",
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {product.isNew && (
                <span
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    background: "gold",
                    color: "black",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontWeight: "bold",
                  }}
                >
                  New
                </span>
              )}

              <img
                src={product.image_url || "https://via.placeholder.com/250"}
                alt={product.name}
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {product.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
