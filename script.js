/* =========================================
   رسم التمدد المطور
========================================= */

function drawStretch(factor){

    const canvas =
    document.getElementById(
    "drawCanvas"
    );

    const ctx =
    canvas.getContext("2d");


    /* تنظيف اللوحة */

    ctx.clearRect(
    0,
    0,
    canvas.width,
    canvas.height
    );



    /* =====================================
       القيم الأساسية
    ===================================== */

    const originalMathSize = 2;

    const originalDrawSize = 60;


    /* الحجم الرياضي الجديد */

    const newMathSize =
    originalMathSize * factor;


    /* الحجم المرسوم */

    let newDrawSize =
    originalDrawSize * factor;


    /* منع الخروج من الشاشة */

    newDrawSize =
    Math.max(
    25,
    Math.min(140,newDrawSize)
    );



    /* =====================================
       الشكل الأصلي
    ===================================== */

    ctx.beginPath();

    ctx.rect(
    60,
    100,
    originalDrawSize,
    originalDrawSize
    );

    ctx.lineWidth = 4;

    ctx.strokeStyle = "#1565ff";

    ctx.stroke();



    /* عنوان الشكل */

    ctx.fillStyle = "black";

    ctx.font = "bold 18px Arial";

    ctx.fillText(
    "قبل التمدد",
    45,
    190
    );



    /* طول الضلع */

    ctx.fillStyle = "#1565ff";

    ctx.font = "bold 17px Arial";

    ctx.fillText(
    `طول الضلع = ${originalMathSize}`,
    40,
    220
    );



    /* =====================================
       الشكل بعد التمدد
    ===================================== */

    ctx.beginPath();

    ctx.rect(
    260,
    130 - (newDrawSize / 2),
    newDrawSize,
    newDrawSize
    );

    ctx.lineWidth = 4;

    ctx.strokeStyle = "#ffd600";

    ctx.stroke();



    /* عنوان الشكل */

    ctx.fillStyle = "black";

    ctx.font = "bold 18px Arial";

    ctx.fillText(
    "بعد التمدد",
    255,
    190
    );



    /* طول الضلع الجديد */

    ctx.fillStyle = "#ffd600";

    ctx.font = "bold 17px Arial";

    ctx.fillText(
    `طول الضلع = ${newMathSize}`,
    245,
    220
    );



    /* =====================================
       السهم
    ===================================== */

    ctx.beginPath();

    ctx.moveTo(150,130);

    ctx.lineTo(240,130);

    ctx.strokeStyle = "#7b1fa2";

    ctx.lineWidth = 4;

    ctx.stroke();



    /* رأس السهم */

    ctx.beginPath();

    ctx.moveTo(240,130);

    ctx.lineTo(225,120);

    ctx.lineTo(225,140);

    ctx.closePath();

    ctx.fillStyle = "#7b1fa2";

    ctx.fill();



    /* =====================================
       معامل التمدد في المنتصف
    ===================================== */

    ctx.fillStyle = "#7b1fa2";

    ctx.font = "bold 24px Arial";

    ctx.fillText(
    `× ${factor}`,
    170,
    105
    );



    /* =====================================
       خط توضيحي للضلع الأول
    ===================================== */

    ctx.beginPath();

    ctx.moveTo(50,100);

    ctx.lineTo(50,160);

    ctx.strokeStyle = "#1565ff";

    ctx.lineWidth = 2;

    ctx.stroke();



    /* =====================================
       خط توضيحي للضلع الثاني
    ===================================== */

    ctx.beginPath();

    ctx.moveTo(
    245,
    130 - (newDrawSize / 2)
    );

    ctx.lineTo(
    245,
    130 + (newDrawSize / 2)
    );

    ctx.strokeStyle = "#ffd600";

    ctx.lineWidth = 2;

    ctx.stroke();
}
