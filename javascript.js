var folder = document.getElementById("upload-music");
var songs = [];
function load_songs() {
    for (i = 0; i < songs.length; i += 1){
        console.log("Tomorrow");
    }
}

folder.onchange = function () {
    var files = folder.files,
        len = files.length,
        i;
    for (i = 0; i < len; i += 1) {
        if (files[i].type === "audio/mpeg") {
            songs.push(files[i]);
        }
    }
    $("body").load("main.html");
}