console.log("js");

// let nomalum = null;
// console.log(isNaN(null+1));
// nomalum = nomalum+"salom";
// console.log(typeof(undefined));
// console.log(undefined+1);
// console.log(null+1);



// Vazifa

let abdumuumin = {
    ism: "Abdumo'min",
    shahar: "Qo'qon",
    yoshi: 15,
    qiziqish: "Dasturlash",
    sohasi: {
        tillari: "HTML, CSS, JavaScript, Bootsrap, PHP"
    }
};

function salom(){
    console.log(`Mening ismim ${abdumuumin.ism}. ${abdumuumin.shahar} shaxrida tug'ilganman. Yoshim ${abdumuumin.yoshi}da. 
    ${abdumuumin.qiziqish}ga qiziqaman. Hozirda "${abdumuumin.sohasi.tillari}" texnologiyalari bilan ishlayman`);
};

salom();
