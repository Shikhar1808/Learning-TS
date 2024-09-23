//Discriminated Union
//A discriminated union is a pattern that allows you to narrow down the type of an object based on a specific property.

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _defaultForShape: never = shape; //this means that the shape is of type never and will never be reached in the switch statement.
            return _defaultForShape
    }
}

//The default case is required to make sure that all possible shapes are handled. If you forget to handle a shape, the TypeScript compiler will throw an error.