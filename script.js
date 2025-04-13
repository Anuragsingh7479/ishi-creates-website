document.addEventListener('DOMContentLoaded', function() {
    
    const videos = document.querySelectorAll('.property-card video');
    if (videos.length > 0) {
        const playPauseButtons = document.querySelectorAll('.play-pause');
        const muteUnmuteButtons = document.querySelectorAll('.mute-unmute');
        
        
        videos.forEach((video, index) => {
            if (index > 0) {
                video.pause();
                video.currentTime = 0; 
            }
        });
        
        
        videos.forEach((video, index) => {
            const playPauseBtn = playPauseButtons[index];
            const muteUnmuteBtn = muteUnmuteButtons[index];
            
            
            video.addEventListener('ended', function() {
                
                video.parentElement.style.opacity = '0';
                setTimeout(() => {
                    video.parentElement.style.opacity = '1';
                }, 500);
                
            
                video.pause();
                playPauseBtn.textContent = 'Play';
                
                
                const nextIndex = (index + 1) % videos.length;
                const nextVideo = videos[nextIndex];
                const nextPlayPauseBtn = playPauseButtons[nextIndex];
                
                nextVideo.currentTime = 0; // Start from beginning
                nextVideo.play();
                nextPlayPauseBtn.textContent = 'Pause';
                
                
                nextVideo.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            });
            
            
            playPauseBtn.addEventListener('click', function() {
                if (video.paused) {
                    
                    videos.forEach((v, i) => {
                        if (i !== index && !v.paused) {
                            v.pause();
                            playPauseButtons[i].textContent = 'Play';
                        }
                    });
                    
                    video.play();
                    playPauseBtn.textContent = 'Pause';
                } else {
                    video.pause();
                    playPauseBtn.textContent = 'Play';
                }
            });
            
            
            muteUnmuteBtn.addEventListener('click', function() {
                video.muted = !video.muted;
                muteUnmuteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
            });
            
        
            playPauseBtn.textContent = index === 0 ? 'Pause' : 'Play';
            muteUnmuteBtn.textContent = 'Mute';
        });
        
        if (videos.length > 0) {
            videos[0].play();
        }
    }

    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
           
            alert(`Thank you for your message, ${name}! I'll get back to you soon.\nYour message will be sent to: ishi21963@gmail.com`);
            
            
            this.reset();
            
           
        });
    }
});