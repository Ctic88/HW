document.addEventListener('DOMContentLoaded', function() {
    // Reveal more signs when button is clicked
    const revealBtn = document.getElementById('revealMoreSigns');
    const moreSigns = document.getElementById('moreSigns');
    
    if (revealBtn && moreSigns) {
        revealBtn.addEventListener('click', function() {
            // Toggle visibility
            if (moreSigns.style.display === 'none') {
                moreSigns.style.display = 'flex';
                revealBtn.innerHTML = '<i class="fas fa-chevron-up me-2"></i> Show Fewer Signs';
                
                // Add additional signs dynamically
                moreSigns.innerHTML = `
                    <div class="col-md-6">
                        <div class="card h-100 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-danger text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-exclamation-triangle fa-2x"></i>
                                    </div>
                                    <h3 class="mb-0">You've bought duplicates "just in case"</h3>
                                </div>
                                <p class="card-text">One to open, one to keep carded, and three extras because... well, you never know.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-danger text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-exclamation-triangle fa-2x"></i>
                                    </div>
                                    <h3 class="mb-0">You have a favorite peg at Walmart</h3>
                                </div>
                                <p class="card-text">And you check it religiously, even though you know they haven't restocked.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-danger text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-exclamation-triangle fa-2x"></i>
                                    </div>
                                    <h3 class="mb-0">You've considered a second job</h3>
                                </div>
                                <p class="card-text">Not to pay bills, but to fund more Hotwheels purchases.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-danger text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-exclamation-triangle fa-2x"></i>
                                    </div>
                                    <h3 class="mb-0">You know what "Super Treasure Hunt" means</h3>
                                </div>
                                <p class="card-text">And you've probably had dreams about finding one.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-danger text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-exclamation-triangle fa-2x"></i>
                                    </div>
                                    <h3 class="mb-0">You've lied about prices</h3>
                                </div>
                                <p class="card-text">"Oh this? I've had it for years..." (bought yesterday for $200).</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card h-100 border-danger">
                            <div class="card-body">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-danger text-white rounded-circle p-3 me-3">
                                        <i class="fas fa-exclamation-triangle fa-2x"></i>
                                    </div>
                                    <h3 class="mb-0">Your storage solution is "more shelves"</h3>
                                </div>
                                <p class="card-text">Not "fewer cars" - that's crazy talk.</p>
                            </div>
                        </div>
                    </div>
                `;
            } else {
                moreSigns.style.display = 'none';
                revealBtn.innerHTML = '<i class="fas fa-chevron-down me-2"></i> Show More Signs';
            }
        });
    }
    
    // Add funny hover effect to testimonial cards
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});