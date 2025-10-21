window.onscroll = function ()
{
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
        height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        scrolled = (winScroll / height) * 100;
    

        if(winScroll > 100)
        {
            document.getElementById("header-content").classList.add("header-content-thin");
            document.getElementById("hamburger-icon").classList.add("hamburger-icon-thin");
        }
        else if(winScroll < 100)
        {
            document.getElementById("header-content").classList.remove("header-content-thin");
            document.getElementById("hamburger-icon").classList.remove("hamburger-icon-thin");
        } 
       
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.remove("hamburger-page-links-show");
};


function toggleHamburgerMenu()
{

    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.toggle("hamburger-page-links-show");

}