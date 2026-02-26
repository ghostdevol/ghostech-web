document.getElementById("menu-btn").onclick = () => {
    document.getElementById("sidebar").classList.toggle("open");
};

fetch("pages/")
    .then(r => r.text())
    .then(html => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        let links = [...doc.querySelectorAll("a")];
        let list = document.getElementById("page-list");

        links.forEach(a => {
            if (a.href.endsWith(".html")) {
                let name = a.textContent;
                let item = document.createElement("a");
                item.href = "viewer.html?page=" + name;
                item.textContent = name.replace(".html", "");
                list.appendChild(item);
            }
        });
    });
