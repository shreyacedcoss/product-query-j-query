var arr = [];
document.getElementsByClassName("error")[0].style.display = "none";
document.getElementsByClassName("success")[0].style.display = "none";
function Add() {
  var product_sku = document.getElementById("product_sku").value;
  var product_name = document.getElementById("product_name").value;
  var product_price = document.getElementById("product_price").value;
  var product_quant = document.getElementById("product_quant").value;
//creating an object here
  var obj = {
    SKU: product_sku,
    Name: product_name,
    Price: product_price,
    Quantity: product_quant,
  };
  if (
    product_sku == "" ||
    product_name == "" ||
    product_price == "" ||
    product_quant == ""
  ) {
    document.getElementsByClassName("error")[0].innerHTML =
      "Enter all the fields";
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("success")[0].style.display = "none";
  } else {
    arr.push(obj);
    document.getElementsByClassName("error")[0].style.display = "none";
    document.getElementsByClassName("success")[0].style.display = "block";
  }
  

  console.log(arr);
  // arr.push("obj")
  display();
}
//display function to display the table
function display() {
  var table =
    "<table border=1px  'solid black'><tr><th>SKU</th><th>Name</th><th>Price</th><th>Quantity</th><th>Action</th></tr>";
  document.getElementsByClassName("error")[0].style.display = "none";
  document.getElementsByClassName("success")[0].style.display = "block";
  arr.forEach((element) => {
    table +=
      "<tr><td>" +
      element.SKU +
      "</td><td>" +
      element.Name +
      "</td><td>" +
      element.Price +
      "</td><td>" +
      element.Quantity +
      "</td><td>" +
      '<a href="#" onclick =delprod(\'' +
      element.SKU +
      "')>Delete</a>" +
      '<a href="#" onclick =editprod(\'' +
      element.SKU +
      "')>Edit</a>";

    ("</td></tr>");
  });
  table += "</table>";
  document.getElementById("list").innerHTML = table;
}
//creating a delete function to delete the single raw
function delprod(val) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i].SKU) {
      console.log(arr[i].SKU);
      arr.splice(i, 1);
    }
  }
  display();
}
//creating edit function  here
function editprod(val) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i].SKU) {
        console.log(val);
      document.getElementById("product_sku").value = arr[i].SKU;
      document.getElementById("product_name").value = arr[i].Name;
      document.getElementById("product_price").value = arr[i].Price;
      document.getElementById("product_quant").value = arr[i].Quantity;

      arr.splice(i, 1);
    }
    display();
  }

  
}
