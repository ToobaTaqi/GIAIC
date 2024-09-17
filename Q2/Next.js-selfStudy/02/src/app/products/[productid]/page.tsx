export default function ProductDetails({
  params,
}: {
  params: { productid: String };
}) {
  return (
    <div>
      <p>Product Details Page {params.productid}</p>
    </div>
  );
}
