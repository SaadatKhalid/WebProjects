// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


function sortStudent() {

    let name = document.getElementById("studentName").value.trim();
    let result = document.getElementById("result");

    if (name=="") {
        result.textContent = "Enter Your Name First!";
        return;
    }

    let house = "";

    if (name.length < 6) {
        house = "Gryffindor 🦁";
      } else if (name.length < 8) {
        house = "Hufflepuff 🦡";
      } else if (name.length < 12) {
        house = "Ravenclaw 🦅";
      } else {
        house = "Slytherin 🐍";
      }

    result.textContent = `${name} you are assigned to ${house}`
}





