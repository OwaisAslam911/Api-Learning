var ProductList;

async function fetchdata(){
  var products =await fetch('https://fakestoreapi.com/products');
  ProductList = await products.json();

table(ProductList)
}

function table(apidata){


for( var i=1 ; i <= apidata.length; i++){

  var TableRow = document.createElement('tr');

  var TableHeader = document.createElement('td');
  TableHeader.innerText = apidata[i].id;
  TableRow.append(TableHeader);

  var TableData1 = document.createElement('td');
  TableData1.innerText = apidata[i].title;
  TableRow.append(TableData1);

  var TableData2 = document.createElement('td');
  TableData2.innerText = apidata[i].price;
  TableRow.append(TableData2);
  
  var TableData3 = document.createElement('td');
  TableData3.innerText = apidata[i].category;
  TableRow.append(TableData3);
  
  var TableData4 = document.createElement('td');
  TableData4.innerText = apidata[i].description;
  TableRow.append(TableData4);
  
  var TableData4 = document.createElement('td');
  TableData4.innerText = apidata[i].image;
  TableRow.append(TableData4);
  
  
  // console.log(TableRow);

  var tb = document.getElementById('tablebody');
  tb.append(TableRow);
}
}


// function table(){
//   for( var i=1 ; i <= 10; i++){
//    var TableRow = document.createElement('tr');
//    TableRow.innerHTML("<th>head</th>")

//    console.log(TableRow)
//   }
//   table();

// }