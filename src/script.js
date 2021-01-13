/*
	MidaCSS Framework v1.3
	(c) 2020, SlaVistaPL (https://ampersandbot.pl)
*/

// Kod zamieszczony poniżej nie powinien być modyfikowany, ponieważ MidaCSS może nie działać poprawnie.
document.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");

// importer frameworków
window.MidaCSS = class MidaCSS {
    static addFramework(name) {
        switch(name) {
            case "FontAwesome":
                console.log("FontAwesome został dodany do MidaCSS oraz jest gotowy do użycia.");
				var fontAwesome = document.createElement("script");
				fontAwesome.src = "https://kit.fontawesome.com/604acb9c5e.js";
				document.head.appendChild(fontAwesome);
                break;
			case "Underscore.js":
				console.log("Underscore.js został dodany do MidaCSS oraz jest gotowy do użycia.");
				var underscore = document.createElement("script");
				underscore.src = "https://cdn.jsdelivr.net/npm/underscore@1.11.0/underscore-min.js";
				document.head.appendChild(underscore);
                break;
			case "Lodash":
				console.log("Lodash został dodany do MidaCSS oraz jest gotowy do użycia.")
				var lodash = document.createElement("script");
				lodash.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.20/lodash.min.js";
				document.head.appendChild(lodash);
				break;
			case "jQuery":
				console.log("jQuery został dodany do MidaCSS oraz jest gotowy do użycia.")
				var jquery = document.createElement("script");
				jquery.src = "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js";
				document.head.appendChild(jquery);
				break;
			case "React":
				console.log("React został dodany do MidaCSS oraz jest gotowy do użycia.")
				var react = document.createElement("script");
				var react2 = document.createElement("script");
				react.src = "https://unpkg.com/react@17/umd/react.production.min.js";
				react2.src = "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js";
				document.head.appendChild(react);
				break;
			case "Vue":
				console.log("Vue został dodany do MidaCSS oraz jest gotowy do użycia.")
				var vue = document.createElement("script");
				vue.src = "https://cdn.jsdelivr.net/npm/vue@2.6.12";
				document.head.appendChild(vue);
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