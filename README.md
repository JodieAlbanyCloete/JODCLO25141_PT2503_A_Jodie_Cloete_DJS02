# DJS02 – Web Component: Podcast Preview

A reusable Web Component for displaying podcast information such as the title, cover image, number of seasons, and other details.
This component can be used in any HTML page or JavaScript project without depending on a framework. The component is fully encapsulated using the Shadow DOM, which means its styles and layout won’t interfere with the rest of your page.

✨ **Features**

- Displays podcast cover image
- Shows podcast title and seasons
- Fully encapsulated using Shadow DOM
- Works in any modern browser
- Can receive data through HTML attributes or JavaScript
- Easy to style and reuse

🚀 **Installation**

Include the component script in your HTML page:
<script type="module" src="./components/PodcastCard.js"></script>
This registers the custom element with the browser.

✨ **How the component works**

When the component appears on the page, it runs its internal render() method.
During this process, it:

- Imports your podcast data from data.js.
Each item in that file includes properties such as title, image, genres, and updated.

- Uses a helper function (getGenreNames) to convert the stored genre IDs into readable text.

- Creates a card for every podcast.
Each card includes the podcast cover, title, genres, and formatted update date.

- Displays all cards in a styled grid with four columns.

- All of this happens automatically—no extra setup is required besides placing the HTML tag on the page.

🚀 **How It Displays Information**

Each podcast card contains:

- Cover Image — shown at the top

- Title — displayed in bold

- Genres — converted into readable text using your genre utility file

- Updated Date — formatted into a human-readable date

The grid is responsive and uses four equal-width columns.

🛠 **Requirements**
- Modern browser (Chrome, Firefox, Safari, Edge)
- Script loaded using type="module"
- Proper file paths for images and data files
