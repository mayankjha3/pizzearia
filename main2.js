menu_list_array = ["Veg Margherita Pizza","Chicken Tandori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravanza Pizza"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class = 'menulist'>"
menu_list_array.sort();
for(var i = 0 ; i<menu_list_array.length() ; i++){
    htmldata=htmldata+"<li>"+menu_list_array[i]+"</li>"
}
htmldata=+htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
//Complete the code
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class = 'cards'>"
for(var j = 0 ; j<menu_list_array.length ; j++){
    htmldat=+htmldata+"<div class = 'card'>"
    + '<img src="images/pizzaImg.png"/>'
    + menu_list_array[j] + '</div>'
}
htmldata=+htmldata+"</section>"
document.getElementById("display_addmenu").innerHTML=htmldata;


}

function add_top(){
//Complete the code
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}