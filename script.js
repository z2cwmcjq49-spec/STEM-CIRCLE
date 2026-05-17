/* =========================================
   فتح وإغلاق النوافذ
========================================= */

function openPopup(id){

    const popup =
    document.getElementById(id);

    popup.style.display = "flex";
}


function closePopup(id){

    const popup =
    document.getElementById(id);

    popup.style.display = "none";
}



/* =========================================
   التمدد الهندسي
========================================= */

function calculateStretch(){

    const factor =
    parseFloat(
    document.getElementById(
    "stretchFactor"
    ).value
    );

    if(
        isNaN(factor) ||
        factor <= 0
    ){

        alert(
        "أدخل معامل تمدد صحيح أكبر من صفر"
        );

        return;
    }

    document.getElementById(
    "stretchResult"
    ).innerHTML =

    `
    <b>
    معامل التمدد = ${factor}
    </b>

    <br><br>

    الشكل الجديد =
    الشكل الأصلي × معامل التمدد

    <br><br>

    الحجم الجديد =
    ${(60 * factor).toFixed(1)}
    `;

    drawStretch(factor);
}



/* =========================================
   رسم التمدد
========================================= */

function drawStretch(factor){

    const canvas =
    document.getElementById(
    "drawCanvas"
    );

    const ctx =
    canvas.getContext("2d");

    ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
    );



    /* حجم الشكل الأصلي */

    const originalSize = 60;


    /* الحجم الجديد */

    let newSize =
    originalSize * factor;



    /* حدود الحجم */

    newSize =
    Math.max(
    20,
    Math.min(120,newSize)
    );



    /* الشكل الأصلي */

    ctx.beginPath();

    ctx.rect(
    60,
    100,
    originalSize,
    originalSize
    );

    ctx.lineWidth = 4;

    ctx.strokeStyle = "#1565ff";

    ctx.stroke();


    ctx.fillStyle = "black";

    ctx.font = "18px Arial";

    ctx.fillText(
    "قبل التمدد",
    48,
    190
    );



    /* الشكل بعد التمدد */

    ctx.beginPath();

    ctx.rect(
    250,
    130 - (newSize / 2),
    newSize,
    newSize
    );

    ctx.lineWidth = 4;

    ctx.strokeStyle = "#ffd600";

    ctx.stroke();


    ctx.fillStyle = "black";

    ctx.fillText(
    "بعد التمدد",
    245,
    190
    );



    /* السهم */

    ctx.beginPath();

    ctx.moveTo(150,130);

    ctx.lineTo(230,130);

    ctx.strokeStyle = "#7b1fa2";

    ctx.lineWidth = 3;

    ctx.stroke();



    /* رأس السهم */

    ctx.beginPath();

    ctx.moveTo(230,130);

    ctx.lineTo(215,120);

    ctx.lineTo(215,140);

    ctx.closePath();

    ctx.fillStyle = "#7b1fa2";

    ctx.fill();



    /* كتابة المعامل */

    ctx.fillStyle = "#7b1fa2";

    ctx.font = "bold 20px Arial";

    ctx.fillText(
    `× ${factor}`,
    170,
    110
    );
}



/* =========================================
   محيط الدائرة
========================================= */

function calculateCircumference(){

    const diameter =
    parseFloat(
    document.getElementById(
    "diameterValue"
    ).value
    );

    if(
        isNaN(diameter) ||
        diameter <= 0
    ){

        alert(
        "أدخل قطر صحيح أكبر من صفر"
        );

        return;
    }

    const circumference =
    Math.PI * diameter;

    document.getElementById(
    "circumferenceResult"
    ).innerHTML =

    `
    <b>
    محيط الدائرة =
    ${circumference.toFixed(2)}
    </b>

    <br><br>

    القانون:

    <br>

    محيط الدائرة = π × القطر
    `;
}



/* =========================================
   طول القوس
========================================= */

function calculateArc(){

    const radius =
    parseFloat(
    document.getElementById(
    "radiusValue"
    ).value
    );

    const angle =
    parseFloat(
    document.getElementById(
    "centralAngleValue"
    ).value
    );

    if(
        isNaN(radius) ||
        isNaN(angle) ||
        radius <= 0 ||
        angle <= 0
    ){

        alert(
        "أدخل القيم بشكل صحيح"
        );

        return;
    }

    const arcLength =

    (angle / 360) *

    (2 * Math.PI * radius);

    document.getElementById(
    "arcResult"
    ).innerHTML =

    `
    <b>
    طول القوس =
    ${arcLength.toFixed(2)}
    </b>

    <br><br>

    القانون:

    <br>

    طول القوس =
    (الزاوية ÷ 360) × 2πr
    `;
}



/* =========================================
   إغلاق النافذة عند الضغط بالخارج
========================================= */

window.onclick = function(event){

    const popups =
    document.querySelectorAll(".popup");

    popups.forEach(function(popup){

        if(event.target === popup){

            popup.style.display = "none";
        }
    });
};
