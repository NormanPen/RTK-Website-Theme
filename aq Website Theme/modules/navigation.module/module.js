document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.getElementById("burger-btn");
    const mobileMenu = document.querySelector(".rtk-mobile-menu");
    const menuText = document.getElementById("menu-text"); // Das Menü-Text-Element
  
    // Variable, um den Text zu steuern
    let menuState = "Menü";  // Initialer Text
  
    // Überprüfen, ob der Button, das Menü und der Text existieren
    if (burgerButton && mobileMenu && menuText) {
      burgerButton.addEventListener("click", () => {
        console.log("Klick auf Burger-Button");
  
        // Toggle der benutzerdefinierten 'rtk-mobile-menu_hidden'-Klasse
        mobileMenu.classList.toggle("rtk-mobile-menu_hidden");
  
        // Toggle der 'open'-Klasse auf dem Burger-Button für die Animation
        burgerButton.classList.toggle("open");
  
        // Menü-Text anpassen
        if (mobileMenu.classList.contains("rtk-mobile-menu_hidden")) {
          menuText.textContent = menuState; // Menü Text auf "Menü" setzen
          menuState = "Schließen"; // Text auf "Schließen" ändern
        } else {
          menuText.textContent = menuState; // Menü Text auf "Schließen" setzen
          menuState = "Menü"; // Text auf "Menü" ändern
        }
      });
    }
  });
  