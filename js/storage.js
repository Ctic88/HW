document.addEventListener('DOMContentLoaded', function() {
    // Storage Calculator Logic
    const storageForm = document.getElementById('storageCalculator');
    const resultDiv = document.getElementById('calculatorResult');
    const resultText = document.getElementById('resultText');
    const storageRecommendation = document.getElementById('storageRecommendation');

    if (storageForm) {
        storageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const carCount = parseInt(document.getElementById('carCount').value);
            const awareness = document.getElementById('spouseAwareness').value;
            
            // Calculate doom level
            let doomLevel;
            let doomMessage;
            
            if (carCount < 100) {
                doomLevel = 1;
                doomMessage = "You're still safe... for now.";
            } else if (carCount < 300) {
                doomLevel = 2;
                doomMessage = "Starting to get suspicious glances.";
            } else if (carCount < 500) {
                doomLevel = 3;
                doomMessage = "You might want to rent a storage unit.";
            } else if (carCount < 1000) {
                doomLevel = 4;
                doomMessage = "Have you considered building an addition to your house?";
            } else {
                doomLevel = 5;
                doomMessage = "Just buy a new house for your collection at this point.";
            }
            
            // Adjust based on spouse awareness
            if (awareness === 'clueless') {
                doomMessage += " Your spouse has no idea - keep it that way!";
            } else if (awareness === 'suspicious') {
                doomLevel += 1;
                doomMessage += " Your spouse is getting suspicious - time to get creative.";
            } else if (awareness === 'angry') {
                doomLevel += 2;
                doomMessage += " Your spouse is angry - good luck with that.";
            } else {
                doomLevel += 1;
                doomMessage += " At least your spouse has accepted their fate.";
            }
            
            // Cap doom level
            doomLevel = Math.min(doomLevel, 5);
            
            // Display result
            resultText.textContent = doomMessage;
            
            // Create doom meter
            let doomMeter = '<div class="doom-meter mt-3 mb-3">';
            doomMeter += '<div class="progress" style="height: 30px;">';
            doomMeter += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${doomLevel * 20}%" aria-valuenow="${doomLevel * 20}" aria-valuemin="0" aria-valuemax="100">`;
            doomMeter += `${doomLevel}/5 Doom Level`;
            doomMeter += '</div></div></div>';
            
            // Create storage recommendation
            let recommendation = '<div class="mt-4"><h4>Recommended Solutions:</h4><ul class="list-group">';
            
            if (doomLevel <= 2) {
                recommendation += '<li class="list-group-item">Wall displays</li>';
                recommendation += '<li class="list-group-item">Under bed storage</li>';
            } else if (doomLevel <= 3) {
                recommendation += '<li class="list-group-item">Closet conversion</li>';
                recommendation += '<li class="list-group-item">Garage takeover</li>';
            } else {
                recommendation += '<li class="list-group-item">Rent a storage unit</li>';
                recommendation += '<li class="list-group-item">Friend\'s house (until they notice)</li>';
                recommendation += '<li class="list-group-item">Secret room construction</li>';
            }
            
            recommendation += '</ul></div>';
            
            storageRecommendation.innerHTML = doomMeter + recommendation;
            resultDiv.style.display = 'block';
        });
    }
    
    // Add funny hover effect to solution cards
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(229, 25, 55, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
});