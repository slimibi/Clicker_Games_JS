var i = 0;
var golds = localStorage.getItem("gods");
var click = 1;
var bought = localStorage.getItem("buy");
var clicked = localStorage.getItem("click");
var globalIQ = localStorage.getItem("ammountIQ");


// STORAGE OWNED

var proNeuron = localStorage.getItem("proNeuron");
var proSynapse = localStorage.getItem("proSynapse");
var proDopamine = localStorage.getItem("proDopamine");
var proBlood = localStorage.getItem("proBlood");
var proNerve = localStorage.getItem("proNerve");
var proMuscles = localStorage.getItem("proMuscles");
var proWater = localStorage.getItem("proWater");
var proBrain = localStorage.getItem("proBrain");

// STORAGE COST

var costNeuron = localStorage.getItem("costNeuron");
var costSynapse = localStorage.getItem("costSynapse");
var costDopamine = localStorage.getItem("costDopamine");
var costBlood = localStorage.getItem("costDopamined");
var costNerve = localStorage.getItem("costNerve");
var costMuscles = localStorage.getItem("costMuscles");
var costWater = localStorage.getItem("costWater");
var costBrain = localStorage.getItem("costBrain");

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

var a = minions[0].cost;
var b = minions[1].cost;
var c = minions[2].cost;
var d = minions[3].cost;
var e = minions[4].cost;
var f = minions[5].cost;
var g = minions[6].cost;
var h = minions[7].cost;

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
    localStorage.clear();
    localStorage.setItem("golds", golds);
    if (Number.isNaN(Math.floor(golds))) {
        document.querySelector(".iqText").innerHTML = "IQ: " + Math.floor((golds = 0));
    } else document.querySelector(".iqText").innerHTML = "IQ: " + Math.floor(golds);
});

// GPS

setInterval(function getGPS() {
    let tmp = 0;
    while (
        tmp <
        proNeuron * minions[0].gps +
        proSynapse * minions[1].gps +
        proDopamine * minions[2].gps +
        proBlood * minions[3].gps +
        proNerve * minions[4].gps +
        proMuscles * minions[5].gps +
        proWater * minions[6].gps +
        proBrain * minions[7].gps
    ) {
        tmp++;
        golds++;
    }
}, 1000);

setInterval(function displayGPS() {
    document.querySelector(".IQPS").innerHTML =
        "IQ per second: " +
        (
            proNeuron * minions[0].gps +
            proSynapse * minions[1].gps +
            proDopamine * minions[2].gps +
            proBlood * minions[3].gps +
            proNerve * minions[4].gps +
            proMuscles * minions[5].gps +
            proWater * minions[6].gps +
            proBrain * minions[7].gps
        ).toFixed(1);
});

// DISPLAY

setInterval(() => {
    // STORAGE OWNED
    localStorage.setItem("proNeuron", proNeuron);
    localStorage.setItem("proSynapse", proSynapse);
    localStorage.setItem("proDopamine", proDopamine);
    localStorage.setItem("proBlood", proBlood);
    localStorage.setItem("proNerve", proNerve);
    localStorage.setItem("proMuscles", proMuscles);
    localStorage.setItem("proWater", proWater);
    localStorage.setItem("proBrain", proBrain);

    // STORAGE COST
    localStorage.setItem("costNeuron", costNeuron);
    localStorage.setItem("costSynapse", costSynapse);
    localStorage.setItem("costDopamine", costDopamine);
    localStorage.setItem("costBlood", costBlood);
    localStorage.setItem("costNerve", costNerve);
    localStorage.setItem("costMuscles", costMuscles);
    localStorage.setItem("costWater", costWater);
    localStorage.setItem("costBrain", costBrain);

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

    if (proNeuron == 0) {
        document.querySelector(".price").innerHTML =
            minions[0].cost.toFixed(1) + " IQ";
    } else {
        document.querySelector(".price").innerHTML =
            ((proNeuron + 1) * minions[0].cost).toFixed(1) + " IQ";
    }
    if (proSynapse == 0) {
        document.querySelector(".price1").innerHTML =
            minions[1].cost.toFixed(1) + " IQ";
    } else {
        while (b < proSynapse) b *= 1.15;
        document.querySelector(".price1").innerHTML =
            ((b) * minions[1].cost).toFixed(1) + " IQ";
    }
    if (proDopamine == 0) {
        document.querySelector(".price2").innerHTML =
            minions[2].cost.toFixed(1) + " IQ";
    } else {
        while (c < proDopamine) c *= 1.15;
        document.querySelector(".price2").innerHTML =
            ((c) * minions[2].cost).toFixed(1) + " IQ";
    }
    if (proBlood == 0) {
        document.querySelector(".price3").innerHTML =
            minions[3].cost.toFixed(1) + " IQ";
    } else {
        while (d < proBlood) d *= 1.15;
        document.querySelector(".price3").innerHTML =
            ((d) * minions[3].cost).toFixed(1) + " IQ";
    }
    if (proNerve == 0) {
        document.querySelector(".price4").innerHTML =
            minions[4].cost.toFixed(1) + " IQ";
    } else {
        while (e < proNerve) e *= 1.15;
        document.querySelector(".price4").innerHTML =
            ((e) * minions[4].cost).toFixed(1) + " IQ";
    }
    if (proMuscles == 0) {
        document.querySelector(".price5").innerHTML =
            minions[5].cost.toFixed(1) + " IQ";
    } else {
        while (f < proMuscles) f *= 1.15;
        document.querySelector(".price5").innerHTML =
            ((f) * minions[5].cost).toFixed(1) + " IQ";
    }
    if (proWater == 0) {
        document.querySelector(".price6").innerHTML =
            minions[6].cost.toFixed(1) + " IQ";
    } else {
        while (g < proWater) g *= 1.15;
        document.querySelector(".price6").innerHTML =
            ((g) * minions[6].cost).toFixed(1) + " IQ";
    }
    if (proBrain == 0) {
        document.querySelector(".price7").innerHTML =
            minions[7].cost.toFixed(1) + " IQ";
    } else {
        while (h < proBrain) h *= 1.15;
        document.querySelector(".price7").innerHTML =
            ((h) * minions[7].cost).toFixed(1) + " IQ";
    }

    // QTY

    if (Number.isNaN(Math.floor(proNeuron))) {
        document.querySelector(".qty").innerHTML = Math.floor((proNeuron = 0));
    } else document.querySelector(".qty").innerHTML = Math.floor(proNeuron);
    if (Number.isNaN(Math.floor(proSynapse))) {
        document.querySelector(".qty1").innerHTML = Math.floor((proSynapse = 0));
    } else document.querySelector(".qty1").innerHTML = Math.floor(proSynapse);
    if (Number.isNaN(Math.floor(proDopamine))) {
        document.querySelector(".qty2").innerHTML = Math.floor((proDopamine = 0));
    } else document.querySelector(".qty2").innerHTML = Math.floor(proDopamine);
    if (Number.isNaN(Math.floor(proBlood))) {
        document.querySelector(".qty3").innerHTML = Math.floor((proBlood = 0));
    } else document.querySelector(".qty3").innerHTML = Math.floor(proBlood);
    if (Number.isNaN(Math.floor(proNerve))) {
        document.querySelector(".qty4").innerHTML = Math.floor((proNerve = 0));
    } else document.querySelector(".qty4").innerHTML = Math.floor(proNerve);
    if (Number.isNaN(Math.floor(proMuscles))) {
        document.querySelector(".qty5").innerHTML = Math.floor((proMuscles = 0));
    } else document.querySelector(".qty5").innerHTML = Math.floor(proMuscles);
    if (Number.isNaN(Math.floor(proWater))) {
        document.querySelector(".qty6").innerHTML = Math.floor((proWater = 0));
    } else document.querySelector(".qty6").innerHTML = Math.floor(proWater);
    if (Number.isNaN(Math.floor(proBrain))) {
        document.querySelector(".qty7").innerHTML = Math.floor((proBrain = 0));
    } else document.querySelector(".qty7").innerHTML = Math.floor(proBrain);
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
    // minions[id].gps *= 2;
    // minions[id].cost *= 1.15;
        minions[id].owned++;
    if (i == 49) {
        click *= 2;
        i = -1;
    }
    i++;
    bought++;
}

function doNeuron() {
    if (proNeuron == 0) {
        if (golds >= (proNeuron + 1) * minions[0].cost) {
            golds -= (proNeuron + 1) * minions[0].cost;
            buyMinion(minions[0].id);
            proNeuron++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proNeuron * minions[0].cost) {
            golds -= proNeuron * minions[0].cost;
            buyMinion(minions[0].id);
            proNeuron++;
        } else {
            alert("Poor");
            return;
        }
    }
}

function doSynapse() {
    if (proSynapse == 0) {
        if (golds >= (proSynapse + 1) * minions[1].cost) {
            golds -= (proSynapse + 1) * minions[1].cost;
            buyMinion(minions[1].id);
            proSynapse++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proSynapse * minions[1].cost) {
            golds -= proSynapse * minions[1].cost;
            buyMinion(minions[1].id);
            proSynapse++;
        } else {
            alert("Poor");
            return;
        }
    }
}

function doDopamine() {
    if (proDopamine == 0) {
        if (golds >= (proDopamine + 1) * minions[2].cost) {
            golds -= (proDopamine + 1) * minions[2].cost;
            buyMinion(minions[2].id);
            proDopamine++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proDopamine * minions[2].cost) {
            golds -= proDopamine * minions[2].cost;
            buyMinion(minions[2].id);
            proDopamine++;
        } else {
            alert("Poor");
            return;
        }
    }
}

function doBlood() {
    if (proBlood == 0) {
        if (golds >= (proBlood + 1) * minions[3].cost) {
            golds -= (proBlood + 1) * minions[3].cost;
            buyMinion(minions[3].id);
            proBlood++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proBlood * minions[3].cost) {
            golds -= proBlood * minions[3].cost;
            buyMinion(minions[3].id);
            proBlood++;
        } else {
            alert("Poor");
            return;
        }
    }
}

function doNerve() {
    if (proNerve == 0) {
        if (golds >= (proNerve + 1) * minions[4].cost) {
            golds -= (proNerve + 1) * minions[4].cost;
            buyMinion(minions[5].id);
            proMuscles++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proNerve * minions[4].cost) {
            golds -= proNerve * minions[4].cost;
            buyMinion(minions[4].id);
            proNerve++;
        } else {
            alert("Poor");
            return;
        }
    }
}

function doMuscles() {
    if (proMuscles == 0) {
        if (golds >= (proMuscles + 1) * minions[5].cost) {
            golds -= (proMuscles + 1) * minions[5].cost;
            buyMinion(minions[5].id);
            proMuscles++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proMuscles * minions[5].cost) {
            golds -= proMuscles * minions[5].cost;
            buyMinion(minions[5].id);
            proMuscles++;
        } else {
            alert("Poor");
            return;
        }
    }
}

function doWater() {
    if (proWater == 0) {
        if (golds >= (proWater + 1) * minions[6].cost) {
            golds -= (proWater + 1) * minions[6].cost;
            buyMinion(minions[6].id);
            proWater++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proWater * minions[6].cost) {
            golds -= proWater * minions[6].cost;
            buyMinion(minions[6].id);
            proWater++;
        } else {
            alert("Poor");
            return;
        }
    }
}

function doBrain() {
    if (proBrain == 0) {
        if (golds >= (proBrain + 1) * minions[7].cost) {
            golds -= (proBrain + 1) * minions[7].cost;
            buyMinion(minions[7].id);
            proBrain++;
        } else {
            alert("Poor");
            return;
        }
    } else {
        if (golds >= proBrain * minions[7].cost) {
            golds -= proBrain * minions[7].cost;
            buyMinion(minions[7].id);
            proBrain++;
        } else {
            alert("Poor");
            return;
        }
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
// http://127.0.0.1:5500/http://127.0.0.1:5500/http://127.0.0.1:5500/