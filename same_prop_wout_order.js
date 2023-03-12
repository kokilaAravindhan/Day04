var obj1={"name":"Person1","age":"23"}
var obj2={"age":"23","name":"Person1"}
  var count=0;
  var keyObj1 = Object.keys(obj1); 
  var keyObj2 = Object.keys(obj2);
     for(var i in obj1){
        for(var j in obj2){
        if(keyObj1[i]==keyObj2[j]){
          count++;
          //console.log("kkkk")
        }
      }
     }
     if(count>1){
     console.log("The Same key objects without order");
     }
