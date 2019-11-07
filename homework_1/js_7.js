// Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.

let hw_01_7 = document.getElementById("hw_01_7");

hw_01_7.onclick = function () {

    const fileSize = 820;
    let memoryGB, memoryMB, filesAmount

    memoryGB = +prompt("How many gigabytes are on your drive?")

    memoryMB = memoryGB * 1024;

    filesAmount = memoryMB / fileSize;
    filesAmount = Math.trunc(filesAmount);

    alert(`*slaps the flashdrive* This badboy can fit ${filesAmount} file(s)`);

    return false;
}
