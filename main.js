const jellyBtn = document.getElementById ('jelly');
const bostonBtn = document.getElementById ('boston');
const oldfBtn = document.getElementById ('oldf');
const vanillaBtn = document.getElementById ('vanilla');
const strawberryBtn = document.getElementById ('strawberry');
const blueberryBtn = document.getElementById ('blueberry');
const barvarianBtn = document.getElementById ('barvarian');
const cruellerBtn = document.getElementById ('crueller');
const coconutBtn = document.getElementById ('coconut');
const glazedBtn = document.getElementById ('glazed');
const chocolateBtn = document.getElementById ('chocolate');
const powderedBtn = document.getElementById ('powdered');


const modal = document.getElementById('modal');

const zImage = document.querySelector ('.donut-img');
const zTitle = document.querySelector ('.donut-name');
const xBtn = document.querySelector ('.close');
const showDate = document.getElementById ('date');
const zDescription = document.getElementById ('donut-text');
const allDonuts = document.querySelectorAll ('.donuts__img');
const audio = document.getElementById ('sound');
audio.volume = ".6";

//input
const submit = document.querySelector ('.js-submit');

submit.addEventListener ('click', function () {
    const userBday = new Date(document.getElementById ('js-date').value);
    const bdayMonth = userBday.getUTCMonth() + 1;
    const bdayDay = userBday.getUTCDate();
    modal.style.display = "block";

    // Zodiac Algorithm
    if ((bdayMonth == 12 && bdayDay>= 22) || (bdayMonth == 1 && bdayDay <= 19)) {
    donut = "jelly";
    zTitle.innerHTML=" Jelly Donut";
    zImage.src= "images/jelly.png";
    showDate.innerHTML="December 22 – January 19";
    zDescription.innerHTML="You are full of energy and surprises like the jelly donut. It may not seem like much on the outside, but there is so much more to you on the inside, like the strawberry jelly in a jelly donut. It’s what’s on the inside that counts!";
    audio.src='sounds/jelly.wav';
    audio.play();
    } else if ((bdayMonth == 11 && bdayDay >= 22) || (bdayMonth == 12 && bdayDay <= 21)) {
    donut = "boston";
    zTitle.innerHTML="Boston Creme Donut";
    zImage.src= "images/boston.png";
    showDate.innerHTML="November 22 – December 21";
    zDescription.innerHTML="You have magnetic energy that attracts people towards you, so you stand out! The Boston crème donut is everyone’s favorite. It is sugary on the inside and outside like the sweet person you are.";
    audio.src='sounds/boston.wav';
    audio.play();
    } else if ((bdayMonth == 10 && bdayDay >= 24) || (bdayMonth == 11 && bdayDay <= 21)) {
    donut = "oldf";
    zTitle.innerHTML="Old Fashioned Donut";
    zImage.src= "images/old_fashioned.png";
    showDate.innerHTML="October 24 – November 21";
    zDescription.innerHTML="Some people may mistake you to be old-fashioned when you just like it plain and simple like an old-fashioned donut.  You don’t need much to be as great as you are.";
    audio.src='sounds/oldf.wav';
    audio.play();
    } else if ((bdayMonth == 9 && bdayDay >= 23) || (bdayMonth == 10 && bdayDay <= 23)) {
    donut = "vanilla";
    zTitle.innerHTML="Vanilla Donut";
    zImage.src= "images/vanilla.png";
    showDate.innerHTML="September 23 – October 23";
    zDescription.innerHTML="Sentimental and imaginative you may often find yourself daydreaming. The vanilla frosted donut is made up of dreams, passion, and a whole lot of sprinkles. ";
    audio.src='sounds/vanilla.wav';
    audio.play();
    } else if ((bdayMonth == 8 && bdayDay >= 23) || (bdayMonth == 9 && bdayDay <= 22)) {
    donut = "strawberry";
    zTitle.innerHTML="Strawberry Donut";
    zImage.src= "images/strawberry.png";
    showDate.innerHTML="August 23 – September 22";
    zDescription.innerHTML="Fun and bright you deserve a donut that matches your personality. A strawberry donut stands out from other donuts just like you and everyone wants to be you!";
    audio.src='sounds/strawberry.wav';
    audio.play();
    } else if ((bdayMonth == 7 && bdayDay >= 23) || (bdayMonth == 8 && bdayDay <= 22)) {
    donut = "blueberry";
    zTitle.innerHTML="Blueberry Donut";
    zImage.src= "images/blueberry.png";
    showDate.innerHTML="July 23 – August 22";
    zDescription.innerHTML="You are lovely and kind like a blueberry donut with sweet blueberries that can make your day, just like how your smile makes everyone else’s day. Keep sharing your positivity!";
    audio.src='sounds/blueberry.wav';
    audio.play();
    } else if ((bdayMonth == 6 && bdayDay >= 22) || (bdayMonth == 7 && bdayDay <= 22)) {
    donut = "barvarian";
    zTitle.innerHTML="Barvarian Creme Donut";
    zImage.src= "images/barvarian.png";
    showDate.innerHTML="June 22 – July 22";
    zDescription.innerHTML="You are a go-with-the-flow type of person just looking to have fun. Like a barvarian crème donut, it might get messy to eat but it’s all a part of the experience. ";
    audio.src='sounds/barvarian.wav';
    audio.play();
    } else if ((bdayMonth == 5 && bdayDay >= 21) || (bdayMonth == 6 && bdayDay <= 21)) {
    donut = "crueller";
    zTitle.innerHTML="French Crueller Donut";
    zImage.src= "images/crueller.png";
    showDate.innerHTML="May 21 – June 21";
    zDescription.innerHTML="Your first impression may be intimidating but you are just shy and cautious. The French crueller donut looks fancy but it is still just a donut with a light and airy taste that matches your bouncy personality. ";
    audio.src='sounds/crueller.wav';
    audio.play();
    } else if ((bdayMonth == 4 && bdayDay >= 20) || (bdayMonth == 5 && bdayDay <= 20)) {
    donut = "coconut";
    zTitle.innerHTML="Coconut Donut";
    zImage.src= "images/coconut.png";
    showDate.innerHTML="April 20 – May 20";
    zDescription.innerHTML="Smart and curious you are quick to learn and pick up new skills. The coconut shavings on the donut is like the knowledge you gain, small details but in a big quantity.  ";
    audio.src='sounds/coconut.wav';
    audio.play();
    } else if ((bdayMonth == 3 && bdayDay >= 21) || (bdayMonth == 4 && bdayDay <= 19)) {
    donut = "glazed";
    zTitle.innerHTML="Glazed Donut";
    zImage.src= "images/glazed.png";
    showDate.innerHTML="March 21 – April 19";
    zDescription.innerHTML="Cool and confident, you shine like the glaze on a glazed donut, and you never miss. You may not haven’t realized your full potential, but you will soon enough. ";
    audio.src='sounds/glazed.wav';
    audio.play();
    } else if ((bdayMonth == 2 && bdayDay >= 19) || (bdayMonth == 3 && bdayDay <= 20)) {
    donut = "chocolate";
    zTitle.innerHTML="Chocolate Donut";
    zImage.src= "images/chocolate.png";
    showDate.innerHTML="February 19 – March 20";
    zDescription.innerHTML="You are very artistic and have a great sense of style. The chocolate frosted donut is as chic as you are topped with rainbow sprinkles and a rich taste that always makes people come back for more. ";
    audio.src='sounds/chocolate.wav';
    audio.play();
    } else if ((bdayMonth == 1 && bdayDay >= 20) || (bdayMonth == 2 && bdayDay <= 18)) {
    donut = "powdered";
    zTitle.innerHTML="Powdered Donut";
    zImage.src= "images/powdered.png";
    showDate.innerHTML="January 20 – February 18";
    zDescription.innerHTML="At times you could be a little much like a powdered donut that gets everywhere but that is what makes you unique and special. You are as soft and squishy as the donut. ";
    audio.src='sounds/powdered.wav';
    audio.play();
    }

});


//close button
xBtn.addEventListener('click', function() {
    modal.style.display="none";
    console.log ("im not crazy");
});

//click donut 

jellyBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML= "Jelly Donut";
    zImage.src= "images/jelly.png";
    showDate.innerHTML="December 22 – January 19";
    zDescription.innerHTML="You are full of energy and surprises like the jelly donut. It may not seem like much on the outside, but there is so much more to you on the inside, like the strawberry jelly in a jelly donut. It’s what’s on the inside that counts!";
    audio.src='sounds/jelly.wav';
    audio.play();
});

bostonBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Boston Creme Donut";
    zImage.src= "images/boston.png";
    showDate.innerHTML="November 22 – December 21";
    zDescription.innerHTML="You have magnetic energy that attracts people towards you, so you stand out! The Boston crème donut is everyone’s favorite. It is sugary on the inside and outside like the sweet person you are.";
    audio.src='sounds/boston.wav';
    audio.play();
    
});
oldfBtn.addEventListener ('click', function () {
    modal.style.display = "block";
     zTitle.innerHTML="Old Fashioned Donut";
    zImage.src= "images/old_fashioned.png";
    showDate.innerHTML="October 24 – November 21";
    zDescription.innerHTML="Some people may mistake you to be old-fashioned when you just like it plain and simple like an old-fashioned donut.  You don’t need much to be as great as you are.";
    audio.src='sounds/oldf.wav';
    audio.play();
    
});
vanillaBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Vanilla Donut";
    zImage.src= "images/vanilla.png";
    showDate.innerHTML="September 23 – October 23";
    zDescription.innerHTML="Sentimental and imaginative you may often find yourself daydreaming. The vanilla frosted donut is made up of dreams, passion, and a whole lot of sprinkles. ";
    audio.src='sounds/vanilla.wav';
    audio.play();
});
strawberryBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Strawberry Donut";
    zImage.src= "images/strawberry.png";
    showDate.innerHTML="August 23 – September 22";
    zDescription.innerHTML="Fun and bright you deserve a donut that matches your personality. A strawberry donut stands out from other donuts just like you and everyone wants to be you!";
    audio.src='sounds/strawberry.wav';
    audio.play();
    
});
blueberryBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Blueberry Donut";
    zImage.src= "images/blueberry.png";
    showDate.innerHTML="July 23 – August 22";
    zDescription.innerHTML="You are lovely and kind like a blueberry donut with sweet blueberries that can make your day, just like how your smile makes everyone else’s day. Keep sharing your positivity!";
    audio.src='sounds/blueberry.wav';
    audio.play();
    
});
barvarianBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Barvarian Creme Donut";
    zImage.src= "images/barvarian.png";
    showDate.innerHTML="June 22 – July 22";
    zDescription.innerHTML="You are a go-with-the-flow type of person just looking to have fun. Like a barvarian crème donut, it might get messy to eat but it’s all a part of the experience. ";
    audio.src='sounds/barvarian.wav';
    audio.play();
});
cruellerBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="French Crueller Donut";
    zImage.src= "images/crueller.png";
    showDate.innerHTML="May 21 – June 21";
    zDescription.innerHTML="Your first impression may be intimidating but you are just shy and cautious. The French crueller donut looks fancy but it is still just a donut with a light and airy taste that matches your bouncy personality. ";
    audio.src='sounds/crueller.wav';
    audio.play();
    
});
coconutBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Coconut Donut";
    zImage.src= "images/coconut.png";
    showDate.innerHTML="April 20 – May 20";
    zDescription.innerHTML="Smart and curious you are quick to learn and pick up new skills. The coconut shavings on the donut is like the knowledge you gain, small details but in a big quantity.  ";
    audio.src='sounds/coconut.wav';
    audio.play();
    
});
glazedBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Glazed Donut";
    zImage.src= "images/glazed.png";
    showDate.innerHTML="March 21 – April 19";
    zDescription.innerHTML="Cool and confident, you shine like the glaze on a glazed donut, and you never miss. You may not haven’t realized your full potential, but you will soon enough. ";
    audio.src='sounds/glazed.wav';
    audio.play();
    
});
chocolateBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Chocolate Donut";
    zImage.src= "images/chocolate.png";
    showDate.innerHTML="February 19 – March 20";
    zDescription.innerHTML="You are very artistic and have a great sense of style. The chocolate frosted donut is as chic as you are topped with rainbow sprinkles and a rich taste that always makes people come back for more. ";
    audio.src='sounds/chocolate.wav';
    audio.play();
    
});
powderedBtn.addEventListener ('click', function () {
    modal.style.display = "block";
    zTitle.innerHTML="Powdered Donut";
    zImage.src= "images/powdered.png";
    showDate.innerHTML="January 20 – February 18";
    zDescription.innerHTML="At times you could be a little much like a powdered donut that gets everywhere but that is what makes you unique and special. You are as soft and squishy as the donut. ";
    audio.src='sounds/powdered.wav';
    audio.play();
    
});
