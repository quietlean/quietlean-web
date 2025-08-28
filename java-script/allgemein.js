
const containers = document.querySelectorAll(".Main_level_1");


window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;
  const subtraktion = scrollPercent - 0.5; //wenn Scroll 0,5 erreicht wird ist es Null. Dannach wird es größer.

  if (scrollPercent <= 0.5) {
        containers.forEach((container) => {
        container.style.backgroundPosition = `center ${scrollPercent * 100}%`;
        });

    } else {
        //console.log("-> switch 0.5 scroll");
        //console.log(subtraktion);
        containers.forEach((container) => {
        container.style.backgroundPosition = `center ${scrollPercent * 100 * (1 / ( (subtraktion * 0.5) + 1) ) }%`; //Diese Wurst macht den Wert der für center rauskommt in der zweiten seitenhälfte kleiner
        });
    }
});


