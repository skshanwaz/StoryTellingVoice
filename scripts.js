document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".load-link"); // Select all links with the 'load-link' class
    const targetElement = document.getElementById("target-content");

    // Add a click event listener to each link
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior

            const file = link.getAttribute("data-file"); // Get the file specified in data-file attribute

            // Fetch the content of the linked file
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => {
                    targetElement.innerHTML = data; // Insert the content into row-3
                })
                .catch(error => {
                    targetElement.innerHTML = `<p>Error loading content: ${error.message}</p>`;
                });
        });
    });
});
