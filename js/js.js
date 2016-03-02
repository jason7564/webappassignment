"use strict";
document.addEventListener("DOMContentLoaded", function(){
    
    let homeLink = document.getElementById("navHome");
    let castLink = document.getElementById("navCast");
    let reviewLink = document.getElementById("navReview");
    let castPage = document.getElementById("cast");
    let homePage = document.getElementById("home");
    let reviewPage = document.getElementById("review");
    
    castLink.addEventListener("touchend", function(){
    
        homePage.className = "inactive-page";
        reviewPage.className = "inactive-page";
        castPage.className = "active-page";
        
        document.title = "Movie Cast";
    });
    
    homeLink.addEventListener("touchend", function(){
    
        castPage.className = "inactive-page";
        reviewPage.className = "inactive-page";
        homePage.className = "active-page";
        
        document.title = "Movie Home";
    });
    
    reviewLink.addEventListener("touchend", function(){
    
        castPage.className = "inactive-page";
        homePage.className = "inactive-page";
        reviewPage.className = "active-page";
        
        document.title = "Movie Reviews";
    });
});