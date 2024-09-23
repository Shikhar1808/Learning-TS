let hero: string;

function getHero(): string {
    return "Superman";
}

hero = getHero();

export{}
//We used the export{} statement to make the file a module. This is necessary because we are using ES6 modules in this project. It also allow the helloWolrd let variable to be used in other files and to not give block scope error. It was giving the block scope error because the let variable was defined in the block scope of the file. The export{} statement allows the let variable to be used in other files.