function anotherFnc<T,U>(val1: T, val2: U):object{
    return {
        val1,
        val2
    }
}

anotherFnc<number, string>(5, 'Hello')

interface Database{
    id: number,
    name: string,
    email: string
}

function saveToDatabase<T,U extends Database>(val1: T, val2: U): object{
    return {
        val1,
        val2
    }
}

saveToDatabase<number, Database>(1, {id: 1, name: 'John Doe', email: 'ferfw'})

//Class with generics

class GenericClass<T>{
    value: T
    constructor(value: T){
        this.value = value
    }
}

const generic = new GenericClass<string>('Hello')


interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart:T[] = []

    addToCart(items: T){
        this.cart.push(items)
    }
}