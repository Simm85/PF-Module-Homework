function catalog(input) {
    let data = Array.from(input).sort((a, b) => a.localeCompare(b));

    class Catalog {
        constructor(productGroup) {
            this.productGroup = productGroup;
            this.product = [];
        }
    }

    let catalog = [];
    let bufferArray = [];
    let group, products = [];

    data = data.map(product => product.split(' : '));

    for (let product of data) {
        group = product[0].charAt(0);
        products.push(product);
        if (!bufferArray.includes(group)) bufferArray.push(group);
    }

    bufferArray.forEach(group => catalog.push(new Catalog(group)));

    products.forEach(product => {
        catalog.forEach(object => {
            if (object.productGroup === product[0].charAt(0)) object.product.push(product.join(': '));
        });
    });

    catalog.forEach(object => console.log(`${object.productGroup}\n  ${object.product.join('\n  ')}`));
}
catalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);


/**9.	*Catalogue
You have to create a sorted catalog of store products. You will be given the products’ names and prices. You need to order them in alphabetical order. 
The input comes as an array of strings. Each element holds info about a product in the following format:
"{productName} : {productPrice}"
The product’s name will be a string, which will always start with a capital letter, and the price will be a number. You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.
As output, you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group's initial should be printed, and after that, the products should be printed with 2 spaces before their names. For more info check the examples.
 */