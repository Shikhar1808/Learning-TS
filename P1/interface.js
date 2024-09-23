//What is interface?
//Interface is a way to define a contract on a function with respect to the arguments and their type. Contract is a set of rules that the functions should follow. It is not necessary for the interface to be a function type. We can define an interface for any custom type as well.
var Shikhar = {
    dbId: 1,
    email: "s.com",
    userId: 1,
    pokemon: "pikachu",
    startTrial: function () {
        return "Trial Started";
    },
    pokemonLvl: function () {
        return 10;
    },
    itemHeld: function (berry) {
        return 1;
    },
    github: "Shikhar1808",
    isAdmin: true
};
//The difference between interface and type is that we can merge the interface but we cannot merge the type. We can reopen the interface and add more properties to it but we cannot do the same with the type.
//The interface is open for extension but closed for modification. We can add more properties to the interface but we cannot modify the existing properties of the interface.
//The type is open for modification but closed for extension. We can modify the existing properties of the type but we cannot add more properties to the type.
//The interface is used when we want to define a contract on a function with respect to the arguments and their type. The type is used when we want to define a contract on a custom type.
//Merging of interface means that we can reopen the interface and add more properties to it. Merging of type means that we can define the same type multiple times and it will merge the properties of all the types into one type. We cannot merge the type.
