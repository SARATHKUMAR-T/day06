// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {

class uber{
    constructor(Drivername,customername,carmodel,pickuppoint,droppoint,rating){
      this.Drivername=Drivername;
      this.customername=customername;
      this.carmodel=carmodel;
      this.pickuppoint=pickuppoint;
      this.droppoint=droppoint;
      this.rating=rating;
    }
   
    price(){
        var s=parseInt(this.pickuppoint);
        var f=parseInt(this.droppoint);
         var sol=(f-s)*15;
          return `the price is ${sol}`;
    
    }
    ETA(){
        var s=parseInt(this.pickuppoint);
        var f=parseInt(this.droppoint);
      var  time=(f-s)*3;

        return `the estimated time of arrival is ${time} minutes.`;

    }
    RATING(){
        return `rating for the ride is ${this.rating}`;
    }

}
var x1=new uber("CHANDRAN","VINITHA","SEDAN",15,30,4);
console.log(x1.ETA());

});