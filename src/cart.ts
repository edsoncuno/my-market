import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);

export function addToCart(id: string) {

    const items = get(cartItems);

    const itemPosition = items.findIndex((item) => { return item.id == id })

    if (itemPosition !== -1) {
        cartItems.update(() => {
            const updateItems = items.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            });
            return updateItems;
        })
    } else {
        cartItems.update(() => { return [...items, { id: id, quantity: 1 }] })
    }
}

export function removeFromCart(id: string) {

    const items = get(cartItems);

    const itemPosition = items.findIndex((item) => { return item.id == id })

    if (items[itemPosition]?.quantity - 1 === 0) {
        items.splice(itemPosition, 1);
    }

    cartItems.update(() => {
        const updateItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item;
        });
        return updateItems;
    });
}