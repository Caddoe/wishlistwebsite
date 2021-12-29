//functions to create the pin
function clickedOnceCade()
{
    if (localStorage.cadesCount == 0 || localStorage.cadesCount == null)
    {
        window.open("cadePin.html")
        //give each person their own if statement
        localStorage.checkStoreCade = 1
        event.preventDefault();
    }
    //if the pin has already been created goes to pin confirmation
    if(localStorage.cadesCount == 1)
    {
    return true;
    }
};

function clickedOnceAmy()
{
    if (localStorage.amysCount == 0 || localStorage.amysCount == null)
    {
        
        window.open("amyPin.html")
        localStorage.checkStoreAmy = 1
        event.preventDefault();
    }
    if(localStorage.amysCount == 1)
    {
    return true;
    }
};

function clickedOncePat()
{
    if (localStorage.patsCount == 0 || localStorage.patsCount == null)
    {
        
        window.open("patPin.html")
        localStorage.checkStorePat = 1
        event.preventDefault();
    }
    if(localStorage.patsCount == 1)
    {
    return true;
    }
};

function clickedOnceJackson()
{
    if (localStorage.jacksonsCount == 0 || localStorage.jacksonsCount == null)
    {
        
        window.open("jacksonPin.html")
        localStorage.checkStoreJackson = 1
        event.preventDefault();
    }
    if(localStorage.jacksonsCount == 1)
    {
    return true;
    }
};
function clickedOnceMax()
{
    if (localStorage.maxsCount == 0 || localStorage.maxsCount == null)
    {
        
        window.open("maxPin.html")
        localStorage.checkStoreMax = 1
        event.preventDefault();
    }
    if(localStorage.maxsCount == 1)
    {
    return true;
    }
};
function clickedOnceRachel()
{
    if (localStorage.rachelsCount == 0 || localStorage.rachelsCount == null)
    {
        
        window.open("rachelPin.html")
        localStorage.checkStoreRachel = 1
        event.preventDefault();
    }
    if(localStorage.rachelsCount == 1)
    {
    return true;
    }
};
function clickedOnceShosh()
{
    if (localStorage.shoshsCount == 0 || localStorage.shoshsCount == null)
    {
        
        window.open("shoshPin.html")
        localStorage.checkStoreShosh = 1
        event.preventDefault();
    }
    if(localStorage.shoshsCount == 1)
    {
    return true;
    }
};


//Storing the pin in localstorage
function storePin()
{
    //if there is no pin and someone has clicked the button
    if(localStorage.cadesPin == null && localStorage.checkStoreCade == 1)
    {
    //setting the pin in local storage
    localStorage.cadesPin = document.getElementById("cadesPin").value
    //The count is to make sure no one else can set the pin
    localStorage.cadesCount=1;
    }
    
    if(localStorage.amysPin == null && localStorage.checkStoreAmy == 1)
    {
        localStorage.amysCount=1;
        localStorage.amysPin = document.getElementById("amysPin").value
    }
    if(localStorage.patsPin == null && localStorage.checkStorePat == 1)
    {
        localStorage.patsCount=1;
        localStorage.patsPin = document.getElementById("patsPin").value
    }
    if(localStorage.jacksonsPin == null && localStorage.checkStoreJackson == 1)
    {
        localStorage.jacksonsCount=1;
        localStorage.jacksonsPin = document.getElementById("jacksonsPin").value
    }
    if(localStorage.maxsPin == null && localStorage.checkStoreMax == 1)
    {
        localStorage.maxsCount=1;
        localStorage.maxsPin = document.getElementById("maxsPin").value
    }
    if(localStorage.rachelsPin == null && localStorage.checkStoreRachel == 1)
    {
        localStorage.rachelsCount=1;
        localStorage.rachelsPin = document.getElementById("rachelsPin").value
    }
    if(localStorage.shoshsPin == null && localStorage.checkStoreShosh == 1)
    {
        localStorage.shoshsCount=1;
        localStorage.shoshsPin = document.getElementById("shoshsPin").value
    }
    
    
};

//function to check the pin
function checkPinCade()
{
//compares the local storage pin to the entered pin
    if (localStorage.cadesPin != document.getElementById("cadesPinCheck").value)
    {
        alert("Wrong Pin Entered")
        //prevents the html action from going through
        event.preventDefault();
    } 

};
function checkPinAmy()
{

    if (localStorage.amysPin != document.getElementById("amysPinCheck").value)
    {
        alert("Wrong Pin Entered")
        event.preventDefault();
    }
};
function checkPinPat()
{

    if (localStorage.patsPin != document.getElementById("patsPinCheck").value)
    {
        alert("Wrong Pin Entered")
        event.preventDefault();
    }
};
function checkPinJackson()
{

    if (localStorage.jacksonsPin != document.getElementById("jacksonsPinCheck").value)
    {
        alert("Wrong Pin Entered")
        event.preventDefault();
    }
};
function checkPinMax()
{
    if (localStorage.maxsPin != document.getElementById("maxsPinCheck").value)
    {
        alert("Wrong Pin Entered")
        event.preventDefault();
    }
};
function checkPinRachel()
{
    if (localStorage.rachelsPin != document.getElementById("rachelsPinCheck").value)
    {
        alert("Wrong Pin Entered")
        event.preventDefault();
    }
};
function checkPinShosh()
{
    if (localStorage.shoshsPin != document.getElementById("shoshsPinCheck").value)
    {
        alert("Wrong Pin Entered")
        event.preventDefault();
    }
};