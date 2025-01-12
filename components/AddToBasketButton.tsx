"use client";

import { Product } from "@/sanity.types";

interface AddToBasketButtonProps {
  product: Product;
  disabled?: boolean;
}
function AddToBasketButton({ product, disabled }: AddToBasketButtonProps) {
  return <div>AddToBasketButton</div>;
}

export default AddToBasketButton;
