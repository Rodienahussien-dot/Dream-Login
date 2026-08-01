// تأثير بسيط للبرق

setInterval(() => {

    document.body.style.filter = "brightness(1.4)";

    setTimeout(() => {
        document.body.style.filter = "brightness(1)";
    }, 120);

}, 6000);
