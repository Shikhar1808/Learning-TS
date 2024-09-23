//readonly is used to make the property immutable
var user = {
    _id: '1234',
    name: 'rgrgg',
    email: "rgrwgrwg",
    isActive: true
};
user.email = 'rgrg'; // allowed
// user._id = '123' // not allowed
