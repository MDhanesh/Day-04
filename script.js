/*---------------------- compare json without order--------------------------*/

var obj1 = {
  name: 'Person 1',
  age:5,
};
    
var obj2 = {
  age:5,
  name: 'Person 1'
};
var object1={};
var object2={};
Object.keys(obj1).sort().forEach (key=>{
  object1[key]=obj1[key];
})
Object.keys(obj2).sort().forEach (key=>{
  object2[key]=obj2[key];
})
console.log(JSON.stringify(object1)===JSON.stringify(object2))

/*---------------------- compare json without order--------------------------*/


/*---------------------- API PROBLEM--------------------------*/


var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    
     var result=JSON.parse(request.response);

/*---------------------- all country flag--------------------------*/

     var res = result.filter((ele)=>ele.flag).map((ele)=>ele.flag);
     console.log(res)

/*---------------------- all country Name--------------------------*/

    var res=result.filter((ele)=>ele.name).map((ele)=>ele.name);
    console.log(res);
    
/*---------------------- all country region--------------------------*/
    var res=result.filter((ele)=>ele.region).map((ele)=>ele.region);
    console.log(res);

/*---------------------- all country subregion--------------------------*/
    var res=result.filter((ele)=>ele.subregion).map((ele)=>ele.subregion);
    console.log(res);

/*---------------------- all country population--------------------------*/
    var res=result.filter((ele)=>ele.population).map((ele)=>ele.population);
    console.log(res);
   
    
}
