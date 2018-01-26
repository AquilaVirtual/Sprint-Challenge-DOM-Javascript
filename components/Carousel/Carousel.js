class Carousel {
    constructor(containererID) {
        this.container = document.getElementById(containerID) || document.body;
        this.slides = this.container.querySelectorAll(".Carousel");
        this.total = this.slides.length - 1;
        this.current = 0;
        this.slide(this.current);
    }
    next(interval) {
        (this.current === this.total) ? this.current = 0 : this.current += 1;
        this.stop();
        this.slide(this.current);
        if (typeof interval === 'number' && (interval % 1) === 0) {
            let context = this;
            this.run = setTimeout(() => {
            context.next(interval);    
            }, interval);
        }
    }
    stop() {
        clearTimeout(this.run);
    }
    slide(index) {
        if (index >= 0 && index <= this.total) {
            this.stop();
            for (let i = 0; i <= this.total; i++) {
                if (i === index) {
                    this.slides[i];
                } 
            }
        } 
    }
}

let carousels = document.querySelectorAll(".Carousel");
carousels = Array.from(carousels).map(carousel => new Carousel(carousel));