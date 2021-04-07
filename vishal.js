var str = [];
var n;
var obj;
function input() {
    str = $('#input').val().split("\n");
    n = str.length;
    obj = new Array(n);
    for (var i = 0; i < obj.length; i++) {
        obj[i] = new Array(4);
    }

    let p = 3;
    // console.log(str[1]);
    for (var i = 0; i < n; i++) {
        let size = str[i].search(/\S/);
        if (size == 0) {
            p++;
        }
        // console.log(size);
        let len = str[i].length;
        let s = str[i].search(',');
        str[i] = p.toString() + str[i].substring(s + 1, len)
        obj[size / 4].push(str[i]);
    }

    var rootques = String(str[0].substring(1, str[0].length));
    document.getElementById("main").style.display = "block";
    document.getElementById("ques").innerHTML = rootques;
    
    var ul = document.getElementById("log");
    var candidate =  rootques;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(candidate));
    ul.appendChild(li);    
}


var level = 1;
var para = 4;


function next() {
    level = 0;
    if (obj[level][para] == undefined)
        alert("End of Paragraph");
    else {
        
        var ul = document.getElementById("log");
        var candidate =  obj[level][para].substring(1, obj[level][para].length);
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(candidate));
        ul.appendChild(li);


        document.getElementById("res").style.display = "none";
        document.getElementById("ques").style.display = "block";
        document.getElementById("ques").innerHTML = obj[level][para].substring(1, obj[level][para].length);
        document.getElementById("ans1").style.display = "inline-block";
        document.getElementById("ans2").style.display = "inline-block";
        document.getElementById("ans3").style.display = "none";
        level++;
    }
    // para++;
    // console.log(para);
}


function vishalyes() {

    var ul = document.getElementById("log");
    var candidate = "Yes";
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(candidate));
    ul.appendChild(li); 

    var j = -1;
    // console.log(para);
    for (let i = 4; i < obj[level].length; i++) {
        if (obj[level][i][0] == para.toString()) {
            j = i;
            break;
        }
    }

    // console.log(obj[level][j]);
    if (j == -1) {
        alert("End of Paragraph");
    }
    else {
        if (obj[level][j][obj[level][j].length - 1] == "?") {
            // console.log(obj[level][j]);
            document.getElementById("ques").innerHTML = obj[level][j].substring(1, obj[level][j].length);
            var candidate = obj[level][j].substring(1, obj[level][j].length);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(candidate));
            ul.appendChild(li);
            level++;
        }
        else {
            document.getElementById("ques").style.display = "none";
            document.getElementById("ans1").style.display = "none";
            document.getElementById("ans2").style.display = "none";
            document.getElementById("ans3").style.display = "block";
            document.getElementById("res").style.display = "block";
            document.getElementById("res").innerHTML = obj[level][j].substring(1, obj[level][j].length);
            var candidate = obj[level][j].substring(1, obj[level][j].length);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(candidate));
            ul.appendChild(li);
            para++;
        }

    }


}
function vishalNo() {

    var ul = document.getElementById("log");

    var candidate = "No";
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(candidate));
    ul.appendChild(li); 

            


    var j = -1, f = 0;
    // para++;
    for (let i = 4; i < obj[level].length; i++) {
        if (obj[level][i][0] == para.toString() && f == 0) {
            f = 1;
        }
        else if (obj[level][i][0] == para.toString() && f == 1) {
            j = i;
            break;
        }
    }
    console.log(j);
    console.log(obj[level][j]);
    if (j == -1)
        alert("End of Paragraph");

    else {
        if (obj[level][j][obj[level][j].length - 1] == "?") {
            // console.log(obj[level][j]);
            document.getElementById("ques").innerHTML = obj[level][j].substring(1, obj[level][j].length);
           
            var candidate = obj[level][j].substring(1, obj[level][j].length);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(candidate.value));
            ul.appendChild(li);   

            level++;
        }
        else {
            document.getElementById("ques").style.display = "none";
            document.getElementById("ans1").style.display = "none";
            document.getElementById("ans2").style.display = "none";
            document.getElementById("ans3").style.display = "block";
            document.getElementById("res").style.display = "block";
            document.getElementById("res").innerHTML = obj[level][j].substring(1, obj[level][j].length);
           
            var candidate = obj[level][j].substring(1, obj[level][j].length);
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(candidate.value));
            ul.appendChild(li);
            para++;
        }
            

    }

}