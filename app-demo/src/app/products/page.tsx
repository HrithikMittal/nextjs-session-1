import Button from "@/components/button";
import ProductItem from "@/app/products/components/productItem";

export default function Product() {
  console.log("I am Product page RENDERING!!!");
  return (
    <div>
      <h1>Product</h1>
      <Button />
    </div>
  );
}

// {/* This is a client component */}
// <ProductItem>
// <Button /> {/* This is a server component */}
// </ProductItem>
