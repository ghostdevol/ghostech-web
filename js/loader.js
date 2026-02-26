document.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById("content");
  const sidebarLinks = document.querySelectorAll(".nav a");

  // Load HTML page into #content
  async function loadPage(page) {
    try {
      console.log("Loading:", page);

      const response = await fetch(page);
      if (!response.ok) throw new Error("Page not found");

      const html = await response.text();
      content.innerHTML = html;

      // Initialize any tabs inside the new content
      initTabs();

      // If page has a specific JS file like viewer.js, dynamically load it
      if (page === "viewer.html") {
        const script = document.createElement("script");
        script.src = "viewer.js";
        document.body.appendChild(script);
      }

    } catch (err) {
      content.innerHTML = "<h2>Error loading page.</h2>";
      console.error(err);
    }
  }

  // Initialize tabs inside current content
  function initTabs() {
    const tabButtons = content.querySelectorAll(".tab-btn");
    const tabContents = content.querySelectorAll(".tab-content");

    if(tabButtons.length === 0) return; // no tabs in this page

    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabContents.forEach(c => c.style.display = "none");
        const target = content.querySelector(`#${btn.dataset.tab}`);
        if(target) target.style.display = "block";
      });
    });

    // Show default tab if exists
    if(tabContents.length > 0) tabContents[0].style.display = "block";
  }

  // Attach sidebar link events
  sidebarLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.dataset.page;
      loadPage(page);
    });
  });

  // Load default page on start
  loadPage("home.html");

});