interface User{
    name: string;
    email: string;
}

interface Admin{
    name: string;
    email: string;
    isAdmin: boolean;
}

function isAdmin(user: User | Admin){
    if('isAdmin' in user){
        //the "in" operator is used to check if a property exists in an object
        console.log(user.isAdmin)
    }
    else{
        console.log('Not an Admin')
    }
}