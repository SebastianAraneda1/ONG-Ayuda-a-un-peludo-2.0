import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  public carouselImgs = [
    'https://cdn.shopify.com/s/files/1/0468/5460/2913/files/no-compres-adopta.jpg?v=1605174526',

    'https://i.pinimg.com/originals/ff/0a/fd/ff0afd86b78150506ef91848ea6908dd.jpg',

    'https://assets.megamediaradios.fm/sites/3/2022/02/gatos-y-perros.jpg'
  ];

  public activeIndex = 0;
  public suscription: any;

  ngOnInit(): void{
    this.autoSlide();
  }

  nextSlide(e: any): void{
    this.activeIndex = (this.activeIndex + 1) % this.carouselImgs.length;
    if(e){
      clearTimeout(this.suscription);
      this.autoSlide();
    }
  }

  prevSlide(e: any): void{
    this.activeIndex = (this.activeIndex - 1 + this.carouselImgs.length) % this.carouselImgs.length;
    if(e){
      clearTimeout(this.suscription);
      this.autoSlide();
    }
  }
  
  autoSlide(): void{
    this.suscription = setTimeout(() => {
      this.nextSlide(null);
      this.autoSlide();
    }, 3000);
  }
  
}
