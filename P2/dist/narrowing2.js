"use strict";
function isAdmin(user) {
    if ('isAdmin' in user) {
        //the "in" operator is used to check if a property exists in an object
        console.log(user.isAdmin);
    }
    else {
        console.log('Not an Admin');
    }
}
