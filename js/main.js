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

function sign(starsign, name, sound, image, description, isSelected) {
this.starsign = starsign;
  this.name = name;
  this.sound = `sounds/${sound}.mp3`;
  //this.image = "icons/nan-test.png";
  this.image = `icons/${image}.png`;
  this.description = description;
  this.isSelected = false;
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
  "Lorem ipsum...",
  false
);
const sag = new sign(
  "Sagittarius",
  "John Gotti",
  "temp",
  "gotti",
  "Lorem ipsum...",
  false
);
const sco = new sign(
  "Scorpio",
  "Dragan Mikic & Pink Panthers",
  "temp",
  "mikic",
  "Lorem ipsum...",
  false
);
const lib = new sign(
  "Libra",
  "Jim Jones",
  "temp",
  "jones",
  "Lorem ipsum...",
  false
);
const vir = new sign(
  "Virgo",
  "Belle Gunness",
  "temp",
  "gunness",
  "Lorem ipsum...",
  false
);
const leo = new sign(
  "Leo",
  "Peter Salerno & The Dinner Set Gang",
  "temp",
  "salerno",
  "Lorem ipsum...",
  false
);
const can = new sign(
  "Cancer",
  "Billy the Kid",
  "temp",
  "kid",
  "Lorem ipsum...",
  false
);
const gem = new sign(
  "Gemini",
  "Bonnie & Clyde",
  "temp",
  "bac",
  "Lorem ipsum...",
  false
);
const tau = new sign(
  "Taurus",
  "Alice Diamond & Forty Elephants",
  "temp",
  "diamond",
  "Lorem ipsum...",
  false
);
const ari = new sign(
  "Aries",
  "Al Capone",
  "temp",
  "capone",
  "Lorem ipsum...",
  false
);
const pis = new sign(
  "Pisces",
  "Charles Manson",
  "temp",
  "manson",
  "Lorem ipsum...",
  false
);
const aqu = new sign(
  "Aquarius",
  "Jack the Ripper",
  "temp",
  "jack",
  "Lorem ipsum...",
  false
);
const oph = new sign(
  "Ophiuchus",
  "The Zodiac Killer",
  "temp",
  "zodiac",
  "Lorem ipsum...",
  false
);
const nan = new sign(
  "",
  "",
  "",
  "",
  "",
  false
);
const signs = [aqu, pis, ari, tau, gem, can, leo, vir, lib, sco, sag, cap]

function submit(dob) {
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

  var ch = $('.gridbox').height();
  $('.gridbox').css({'width': ch + 'px'});

  signs.forEach(function(sign) {
    const signBtn = makeSignBtn(sign);
    signBtn.addEventListener("click", function() {
        document.getElementsByClassName("gridbox")[0].classList.add("push-left");
        sign.isSelected = true;
        document.getElementById(`btn-${sign.starsign}`).classList.add("is-selected");
        document.getElementById(`btn-${sign.starsign}`).classList.remove("sign");
        document.getElementsByClassName("sign-name")[0].innerHTML = sign.starsign.toUpperCase();
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
        document.getElementsByClassName("sign-info")[0].style.transform = `rotate(${-rotate}deg)`;
        document.getElementById("grd-01").style.transform = `translate(-110%, -42%) rotate(${rotate}deg)`;
        signs.forEach(function(curSign) {
          document.getElementById(`btn-${curSign.starsign}`).style.transform = `rotate(${-rotate}deg)`;
          document.getElementById(`btn-${curSign.starsign}`).style.transition = "0.75s ease";
        });
      }, false);
    counter+=1;
    document.getElementsByClassName("gridbox")[0].append(signBtn);
  });

  if (dob == 1) {
    document.getElementsByClassName("gridbox")[0].classList.add("push-left");
    document.getElementById(`btn-${signs[0].starsign}`).classList.add("is-selected");
    document.getElementById(`btn-${signs[0].starsign}`).classList.remove("sign");
    document.getElementsByClassName("sign-name")[0].innerHTML = signs[0].starsign.toUpperCase();
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
