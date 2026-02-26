document.addEventListener("DOMContentLoaded", () => {

  const content = document.getElementById("content");
  const links = document.querySelectorAll("[data-page]");

  async function loadPage(page) {
    try {
      console.log("Loading:", page);

      const response = await fetch(`pages/${page}`);
      const html = await response.text();

      content.innerHTML = html;
    } catch (error) {
      content.innerHTML = "Error loading page.";
      console.error(error);
    }
  }

  // Load home by default
  loadPage("home.html");

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      loadPage(page);
    });
  });

});