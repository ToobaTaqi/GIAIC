export default function ReviewList({
  params,
}: {
  params: { productid: String; reviewid: String };
}) {
  return (
    <div>
      <p>
        Review number {params.reviewid} for Product {params.productid}
      </p>
    </div>
  );
}
