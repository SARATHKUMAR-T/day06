class person{
  constructor(Name,FatherName,MotherName,age,dob,gender,religion,nationality,maritalstatus,caste,employment,location){
    this.Name=Name;
    this.FatherName=FatherName;
    this.MotherName=MotherName;
    this.age=age;
    this.dob=dob;
    this.gender=gender;
    this.religion=religion;
    this.nationality=nationality;
    this.maritalstatus=maritalstatus;
    this.caste=caste;
    this.employment=employment;
    this.location=location;

  }

  print(){

    return `my name is ${this.Name} and my age is ${this.age}`;
  }

}

var c1=new person("DINESH KUMAR T","MUTHU KUMAR","RAMYA",23,01/11/1998,"Male","HINDU","INDIAN","SINGLE","MBC","UNEMPLOYED","TRICHY");

console.log(c1.print());