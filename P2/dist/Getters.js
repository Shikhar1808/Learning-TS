"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _User_email;
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(name, age) {
        this.city = "Bareilly";
        _User_email.set(this, "shikhar");
        this._courseCount = 1;
        this.name = name;
        this.age = age;
    }
    deleteToken() {
        console.log('Deleting token');
    }
    get getAppleEmail() {
        return __classPrivateFieldGet(this, _User_email, "f") + '@apple.com';
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set courseCount(count) {
        if (count <= 1) {
            throw new Error('Invalid count');
        }
        this._courseCount = count;
    }
}
_User_email = new WeakMap();
const Shikhar = new User('Shikhar', 21);
console.log(Shikhar.getAppleEmail);
Shikhar.courseCount = 2;
