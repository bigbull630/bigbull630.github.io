function myFunction(){
    var x=document.getElementById('yourZodiac').value;
    
    document.getElementById("animal").innerHTML=x;
    
    

 if (x === "cow") {
    document.getElementById("anipic").src='images/cow-nature.jpg';
}
else if (x === "rat") {
    document.getElementById("anipic").src='images/rat-nature.jpg';
 }
 else if (x === "tiger") {
     document.getElementById("anipic").src='images/tiger-nature.jpg';
}
else if (x === "rabbit") {
    document.getElementById("anipic").src='images/rabbit-nature.jpg';
 }
 else if (x === "dragon") {
     document.getElementById("anipic").src='images/dragon-nature.jpg';
}
else if (x === "snake") {
    document.getElementById("anipic").src='images/snake-nature.jpg';
 }
 else if (x === "horse") {
     document.getElementById("anipic").src='images/horse-nature.jpg';
}
else if (x === "goat") {
    document.getElementById("anipic").src='images/goat-nature.jpg';
 }
 else if (x === "monkey") {
     document.getElementById("anipic").src='images/monkey-nature.jpg';
}
else if (x === "rooster") {
    document.getElementById("anipic").src='images/rooster-nature.jpg';
 }
 else if (x === "dog") {
     document.getElementById("anipic").src='images/dog-nature.jpg';
}
else if (x === "pig") {
    document.getElementById("anipic").src='images/pig-nature.jpg';
 }
 else {
     document.getElementById("done").innerHTML = "select a year";
                             }
 

}
