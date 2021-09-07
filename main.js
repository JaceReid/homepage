function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

console.log(formatAMPM(new Date));

setInterval(function () {
    var date = formatAMPM(new Date);
    document.getElementById("clock").innerHTML = date.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })/* adding time to the div */
    console.log("Done!");
}, 1 * 1000);
