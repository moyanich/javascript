document.querySelector('#check').addEventListener('click', check);


function check() {
      const day = document.querySelector('#day').value;
      const schoolday = [ "Tuesday", "Thursday"]; // Using the JavaScript Array includes()
      const weekday = ["Monday", "Wednesday", "Friday"]; // Using the JavaScript Array includes()
      
      if(schoolday.includes(day)) {
            document.getElementById("placetosee").innerHTML = "You have class!";
      } else if(weekday.includes(day)) {
            document.getElementById("placetosee").innerHTML = "Boring Day!";
      }  else {
            document.getElementById("placetosee").innerHTML = "Its the Weekend";
      }
}


document.querySelector('#speak').addEventListener('click', speak);

function speak() {
      const fisrtName = document.querySelector('#firstName').value;
      const lastName = document.querySelector('#lastName').value;

      document.getElementById("yell").innerHTML = `${fisrtName} ${lastName}`;
}

