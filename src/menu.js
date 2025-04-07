import "./menu.css";

export default function loadMenu() {
  const content = document.querySelector("#content");

  content.innerHTML = `
        <div class="our-menu-container">
          <div class="hero">
              <h1>Our menu</h1>
          </div>
        </div>`;
}
