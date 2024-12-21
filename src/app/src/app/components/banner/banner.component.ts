import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  currentSlide = 0;
  images = [
    { url: 'assets/produits/ev08.5/banner/noctali.webp', alt: 'Noctali Banner' },
    { url: 'assets/produits/ev08/banner/Pokemon-JCC-Etincelles-Deferlantes-1.webp', alt: 'Pikachu Banner' },
    { url: 'assets/atlastcg.png', alt: 'ATLASTCG Banner' }
  ];

  ngOnInit() {
    this.autoSlide();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0
      ? this.images.length - 1
      : this.currentSlide - 1;
  }

  private autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); // Change d'image toutes les 5 secondes
  }
}
