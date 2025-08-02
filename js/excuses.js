document.addEventListener('DOMContentLoaded', function() {
    // 101 Funny Excuses
const excuses = [
    // Financial excuses (25)
    { text: "It was on sale! (Even if it wasn't)", category: "financial" },
    { text: "I'm investing for our future", category: "financial" },
    { text: "It's a limited edition! (They're all limited edition)", category: "financial" },
    { text: "I'm boosting the economy", category: "financial" },
    { text: "It's for a charity auction (that may or may not exist)", category: "financial" },
    { text: "I'm diversifying our assets", category: "financial" },
    { text: "I'm building a retirement fund (in Hot Wheels)", category: "financial" },
    { text: "It's an NFT in physical form", category: "financial" },
    { text: "It's a tax write-off (somehow)", category: "financial" },
    { text: "I'm keeping up with inflation", category: "financial" },
    { text: "It will be worth millions someday", category: "financial" },
    { text: "I'm hedging against the stock market", category: "financial" },
    { text: "It's cheaper than a real car", category: "financial" },
    { text: "I'm creating generational wealth", category: "financial" },
    { text: "The price will double by next week", category: "financial" },
    { text: "I'm preventing future price gouging", category: "financial" },
    { text: "It's my alternative to cryptocurrency", category: "financial" },
    { text: "The bank said I needed more collateral", category: "financial" },
    { text: "I'm following Warren Buffett's investment strategy", category: "financial" },
    { text: "It's my 401(k) alternative", category: "financial" },
    { text: "The Fed is printing money anyway", category: "financial" },
    { text: "I'm shorting the toy market", category: "financial" },
    { text: "It's my inflation-proof asset", category: "financial" },
    { text: "I'm creating a diversified toy portfolio", category: "financial" },
    { text: "The interest rates are low anyway", category: "financial" },

    // Emotional excuses (25)
    { text: "This completes my collection! (Until the next one)", category: "emotional" },
    { text: "It's cheaper than therapy", category: "emotional" },
    { text: "The cashier said I'd regret not buying it", category: "emotional" },
    { text: "It's an heirloom now", category: "emotional" },
    { text: "It's my emotional support Hot Wheel", category: "emotional" },
    { text: "I'm preventing it from falling into the wrong hands", category: "emotional" },
    { text: "It sparks joy (unlike our relationship)", category: "emotional" },
    { text: "I had a bad day at work", category: "emotional" },
    { text: "It reminds me of my childhood", category: "emotional" },
    { text: "I'm preserving my mental health", category: "emotional" },
    { text: "The color matches my soul", category: "emotional" },
    { text: "I'm curating my personal happiness", category: "emotional" },
    { text: "It's part of my self-care routine", category: "emotional" },
    { text: "I'm expressing my creative side", category: "emotional" },
    { text: "It's my midlife crisis solution", category: "emotional" },
    { text: "I'm building my legacy", category: "emotional" },
    { text: "It's my love language", category: "emotional" },
    { text: "I'm honoring my inner child", category: "emotional" },
    { text: "It's my personality now", category: "emotional" },
    { text: "I'm preventing existential dread", category: "emotional" },
    { text: "It's my comfort object", category: "emotional" },
    { text: "I'm compensating for childhood trauma", category: "emotional" },
    { text: "It's my emotional outlet", category: "emotional" },
    { text: "I'm avoiding more expensive hobbies", category: "emotional" },
    { text: "It's my happy place", category: "emotional" },

    // Logical excuses (25)
    { text: "I'm supporting small businesses (at Walmart)", category: "logical" },
    { text: "I lost a bet", category: "logical" },
    { text: "It's for a work project", category: "logical" },
    { text: "I'm conducting market research", category: "logical" },
    { text: "I'm preserving it for future generations", category: "logical" },
    { text: "I'm preventing scalpers from getting it", category: "logical" },
    { text: "It's educational - for the kids (we don't have)", category: "logical" },
    { text: "It's part of my 5-year plan", category: "logical" },
    { text: "I'm doing it for science", category: "logical" },
    { text: "It's for a social media challenge", category: "logical" },
    { text: "I'm testing the laws of physics", category: "logical" },
    { text: "It's for my YouTube channel (that I'll start someday)", category: "logical" },
    { text: "I'm studying automotive design", category: "logical" },
    { text: "It's part of my home security system", category: "logical" },
    { text: "I'm preparing for the Hot Wheels apocalypse", category: "logical" },
    { text: "It's my emergency barter system", category: "logical" },
    { text: "I'm creating a time capsule", category: "logical" },
    { text: "It's for my future museum", category: "logical" },
    { text: "I'm preventing toy shortages", category: "logical" },
    { text: "It's my backup career plan", category: "logical" },
    { text: "I'm supporting American manufacturing", category: "logical" },
    { text: "It's my retirement hobby starter kit", category: "logical" },
    { text: "I'm conducting a longitudinal study", category: "logical" },
    { text: "It's for my thesis on miniature transportation", category: "logical" },
    { text: "I'm preventing the collapse of the toy industry", category: "logical" },

    // Absurd excuses (26)
    { text: "The dog looked sad when I didn't buy it", category: "absurd" },
    { text: "It matches my eyes", category: "absurd" },
    { text: "The car told me to take it home", category: "absurd" },
    { text: "I'm maintaining a balanced diet of cars", category: "absurd" },
    { text: "It was lonely on the shelf", category: "absurd" },
    { text: "My horoscope said to buy it", category: "absurd" },
    { text: "The ghost of Mattel told me to", category: "absurd" },
    { text: "It's part of my new religion", category: "absurd" },
    { text: "I'm collecting them for my cat", category: "absurd" },
    { text: "It's my spirit animal in car form", category: "absurd" },
    { text: "I'm building a tiny car army", category: "absurd" },
    { text: "It's my tribute to Hot Wheels Jesus", category: "absurd" },
    { text: "I'm preparing for tiny car racing season", category: "absurd" },
    { text: "It's my plan to confuse archaeologists", category: "absurd" },
    { text: "I'm creating a miniature traffic jam", category: "absurd" },
    { text: "It's my offering to the toy gods", category: "absurd" },
    { text: "I'm training to be a tiny mechanic", category: "absurd" },
    { text: "It's my escape plan for when I shrink", category: "absurd" },
    { text: "I'm building a tiny car Stonehenge", category: "absurd" },
    { text: "It's my attempt to communicate with aliens", category: "absurd" },
    { text: "I'm preparing for the tiny car revolution", category: "absurd" },
    { text: "It's my backup plan for when ants take over", category: "absurd" },
    { text: "I'm creating a tiny car dating service", category: "absurd" },
    { text: "It's my application to be a Hot Wheels designer", category: "absurd" },
    { text: "I'm preventing car-ona virus", category: "absurd" },
    { text: "It's my tiny contribution to global warming", category: "absurd" }
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