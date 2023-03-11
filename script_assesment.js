var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   // console.log(result);
  
   for(var i in result){
        console.log(result[i].flag);
        console.log(result[i].name,result[i].region,result[i].subregion,result[i].population);
        }
    }