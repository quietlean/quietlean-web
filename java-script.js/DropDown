//Zeigt das Drop-Down Menu wenn an drauf klickt 
function DropDown() {
  document.getElementById("menu-dropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-button')) {
      var dropdowns = document.getElementsByClassName("back_home");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}


const Spotify = document.getElementById("button-Spotify");
const AppleMusic = document.getElementById("button-Apple-Music");

const Spotify_Playlist = document.getElementById("Spotify-Playlist");
const AppleMusic_Playlist = document.getElementById("AppleMusic-Playlist");

function visibilityCheck_Spotify() { 
  const style = window.getComputedStyle(Spotify_Playlist);
  return style.visibility !== "hidden"; //Wenn die Spotify Playlist nicht hidden ist wird eine 1 zurückgegeben
}

function showAppleMusic() {

  const ColorGreen = "rgb(30, 255, 0)"

  Spotify.style.boxShadow = "none";
  AppleMusic.style["boxShadow"] = "4px 4px 0px rgb(178, 222, 97)";

  if (visibilityCheck_Spotify()) {
    document.getElementById("Spotify-Playlist").classList.toggle("hide-Playlist"); // die Klasse "hide-Playlist" wird eingeschalter oder hinzugefügt deshalb toggle
    document.getElementById("AppleMusic-Playlist").classList.toggle("show-Playlist");

    console.log("Spotify is visible.")
  } else {
    console.log("Spotify is hidden.")
  }

}


function showSpotify() {

  const ColorBlack = "rgb(0, 0, 0)";
  const ColorDarkRed = "rgb(31, 6, 15)";
  const ColorWhite = "rgb(255, 255, 255)";
  const ColorRed = "rgb(255, 0, 98)"

  AppleMusic.style.boxShadow = "none";
  Spotify.style["boxShadow"] = "4px 4px 0px rgb(178, 222, 97)";

  // Man kann hier das glieche toggle wie in der anderen Funktion benutzen weil es ja wie ein Ein/Aus-Schalter ist
  

  if (visibilityCheck_Spotify()) {
    console.log("Spotify is visible.")
  } else {
    document.getElementById("Spotify-Playlist").classList.toggle("hide-Playlist");
    document.getElementById("AppleMusic-Playlist").classList.toggle("show-Playlist");
    console.log("Spotify is hidden.")
  }
  
}