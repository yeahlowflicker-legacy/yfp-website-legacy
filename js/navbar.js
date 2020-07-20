var html = '\
          <link rel="stylesheet" href="/css/navbar.css">\
          \
          <section class="logo">\
               <a href="/index.html"><img src="/res/YFV4_transparent.png"></a>\
               <a href="/index.html"><h1>Yeahlowflicker Production</h1></a>\
          </section>\
          \
          <section class="navbar-links">\
               <a href="/about.html">About Us</a>\
               <a href="/contact.html">Contact</a>\
               <a href="/scripts.html">Scripts</a>\
               <a href="/projects.html">Projects</a>\
               <a href="/index.html">Home</a>\
          </section>';


document.getElementById("navbar").innerHTML = html;


var sideNavOpened = false;


function openNav() {
     if (sideNavOpened)
          document.getElementById("sideNav").style.width = "0";
     else 
          document.getElementById("sideNav").style.width = "25%";

     sideNavOpened = !sideNavOpened;
}

