"use strict";
//Discriminated Union
//A discriminated union is a pattern that allows you to narrow down the type of an object based on a specific property.
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _defaultForShape = shape; //this means that the shape is of type never and will never be reached in the switch statement.
            return _defaultForShape;
    }
}
//The default case is required to make sure that all possible shapes are handled. If you forget to handle a shape, the TypeScript compiler will throw an error.
