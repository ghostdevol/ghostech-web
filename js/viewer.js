const params = new URLSearchParams(window.location.search);
const page = params.get("page");

if (page) {
    fetch("pages/" + page)
        .then(r => r.text())
        .then(html => {
            document.getElementById("content").innerHTML = html;
        });
}
