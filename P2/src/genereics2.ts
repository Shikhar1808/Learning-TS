//Arrow Functions

const getSearchProducts = <T>(products: T[]): T=> {
    return products[0]
} 

const getSearchProducts2 = <T,>(products: T[]): T=> {//Here we are using a comma after T to make sure that it is a generic type
    return products[0]
}