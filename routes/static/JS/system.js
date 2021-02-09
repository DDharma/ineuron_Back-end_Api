var url = "http://127.0.0.1:5000/"
//var url = "https://4fd3c872c61b.ngrok.io/"

//Toper
var ourRequestTopper = new XMLHttpRequest();
ourRequestTopper.open("GET",url+"topper");
ourRequestTopper.setRequestHeader("Content-type","application/json");
ourRequestTopper.onload = function(){
console.log(ourRequestTopper.responseText);
var TopperList = JSON.parse(ourRequestTopper.responseText).Topper;
console.log(TopperList);
document.getElementById("toperMe").innerHTML = "STUDENT HAVING HIGHEST MARKS IN ME IS "+TopperList[0];
document.getElementById("toperCse").innerHTML = "STUDENT HAVING HIGHEST MARKS IN CSE IS "+TopperList[1];
document.getElementById("topercivil").innerHTML = "STUDENT HAVING HIGHEST MARKS IN ME IS "+TopperList[2];

};
ourRequestTopper.send();


//--------------------------------------------------------------------------

// Button Click of ME brach
var brachDataME = {
    "BRANCH":"ME"
};

var brachDataStringME = JSON.stringify(brachDataME);
var MEButtonClick = document.getElementById("ME_Button");
MEButtonClick.addEventListener("click",function(){
    document.getElementById("addNewItem").style.display = "none";
    document.getElementById("addNewStudentId").style.display = "none";
    var ourRequest = new XMLHttpRequest();
    ourRequest.open("POST",url+"batch_name");
    ourRequest.setRequestHeader("Content-type","application/json");
    ourRequest.onload = function(){
    console.log(ourRequest.responseText);
    var BatchDataME = JSON.parse(ourRequest.responseText).BATCHES;
    console.log(BatchDataME);

    //Changing the heading
    document.getElementById("dataShowringHeadingId").innerHTML = "This the ths list of all the batch of ME Branch";

    //Create a HTML Table element.
    var customers = new Array();
    customers.push(["BATCHES"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 0; i < BatchDataME.length; i++) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = BatchDataME[i];
    
    }

    var dvTable = document.getElementById("showBatchTimeId");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

};
    ourRequest.send(brachDataStringME);
});

//--------------------------------------------------------------------------

// Button Click of CSE brach
var brachDataCSE = {
    "BRANCH":"CSE"
};
var brachDataStringCSE = JSON.stringify(brachDataCSE);

var CSEButtonClick1 = document.getElementById("CSE_Button");
CSEButtonClick1.addEventListener("click",function(){
    document.getElementById("addNewItem").style.display = "none";
    document.getElementById("addNewStudentId").style.display = "none";
    var ourRequest1 = new XMLHttpRequest();
    ourRequest1.open("POST",url+"batch_name");
    ourRequest1.setRequestHeader("Content-type","application/json");
    ourRequest1.onload = function(){
    console.log(ourRequest1.responseText)
    var BatchDataCSE = JSON.parse(ourRequest1.responseText).BATCHES;
    console.log(BatchDataCSE)
    //Changing the heading
    document.getElementById("dataShowringHeadingId").innerHTML = "This the ths list of all the batch of CSE Branch";

    //Create a HTML Table element.
    var customers = new Array();
    customers.push(["BATCHES"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 0; i < BatchDataCSE.length; i++) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = BatchDataCSE[i];
    
    }

    var dvTable = document.getElementById("showBatchTimeId");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);
};
    ourRequest1.send(brachDataStringCSE);
});

//--------------------------------------------------------------------------

// Button Click of CIVIL brach
var brachDataCIVIL = {
    "BRANCH":"CIVIL"
};
var brachDataStringCIVIL = JSON.stringify(brachDataCIVIL);

var CIVILButtonClick = document.getElementById("CIVIL_Button");
CIVILButtonClick.addEventListener("click",function(){
    document.getElementById("addNewItem").style.display = "none";
    document.getElementById("addNewStudentId").style.display = "none";
    var ourRequest2 = new XMLHttpRequest();
    ourRequest2.open("POST",url+"batch_name");
    ourRequest2.setRequestHeader("Content-type","application/json");
    ourRequest2.onload = function(){
    console.log(ourRequest2.responseText)

    var BatchDataCIVIL = JSON.parse(ourRequest2.responseText).BATCHES;
    console.log(BatchDataCIVIL)
    //Changing the heading
    document.getElementById("dataShowringHeadingId").innerHTML = "This the ths list of all the batch of CIVIL Branch";

    //Create a HTML Table element.
    var customers = new Array();
    customers.push(["BATCHES"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 0; i < BatchDataCIVIL.length; i++) {
        row = table.insertRow(-1);
        var cell = row.insertCell(-1);
        cell.innerHTML = BatchDataCIVIL[i];
    
    }

    var dvTable = document.getElementById("showBatchTimeId");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);


};
    ourRequest2.send(brachDataStringCIVIL);
});


//--------------------------------------------------------------------------

//Showing the POP widows
var addNew = document.getElementById("add_new_Button");
addNew.addEventListener("click", function(){
    document.getElementById("addNewItem").style.display = "block";
});


//--------------------------------------------------------------------------

//Search Box
var searchButtonClick = document.getElementById("search_button")
searchButtonClick.addEventListener("click",function(){
    

    document.getElementById("addNewItem").style.display = "none";
    document.getElementById("addNewStudentId").style.display = "none";
    var searchBarValue = document.getElementById("SearchBar").value;
    var searchData = {
        "STUDENTID":parseInt(searchBarValue)
    }
    
    searchDataString = JSON.stringify(searchData)
    
    var ourRequest3 = new XMLHttpRequest();
    ourRequest3.open("POST",url+"batch_name");
    ourRequest3.setRequestHeader("Content-type","application/json");
    ourRequest3.onload = function(){
    console.log(ourRequest3.responseText)

};
    ourRequest3.send(searchDataString);

});


//--------------------------------------------------------------------------

//Showing Time Table
var TimeButtonClick = document.getElementById("batchTime");
TimeButtonClick.addEventListener("click",function(){
    document.getElementById("addNewItem").style.display = "none";
    document.getElementById("addNewStudentId").style.display = "none";
    var ourRequestBatchTime = new XMLHttpRequest();
    ourRequestBatchTime.open("GET",url+"batchTime");
    ourRequestBatchTime.setRequestHeader("Content-type","application/json");
    ourRequestBatchTime.onload = function(){
    console.log(ourRequestBatchTime.responseText);
    var BatchTimeList = JSON.parse(ourRequestBatchTime.responseText).studentBatchTimeData;
    console.log(BatchTimeList);
        
    //Changing the heading
    document.getElementById("dataShowringHeadingId").innerHTML = "This the ths list of all the batch with the timing from Monday to Friday";

    //Create a HTML Table element.
    var customers = new Array();
    customers.push(["TIME", "MONDAY", "TUESDAY","WEDNESDAY","THRUSDAY","FRIDAY"]);

    var table = document.createElement("TABLE");
    table.border = "1";

    //Get the count of columns.
    var columnCount = customers[0].length;

    //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = customers[0][i];
        row.appendChild(headerCell);
    }

    //Add the data rows.
    for (var i = 0; i < BatchTimeList.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = BatchTimeList[i][j];
        }
    }

    var dvTable = document.getElementById("showBatchTimeId");
    dvTable.innerHTML = "";
    dvTable.appendChild(table);

};
    ourRequestBatchTime.send();
});

//--------------------------------------------------------------------------

//Adding new item like student& Batch Time

var add_new_student_button = document.getElementById("add_new_student");
add_new_student_button.addEventListener("click",function(){
    document.getElementById("addNewStudentId").style.display = "block";
    document.getElementById("dataShowringHeadingId").innerHTML = "Enter these all the details of the student";
});

var submitButton = document.getElementById("submit_button") ;
submitButton.addEventListener("click",function(){
    alert("Still Work is not complete");
});

/*

var studentData = {
    "NAME":document.getElementById("StudentName").value,
    "ID":parseInt(document.getElementById("StudentId").value),
    "BATCH":document.getElementById("StudentBatch").value,
    "BRANCH":document.getElementById("StudentBranch").value
}

console.log(studentData);

var studentDataString = JSON.stringify(studentData);

var submitButton = document.getElementById("submit_button") ;
submitButton.addEventListener("click",function(){
    var ourRequestSubmit = new XMLHttpRequest();
    ourRequestSubmit.open("POST",url+"add_student");
    ourRequestSubmit.setRequestHeader("Content-type","application/json");
    ourRequestSubmit.onload = function(){
    console.log(ourRequestSubmit.responseText);
   
};
    ourRequestSubmit.send(studentDataString);

});

*/
