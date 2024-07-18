import React from "react";

function ArrayMethods() {
  const muscleCars = [
    "Ford Mustang",
    "Chevrolet Camaro",
    "Dodge Challenger",
    "Pontiac GTO",
    "Chevrolet Chevelle SS",
    "Plymouth Barracuda",
    "Dodge Charger",
    "Ford Torino",
    "Buick GSX",
    "Oldsmobile 442",
    "Mercury Cougar",
    "AMC AMX",
    "Plymouth Road Runner",
    "Chevrolet Nova SS",
    "Dodge Dart",
    "Pontiac Firebird",
    "Shelby GT500",
    "Chevrolet Corvette",
    "Plymouth GTX",
    "Ford Falcon",
  ];
  const fruits = ["apple", "banana", "orange", "grape", "mango", "strawberry"];
const vegetables = ["carrot", "broccoli", "spinach", "pepper", "cucumber", "tomato"];

  return (
    <div>
      <h1>ARRAY_METHODS</h1>
       {/* length of an array */}

      <button
        onClick={() => {
          console.log(muscleCars.length);
        }}
      >
        Length
      </button>
      <button
        onClick={() => {
          for (let i = 0; i < muscleCars.length; i++) {
            console.log(`🚗${muscleCars[i]} 🚗`);
          }
        }}
      >
        USE-LOOP
      </button>
      <button
        onClick={() => {
          console.log(muscleCars[12]);
          console.log(muscleCars.at(12));
        }}
      >
        Arrat_at
      </button>
      <button
        onClick={() => {
          console.log(muscleCars.toString());
        }}
      >
        Array-string
      </button>
      <button
        onClick={() => {
          console.log(muscleCars.join("🚘"));
        }}
      >
        Array-join
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          muscleCars.push("Mercury Cyclone", "AMC Javelin");
          console.log(muscleCars);
        }}
      >
        Push
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          console.log(muscleCars.pop());
        }}
      >
        Pop
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          console.log(muscleCars.shift());
        }}
      >
        Shift
      </button>
      <button
        onClick={() => {
          console.log(muscleCars);
          console.log(
            muscleCars.unshift("Ford Ranchero GT", "Chrysler 300 Hurst")
          );
          console.log(muscleCars);
        }}
      >
        UnShift
      </button>
      <button onClick={() => {
        console.log(muscleCars);
        muscleCars.splice(2,1,"HM contessa")
        console.log(muscleCars);
      }}>Splice-rmv</button>
      <button onClick={() => {
         console.log(muscleCars);
         muscleCars.splice(2,0,"HM contessa","RETRO-GT")
         console.log(muscleCars);
      }}>Splice-add</button>
      <button onClick={() => {
        
       console.log(fruits)
       delete fruits[2]
       console.log(fruits)

      }}>Delete</button>
      <button onClick={() => {
        let combine=fruits.concat(vegetables,muscleCars)
        console.log(combine)
        let combine_1=[...fruits,...vegetables]
        console.log(combine_1)
        let combine_2=[fruits,...vegetables]
        console.log(combine_2)
      }}>Concate</button>
      <button onClick={() => {
        const landTransport = ["car", "bus", "bicycle", "motorcycle", "train"];
        const airTransport = ["airplane", ["helicopter", "glider"], "hot air balloon", "drone"];
        const seaTransport = ["ship", "submarine", "boat", "yacht", "jet ski"];
        let flatArray=[landTransport,airTransport,seaTransport]
        console.log(flatArray)
        console.log(flatArray[1][1])
        console.log(flatArray[1][1][0])
        let flatArray_1=[landTransport,airTransport,seaTransport].flat()
        console.log(flatArray_1)
        let flatArray_2=[landTransport,airTransport,seaTransport].flat(2)
        console.log(flatArray_2)
      }}>flat</button>
      <button onClick={() => {
         const socialMediaPlatforms = ["Facebook", "Twitter", "Instagram", "LinkedIn", "TikTok", "Snapchat"];
         console.log(socialMediaPlatforms);
          console.log(socialMediaPlatforms.slice(2,5));
          console.log(socialMediaPlatforms.slice(1,3));


      }}>slice</button>
      <button onClick={() => {
        console.log(muscleCars)
        let fill= muscleCars.fill("pavan")
        console.log(fill)
        let fill_1= muscleCars.fill("kumar",5)
        console.log(fill_1)
        let fill_2= muscleCars.fill("ajjarapu",5,10)
        console.log(fill_2)
      }}>fill</button>
      <button onClick={() => {
        let name ="james k.welbrook"
        console.log(Array.from(name))
      }}>form</button>
      <button onClick={() => {
        const socialMediaPlatforms = ["Facebook", "Twitter", "Instagram", "LinkedIn", "TikTok", "Snapchat"];
        console.log(socialMediaPlatforms)
        console.log(socialMediaPlatforms.includes("Facebook"))
        console.log(socialMediaPlatforms.includes("Whatsapp"))
      }}>include</button>
      <button onClick={() => {
        const socialMediaPlatforms = ["Facebook", "Twitter", "Instagram", "LinkedIn", "TikTok", "Snapchat"];
        console.log(socialMediaPlatforms)
        console.log(socialMediaPlatforms.indexOf("whatsapp"))
        console.log(socialMediaPlatforms.indexOf("TikTok"))
      }}>index-of</button>
      <button onClick={() => {
        const socialMediaPlatforms = ["Facebook", "Twitter", "Instagram", "LinkedIn", "TikTok", "Snapchat","Twitter"];
        console.log(socialMediaPlatforms)
        console.log(socialMediaPlatforms.lastIndexOf("Twitter"))
      }}>Lastindex-of</button>
      <button onClick={() => {
        console.log(vegetables)
        console.log(vegetables.reverse())
      }}>Reverse</button>
      <button onClick={() => {
         console.log(fruits)
         fruits.forEach((element,index)=>{
          console.log(`${index}---->${element}`)
          console.log(element)
         })

      }}>For-Each</button>
      <button onClick={() => {
        let marksArray=[55,66,88,95,77,55]
       let result= marksArray.every((element,index)=>{
          return element>=35
        })
        console.log(result)
        if (result== true){
          console.log(`student passed in exam`)
        }else{
          console.log(`student failed in exam`)
        }
      }}>Every</button>
      <button onClick={() => {
        let marksArray=[55,66,88,77,88,89]
        let result=marksArray.some((element,index)=>{
          return element<35
        })
        if (result== true){
          console.log(`student failed in exam`)
        }else{
          console.log(`student passed in exam`)
        }
        console.log(result)
      }}>Some</button>
      <button onClick={() => {
        let numbers= [22,55,66,44,33,44,88,66,44,77,99,55,33,66,55,44]
        let filterArray=numbers.filter((element)=>{
          return element<80
        })
        console.log(numbers)
        console.log(filterArray)
      }}>Filter</button>
      <button onClick={() => {
        let array= "pavan kumar ajjarapu"
        let isArray= Array.isArray(array)
        console.log(array)
        console.log(isArray)
      }}>is Array</button>
      <button onClick={() => {
        let randomNumbers=[10,20,30,55,66,88,77,9,78,5,55,88]
        let summ=randomNumbers.reduce((total=0,element)=>{
          return ( total+=element)
          
        })
       console.log(summ)
       
      }}>reduce</button>
      <button onClick={() => {
        let array=["p","a","v","a","n"]
       console.log(array)
        let red_right=array.reduceRight((total,element)=>{
          return (total+=element)
        })
       console.log(red_right)
      //  console.log(red_right.reverse())
      }}>Reduce-right</button>
      <button onClick={() => {
        let alphbets=["a","b","z","r","t","x","c"]
        console.log(alphbets)
        console.log(alphbets.sort())
      }}>sort</button>
      <button onClick={() => {
        let numbers=[45,33,44,22,1,8,66,77,99,125,8888,55]
        console.log(numbers)
        let numSort=numbers.sort((a,b)=>{ return a-b})
        console.log(numSort)
      }}>num-sort</button>
      <button onClick={() => {
        let wicketKeepers = ["Dhoni","KLrahul","IshanKishan","RishabPanth","SanjuSamson"]
        let map =wicketKeepers.map((element,index)=>{
          return `Wicket Keeper--->${element}.`
        })
        console.log(map)
      }}>Map</button>
    
    </div>
  );
}

export default ArrayMethods;
