"use strict";
function anotherFnc(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFnc(5, 'Hello');
function saveToDatabase(val1, val2) {
    return {
        val1,
        val2
    };
}
saveToDatabase(1, { id: 1, name: 'John Doe', email: 'ferfw' });
//Class with generics
class GenericClass {
    constructor(value) {
        this.value = value;
    }
}
const generic = new GenericClass('Hello');
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(items) {
        this.cart.push(items);
    }
}
