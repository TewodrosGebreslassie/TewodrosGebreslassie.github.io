//This closure exercise involves a common real-world scenario.  
export function createShoppingCart() {
    let items = [];
    return {
        addItem: function (item, price) {
            items.push({ item, price });
        },
        removeItem: function (item) {
            items = items.filter((i) => i.item !== item);
        },
        getTotal: function () {
            return items.reduce((total, item) => total + item.price, 0);
        },
    };
}
