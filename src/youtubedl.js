
var videoUrl = ytplayer.config.args.loaderUrl;

//var videoUrl = window.ytplayer.config.args.url_encoded_fmt_stream_map.split(',');


console.log('Our extension has loaded!');
console.log(videoUrl);

var container = document.getElementById("top-level-buttons");
var btn = document.createElement("button");
btn.className = "style-scope ytd-menu-renderer";
btn.setAttribute("role", "button");
btn.innerText = "Download";

container.appendChild(btn);