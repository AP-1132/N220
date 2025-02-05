let circleRadius = 5;//I chose let in case I wanted to reassign the circleRadius to calculate area with a different radius

const circleArea = circleRadius**2 * Math.PI;//I chose const because the formula for the area of the circle never changes
console.log("Area of the circle:", circleArea);

const circlePerimeter = circleRadius * 2 * Math.PI;//Chose const because formula never changes
console.log("Perimeter of the circle:", circlePerimeter);