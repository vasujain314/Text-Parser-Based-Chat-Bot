var str = [];
str[0] = "is the weather cold?"
str[1] = "    if yes, wear a warm jacket"
str[2] = "    if no, is it raining?"
str[3] = "        if yes, is it windy?"
str[4] = "            if yes, wear a windbreaker"
str[5] = "            if no, take an umbrella"
str[6] = "        if no, then take a teeshirt" 

var n=6;


var obj = new Array(n/2); 
for (var i = 0; i < obj.length; i++) {
    obj[i] = new Array(2);
}
var rootques = String(str[0]);
console.log(rootques);
document.getElementById("ques").innerHTML = rootques;


for(var i=1;i<str.length;i++)
{
    let size = str[i].search(/\S/);

    let idx = size/4-1;
    let len = str[i].length;
    obj[idx].push(str[i].substring(size, len));
         
}

var level = 0;
function vishalyes()
    {
        console.log(obj[level][2]);
        
        if(obj[level][2] [obj[level][2].length-1] == "?")
        {
            document.getElementById("ques").innerHTML = obj[level][2];
            level++;

        }   
        else{
            console.log(obj[level][2]);
            
        }
    
    
}
function vishalNo()
    {

        if(obj[level][3][obj[level][3].length-1] == "?")
        {
            document.getElementById("ques").innerHTML = obj[level][3];
            level++;
        }   
        else{
            console.log(obj[level][3]);
            
        }
    
}



// for(var i=0;i<n/2;i++)
// {
//     console.log(obj[i][2]);
// }
