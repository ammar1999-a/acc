function fifo (){
  var first = document.getElementById("first").value ,
      second =  document.getElementById("sec").value ,
      firstMony =  document.getElementById("firstMony").value ,
      secMony =  document.getElementById("secMony").value ,
      sold =  document.getElementById("sold").value;
      
      var soldCost= sold * firstMony ,
          firstrem = (first - sold ) * firstMony ,
          secrem = second * secMony ,
          totalrem = firstrem + secrem ;
     document.getElementById("title").innerHTML= "In Fifo Counter "  ;
     document.getElementById("show").innerHTML=        "Sold cost =    " + soldCost  ;  
     document.getElementById("firstShow").innerHTML=   "Remaining of first = " + firstrem ;
      document.getElementById("secShow").innerHTML=    "Remaining of second =" + secrem ; 
       document.getElementById("totalShow").innerHTML= "Total closing Inventories = " + "" + totalrem ; 
           
}
 


 function lifo() {
    
    var first = document.getElementById("first").value ,
      second =  document.getElementById("sec").value ,
      firstMony =  document.getElementById("firstMony").value ,
      secMony =  document.getElementById("secMony").value ,
      sold =  document.getElementById("sold").value;
      
         var soldCost= sold * secMony ,
          firstrem = first  * firstMony ,
          secrem = (second - sold ) * secMony ,
          totalrem = firstrem + secrem ;
          
           document.getElementById("title").innerHTML= "In Lifo Counter " ;
       document.getElementById("show").innerHTML=        "Sold cost =    " + soldCost  ;  
     document.getElementById("firstShow").innerHTML=   "Remaining of first = " + firstrem ;
      document.getElementById("secShow").innerHTML=    "Remaining of second =" + secrem ; 
       document.getElementById("totalShow").innerHTML= "Total closing Inventories = " + "" + totalrem ; 
    
    
 }






















