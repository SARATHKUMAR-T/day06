class circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    Area(){
        var r=parseInt(this.radius);
        var ar=(Math.PI*Math.pow(r,2)).toFixed(2);
        return `the area of the circle is ${ar}`;
    }
    Cirucmuference(){
        var r=(parseInt(this.radius)).toFixed(2);
        var cir=2*Math.PI*r;
        return `the circumference of the circle is ${cir}`;
    }
    colour(){
        return `the colour of the circle is ${this.colour}`;
    }
    

}

var z1=new circle(5,"black");
console.log(z1.Area());
