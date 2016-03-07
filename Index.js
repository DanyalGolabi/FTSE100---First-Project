var xhr = new XMLHttpRequest();

var URL = "https://spreadsheets.google.com/feeds/list/0AhySzEddwIC1dEtpWF9hQUhCWURZNEViUmpUeVgwdGc/1/public/basic?alt=json";

xhr.open("GET", URL, false);
xhr.send();

var statusResponseStringify = JSON.stringify(xhr.responseText, "", 2);
var statusResponseParse = JSON.parse(xhr.responseText);

var Find = statusResponseParse.feed.entry;

/*document.getElementById("Price").innerHTML+="Stock Price".bold() + "<br>";
document.getElementById("Change").innerHTML+="Price Change".bold() + "<br>";
document.getElementById("Name").innerHTML+="Company Name".bold() + "<br>";*/

//console.log(Find[1].content.$t);

  var newRow1 = document.createElement("tr");
  var header1 = document.createElement("th");
  var header2 = document.createElement("th");
  var header3 = document.createElement("th");

function printTable() {


var lineTable = document.createElement("table");
document.getElementById("Listings").appendChild(lineTable);
lineTable.setAttribute("id", "tableAttribute");

    document.getElementById("tableAttribute").appendChild(newRow1);
    newRow1.setAttribute("id", "Headers");

    document.getElementById("Headers").appendChild(header1);
    header1.setAttribute("id", "Company Name");
    header1.setAttribute("class", "HeadClassCName");
    document.getElementById("Company Name").innerHTML = "Company Name";
    document.getElementById("Company Name").style.color = "#ffffff";
    //document.getElementById("Company Name").style.font = "bold 20px Lucida-Console Monaco monospace";

    document.getElementById("Headers").appendChild(header2);
    header2.setAttribute("id", "Stock Price");
    header2.setAttribute("class", "HeadClassCPrice");
    document.getElementById("Stock Price").innerHTML = "Stock Price (in p)";
    document.getElementById("Stock Price").style.color = "#ffffff";
    //document.getElementById("Stock Price").style.font = "bold 20px Lucida-Console Monaco monospace";

    document.getElementById("Headers").appendChild(header3);
    header3.setAttribute("id", "Price Change");
    header3.setAttribute("class", "HeadClassCChange");
    document.getElementById("Price Change").innerHTML = "Price Change (in p)";
    document.getElementById("Price Change").style.color = "#ffffff";
    //document.getElementById("Price Change").style.font = "bold 20px Lucida-Console Monaco monospace";
};

    
 printTable();

for (var i = 0; i < Find.length; i++) {

var FTSEContent = Find[i].content.$t;
//document.getElementById("FTSEName").innerHTML+=FTSEContent + "<br><br>";

var text = FTSEContent;

var valueP = text.match(/(\d+(?:\.\d+)?)/);
var valueC = text.match(/change: (-?\d+(?:\.\d+)?)/);
//var words = text.match(/name: (\w+\.?\-?(?:\s+(\w+\.?\-?(\s+(\w+\.?\-?(\s+(\w+\.?\-?(\s+)?)?)?)?)?)?)?)/);

// /-?(\d+(?:\.\d+)?)/

var words = text.substring(text.indexOf(": ")+2,text.indexOf(", "));


//console.log(String);

if (valueP == null) {
//document.getElementById("Price").innerHTML+="N/A" + "<br>";
valueP= ["Junk", "N/A"];
}
else {
//document.getElementById("Price").innerHTML+=valueP[1] + "<br>";
};

if (valueC == null) {
//document.getElementById("Change").innerHTML+="N/A" + "<br>";
valueC= ["Junk", "N/A"];
}
else {
//document.getElementById("Change").innerHTML+=valueC[1] + "<br>";
};

/*if (words == null) {
document.getElementById("Name").innerHTML+="N/A" + "<br>";
}
else {
document.getElementById("Name").innerHTML+=words + "<br>";
};*/

console.log(valueP);

function printData () {

  var newRow2 = document.createElement("tr");
    var newCell1 = document.createElement("td");
    var newCell2 = document.createElement("td");
    var newCell3 = document.createElement("td");

    document.getElementById("tableAttribute").appendChild(newRow2);
    newRow2.setAttribute("id", text);
    newRow2.setAttribute("class", "Row1");
    document.getElementById(text).appendChild(newCell1);
    newCell1.setAttribute("id",text + "CName");
    newCell1.setAttribute("class", "ClassCName");
    document.getElementById(text + "CName").innerHTML = words;
    document.getElementById(text + "CName").style.padding = "2px 10px 2px 5px";
	document.getElementById(text).appendChild(newCell2);   
	newCell2.setAttribute("id",text + "CPrice");
	newCell2.setAttribute("class", "ClassCPrice");
    document.getElementById(text + "CPrice").innerHTML = valueP[1];
    document.getElementById(text + "CPrice").style.padding = "2px 10px 2px 5px";
    if (valueP[1] >= 0 && valueP[1] <= 400) {
        document.getElementById(text + "CPrice").style.color = "#FF7878";
    }
    else if (valueP[1] > 400 && valueP[1] <= 900)
    {
        document.getElementById(text + "CPrice").style.color = "#F19D8F";
    }
         else if (valueP[1] > 900 && valueP[1] <= 1300)
    {
        document.getElementById(text + "CPrice").style.color = "#ECA997";
    }
         else if (valueP[1] > 1300 && valueP[1] <= 1700)
    {
        document.getElementById(text + "CPrice").style.color = "#E8B59E";
    }
         else if (valueP[1] > 1700 && valueP[1] <= 2100)
    {
        document.getElementById(text + "CPrice").style.color = "#E3C2A6";
    }
         else if (valueP[1] > 2100 && valueP[1] <= 2500)
    {
        document.getElementById(text + "CPrice").style.color = "#DFCEAD";
    }
         else if (valueP[1] > 2500 && valueP[1] <= 2900)
    {   
        document.getElementById(text + "CPrice").style.color = "#DADAB5";
    }
         else if (valueP[1] > 2900 && valueP[1] <= 3300)
    {
        document.getElementById(text + "CPrice").style.color = "#D5E6BD";
    }
         else if (valueP[1] > 3300 && valueP[1] <= 3700)
    {
        document.getElementById(text + "CPrice").style.color = "#D1F3C4";
    }
         else if (valueP[1] > 3700)
    {
        document.getElementById(text + "CPrice").style.color = "#CCFFCC";
    }
    else
    {
        document.getElementById(text + "CPrice").style.color = "#ffffff";
    };
    document.getElementById(text).appendChild(newCell3); 
    newCell3.setAttribute("id",text + "CChange");
    newCell3.setAttribute("class", "ClassCChange");
    document.getElementById(text + "CChange").innerHTML = valueC[1];
    document.getElementById(text + "CChange").style.padding = "2px 10px 2px 5px"; 
    if (valueC[1] > 0) {
        document.getElementById(text + "CChange").style.color = "#65ff33";
    }
    else {
        document.getElementById(text + "CChange").style.color = "#ff1a1a";
    };
};

printData();

};