/* ----------  STORY DATA ----------*/
const stories = [
  {
    title: "The Magical Treasure", image: "images/hero.jpg", category: "Adventure",
    description: "Mia finds a glowing map that leads to a surprising treasure.",
    story: "One morning Mia found a glowing map under her pillow. It led her past a singing stream and through a field of daisies to a big old tree. Under its roots lay a shining chest. Inside there were no coins, only a small mirror and a note: 'The real treasure is the kindness you carry.' Mia smiled and shared her picnic with every animal she met on the way home.",
    moral: "Kindness is the greatest treasure of all."
  },
  {
    title: "The Brave Little Bear", image: "images/bear.jpg", category: "Animals",
    description: "Benny the bear is afraid of the dark, until one starry night.",
    story: "Benny the little bear was afraid of the dark. One night his friend Firefly got lost in the woods. Benny took a deep breath and stepped into the shadows. He called softly, and a tiny light blinked back. Together they walked home, and Benny realized the dark was not so scary when he used his courage and helped a friend.",
    moral: "Being brave means doing the right thing even when you feel afraid."
  },
  {
    title: "The Little Bunny’s Adventure", image: "images/bunny.jpg", category: "Animals",
    description: "Bella the bunny hops far from home and finds a big surprise.",
    story: "Bella the bunny wanted to see what was beyond the meadow. She hopped over a hill, crossed a bubbling brook and met a wise old turtle. 'Every adventure is better with a friend,' said the turtle, and walked with her. When the sun set, they found a field of golden carrots, and Bella hopped home with new stories to tell her family.",
    moral: "Adventures are more fun when we share them with friends."
  },
  {
    title: "The Friendly Little Dragon", image: "images/dragon.jpg", category: "Fantasy",
    description: "Everyone fears Ember the dragon, but she only wants a friend.",
    story: "Ember was a small dragon who sneezed tiny sparks. The villagers ran away whenever they saw her, and she felt very lonely. One cold night, she used her warm breath to light every lantern in the village. The children came out to watch and cheered. From that day on, Ember was the village's favorite helper and had friends everywhere.",
    moral: "Never judge someone before you get to know them."
  },
  {
    title: "The Castle of Dreams", image: "images/castle.jpg", category: "Fairy Tales",
    description: "A sleepy princess discovers a castle built from dreams.",
    story: "High above the clouds stood a castle made from sleepy dreams. Princess Lily visited it every night. Each room held a dream waiting to come true: a library of flying books, a garden of singing flowers and a tower full of stars. The castle's keeper told her, 'Dreams come true for those who work for them.' Lily woke up and began learning to paint.",
    moral: "Dream big, and then work hard to make your dreams real."
  },
  {
    title: "The Rainbow’s Secret", image: "images/rainbow.jpg", category: "Fantasy",
    description: "Why does the rainbow have so many colors? Zoe finds out.",
    story: "After a rainy day Zoe asked the rainbow, 'Why do you have so many colors?' The rainbow whispered, 'Each color is a different friend. Red is brave, blue is calm, and yellow is joyful. Alone we are only pretty, but together we light up the whole sky.' Zoe laughed and invited all her friends, big and small, to play with her the next day.",
    moral: "We are strongest and brightest when we are together."
  },
  {
    title: "The Butterfly Garden", image: "images/butterflies.jpg", category: "Animals",
    description: "A little girl learns patience by caring for a garden.",
    story: "Nora planted tiny seeds and waited, but nothing grew. She felt sad. Her grandma said, 'Good things take time.' So Nora watered the seeds every day and sang to them. Slowly flowers bloomed, and one morning a hundred butterflies danced above them. Nora clapped with joy, because her waiting had turned into the most beautiful garden in town.",
    moral: "Patience and care make beautiful things grow."
  },
  {
    title: "The Enchanted Forest", image: "images/forest.jpg", category: "Adventure",
    description: "Leo enters a forest where the trees can talk.",
    story: "Leo wandered into a forest where the trees whispered. An old oak said, 'Lost travelers need three things: a kind word, a brave step and an honest heart.' Leo thanked the oak, helped a squirrel find its acorn and told the truth when a fox asked him a tricky question. A path of glowing mushrooms then appeared and led him safely home.",
    moral: "Honesty and kindness will always guide you home."
  },
  {
    title: "The Little Moon’s Wish", image: "images/moon.jpg", category: "Fairy Tales",
    description: "The little moon wishes to shine as brightly as the sun.",
    story: "The little moon looked at the sun and sighed, 'I wish I could shine like you.' A wise star answered, 'Without your soft glow, the children would have no gentle light to sleep by.' The moon smiled. That night she sang lullabies to the whole world and understood that her quiet light was special in its own way.",
    moral: "Be proud of who you are. Everyone shines in their own way."
  },
  {
    title: "The Little Dream Cottage", image: "images/cottage.jpg", category: "Fairy Tales",
    description: "A tiny cottage in the hills is full of warmth and magic.",
    story: "On top of a green hill stood a tiny cottage with a crooked chimney. Anyone who knocked on its door was welcomed with warm cocoa and a cozy blanket. One stormy night a lost kitten knocked, then a tired traveler, then a shy mouse. The cottage seemed to grow bigger every time, because there is always room for one more friend.",
    moral: "A kind heart always has room for others."
  },
  {
    title: "The Little Unicorn", image: "images/unicorn.jpg", category: "Fantasy",
    description: "Luna the unicorn thinks her horn is too small.",
    story: "Luna the unicorn had the smallest horn in the meadow, and the other unicorns teased her. One day the meadow lost its colors in a gray mist. Only Luna's little horn was small enough to reach into the tiny cracks in the rocks where the color was hiding. She set it free, and the meadow glowed again. Nobody ever teased Luna again.",
    moral: "What makes you different can be your greatest strength."
  },
  {
    title: "The Magic Storybook", image: "images/storybook.jpg", category: "Fantasy",
    description: "A magic book lets Sam step right inside his favorite stories.",
    story: "Sam found an old storybook in the attic. When he opened it, the letters sparkled and pulled him inside! He sailed with pirates, danced with fairies and flew with a friendly dragon. At the last page the book whispered, 'Every time you read, you can go anywhere.' Sam closed the book with a smile and could not wait to read again tomorrow.",
    moral: "Reading opens the door to endless adventures."
  }
];

/* ---------- Grab elements from the page ---------- */
const featuredGrid = document.getElementById("featured-grid");
const storyGrid = document.getElementById("story-grid");
const filterInfo = document.getElementById("filter-info");
const showAllBtn = document.getElementById("show-all");

/* ----------  BUILD STORY CARDS ----------
   createCard() returns one finished card element for a story. */
function createCard(story, index) {
  const card = document.createElement("article");
  card.className = "card";

  // textContent is safer than innerHTML for plain text
  card.innerHTML =
    '<img src="' + story.image + '" alt="Illustration for ' + story.title + '" loading="lazy">' +
    '<div class="card-body">' +
      '<span class="tag">' + story.category + '</span>' +
      '<h3>' + story.title + '</h3>' +
      '<p>' + story.description + '</p>' +
      '<button class="btn read-btn" type="button" data-index="' + index + '">Read Story</button>' +
    '</div>';
  return card;
}

// Show a list of stories inside a grid
function renderStories(list, grid) {
  grid.innerHTML = "";
  list.forEach(function (story) {
    const realIndex = stories.indexOf(story);
    grid.appendChild(createCard(story, realIndex));
  });
}

// Featured = first 3 stories. Popular = all 12.
renderStories(stories.slice(0, 3), featuredGrid);
renderStories(stories, storyGrid);

/* ---------- CATEGORY FILTER ---------- */
const categoryCards = document.querySelectorAll(".category-card");

categoryCards.forEach(function (button) {
  button.addEventListener("click", function () {
    const category = button.dataset.category;      
    const filtered = stories.filter(function (s) { return s.category === category; });
    renderStories(filtered, storyGrid);
    filterInfo.textContent = "Showing " + filtered.length + " " + category + " stories.";
    document.getElementById("popular").scrollIntoView({ behavior: "smooth" });
  });
});

showAllBtn.addEventListener("click", function () {
  renderStories(stories, storyGrid);
  filterInfo.textContent = "Showing all " + stories.length + " stories.";
});

/* ----------  STORY MODAL ---------- */
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalMoral = document.getElementById("modal-moral");
const modalClose = document.getElementById("modal-close");
let lastFocused = null; 

function openModal(index) {
  const story = stories[index];
  modalImage.src = story.image;
  modalImage.alt = "Illustration for " + story.title;
  modalTitle.textContent = story.title;
  modalText.textContent = story.story;
  modalMoral.textContent = story.moral;
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modalClose.focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused) { lastFocused.focus(); }
}

// Event delegation: one listener on the document catches every Read Story button
document.addEventListener("click", function (event) {
  const btn = event.target.closest(".read-btn");
  if (btn) { openModal(Number(btn.dataset.index)); }
});

modalClose.addEventListener("click", closeModal);
// Clicking the dark background (not the box) also closes it
modal.addEventListener("click", function (event) {
  if (event.target === modal) { closeModal(); }
});
// Escape key closes it
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.hidden) { closeModal(); }
});

/* ----------  HAMBURGER MENU ---------- */
const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

function setMenu(open) {
  mainNav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  menuToggle.textContent = open ? "✕" : "☰";
}

menuToggle.addEventListener("click", function () {
  setMenu(!mainNav.classList.contains("open"));
});

// Close the menu after choosing a link
mainNav.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () { setMenu(false); });
});

/* ---------- CONTACT FORM VALIDATION ---------- */
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formStatus = document.getElementById("form-status");

// Show or clear an error under one field
function setError(input, message) {
  document.getElementById(input.id + "-error").textContent = message;
  input.classList.toggle("input-error", message !== "");
}

// A simple email pattern: text @ text . text
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let valid = true;

  if (nameInput.value.trim().length < 2) {
    setError(nameInput, "Please enter your name (at least 2 letters).");
    valid = false;
  } else { setError(nameInput, ""); }

  if (emailInput.value.trim() === "") {
    setError(emailInput, "Please enter your email.");
    valid = false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    setError(emailInput, "Please enter a valid email, like name@example.com.");
    valid = false;
  } else { setError(emailInput, ""); }

  if (messageInput.value.trim().length < 10) {
    setError(messageInput, "Your message needs at least 10 characters.");
    valid = false;
  } else { setError(messageInput, ""); }

  if (valid) {
    formStatus.className = "form-status success";
    formStatus.textContent = "Thank you, " + nameInput.value.trim() + "! Your message passed all checks. (Demo only: no email was actually sent.)";
    form.reset();
  } else {
    formStatus.className = "form-status error";
    formStatus.textContent = "Please fix the errors above and try again.";
  }
});

/* ---------- DARK / LIGHT MODE ---------- */
const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement; // the <html> element

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
  themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
}

// try/catch: localStorage can be blocked in some browsers
function loadTheme() {
  try { return localStorage.getItem("theme") || "light"; }
  catch (error) { return "light"; }
}

function saveTheme(theme) {
  try { localStorage.setItem("theme", theme); }
  catch (error) { }
}

applyTheme(loadTheme()); 

themeToggle.addEventListener("click", function () {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
  saveTheme(next);
});