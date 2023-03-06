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

/**5.	Cats
Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input. 
It should also have a method named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided, you must create a cat object and invoke the .meow () method.
 */