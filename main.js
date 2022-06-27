// import "reveal.js/dist/reset.css";
import "reveal.js/dist/reveal.css";
// import "reveal.js/plugin/highlight/night-owl.css";
import "./brand.css";
import Reveal from "reveal.js";
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";

import Notes from "reveal.js/plugin/notes/notes.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import Search from "reveal.js/plugin/search/search.esm.js";
import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";

let deck = new Reveal({
  plugins: [Markdown, Notes, Search, Zoom, RevealHighlight],
  hash: true,
});
deck.initialize();
