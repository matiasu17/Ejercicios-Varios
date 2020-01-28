function addData(){
   
    let _category = document.getElementById("category").value;
    let _price = document.getElementById("price").value;
    

    let fila="<tr><td>"+_category+"</td><td>"+_price;

    let btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablita").appendChild(btn);
}