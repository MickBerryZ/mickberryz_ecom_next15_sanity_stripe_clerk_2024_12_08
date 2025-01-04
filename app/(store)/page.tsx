import { Button } from "@/components/ui/button";

export default function Home() {
  const products = await getAllProduct();
  return (
    <div className="">
      <h1>Hello World</h1>

      {/* render all the products */}
      <Button>CLick me</Button>
    </div>
  );
}
