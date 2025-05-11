import { formatPrice } from "../utils";
import { generateAmountOption } from "../utils/info";
import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;
  return (
    <article
      key={cartID}
      className=" mb-12 flex flex-col gap-y-4  sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* IMAGE  */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />

      {/* COLOR  */}
      <div className="sm:ml-16">
        {/* TITLE  */}
        <h3 className=" capitalize font-medium">{title}</h3>
        {/* COMPANY  */}
        <h4 className=" mt-2 capitalize text-sm text-neutral-content">
          {company}
        </h4>
        {/* COLOR  */}
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color:
          <span
            className=" badge badge-sm"
            style={{ backgroundColor: productColor }}
          />
        </p>
      </div>
      <div className="sm:ml-24">
        {/* AMOUNT  */}
        {/* REMOVE  */}
      </div>

      {/* PRICE  */}
      <p className=" font-medium sm:ml-auto">{formatPrice(price)}</p>
    </article>
  );
};

export default CartItem;
