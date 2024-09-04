export const addCart = (cart, product, quantity = false, quantityValue = 0) => {
    let prevCart = { ...cart };

    if (prevCart.items?.length > 0) {
        let itemExists = prevCart.items.find(item => item.id === product.id);
        let itemExistsIndex = prevCart.items.findIndex(item => item.id === product.id);

        if (itemExists) {
            if (quantity) {
                console.log(quantityValue);
                if (quantityValue <= 0) {
                    console.log(quantityValue, itemExistsIndex);
                    prevCart.items.splice(itemExistsIndex, 1)

                    console.log(prevCart);
                } else {
                    prevCart.items.splice(
                        itemExistsIndex, 1, { ...itemExists, quantity: quantityValue }
                    )
                }
            } else {
                prevCart.items.splice(
                    itemExistsIndex, 1, { ...itemExists, quantity: itemExists.quantity + 1 }
                )
            }
        } else {
            prevCart.items.push({ ...product, quantity: 1 })
        }
    } else {
        prevCart.items.push({ ...product, quantity: 1 });
    }

    prevCart.subTotal = 0;
    prevCart.tax = 0;
    prevCart.grandTotal = 0;

    for (const item of prevCart.items) {
        prevCart.subTotal += (parseFloat(item.price) - ((parseFloat(item.discount) / 100) * parseFloat(item.price))) * item.quantity;
        prevCart.grandTotal = prevCart.tax + prevCart.subTotal;
    }

    return prevCart;
}