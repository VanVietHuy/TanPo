function cLick() {
  let inPut = document.getElementById("number");
  let number = parseInt(inPut.value);

  if (number < 10 || number > 20 || isNaN(number)) {
    document.getElementById("error").innerHTML = "ERROR";
    document.getElementById("error").style.color = "red";
  } else {
  let count = 0;
  let imgContainer = document.getElementById("imgContainer");
  imgContainer.innerHTML = "";
  
  
  showFlower = setInterval(function () {
    if (count >= number) {
      clearInterval(showFlower);
      return
    }
    let image = document.createElement("img");
    image.src = "../images/img.jpg";
    image.className = "img";
    imgContainer.appendChild(image);
    count++;
  }, 1000);
}
}