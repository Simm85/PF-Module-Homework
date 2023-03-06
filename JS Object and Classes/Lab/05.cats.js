function cats(array) {
    let cats = [];
    
    class Cats {
        constructor(name, age, meow) {
            this.name = name;
            this.age = age;
            this.meow = function () {
                return (`${name}, age ${age} says Meow`);
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        let [name, age] = array[i].split(' ');
        cats.push(new Cats(name, age));
    }

    for (let cat of cats) {
        console.log(cat.meow());
    }
}
cats(['Mellow 2', 'Tom 5']);