import useStore from "../Store/useStore";

const useAddToCart = () => {
  const { cart, setCart } = useStore();

  const addNewProduct = async (product) => {
    try {
      product.quantity = 1;
      const finalCart = [...cart, product];
      setCart(finalCart);
      localStorage.setItem("cart", JSON.stringify(finalCart));
      alert("Product added to cart");
    } catch (err) {}
  };

  const inCreaseQuantity = async (product) => {
    try {
      product.quantity = product.quantity + 1;
      const merged = cart.map((item) =>
        item?._id === product._id ? product : item
      );
      setCart(merged);
      localStorage.setItem("cart", JSON.stringify(merged));
      alert("Product added to cart");
    } catch (err) {}
  };

  const addToCart = (product) => {
    const matched = cart.find((item) => item?._id === product._id);
    matched ? inCreaseQuantity(matched) : addNewProduct(product);
  };

  return { addToCart };
};

export default useAddToCart;
