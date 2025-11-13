console.log("PodcastCard.js linked");
// podcast-grid.js
import { podcasts } from "../../data.js";

class PodcastGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = `
          <style>
            .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  gap: 1rem;
}
            .card {
              padding: 1rem;
              border-radius: 0.5rem;
              background: #f5f5f5;
              box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }
            .title {
              font-weight: bold;
              color: #333;
            }
            .updated {
              font-size: 0.9rem;
              color: #666;
            }
          </style>
        `;

    const items = podcasts
      .map(
        (p) => `
        <div class="card">
          <div class="title">🎧 ${p.title}</div>
          <div class="updated">Updated: ${p.updated}</div>
        </div>
      `
      )
      .join("");

    this.shadowRoot.innerHTML = `${style}<div class="grid">${items}</div>`;
  }
}

customElements.define("podcast-grid", PodcastGrid);
