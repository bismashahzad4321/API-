import React from 'react'
const ProductCard = ({ data }) => {
  console.log(data)
  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        justifyContent: "center",

        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto"
      }}
    >
      {
        data.map((item, index) => (
          <div key={index} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>

            <img
              src={item.images[0]}
              alt={item.title}
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button
              style={{
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "10px",
                transition: "all 0.3s ease"
              }}

            >BuyNow</button>

            <div style={{ color: "#f5c518", fontSize: "18px", margin: "8px 0" }}>
              User Rating ★ ★ ★ ★ ★
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ProductCard