import "./styles.css";
import { data } from "./data.js";

// TODO:
// 2. Scroll element one by one, snap to center
// 3. Center element can change style
let content = "<ul>";
for (let index = 0; index < data.length; index++) {
  const element = data[index];
  content += `<li class="timeline-item ">${element.time} ${element.content}</li>`;
}
content += `</ul>`;

document.getElementById("app").innerHTML = `
<div>
  <div>${content}</div>
</div>
`;

let elements;
let windowHeight;

function init() {
  elements = document.querySelectorAll(".timeline-item");
  windowHeight = window.innerHeight;
}

function checkPosition() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = elements[i].getBoundingClientRect().top;
    if (positionFromTop < 300) {
      element.classList.add("selected-li-exit");
      element.classList.remove("selected-li");
      // element.classList.remove("selected-li");
    } else if (positionFromTop - windowHeight <= 0) {
      element.classList.add("selected-li");
      element.classList.remove("selected-li-exit");
    }
  }
}

window.addEventListener("scroll", checkPosition);
window.addEventListener("resize", init);

init();
checkPosition();
