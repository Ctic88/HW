document.addEventListener('DOMContentLoaded', function() {
    // Stealth Calculator Logic
    const stealthForm = document.getElementById('stealthCalculator');
    const resultDiv = document.getElementById('calculatorResult');
    const resultText = document.getElementById('resultText');
    const stealthRecommendation = document.getElementById('stealthRecommendation');

    if (stealthForm) {
        stealthForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const frequency = document.getElementById('purchaseFrequency').value;
            const tech = document.getElementById('spouseTech').value;
            const bank = document.getElementById('bankAccess').value;
            
            // Calculate risk level
            let riskLevel = 0;
            let riskMessage;
            
            // Frequency impact
            if (frequency === 'occasional') riskLevel += 1;
            else if (frequency === 'regular') riskLevel += 2;
            else if (frequency === 'frequent') riskLevel += 3;
            else riskLevel += 4;
            
            // Tech impact
            if (tech === 'clueless') riskLevel -= 1;
            else if (tech === 'basic') riskLevel += 0;
            else if (tech === 'advanced') riskLevel += 1;
            else riskLevel += 2;
            
            // Bank access impact
            if (bank === 'none') riskLevel -= 1;
            else if (bank === 'view') riskLevel += 1;
            else riskLevel += 2;
            
            // Cap between 1-5
            riskLevel = Math.max(1, Math.min(riskLevel, 5));
            
            // Risk messages
            const messages = [
                "You're basically invisible! Keep doing what you're doing.",
                "Low risk - just don't get too cocky.",
                "Moderate risk - time to step up your stealth game.",
                "High risk - your spouse is probably suspicious.",
                "DANGER! You're basically leaving a paper trail to your collection!"
            ];
            
            riskMessage = messages[riskLevel - 1];
            
            // Display result
            resultText.textContent = riskMessage;
            
            // Create risk meter
            let riskMeter = '<div class="risk-meter mt-3 mb-3">';
            riskMeter += '<div class="progress" style="height: 30px;">';
            riskMeter += `<div class="progress-bar bg-danger" role="progressbar" style="width: ${riskLevel * 20}%" aria-valuenow="${riskLevel * 20}" aria-valuemin="0" aria-valuemax="100">`;
            riskMeter += `${riskLevel}/5 Risk Level`;
            riskMeter += '</div></div></div>';
            
            // Create stealth recommendation
            let recommendation = '<div class="mt-4"><h4>Recommended Techniques:</h4><ul class="list-group">';
            
            if (riskLevel <= 2) {
                recommendation += '<li class="list-group-item">Mail interception</li>';
                recommendation += '<li class="list-group-item">Laundry camouflage</li>';
            } else if (riskLevel <= 3) {
                recommendation += '<li class="list-group-item">Friend\'s address</li>';
                recommendation += '<li class="list-group-item">Trunk stash</li>';
            } else {
                recommendation += '<li class="list-group-item">Work delivery</li>';
                recommendation += '<li class="list-group-item">Digital laundering</li>';
                recommendation += '<li class="list-group-item">Create fake business</li>';
            }
            
            recommendation += '</ul></div>';
            
            stealthRecommendation.innerHTML = riskMeter + recommendation;
            resultDiv.style.display = 'block';
        });
    }
    
    // Add hover effect to method cards
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach(card => {
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