// (c) 2019 Dave Ingham
// This code is licensed under CCL license (see LICENSE.txt for details)

$(
    function () {
        // This code adds an event listener to the 'keydown' event.
        // Keydown will continue to fire if a key is kept pressed
        // You could use 'keyup' if you only wanted the function to execute when a key is released (and therfore not repeat)
        $(document).keydown(
            function (event) {
                Typer.addText(event); //Capture the keydown event and call the addText, this is executed on page load
            }
        );
    }
);

var Typer = {
    text: null,
    accessCountimer: null,
    index: 0, // current cursor position
    speed: 2, // speed of the Typer
    file: "", //file, must be setted

    mobscanCount: 0, //times 1 is pressed for Scan for Mobile Device
    mobhackCount:0, //times 2 is pressed for Mobile Hack
    mobcopyCount:0, //times 3 is pressed for Mobile Copy
    firescanCount:0, //times 4 is pressed for Firewall Scan
    firebypassCount:0, //times 5 is pressed for Firewall Bypassed
    firedisableCount:0, //times 6 is pressed for Firewall Disabled
    avscanCount:0, //times 7 is pressed for Antivirus Scan
    avbypassCount:0, //times 8 is pressed for Antivirus Bypass
    avdisableCount:0, //times 9 is pressed for Antivirus Disable
    alarmdisCount:0, //times 0 is pressed for Alarm Disabled 

    

// NAME[lowercase]Count: 0, //times GIVEN KEY is pressed for OUTPUT EFFECT 

    init: function () { // inizialize Hacker Typer
        accessCountimer = setInterval(function () {
            Typer.updLstChr();
        }, 500); // inizialize timer for blinking cursor
        $.get(Typer.file, function (data) { // get the text file
            Typer.text = data; // save the textfile in Typer.text
        });
    },

    content: function () {
        return $("#console").html(); // get console content
    },

    write: function (str) { // append to console content
        $("#console").append(str);
        return false;
    },

makeMobscan: function () { //create Scanning for Mobile device popUp
        Typer.hidepop(); // hide all popups
        Typer.mobscanCount = 0; //reset count
        var ddiv = $("<div id='mosc'>").html(""); // create new blank div and id "mosc"
        ddiv.addClass("accessGrantedflash"); // add class to the div
        ddiv.html("<h1>OPTION 1</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
	    return false;
    },
makeMobhack: function () { //create Hacking Mobile Device popUp
        Typer.hidepop(); // hide all popups
        Typer.mobhackCount = 0; //reset count
        var ddiv = $("<div id='moha'>").html(""); // create new blank div and id "moha"
        ddiv.addClass("accessGranted"); // add class to the div
        ddiv.html("<h1>OPTION 2</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeMobcopy: function () { // make Copy Mobile Device popup
        Typer.hidepop(); // hide all popups
        Typer.mobcopyCount = 0; //reset count
        var ddiv = $("<div id='moco'>").html(""); // create new blank div and id "moco"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>OPTION 3</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeFirescan: function () { //create Scanning Firewall popUp
        Typer.hidepop(); // hide all popups
        Typer.firescanCount = 0; //reset count
        var ddiv = $("<div id='fisc'>").html(""); // create new blank div and id "fisc"
        ddiv.addClass("accessGrantedflash"); // add class to the div
        ddiv.html("<h1>OPTION 4</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },    
makeFirebypass: function () { //create Bypassing Firewall popUp
        Typer.hidepop(); // hide all popups
        Typer.firebypassCount = 0; //reset count
        var ddiv = $("<div id='fiby'>").html(""); // create new blank div and id "fiby"
        ddiv.addClass("accessDeniedflash"); // add class to the div
        ddiv.html("<h1>OPTION 5</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },    
makeFiredisable: function () { //create Disabling Firewall popUp
        Typer.hidepop(); // hide all popups
        Typer.firedisableCount = 0; //reset count
        var ddiv = $("<div id='fidi'>").html(""); // create new blank div and id "fidi"
        ddiv.addClass("accessDeniedflash"); // add class to the div
        ddiv.html("<h1>OPTION 6</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAvscan: function () { //create Scanning Antivirus popUp
        Typer.hidepop(); // hide all popups
        Typer.avscanCount = 0; //reset count
        var ddiv = $("<div id='avsc'>").html(""); // create new blank div and id "avsc"
        ddiv.addClass("accessGrantedflash"); // add class to the div
        ddiv.html("<h1>OPTION 7</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAvbypass: function () { //create Bypassing Antivirus popUp
        Typer.hidepop(); // hide all popups
        Typer.avbypassCount = 0; //reset count
        var ddiv = $("<div id='avby'>").html(""); // create new blank div and id "avby"
        ddiv.addClass("accessDeniedflash"); // add class to the div
        ddiv.html("<h1>OPTION 8</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAvdisable: function () { //create Disable Antivirus popUp
        Typer.hidepop(); // hide all popups
        Typer.avdisableCount = 0; //reset count
        var ddiv = $("<div id='avdi'>").html(""); // create new blank div and id "avdi"
        ddiv.addClass("accessDeniedflash"); // add class to the div
        ddiv.html("<h1>OPTION 9</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
makeAlarmdis: function () { //create Alarm Disabled
        Typer.hidepop(); // hide all popups
        Typer.alarmdisCount = 0; //reset count
        var ddiv = $("<div id='aldi'>").html(""); // create new blank div and id "aldi"
        ddiv.addClass("accessDenied"); // add class to the div
        ddiv.html("<h1>OPTION 10 (tied to the 0 key)</h1>"); // set content of div
        $(document.body).prepend(ddiv); // prepend div to body
        return false;
    },
// makeNAME[Sentence case]: function () { //create Access Granted popUp
//Typer.hidepop(); // hide all popups
//Typer.NAME[lowercase] = 0; //reset count
//var ddiv = $("<div id='FOUR CHAR STRING'>").html(""); // create new blank div and id "FOUR CHAR STRING"
//ddiv.addClass("FROM CSS SHEET"); // add class to the div
//ddiv.html("<h1>WORDS IN THE BOX</h1>"); // set content of div
//$(document.body).prepend(ddiv); // prepend div to body
//return false;
//},


    hidepop: function () { // remove all existing popups
        $("#mosc").remove();
        $("#moha").remove();
        $("#moco").remove();
        $("#fisc").remove();
        $("#fiby").remove();
        $("#fidi").remove();
        $("#avsc").remove();
        $("#avby").remove();
        $("#avdi").remove();
        $("#aldi").remove();
// $("#FOUR CHAR STRING").remove();
    },

    addText: function (key) { //Main function to add the code
        // Try this for finding key codes - https://keycode.info/
      
        if (key.keyCode == 49) { // key 49 = 1
            Typer.mobscanCount++; // increase counter
            if (Typer.mobscanCount >= 3) { // if it's pressed 3 times
                Typer.makeMobscan(); // make Scan Mobile popup
           }
        } else if (key.keyCode == 50) { // key 50 = 2
            Typer.mobhackCount++; // increase counter
            if (Typer.mobhackCount >= 3) { // if it's pressed 3 times
                Typer.makeMobhack (); // make Mobile Hack popup
            }
        } else if (key.keyCode == 51) { // key 51 = 3
            Typer.mobcopyCount++; // increase counter
            if (Typer.mobcopyCount >= 3) { // if it's pressed 3 times
                Typer.makeMobcopy(); // make Copy Mobile Device popup
            }
        } else if (key.keyCode == 52) { // key 52 = 4
            Typer.firescanCount++; // increase counter
            if (Typer.firescanCount >= 3) { // if it's pressed 3 times
                Typer.makeFirescan(); // make Scan Firewall popup
           }
        } else if (key.keyCode == 53) { // key 53 = 5
            Typer.firebypassCount++; // increase counter
            if (Typer.firebypassCount >= 3) { // if it's pressed 3 times
                Typer.makeFirebypass(); // make Bypass Firewall popup
            }
        } else if (key.keyCode == 54) { // key 54 = 6
            Typer.firedisableCount++; // increase counter
            if (Typer.firedisableCount >= 3) { // if it's pressed 3 times
                Typer.makeFiredisable(); // make Disable Firewall popup
            }
        } else if (key.keyCode == 55) { // key 55 = 7
            Typer.avscanCount++; // increase counter
            if (Typer.avscanCount >= 3) { // if it's pressed 3 times
                Typer.makeAvscan(); // make Scan Antivirus popup
           }
        } else if (key.keyCode == 56) { // key 56 = 8
            Typer.avbypassCount++; // increase counter
            if (Typer.avbypassCount >= 3) { // if it's pressed 3 times
                Typer.makeAvbypass(); // make Bypass Antivirus popup
            }
        } else if (key.keyCode == 57) { // key 57 = 9
            Typer.avdisableCount++; // increase counter
            if (Typer.avdisableCount >= 3) { // if it's pressed 3 times
                Typer.makeAvdisable(); // make Disable Antivirus popup
            }
  
        } else if (key.keyCode == 48) { // key 48 = 0
            Typer.alarmdisCount++; // increase counter
            if (Typer.alarmdisCount >= 3) { // if it's pressed 3 times
                Typer.makeAlarmdis(); // make Mobile Device Located popup
            }

// } else if (key.keyCode == Number from Keycode.info) { // key number = corresponding character
//Typer.NAME[lowercase]Count++; // increase counter
//if (Typer.NAME[lowercase]Count >= 3) { // if it's pressed 3 times
//    Typer.makeNAME[Sentence case](); // make denied popup
//}


        } else if (key.keyCode == 27) { // key 27 = esc key
            Typer.hidepop(); // hide all popups
       
        } else if (Typer.text) { // otherway if text is loaded
            var cont = Typer.content(); // get the console content
            if (cont.substring(cont.length - 1, cont.length) == "|") // if the last char is the blinking cursor
                $("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it before adding the text
            if (key.keyCode != 8) { // if key is not backspace
                Typer.index += Typer.speed; // add to the index the speed
            } else {
                if (Typer.index > 0) // else if index is not less than 0
                    Typer.index -= Typer.speed; //	remove speed for deleting text
            }
            var text = $("<div/>").text(Typer.text.substring(0, Typer.index)).html(); // parse the text for stripping html enities
            var rtn = new RegExp("\n", "g"); // newline regex
            var rts = new RegExp("\\s", "g"); // whitespace regex
            var rtt = new RegExp("\\t", "g"); // tab regex
            $("#console").html(text.replace(rtn, "<br/>").replace(rtt, "&nbsp;&nbsp;&nbsp;&nbsp;").replace(rts, "&nbsp;")); // replace newline chars with br, tabs with 4 space and blanks with an html blank
            window.scrollBy(0, 50); // scroll to make sure bottom is always visible
        }
        if (key.preventDefault && key.keyCode != 122) { // prevent F11(fullscreen) from being blocked
            key.preventDefault()
        };
        if (key.keyCode != 122) { // otherway prevent keys default behavior
            key.returnValue = false;
        }
    },

    updLstChr: function () { // blinking cursor
        var cont = this.content(); // get console
        if (cont.substring(cont.length - 1, cont.length) == "|") // if last char is the cursor
            $("#console").html($("#console").html().substring(0, cont.length - 1)); // remove it
        else
            this.write("|"); // else write it
    }
}
