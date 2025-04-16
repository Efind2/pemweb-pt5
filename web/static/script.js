function loadContent(section) {
    fetch(`/load/${section}`)
        .then(response => {
            if (!response.ok) throw new Error("Gagal ambil konten");
            return response.text();
        })
        .then(html => {
            document.getElementById("content").innerHTML = html;
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<p>Gagal memuat konten.</p>";
            console.error(error);
        });
}

function switchTab(element, section) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');
    loadContent(section);
}

window.onload = function () {
    loadContent('postingan'); // Tab default
};