document.addEventListener('DOMContentLoaded', function() {
    // Make collection cards tilt on mouse move
    const collectionCards = document.querySelectorAll('.collection-card');
    collectionCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const x = e.offsetX;
            const y = e.offsetY;
            const centerX = this.offsetWidth / 2;
            const centerY = this.offsetHeight / 2;
            
            const angleX = (y - centerY) / 10;
            const angleY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px)';
        });
    });

    // Funny quick view button alerts
    const quickViewButtons = document.querySelectorAll('.card-overlay button');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const funnyMessages = [
                "This car is so rare even we're not sure it exists!",
                "Warning: Viewing may cause intense desire to empty your bank account",
                "This one comes with a free divorce attorney consultation",
                "You don't need it... but you definitely want it",
                "This model was personally blessed by the Hot Wheels pope"
            ];
            
            const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
            alert(randomMessage);
        });
    });



    // Add funny hover effect to social icons
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            const icons = ['fa-laugh-squint', 'fa-grin-tongue-wink', 'fa-grin-stars', 'fa-grin-hearts'];
            const randomIcon = icons[Math.floor(Math.random() * icons.length)];
            
            // Temporarily change icon
            const currentIcon = this.querySelector('i').className;
            this.querySelector('i').className = `fas ${randomIcon}`;
            
            // Change back after delay
            setTimeout(() => {
                this.querySelector('i').className = currentIcon;
            }, 1000);
        });
    });
});