//Nav
const display = document.getElementsByClassName("display")
const navigation = document.getElementsByClassName("navigation")

const navLogo = document.getElementsByClassName("navLogo")
const navLogoTexts = document.getElementsByClassName("navLogoText")

const navLinks = document.getElementsByClassName("navLink")

const navButton = document.getElementsByClassName("navButton")

window.addEventListener("scroll", () => {
    if(window.scrollY > 0) {
        // Display
        display[0].classList.add("displayYes")
        display[0].classList.remove("displayNo")

        // Navigation Padding Changing
        navigation[0].classList.add("navigationChange")
        navigation[0].classList.remove("navigationDefault")

        // NavLogo Color Changing
        navLogo[0].classList.add("navLogoColorGray")
        navLogo[0].classList.remove("navLogoColorWhite")
        
         // NavLogoText Color Changing
         navLogoTexts[0].classList.add("navLogoTextColorBlack")
         navLogoTexts[0].classList.remove("navLogoTextColorWhite")

        // NavLink Color Changing
        for(let i = 0; i < navLinks.length ; i++){
            navLinks[i].classList.add("navLinkColorBlack")
            navLinks[i].classList.remove("navLinkColorWhite")
        }

        // NavButton Color Changing
        navButton[0].classList.add("navButtonBColorGray")
        navButton[0].classList.remove("navButtonBColorWhite")


    } else {
        // Display
        display[0].classList.add("displayNo")
        display[0].classList.remove("displayYes")

        // Navigation Padding Changing
        navigation[0].classList.add("navigationDefault")
        navigation[0].classList.remove("navigationChange")

        // NavLogo Color Changing
        navLogo[0].classList.add("navLogoColorWhite")
        navLogo[0].classList.remove("navLogoColorGray")

        // NavLogoText Color Changing
        navLogoTexts[0].classList.add("navLogoTextColorWhite")
        navLogoTexts[0].classList.remove("navLogoTextColorBlack")

        // NavLink Color Changing
        for(let i = 0; i < navLinks.length ; i++){
            navLinks[i].classList.add("navLinkColorWhite")
            navLinks[i].classList.remove("navLinkColorBlack")
        }

        // NavButton Color Changing
        navButton[0].classList.add("navButtonBColorWhite")
        navButton[0].classList.remove("navButtonBColorGray")

        

    }
})

