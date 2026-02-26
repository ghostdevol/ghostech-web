document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const menuBtn = document.getElementById("menu-btn");
    const pageList = document.getElementById("page-list");
    const viewer = document.getElementById("viewer");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
    });

    fetch("pages/")
        .then(response => response.text())
        .then(text => {
            const parser = new DOMParser();
            const html = parser.parseFromString(text, "text/html");
            const links = [...html.querySelectorAll("a")];

            links.forEach(link => {
                const name = link.textContent;
                if (name.endsWith(".html")) {
                    const cleanName = name.replace(".html", "");
                    const a = document.createElement("a");
                    a.textContent = cleanName;
                    a.href = "#";
                    a.className = "page-link";

                    a.addEventListener("click", () => {
                        viewer.src = "viewer.html?page=" + name;
                        sidebar.classList.remove("open");
                    });

                    pageList.appendChild(a);
                }
            });
        });
});
