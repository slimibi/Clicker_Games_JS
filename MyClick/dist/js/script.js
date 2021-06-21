var i = 0;
var golds = 0;
var globalIQ = 0;
var click = 1;
var bought = localStorage.getItem("buy");
var clicked = localStorage.getItem("click");

// TAB

var minions = [
    { id: 0, name: "Neuron", cost: 7, gps: 0.2, owned: 0 },
    { id: 1, name: "Synapse", cost: 50, gps: 2, owned: 0 },
    { id: 2, name: "Dopamine", cost: 550, gps: 16, owned: 0 },
    { id: 3, name: "Blood", cost: 6000, gps: 92, owned: 0 },
    { id: 4, name: "Nerve", cost: 65000, gps: 520, owned: 0 },
    { id: 5, name: "Muscles", cost: 700000, gps: 2800, owned: 0 },
    { id: 6, name: "Water", cost: 10000000, gps: 15600, owned: 0 },
    { id: 7, name: "Brain", cost: 150000000, gps: 88000, owned: 0 },
    { id: 8, name: "Cheat", cost: 0, gps: 0, owned: 0 },
];

// GOLDS

function addGold(x) {
    let tmp = 0;
    let tmp2 = 0;
    x = click;
    while (x > tmp) {
        golds++;
        tmp++;
    }
    while (x > tmp2) {
        globalIQ++;
        tmp2++;
    }
    clicked++;
}

setInterval(function displayGolds() {
    localStorage.setItem("golds", golds);
    if (Number.isNaN(Math.floor(golds))) {
        document.querySelector(".iqText").innerHTML =
            "IQ: " + Math.floor((golds = 0));
    } else document.querySelector(".iqText").innerHTML = "IQ: " + Math.floor(golds);
});

// GPS

setInterval(function getGPS() {
    golds +=
        minions[0].owned * minions[0].gps +
        minions[1].owned * minions[1].gps +
        minions[2].owned * minions[2].gps +
        minions[3].owned * minions[3].gps +
        minions[4].owned * minions[4].gps +
        minions[5].owned * minions[5].gps +
        minions[6].owned * minions[6].gps +
        minions[7].owned * minions[7].gps;
}, 1000);

setInterval(function displayGPS() {
    document.querySelector(".IQPS").innerHTML =
        "IQ per second: " +
        (
            minions[0].owned * minions[0].gps +
            minions[1].owned * minions[1].gps +
            minions[2].owned * minions[2].gps +
            minions[3].owned * minions[3].gps +
            minions[4].owned * minions[4].gps +
            minions[5].owned * minions[5].gps +
            minions[6].owned * minions[6].gps +
            minions[7].owned * minions[7].gps
        ).toFixed(1);
});

// DISPLAY

setInterval(() => {
    // CLICKED
    localStorage.setItem("click", clicked);

    // BOUGHT
    localStorage.setItem("buy", bought);

    // GLOBAL IQ
    localStorage.setItem("ammountIQ", globalIQ);

    // TITLE
    document.querySelector(".title").innerHTML = minions[0].name;
    document.querySelector(".title1").innerHTML = minions[1].name;
    document.querySelector(".title2").innerHTML = minions[2].name;
    document.querySelector(".title3").innerHTML = minions[3].name;
    document.querySelector(".title4").innerHTML = minions[4].name;
    document.querySelector(".title5").innerHTML = minions[5].name;
    document.querySelector(".title6").innerHTML = minions[6].name;
    document.querySelector(".title7").innerHTML = minions[7].name;

    // PRICE

    document.querySelector(".price").innerHTML =
        (minions[0].cost).toFixed(1) + " IQ";
    document.querySelector(".price1").innerHTML =
        (minions[1].cost).toFixed(1) + " IQ";
    document.querySelector(".price2").innerHTML =
        (minions[2].cost).toFixed(1) + " IQ";
    document.querySelector(".price3").innerHTML =
        (minions[3].cost).toFixed(1) + " IQ";
    document.querySelector(".price4").innerHTML =
        (minions[4].cost).toFixed(1) + " IQ";
    document.querySelector(".price5").innerHTML =
        (minions[5].cost).toFixed(1) + " IQ";
    document.querySelector(".price6").innerHTML =
        (minions[6].cost).toFixed(1) + " IQ";
    document.querySelector(".price7").innerHTML =
        (minions[7].cost).toFixed(1) + " IQ";

    // QTY
    document.querySelector(".qty").innerHTML = Math.floor(minions[0].owned);
    document.querySelector(".qty1").innerHTML = Math.floor(minions[1].owned);
    document.querySelector(".qty2").innerHTML = Math.floor(minions[2].owned);
    document.querySelector(".qty3").innerHTML = Math.floor(minions[3].owned);
    document.querySelector(".qty4").innerHTML = Math.floor(minions[4].owned);
    document.querySelector(".qty5").innerHTML = Math.floor(minions[5].owned);
    document.querySelector(".qty6").innerHTML = Math.floor(minions[6].owned);
    document.querySelector(".qty7").innerHTML = Math.floor(minions[7].owned);

    // INFO document.querySelector(".ammountIQ
    if (Number.isNaN(Math.floor(bought))) {
        document.querySelector(".ammountBuy").innerHTML =
            "<i class='fas fa-shopping-cart'> | Ammount of features bought: " +
            Math.floor((bought = 0)) +
            "</i>";
    } else
        document.querySelector(".ammountBuy").innerHTML =
        "<i class='fas fa-shopping-cart'> | Ammount of features bought: " +
        Math.floor(bought) +
        "</i>";

    if (Number.isNaN(Math.floor(clicked))) {
        document.querySelector(".ammountClick").innerHTML =
            "<i class='fas fa-mouse-pointer'> | Ammount of click: " +
            Math.floor((clicked = 0)) +
            "</i>";
    } else
        document.querySelector(".ammountClick").innerHTML =
        "<i class='fas fa-mouse-pointer'> | Ammount of click: " +
        Math.floor(clicked) +
        "</i>";
});

// STORE

function buyMinion(id) {
    if (
        minions[id].owned == 24 ||
        minions[id].owned == 49 ||
        minions[id].owned == 99 ||
        minions[id].owned == 249 ||
        minions[id].owned == 999
    )
        minions[id].gps *= 2;
    minions[id].cost *= 1.15;
    minions[id].owned++;
    if (i == 49) {
        click *= 2;
        i = -1;
    }
    i++;
    bought++;
}

function doNeuron() {
    if (golds >= minions[0].cost) {
        golds -= minions[0].cost;
        buyMinion(minions[0].id);
        proNeuron++;
    } else {
        alert("Poor");
    }
}

function doSynapse() {
    if (golds >= minions[1].cost) {
        golds -= minions[1].cost;
        buyMinion(minions[1].id);
    } else {
        alert("Poor");
        return;
    }
}

function doDopamine() {
    if (golds >= minions[2].cost) {
        golds -= minions[2].cost;
        buyMinion(minions[2].id);
    } else {
        alert("Poor");
        return;
    }
}

function doBlood() {
    if (golds >= minions[3].cost) {
        golds -= minions[3].cost;
        buyMinion(minions[3].id);
    } else {
        alert("Poor");
        return;
    }
}

function doNerve() {
    if (golds >= minions[4].cost) {
        golds -= minions[4].cost;
        buyMinion(minions[4].id);
    } else {
        alert("Poor");
        return;
    }
}

function doMuscles() {
    if (golds >= minions[5].cost) {
        golds -= minions[5].cost;
        buyMinion(minions[5].id);
    } else {
        alert("Poor");
        return;
    }
}

function doWater() {
    if (golds >= minions[6].cost) {
        golds -= minions[6].cost;
        buyMinion(minions[6].id);
    } else {
        alert("Poor");
        return;
    }
}

function doBrain() {
    if (golds >= minions[7].cost) {
        golds -= minions[7].cost;
        buyMinion(minions[7].id);
    } else {
        alert("Poor");
        return;
    }
}

function doCheat() {
    golds += 10000;
    globalIQ += 10000;
}

// SOUND

function playclip() {
    if (
        (navigator.appName == "Microsoft Internet Explorer" &&
            navigator.appVersion.indexOf("MSIE 7") != -1) ||
        navigator.appVersion.indexOf("MSIE 8") != -1
    ) {
        if (document.all) {
            document.all.sound.src = "click.mp3";
        }
    } else {
        {
            var audio = document.getElementsByTagName("audio")[0];
            audio.play();
        }
    }
}

// PROMPT

function clickBrain() {
    var person = prompt("What should your brain name be?");
    var ntm = localStorage.getItem("prompta", person);
    if (person != null) {
        localStorage.setItem("prompta", person);
        document.querySelector(".brain").innerHTML = person;
    }
}

// http://127.0.0.1:5500/dist/js/salope.html
// http://127.0.0.1:5500/