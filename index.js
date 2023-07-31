let homeCount = 0
let guestCount = 0

document.getElementById("homePoints").textContent = homeCount
document.getElementById("guestPoints").textContent = guestCount

function home1(){
    homeCount += 1
    document.getElementById("homePoints").textContent = homeCount    
}

function home2(){
    homeCount += 2
    document.getElementById("homePoints").textContent = homeCount    
}

function home3(){
    homeCount += 3
    document.getElementById("homePoints").textContent = homeCount    
}

function guest1(){
    guestCount += 1
    document.getElementById("guestPoints").textContent = guestCount    
}

function guest2(){
    guestCount += 2
    document.getElementById("guestPoints").textContent = guestCount    
}

function guest3(){
    guestCount += 3
    document.getElementById("guestPoints").textContent = guestCount    
}

function newGame(){
    document.getElementById("results").textContent += homeCount + "/" + guestCount + "  "
    
    guestCount = 0
    homeCount = 0
    
    document.getElementById("guestPoints").textContent = guestCount
    document.getElementById("homePoints").textContent = homeCount
}