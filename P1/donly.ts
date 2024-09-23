type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    paymentMethod?: string
}
//readonly is used to make the property immutable

let user: User = {
    _id: '1234',
    name: 'rgrgg',
    email: "rgrwgrwg",
    isActive: true
}

user.email = 'rgrg' // allowed
// user._id = '123' // not allowed