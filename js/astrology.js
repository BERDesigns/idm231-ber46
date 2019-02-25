var userMonth = 0;
var userDay = 0;
var userSign = "nan";
var counter = 0;
var rotate = 0;

function shiftArrayToRight(arr, places) {
    for (var i = 0; i < places; i++) {
        arr.unshift(arr.pop());
    }
}

function getSign(month, day) {
  var sign = "nan";
  if (((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31) ||
  ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) || (month == 2 && day > 29)) {
    sign="oph";
  }
  else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
    sign = "cap";
  }
  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
    sign = "sag";
  }
  else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
    sign = "sco";
  }
  else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
    sign = "lib";
  }
  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
    sign = "vir";
  }
  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
    sign = "leo";
  }
  else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
    sign = "can";
  }
  else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
    sign = "gem";
  }
  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    sign = "tau";
  }
  else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    sign = "ari";
  }
  else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
    sign = "pis";
  }
  else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
    sign = "aqu";
  }
  else {
    sign = "oph";
  }
  return sign;
}

function sign(starsign, name, sound, image, description, isSelected, dates) {
this.starsign = starsign;
  this.name = name;
  this.sound = `sounds/${sound}.mp3`;
  //this.image = "icons/nan-test.png";
  this.image = `icons/${image}.png`;
  this.description = description;
  this.isSelected = false;
  this.dates = dates;
  this.playSound = function() {
    console.log("playSound running correctly for "+name);
  };
}

function makeSignBtn(sign) {
  const btn = document.createElement("a");
  btn.style.gridArea = `btn-${counter}`;
  btn.id = `btn-${counter}`;
  btn.classList.add("sign-btn");

  const img = document.createElement("img");
  img.src = sign.image;

  if (sign.isSelected == true) {
    img.classList.add("is-selected");
  }
  else {
    img.classList.add("sign");
  }
  img.id = `btn-${sign.starsign}`;

  btn.append(img);

  return btn;
}

const cap = new sign(
  "Capricorn",
  "H.H. Holmes",
  "temp",
  "holmes",
  "As a Capricorn, you are lorem ipsum...",
  false,
  "Dec 22 - Jan 19"
);
const sag = new sign(
  "Sagittarius",
  "John Gotti",
  "temp",
  "gotti",
  "As a Sagittarius, you are lorem ipsum...",
  false,
  "Nov 22 - Dec 21"
);
const sco = new sign(
  "Scorpio",
  "Dragan Mikic",
  "temp",
  "mikic",
  "Leader of The Pink Panthers.",
  false,
  "Oct 23 - Nov 21"
);
const lib = new sign(
  "Libra",
  "Jim Jones",
  "temp",
  "jones",
  "As a Libra, you are lorem ipsum...",
  false,
  "Sep 23 - Oct 22"
);
const vir = new sign(
  "Virgo",
  "Belle Gunness",
  "temp",
  "gunness",
  "As a Virgo, you are lorem ipsum...",
  false,
  "Aug 23 - Sep 22"
);
const leo = new sign(
  "Leo",
  "Peter Salerno",
  "temp",
  "salerno",
  "Leader of The Dinner Set Gang.",
  false,
  "Jul 23 - Aug 22"
);
const can = new sign(
  "Cancer",
  "Billy the Kid",
  "temp",
  "kid",
  "As a Cancer, you are lorem ipsum...",
  false,
  "Jun 21 - Jul 22"
);
const gem = new sign(
  "Gemini",
  "Bonnie & Clyde",
  "temp",
  "bac",
  "As a Gemini, you are lorem ipsum...",
  false,
  "May 21 - Jun 20"
);
const tau = new sign(
  "Taurus",
  "Alice Diamond",
  "temp",
  "diamond",
  "Leader of the Fourty Elephants.",
  false,
  "Apr 20 - May 20"
);
const ari = new sign(
  "Aries",
  "Al Capone",
  "temp",
  "capone",
  "As a Aries, you are lorem ipsum...",
  false,
  "Mar 21 - Apr 19"
);
const pis = new sign(
  "Pisces",
  "Charles Manson",
  "temp",
  "manson",
  "As a Pisces, you are lorem ipsum...",
  false,
  "Feb 19 - Mar 20"
);
const aqu = new sign(
  "Aquarius",
  "Jack the Ripper",
  "temp",
  "jack",
  "As a Aquarius, you are lorem ipsum...",
  false,
  "Jan 20 - Feb 18"
);
const oph = new sign(
  "Ophiuchus",
  "The Zodiac Killer",
  "temp",
  "zodiac",
  "As a Ophiuchus, you are lorem ipsum...",
  false,
  "NaN - NaN"
);
const nan = new sign(
  "",
  "",
  "",
  "",
  "",
  false,
  ""
);
var signs = [aqu, pis, ari, tau, gem, can, leo, vir, lib, sco, sag, cap];

function submit(dob) {
  signs = [aqu, pis, ari, tau, gem, can, leo, vir, lib, sco, sag, cap];

  $(".starting-content").addClass("fade-out");
  $(".on-click-content").addClass("fade-in-no-delay");
  $(".title").addClass("move-up");

  if(dob == 1) {
    userMonth = parseInt($("#month-list").val());
    userDay = parseInt($("#day-select").val());
    userSign = getSign(userMonth, userDay);

    if (eval(userSign) == oph) {
      signs[0] = oph;
    }

    userSign = eval(userSign);

    shiftArrayToRight(signs, 12-signs.indexOf(userSign));

    signs[0].isSelected = true;
  }
  else {
    userMonth = 1;
    userDay = 1;
    userSign = nan;
  }

  var ch = $('#grd-zodiac-wheel').height();
  $('#grd-zodiac-wheel').css({'width': ch + 'px'});

  signs.forEach(function(sign) {
    const signBtn = makeSignBtn(sign);
    signBtn.addEventListener("click", function() {
        document.getElementById("grd-zodiac-wheel").classList.add("push-left");
        sign.isSelected = true;
        document.getElementById(`btn-${sign.starsign}`).classList.add("is-selected");
        document.getElementById(`btn-${sign.starsign}`).classList.remove("sign");
        document.getElementById("sign-name").innerHTML = sign.starsign.toUpperCase();
        document.getElementById("sign-dates").innerHTML = sign.dates.toUpperCase();
        document.getElementsByClassName("criminal-name")[0].innerHTML = sign.name.toUpperCase();
        signs.forEach(function(tempSign) {
          if (tempSign != sign) {
            tempSign.isSelected = false;
            document.getElementById(`btn-${tempSign.starsign}`).classList.add("sign");
            document.getElementById(`btn-${tempSign.starsign}`).classList.remove("is-selected");
          }
        });
        var lastSel = signs[0];
        shiftArrayToRight(signs, 12-signs.indexOf(sign));
        if (signs.indexOf(lastSel) <= 6) {
          rotate = rotate + (30 * signs.indexOf(lastSel));
        }
        else {
          rotate = rotate + (-30 * (12 - signs.indexOf(lastSel)));
        }
        document.getElementsByClassName("sign-title")[0].style.transform = `rotate(${-rotate}deg)`;
        document.getElementById("grd-zodiac-wheel").style.transform = `translate(-110%, -44%) rotate(${rotate}deg)`;
        signs.forEach(function(curSign) {
          document.getElementById(`btn-${curSign.starsign}`).style.transform = `rotate(${-rotate}deg)`;
          document.getElementById(`btn-${curSign.starsign}`).style.transition = "0.75s ease";
        });
      }, false);
    counter+=1;
    document.getElementById("grd-zodiac-wheel").append(signBtn);
  });

  if (dob == 1) {
    document.getElementById("grd-zodiac-wheel").classList.add("push-left");
    document.getElementById(`btn-${signs[0].starsign}`).classList.add("is-selected");
    document.getElementById(`btn-${signs[0].starsign}`).classList.remove("sign");
    document.getElementById("sign-name").innerHTML = signs[0].starsign.toUpperCase();
    document.getElementById("sign-dates").innerHTML = signs[0].dates.toUpperCase();
    document.getElementsByClassName("criminal-name")[0].innerHTML = signs[0].name.toUpperCase();
  }
}

document.getElementById("submit-btn").addEventListener("click", function() {
    submit(1);
    document.getElementsByClassName("on-click-content")[0].style.display = "";
  }, false);
document.getElementById("explore-btn").addEventListener("click", function() {
    submit(0);
    document.getElementsByClassName("on-click-content")[0].style.display = "";
  }, false);
