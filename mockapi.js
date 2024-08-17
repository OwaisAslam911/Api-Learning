var userlist;
async function fetchdata() {
    var users = await fetch("https://66c07bfbba6f27ca9a56ca5a.mockapi.io/OwaisApi/UserInfo");
    var userlist = await users.json();
    console.log(userlist);
    table(userlist)
} 
function table(apidata){
   
    
for( var i=1 ; i <= apidata.length; i++){

    var TableRow = document.createElement('tr');
  
    var TableHeader = document.createElement('td');
    TableHeader.innerText = apidata[i].id;
    TableRow.append(TableHeader);
  
    var TableData1 = document.createElement('td');
    TableData1.innerText = apidata[i].UserName;
    TableRow.append(TableData1);
  
    var TableData2 = document.createElement('td');
    TableData2.innerText = apidata[i].UserEmail
;
    TableRow.append(TableData2);
    
    var TableData3 = document.createElement('td');
    TableData3.innerText = apidata[i].UserPassword;
    TableRow.append(TableData3);

    
    // console.log(TableRow);
  
    var tb = document.getElementById('tablebody');
    tb.append(TableRow);
  }

}



// fetchdata()