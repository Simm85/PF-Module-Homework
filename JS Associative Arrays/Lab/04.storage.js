function storage(data) {
    let items = new Map();
    for (let element of data) {
        let [product, quantity] = element.split(' ');
        quantity = Number(quantity);
        if (items.has(product)) {
            let newQuantity = items.get(product);
            quantity += newQuantity;
        }
        items.set(product, quantity);
    }

    for (let [key, value] of items) {
        console.log(key, '->', value);
    }
}
storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);


/**4.	Storage
Write a function that takes a certain number of items and their quantity.
 If the same item appears more than once, add the new amount to the existing one.
  In the end, print all the items and their amount without sorting them.
   The input comes as an array of strings. Try using a Map().
 */
