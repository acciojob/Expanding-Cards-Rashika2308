const images = [
    {
        url: "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Explore the world"
    },
    {
        url: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Wild Forest"
    },
    {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
        text: "City in Winter"
    },
    {
        url: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
        text: "Mountain Cloud"
    },
    {
        url: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "Sunny Beach"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    
    images.forEach((image, index) => {
        const panel = document.createElement('div');
        panel.className = index === 0 ? 'panel active' : 'panel';
        panel.id = `panel-${index + 1}`;
        panel.style.backgroundImage = `url('${image.url}')`;
        
        const text = document.createElement('div');
        text.className = 'img-text';
        text.textContent = image.text;
        
        panel.appendChild(text);
        container.appendChild(panel);
        
        panel.addEventListener('click', () => {
            document.querySelectorAll('.panel').forEach(p => {
                p.classList.remove('active');
            });
            
            panel.classList.add('active');
        });
    });
});