//object literal

const salon = {
    name:"The Fashion Pets",
    phone:"5567893",
    address:{
        street:"Av. University",
        number:"262-G"
    },



    workingHours: {
    days:"Mon-Fri",
    open: "9:00 am",
    close: "5:00 pm"
    },
    pets:[],
    count: function(){
        alert("We have : " + salon.pets.length +"pets registered.");
    }
}

// object destructuring

let{name,phone,address:{street,number,},workingHours:{days,open,close}}
=salon;

console.log(name,street);
//using bootstrap for the display
document.getElementById("col1").innerHTML=`<h2 class="display-4"> ${name} </h2 > <p class="lead"> Phone number: ${phone} </p>`;

document.getElementById("col2").innerHTML=`<p class="lead">  Address Information  </p> <p class="lead"> Street: ${street} ${number} </p>`;

document.getElementById("col3").innerHTML=`<p class="lead"> it is open ${days} from ${open} to ${close}. </p>`;
//if you dont like the way in the index we can remove the class and we use the object constructor to create the pets
//Object constructor

class Pet{
    constructor(name,age,breed,gender,service,ownerName,phoneContact)
    {
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.service=service;
        this.gender=gender;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.hunger=10;
        this.happiness=5;

    }
    ownerInfo = function(){
        console.log("Owner name: "+ this.ownerName + "\n" + "Contact Phone: " + this.phoneContact);
    }

    feed = function(){
        this.hunger -=10;        //reduce hunger
        this.happiness+=10;      //increase happiness
        console.log("Feeding ...");

    }
    status = function(){
        console.log("Hunger: " + this.hunger + "\n" + this.happiness);
    }
    
}

const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Debbie","80679");
console.log(pet1);
console.log(pet1.ownerInfo());

/*pet1.feed();
pet1.status();
pet1.feed();
pet1.status();*/

//create 2 pets more
//const pet1 = new Pet("Shaggy",2,"Boxer","Male","Shower","Debbie","80679");
const pet2 = new Pet("Janis",3,"Boxer","Female","Nail cut","Sandie","80579");
const pet3 = new Pet("Ozzy",6,"Mixed","Male","Shower","Lois","80479");

//console.log(pet1);
//console.log(pet2);
//console.log(pet3);

//linking the salon and pets we will use the push action into the array
console.log(salon);

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

//console.log(salon);

console.table(salon.pets);

//display in alert message the number of the pets(length)

//salon.count();

//print in a division the information of the pets (using the for loop)
var text="";
for(var i=0; i<salon.pets.length;i++)
{
    text +=`<p> Name: ${salon.pets[i].name} <br> ${salon.pets[i].age} <br> ${salon.pets[i].gender}<br> ${salon.pets[i].breed} <br> ${salon.pets[i].ownerName} <br> ${salon.pets[i].service} <br> ${salon.pets[i].phoneContact} </p>`;
    
    
    
    /*console.log(salon.pets[i].name);
    console.log(salon.pets[i].age);
    console.log(salon.pets[i].gender);*/
}


document.getElementById("content").innerHTML=text;

//const column1 = document.getElementById('col1');
//column1.setAttribute('class','example');

//const ex = document.getElementsByClassName('lead');
//ex[2].setAttribute('class','example');

const ex = document.getElementsByTagName('p');
//ex[2].setAttribute('class','example');


//modification of all the elements using the for loop

for(var i=0; i<ex.length;i++){
    ex[i].setAttribute('class','example');
}

var heading3 = document.createElement('h3');
console.log(heading3);
var text = document.createTextNode("My first script using the Dom");
console.log(text);
heading3.appendChild(text); 

//console.log(heading3);
//print in the html which is the example
document.getElementById('example').appendChild(heading3);
//cloning heading3
heading3.cloneNode(true);
//var col1 = document.getElementById('col1');

//using queryselector instead
document.querySelector('.lead')

var deleted = document.querySelector("header h1");
deleted.remove();
    