

var oldValue="";
var operator

    

    function buttonclick(val){

        
    
       if(val===7){
        document.getElementById("input").value+="7"
       }
       if(val===8){
        document.getElementById("input").value+="8"
       }
       if(val===9){
        document.getElementById("input").value+="9"
       }
       if(val===4){
        document.getElementById("input").value+="4"
       }
       if(val===5){
        document.getElementById("input").value+="5"
       }
       if(val===6){
        document.getElementById("input").value+="6"
       }
       if(val===3){
        document.getElementById("input").value+="3"
       }
       if(val===2){
        document.getElementById("input").value+="2"
       }
       if(val===1){
        document.getElementById("input").value+="1"
       }
       if(val==='.'){
        document.getElementById("input").value+="."
       }
       if(val===0){
        document.getElementById("input").value+="0"
       }
      
         
       if(val==='+'){
        operator='+'
    
        oldValue=parseFloat(document.getElementById("input").value);
        document.getElementById("input").value= "";
       }
           
       if(val==='-'){
        operator='-'
    
        oldValue=parseFloat(document.getElementById("input").value);
        document.getElementById("input").value= "";
       }
           
       if(val==='/'){
        operator='/'
    
        oldValue=parseFloat(document.getElementById("input").value);
        document.getElementById("input").value= "";
       }
           
       if(val==='*'){
        operator='*'
        
        oldValue=parseFloat(document.getElementById("input").value);
        document.getElementById("input").value= "";
       }
       
       
       if(val=== '='){
        
       if(operator==='+'){

        var newValue=parseFloat(document.getElementById("input").value);
        var result = oldValue + newValue;
        document.getElementById("input").value=result;}
       
       }
       if(val=== '='){
        if(operator==='/'){
        
            var newValue=parseFloat(document.getElementById("input").value);
            var result = oldValue / newValue;
            document.getElementById("input").value=result;}
           }
           
       
       if(val=== '='){
        if(operator==='-'){
        
        var newValue=parseFloat(document.getElementById("input").value);
        var result = oldValue - newValue;
        document.getElementById("input").value=result;}
       }
       if(val=== '='){
        if(operator==='*'){
        
        var newValue=parseFloat(document.getElementById("input").value);
        var result = oldValue * newValue;
        document.getElementById("input").value=result;}
       }
       
    
    }
    function clearDisplay(){
        document.getElementById("input").value="";
    }

