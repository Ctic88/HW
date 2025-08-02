document.addEventListener('DOMContentLoaded', function() {
    // 101 Funny Excuses
    const excuses = [
        { text: "It was on sale! (Even if it wasn't)", category: "financial" },
        { text: "This completes my collection! (Until the next one)", category: "emotional" },
        { text: "I'm investing for our future", category: "financial" },
        { text: "The dog looked sad when I didn't buy it", category: "absurd" },
        { text: "It's a limited edition! (They're all limited edition)", category: "financial" },
        { text: "I'm supporting small businesses (at Walmart)", category: "logical" },
        { text: "It matches my eyes", category: "absurd" },
        { text: "I lost a bet", category: "logical" },
        { text: "It's for a work project", category: "logical" },
        { text: "I'm conducting market research", category: "logical" },
        { text: "It's cheaper than therapy", category: "emotional" },
        { text: "I'm preserving it for future generations", category: "logical" },
        { text: "The cashier said I'd regret not buying it", category: "emotional" },
        { text: "I'm boosting the economy", category: "financial" },
        { text: "It's an heirloom now", category: "emotional" },
        { text: "I'm preventing scalpers from getting it", category: "logical" },
        { text: "It's for a charity auction (that may or may not exist)", category: "financial" },
        { text: "I'm diversifying our assets", category: "financial" },
        { text: "It's educational - for the kids (we don't have)", category: "logical" },
        { text: "I'm building a retirement fund (in Hot Wheels)", category: "financial" },
        // Add 81 more excuses...
        { text: "The car told me to take it home", category: "absurd" },
        { text: "It's part of my 5-year plan", category: "logical" },
        { text: "I'm preventing it from falling into the wrong hands", category: "emotional" },
        { text: "It's an NFT in physical form", category: "financial" },
        { text: "I'm doing it for science", category: "logical" },
        { text: "It's a tax write-off (somehow)", category: "financial" },
        { text: "I'm maintaining a balanced diet of cars", category: "absurd" },
        { text: "It's for a social media challenge", category: "logical" },
        { text: "I'm keeping up with inflation", category: "financial" },
        { text: "It's my emotional support Hot Wheel", category: "emotional" }
    ];

    // Fill in remaining excuses to reach 101
    for (let i = excuses.length + 1; i <= 101; i++) {
        excuses.push({
            text: `Placeholder excuse #${i} (because 101 is a nice number)`,
            category: ["financial", "emotional", "logical", "absurd"][Math.floor(Math.random() * 4)]
        });
    }

    const container = document.getElementById('excusesContainer');
    const searchInput = document.getElementById('excuseSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Display all excuses initially
    displayExcuses(excuses);

    // Search functionality - FIXED THIS SECTION
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filtered = excuses.filter(excuse => {
        return excuse.text.toLowerCase().includes(searchTerm);
    });
    displayExcuses(filtered);
});

    // Filter by category
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            if (category === 'all') {
                displayExcuses(excuses);
            } else {
                const filtered = excuses.filter(excuse => excuse.category === category);
                displayExcuses(filtered);
            }
        });
    });

    // Display excuses in the container
    function displayExcuses(excusesToShow) {
        container.innerHTML = '';
        excusesToShow.forEach((excuse, index) => {
            const categoryClass = {
                financial: 'bg-success',
                emotional: 'bg-warning text-dark',
                logical: 'bg-primary',
                absurd: 'bg-info text-dark'
            }[excuse.category];
            
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4';
            card.innerHTML = `
                <div class="card excuse-card h-100 mb-3">
                    <div class="card-body">
                        <div class="d-flex align-items-start">
                            <div class="excuse-number">${index + 1}</div>
                            <div>
                                <p class="mb-2">${excuse.text}</p>
                                <span class="badge ${categoryClass} category-badge">
                                    ${excuse.category.toUpperCase()}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }
});