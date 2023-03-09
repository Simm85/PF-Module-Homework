function storeProvision(array1, array2) {
    let currentStock = Array.from(array1);
    let deliveryStock = Array.from(array2);

    for (let i = 0; i < currentStock.length; i++) {
        if (i % 2 !== 0) currentStock[i] = Number(currentStock[i]);
    }

    for (let i = 0; i < deliveryStock.length; i++) {
        if (i % 2 !== 0) deliveryStock[i] = Number(deliveryStock[i]);
    }

    let currentProduct = '';
    let currentProductQty = undefined;
    let deliveryProduct = '';
    let deliveryProductQty = undefined;

    while (deliveryStock.length !== 0) {
        deliveryProduct = deliveryStock.shift();
        deliveryProductQty = deliveryStock.shift();

        if (!currentStock.includes(deliveryProduct)) {
            currentStock.push(deliveryProduct, deliveryProductQty);
        } else {
            for (let i = 0; i < currentStock.length; i++) {
                i % 2 === 0 ? currentProduct = currentStock[i] : currentProductQty = currentStock[i];
                if (currentProductQty === undefined) continue;
                let index = currentStock.indexOf(currentProductQty);
                if (currentProduct === deliveryProduct) currentStock.splice(index, 1, currentProductQty += deliveryProductQty);
                currentProductQty = undefined;
            }
        }
    }

    class LocalStore {
        constructor(item, quantity) {
            this.item = item;
            this.quantity = quantity;
        }
    }

    let localStore = [];
    let item = '';
    let quantity = undefined;

    for (let i = 0; i < currentStock.length; i++) {
        i % 2 === 0 ? item = currentStock[i] : quantity = currentStock[i];
        if (quantity === undefined) continue;
        localStore.push(new LocalStore(item, quantity));
        quantity = undefined;
    }

    localStore.forEach(store => console.log(`${store.item} -> ${store.quantity}`));
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);


/**3.	Store Provision
You will receive two arrays. The first array represents the current stock of the local store. The second array will contain products that the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and every odd index will hold the quantity of that product. The second array could contain products that are already in the local store. If that happens increase the quantity for the given product. You should store them into an object, and print them in the following format: (product -> quantity)
All of the arrays’ values will be strings.
*/