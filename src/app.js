import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------
require ('jquery/dist/jquery.min');
require ('bootstrap/dist/js/bootstrap.bundle');

import $ from "jquery";
// import { Vue } from "vue";
import { remote } from "electron";
import jetpack from "fs-jetpack";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

    $(document).ready(function(){
        function getdate(){
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            if(s<10){
                s = "0"+s;
            }

            $("h2").text(h+" : "+m+" : "+s);
            setTimeout(function(){getdate()}, 500);
        }

        $("#start").click(getdate);
    });

document.querySelector("#app").style.display = "block";
// document.querySelector("#os").innerHTML = osMap[process.platform];
// document.querySelector("#author").innerHTML = 'Kamil Kielar';
// document.querySelector("#env").innerHTML = env.name;
// document.querySelector("#electron-version").innerHTML = process.versions.electron;
