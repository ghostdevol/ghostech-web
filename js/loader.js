const content = document.getElementById("content");
const links = document.querySelectorAll("#sidebar a");

async function loadPage(page) {
  try {
    const response = await fetch(`pages/${page}`);
    const html = await response.text();
    content.innerHTML = html;
  } catch (err) {
    content.innerHTML = "Error loading page.";
  }
}

// Load default page
loadPage("home.html");

links.forEach(link => {
  link.addEventListener("click", () => {
    const page = link.getAttribute("data-page");
    loadPage(page);
  });
});