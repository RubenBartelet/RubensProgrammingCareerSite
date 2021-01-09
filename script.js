function ScrollToTop() {
    $("#main").animate({//gebruikt jquery om naar boven te scrollen in de div: main
        scrollTop: 0
    }, 2000);
}

function ScrollToGame(yCord) {
    $("#main").animate({//gebruikt jquery om naar de game te scrollen in de div: main
        scrollTop: yCord 
    }, 2000);
}

var slideIndex = 1;
showSlides(slideIndex);

// volgende en vorige 
function plusSlides(n) {
    showSlides(slideIndex += n);
    //zorgt dat alles verdwijnt dan
    SetHidden();
}

// heeft de slideshow 
function CurrentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;//zorgt dat i een variable in deze function is
    var slides = document.getElementsByClassName("Slide");//maakt alle slides een variable
    var dots = document.getElementsByClassName("dot");//maakt de drie punten een variable

    if (n > slides.length)//als de index(n) van de slideshow groter is dan de lengte dan gaat hij weer naar 1
    {
        slideIndex = 1//dan is hij 1 dus gaat weer terug naar het begin
    }
    if (n < 1)//zelfde alleen dan omgekeerd
    {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {//looped het 
        slides[i].style.display = "none";//zorgt ervoor dat de display van de slideshow die nu te zien is gedisplayed wordt
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");//zorgt dat de dots de zien worden
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//zet default als hidden
SetHidden();

function showSlideShow(){
    document.getElementById("SlideShow" + slideIndex).style.display = "block"; //zorgt ervoor dat de div met de goede game gedisplayed wordt
    document.getElementById("DefaultText").style.display = "none"; //zorgt dat de default text weggaat wnr de game en de daar bijhoorde text moet komen

    if (slideIndex == 7) {//zorgt ervoor dat er naar een andere cord geschrolled wordt bij JrJones en OrangeSquare werkt niet alleen op 100% door Math.max(document.documentElement.clientHeight, window.innerHeight || 0) dit is al het ware de vh voor javascript
        ScrollToGame(2.61 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    } else if (slideIndex == 8) {
        ScrollToGame(2.35 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    } else {
        ScrollToGame(2.45 * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
    }
    
}

function SetHidden() {
    document.getElementById("SlideShow1").style.display = "none";
    document.getElementById("SlideShow2").style.display = "none";
    document.getElementById("SlideShow3").style.display = "none";
    document.getElementById("SlideShow4").style.display = "none";
    document.getElementById("SlideShow5").style.display = "none";
    document.getElementById("SlideShow6").style.display = "none";
    document.getElementById("SlideShow7").style.display = "none";
    document.getElementById("SlideShow8").style.display = "none"; 
    document.getElementById("DefaultText").style.display = "block"; //de default text
}