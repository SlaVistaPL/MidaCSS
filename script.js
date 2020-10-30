/*
	MidaCSS Framework v1.0
	(c) 2020, SlaVistaPL (https://ampersandbot.pl)
*/

// Kod zamieszczony poniżej nie powinien być modyfikowany, ponieważ MidaCSS może nie działać poprawnie.
document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");

// importer frameworków
window.MidaCSS = class MidaCSS {
    static addFramework(name) {
        switch(name) {
            case "FontAwesome":
                console.log("FontAwesome has been added to MidaCSS and is now ready to use.");
				var fontAwesome = document.createElement("script");
				fontAwesome.src = "https://kit.fontawesome.com/604acb9c5e.js";
				document.head.appendChild(fontAwesome);
                break;
			case "Underscore.js":
				console.log("Underscore.js has been added to MidaCSS and is now ready to use.");
				var underscore = document.createElement("script");
				underscore.src = "https://cdn.jsdelivr.net/npm/underscore@1.11.0/underscore-min.js";
				document.head.appendChild(underscore);
                break;
			case "Lodash":
				console.log("Lodash has been added to MidaCSS and is now ready to use.")
				var lodash = document.createElement("script");
				lodash.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js";
				document.head.appendChild(lodash);
				break;
			case "jQuery":
				console.log("jQuery has been added to MidaCSS and is now ready to use.")
				var jquery = document.createElement("script");
				jquery.src = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js";
				document.head.appendChild(jquery);
				break;
            default:
                console.error(`${name} does not exist in MidaCSS framework library. Check if you have typed package name properly.`);
                break;
        }
    }
}

// collapsible navbar
var coll = document.getElementsByClassName("navbar-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}