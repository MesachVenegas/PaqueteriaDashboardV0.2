import { getAllProducts } from "@/data/products";
import SaleForm from "@/components/sale-addresser-form";



export default async function ClientSalePoint() {
  const products= await getAllProducts();

  return (
      <SaleForm products={products} />
  )
}
