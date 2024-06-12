console.clear()

var num1 = 10;
var num2 = 10.9;

console.log(typeof(num1))
console.log(typeof(num2));

//addition

var num3 = 20;
var sum = num1 + num2 + num3;
console.log(sum);

var Mystr = "Hi my name is Ravina";

console.log(Mystr.length)
console.log(Mystr.toUpperCase())
console.log(Mystr.toLowerCase())


var FNmum1 = "Java";
var Lnum = "Script";

console.log(Mystr.concat(FNmum1))
// if -else

if(57>6){
    console.log('true')
}

if(67>8){
    console.log('currect value')
} else{
    console.log('Add the big value')
}

if(5>6){
    console.log('5>6')
}else if(6>8){
    console.log('6>8')
} else{
    console.log('no val')
}

// switch statment

var day = 'thu';
switch(day){
    case 'mon':
    console.log('mon')
    break;
    case 'tue':
    console.log('tue')
    break;
    case 'wed':
    console.log('wed')
    break;
    default:
    console.log('no more days')

}

var num1 =10;
var num2 = 20;
var num3 = 30;

//add

console.log(num1 + num2 + num3)

console.log(++num1)
console.log(num1++)


var house = {
    "Father": "Ravindra",
    "Mother": "Pratibha",
    "Brother": "Aman"
}

console.log(house)
console.log(typeof(house))


var house = {
   housename: "Dhamankar",
   members:{
    father:"Ravindra",
    mother:"Pratibha",
    brother:"Aman"
   },
   sister:"Ravina",
   brotherinlow:"Ashish",
   sasural:function(){
    chaturkar(function(){
        console.log('ayra');
    },1.4)
   }

}

console.log(house.housename)
console.log(house.members)
console.log(house.sister)

console.log(house.sasural)

var myfriends = ["mina", "teju", "manu", "manju","tilu"]
console.log(myfriends)

console.log(myfriends[2])

myfriends[2]= "minu"
console.log(myfriends)

myfriends[5]= "manu"
console.log(myfriends)

myfriends[myfriends.length]="bob"
console.log(myfriends)

myfriends.push("jack")
console.log(myfriends)

var mname =myfriends.pop()
console.log(myfriends)

myfriends.splice(3,0,"dona", "dina")
console.log(myfriends)

myfriends.splice(0,0,"tiku")
console.log(myfriends)

myfriends.splice(2,1)
console.log(myfriends)

var myofffriends = ["minu","chilu", "chiku","pili"]

var friends = myfriends.concat(myofffriends)
console.log(friends)

friends.sort()
console.log(friends)

friends.reverse()
console.log(friends)

var numq1 = 0
while(numq1 <= 51){
    numq1++
}
console.log(numq1)


var mvalue = [1,2,3,4,5]
var pos
for(pos=0;pos < mvalue.length; pos++){
    console.log("position =" + mvalue + "value= "+  pos)
}

function msum(){
   var num1 = 10;
   var num2 =20;
   var sum = num1+num2
   return sum
}
console.log(msum())

function greeting (){
    console.log("welcome");
}
greeting();

function greeting (personName){
    console.log("welcome "+ personName);
}
greeting('ravina');

function totalvalue (num1, num2){
    console.log(num1)
    console.log(num2)
    console.log(num1+num2)
}

totalvalue(2,98)