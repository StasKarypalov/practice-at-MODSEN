class Rectangle{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    perimeter(){
        return 2*(this.height+this.width)
    }

    square(){
        return this.height*this.width
    }
}

let pramoygol = new Rectangle(5,6);

console.log(pramoygol.square(),' square')
console.log(pramoygol.perimeter()," perimeter")
