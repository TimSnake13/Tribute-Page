import "./styles.css";
import { data } from "./data.js";

// TODO:
// 1. Display all the data on page
// 2. Scroll element one by one, snap to center
// 3. Center element can change style
let content = "<ul>";

for (let index = 0; index < data.length; index++) {
  const element = data[index];
  content += `<li>${element.time} ${element.content}</li>`;
}
content += `</ui>`;

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
  <div>${content}</div>
</div>
`;
