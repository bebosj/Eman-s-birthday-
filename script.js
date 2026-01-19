document.addEventListener('DOMContentLoaded', function() {
    // Initialize Feather Icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }

    // Canvas Setup for Interactive Bouquet
    const canvas = document.getElementById('bouquetCanvas');
    const ctx = canvas.getContext('2d');
    const flowerCountElement = document.getElementById('flowerCount');
    const addRoseBtn = document.getElementById('addRose');
    const addVioletBtn = document.getElementById('addViolet');
    const resetBouquetBtn = document.getElementById('resetBouquet');
    const playMusicBtn = document.getElementById('playMusic');
    const showConfettiBtn = document.getElementById('showConfetti');

    // Set canvas dimensions
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        drawInitialBouquet();
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let flowers = [];
    const maxFlowers = 20;

    // Define flower types
    const flowerTypes = {
        rose: {
            color: '#e11d48',
            size: [25, 40],
            stemColor: '#15803d',
            petalCount: 8
        },
        violet: {
            color: '#7c3aed',
            size: [20, 35],
            stemColor: '#16a34a',
            petalCount: 5
        }
    };

    // Draw a single flower
    function drawFlower(flower) {
        // Draw stem
        ctx.beginPath();
        ctx.moveTo(flower.x, flower.y);
        ctx.lineTo(flower.x, flower.y + flower.stemLength);
        ctx.strokeStyle = flower.stemColor;
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw petals
        const petalRadius = flower.size[0];
        const centerRadius = flower.size[1] / 4;

        for (let i = 0; i < flower.petalCount; i++) {
            const angle = (i * 2 * Math.PI) / flower.petalCount;
            const petalX = flower.x + Math.cos(angle) * petalRadius;
            const petalY = flower.y - Math.sin(angle) * petalRadius;

            ctx.beginPath();
            ctx.ellipse(petalX, petalY, flower.size[0] / 2, flower.size[1] / 2, angle, 0, 2 * Math.PI);
            ctx.fillStyle = flower.color;
            ctx.fill();
        }

        // Draw center
        ctx.beginPath();
        ctx.arc(flower.x, flower.y, centerRadius, 0, 2 * Math.PI);
        ctx.fillStyle = '#fbbf24';
        ctx.fill();
    }

    // Draw all flowers
    function drawBouquet() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        flowers.forEach(flower => drawFlower(flower));
        flowerCountElement.textContent = flowers.length;
    }

    // Draw initial bouquet
    function drawInitialBouquet() {
        flowers = [];
        const initialFlowers = 5;

        for (let i = 0; i < initialFlowers; i++) {
            const isRose = i % 2 === 0;
            const type = isRose ? 'rose' : 'violet';
            const flowerType = flowerTypes[type];
            
            flowers.push({
                x: 50 + (i * (canvas.width - 100) / (initialFlowers - 1)),
                y: canvas.height - 100 - Math.random() * 100,
                size: [
                    flowerType.size[0] + Math.random() * 10,
                    flowerType.size[1] + Math.random() * 10
                ],
                stemLength: 60 + Math.random() * 40,
                stemColor: flowerType.stemColor,
                color: flowerType.color,
                petalCount: flowerType.petalCount,
                type: type
            });
        }

        drawBouquet();
    }

    // Add a new flower
    function addFlower(type) {
        if (flowers.length >= maxFlowers) {
            alert('The bouquet is full! You can reset it to add more flowers.');
            return;
        }

        const flowerType = flowerTypes[type];
        const x = 50 + Math.random() * (canvas.width - 100);
        const y = canvas.height - 100 - Math.random() * 150;

        const newFlower = {
            x: x,
            y: y,
            size: [
                flowerType.size[0] + Math.random() * 10,
                flowerType.size[1] + Math.random() * 10
            ],
            stemLength: 60 + Math.random() * 40,
            stemColor: flowerType.stemColor,
            color: flowerType.color,
            petalCount: flowerType.petalCount,
            type: type
        };

        flowers.push(newFlower);
        drawBouquet();
        createFloatingPetal(x, y, flowerType.color);
    }

    // Reset bouquet
    function resetBouquet() {
        drawInitialBouquet();
        createConfettiEffect(50);
    }

    // Create floating petal animation
    function createFloatingPetal(x, y, color) {
        const petal = document.createElement('div');
        petal.className = 'absolute w-4 h-4 rounded-full pointer-events-none';
        petal.style.left = x + 'px';
        petal.style.top = y + 'px';
        petal.style.backgroundColor = color;
        petal.style.zIndex = '100';
        document.body.appendChild(petal);

        const animation = petal.animate([
            { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${Math.random() * 100 - 50}px, -150px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: 2000,
            easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
        });

        animation.onfinish = () => petal.remove();
    }

    // Birthday melody
    const birthdayMelody = [
        { note: 'C4', duration: 0.5 },
        { note: 'C4', duration: 0.5 },
        { note: 'D4', duration: 0.5 },
        { note: 'C4', duration: 0.5 },
        { note: 'F4', duration: 0.5 },
        { note: 'E4', duration: 1 },
        { note: 'C4', duration: 0.5 },
        { note: 'C4', duration: 0.5 },
        { note: 'D4', duration: 0.5 },
        { note: 'C4', duration: 0.5 },
        { note: 'G4', duration: 0.5 },
        { note: 'F4', duration: 1 }
    ];

    // Play birthday music
    function playBirthdayMusic() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            let time = audioContext.currentTime;

            birthdayMelody.forEach(tone => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.type = 'sine';
                oscillator.frequency.value = getFrequency(tone.note);

                gainNode.gain.setValueAtTime(0, time);
                gainNode.gain.linearRampToValueAtTime(0.1, time + 0.01);
                gainNode.gain.exponentialRampToValueAtTime(0.01, time + tone.duration * 0.9);

                oscillator.start(time);
                oscillator.stop(time + tone.duration);

                time += tone.duration;
            });
        } catch (e) {
            console.log('Audio not supported, showing visual feedback instead');
            createMusicVisualization();
        }
    }

    // Helper function for note frequency
    function getFrequency(note) {
        const notes = {
            'C4': 261.63,
            'D4': 293.66,
            'E4': 329.63,
            'F4': 349.23,
            'G4': 392.00
        };
        return notes[note] || 440;
    }

    // Visual music feedback
    function createMusicVisualization() {
        const buttons = [playMusicBtn];
        buttons.forEach(btn => {
            btn.classList.add('animate-pulse-glow');
            setTimeout(() => {
                btn.classList.remove('animate-pulse-glow');
            }, 2000);
        });
        createConfettiEffect(30);
    }

    // Confetti effect
    function createConfettiEffect(count) {
        const colors = ['#e11d48', '#7c3aed', '#fbbf24', '#10b981', '#3b82f6'];

        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-20px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

            document.body.appendChild(confetti);

            const animation = confetti.animate([
                { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 2000,
                easing: 'cubic-bezier(0.215, 0.610, 0.355, 1)'
            });

            animation.onfinish = () => confetti.remove();
        }
    }

    // Event Listeners
    addRoseBtn.addEventListener('click', () => addFlower('rose'));
    addVioletBtn.addEventListener('click', () => addFlower('violet'));
    resetBouquetBtn.addEventListener('click', resetBouquet);
    playMusicBtn.addEventListener('click', playBirthdayMusic);
    showConfettiBtn.addEventListener('click', () => createConfettiEffect(100));

    // Canvas click to add random flower
    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Check if click is near existing flower
        const isNearFlower = flowers.some(flower => {
            const distance = Math.sqrt(
                Math.pow(flower.x - x, 2) + Math.pow(flower.y - y, 2)
            );
            return distance < 50;
        });

        if (!isNearFlower && flowers.length < maxFlowers) {
            const type = Math.random() > 0.5 ? 'rose' : 'violet';
            addFlower(type);
        }
    });

    // Initialize
    drawInitialBouquet();
});
