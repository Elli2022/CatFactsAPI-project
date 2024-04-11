document.getElementById('fetch-fact').addEventListener('click', function(event) {
    event.preventDefault(); 
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            document.getElementById('cat-fact').textContent = data.fact;
        })
        .catch(error => {
            console.error('Error fetching cat fact:', error);
            document.getElementById('cat-fact').textContent = 'Failed to load cat fact. Please try again.';
        });
});
