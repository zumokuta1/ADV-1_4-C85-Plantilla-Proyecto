menu_list_array = [
    "Veg Margarita Pizza",
    "Pollo Tandoori Pizza",
    "Veg Suprema Pizza",
    "Paneer Tikka Pizza",
    "Deluxe Veggie Pizza",
    "Veg Extravaganza Pizza"
];

function getmenu() {
    var htmldata = "";
    for (var i = 0; i < menu_list_array.length; i++) {
        htmldata = htmldata + menu_list_array[i] + '<br>'
    }
    //Da un nombre de identificación apropiado, como mostrar_menú 
    document.getElementById("mostrar_menu").innerHTML = htmldata;
}

function add_suggestion() {
    //Da un nombre de identificación apropiado, como agregar_elemento
    var item = document.getElementById("agregar_elemento").value;
    //Usa la función push() para llevar el elemento a la menu_list_array.
    menu_list_array.push(item);
}

