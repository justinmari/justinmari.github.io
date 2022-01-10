if (projectName == "index") {
    const canvas = document.getElementById('index-canvas');
    const c = canvas.getContext('2d');

    canvas.width = innerWidth;
    canvas.height = innerHeight;

    const mouse = {
        x: innerWidth / 2,
        y: innerHeight / 2
    };

    const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

    // Event Listeners
    addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });

    addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;

        init();
    });

    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function distance(x1, y1, x2, y2) {
        const xDist = x2 - x1;
        const yDist = y2 - y1;
    
        return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
    }

    // Objects
    class Particle {
        constructor(x, y, radius, color, radians, velocity, arcRadius) {
            this.originx = x;
            this.originy = y;
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.radians = radians;
            this.velocity = velocity;
            this.arcRadius = arcRadius;
        }

        draw() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.closePath();
        }

        update() {
            this.radians += this.velocity;
            this.x = this.originx + Math.cos(this.radians) * this.arcRadius;
            this.y = this.originy + Math.sin(this.radians) * this.arcRadius;
            this.draw();
        }
    }

    // Implementation
    let particles;
    function init() {
        particles = [];

        for (let i = 0; i < 200; i++) {
            particles.push(new Particle(3*canvas.width/5, canvas.height/2, randomIntFromRange(4, 7), randomColor(['#e14658','#c0b3a0','#3f3250','#22252c']), Math.random() * Math.PI * 2, (Math.random() * 0.001) + 0.001, randomIntFromRange(100, 500)));
        }

        for (let i = 0; i < 75; i++) {
            particles.push(new Particle(1*canvas.width/5, 2*canvas.height/3, randomIntFromRange(2, 4), randomColor(['#e14658','#c0b3a0','#3f3250','#22252c']), Math.random() * Math.PI * 2, (Math.random() * 0.001) + 0.001, randomIntFromRange(50, 200)));
        }
    }

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        c.clearRect(0, 0, canvas.width, canvas.height);

        //c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
        particles.forEach(particle => {
            particle.update();
        })
    }

    init();
    animate();
}

