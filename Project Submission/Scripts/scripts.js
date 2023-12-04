console.log("scripts.js is being accessed!");
//function used to process booking information submitted on contact page
function formChecker(event) {
    console.log("formChecker function is executed!");
    event.preventDefault();
        //assign values to variables
        var form = document.getElementById("submissionForm")
        var name=document.getElementById("formName").value;
        var email=document.getElementById("formEmail").value;
        var date = document.getElementById("dateOfBooking").value;
        var time = document.getElementById("reservationTime").value;
        var bookingSize = document.getElementById("formBookingSize").value;

         //set up message in case fields are left empty
         if (!name || !email || !date ||!time || !bookingSize){
         console.log("forms are empty");
                alert("Make sure to fill out all required fields!");
                return;
            }

        //display message after submission
        document.getElementById("submissionForm").style.display = "none";
        var afterSubmissionMessage = document.createElement("h3");
        afterSubmissionMessage.innerHTML = "Thanks for submitting a booking request "+ name + ". " +
        "<br>We will be in touch via " + email + " shortly in order to confirm your booking on "+date+" at "+time+".";
        form.parentNode.appendChild(afterSubmissionMessage);
}
//function used to produce result for virtual dice roll in game on discount page
function diceChecker(event) {
        var formsCorrect = true
        console.log("diceChecker executed");
        event.preventDefault();
        var form = document.getElementById("diceForm")

        var name=document.getElementById("formName").value;
        var email=document.getElementById("formEmail").value;

        //set up the game + 'roll the die'
        var dicValue = Math.floor(Math.random() * 6)+1;

        //set up message in case fields are left empty
        if (!name || !email ){
            console.log("forms are empty");
            alert("Make sure to fill out all required fields!");
            formsCorrect = false
            return;
        }

        //display message after submission
        if (dicValue == 1 || dicValue == 2){
            document.getElementById("diceForm").style.display = "none";
            var afterSubmissionMessage = document.createElement("h3");
                afterSubmissionMessage.innerHTML = name+ ", you've rolled a "+ dicValue + ". You've won!" +
                "<br>We'll be in touch via " + email + " in order to send you your discount.";
                form.parentNode.appendChild(afterSubmissionMessage);
        }

        else if (dicValue == 3 || dicValue == 4 || dicValue == 5 || dicValue == 6){
            document.getElementById("diceForm").style.display = "none";
            var afterSubmissionMessage = document.createElement("h3");
                afterSubmissionMessage.innerHTML = name + ", you've rolled a "+ dicValue + "! " +
                "<br><br>Unfortunately you haven't won. We've still sent you a voucher for a free banana to " + email + ". Redeem at any time before 2025!";
                form.parentNode.appendChild(afterSubmissionMessage);
        }
}
//show food options on menu page
function openEatContents(menu){
    document.getElementById('menuEat').style.display = "block";
}
//show drinks options on menu page
function openDrinkContents(menu){
    document.getElementById('menuDrink').style.display = "block";
}
//display specials on home page
function displaySpecials(){
    document.getElementById('todaysSpecialDish').style.display = "block";
}
//display text when images are clicked in gallery on about page
function showText(x) {
    var desc = document.getElementById("desc");
    var text = "";
    if (x == 1) {
        text += "Image 1: This is the sandwich deli in the cafe. Here you can select from a wide range of sandwiches and rolls as well as request various fillings. We provide vegetarian, vegan options as well as all of the household favourite. You can also order your breakfast options here or from your table with one of staff!";
    }
    if (x == 2) {
        text += "Image 2: This is our pastry and coffee station. We have large range of pastries including cookies, brownies and croissants - something for everyone! You can also try our authentic and ethically sourced coffee from oneur fantastic baristas";
    }
    if (x == 3) {
        text += "Image 3: We have incorporated a rustic and woodland vibe to breath fresh air into The Chunky Monkey! All of the wood used to create the furniture in our cafe and been sustainbly and ethically sourced - and also super comfortable! We like to ensure that you and your friends have enough space and seats to enjoy your time here.";
    }
    if (x == 4){
        text += "Image 4: This is one of our coffee machines being handled by a barista. We make sure to only use the best ingredients in our coffee so that you can enjoy great coffee each and every cup!"
    }
    desc.innerHTML = text;
}
