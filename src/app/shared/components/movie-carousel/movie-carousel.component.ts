import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IvideoContent } from '../../models/video-Content';
import { DescriptionPipe } from '../../pipes/description.pipe';
import { ImagePipe } from '../../pipes/image.pipe';
import { CommonModule, NgIf } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-movie-carousel',
  standalone: true,
  imports: [DescriptionPipe,ImagePipe,NgIf,CommonModule],
  templateUrl: './movie-carousel.component.html',
  styleUrl: './movie-carousel.component.css',
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class MovieCarouselComponent implements OnInit,AfterViewInit {
  ngAfterViewInit(): void {
    this.initSwipper()
  }
  ngOnInit(): void {
    
  }
  @Input () videoContents:IvideoContent[] = [];
  @Input () title:string='';
  @ViewChild('swiperContainer') swiperContainer!: ElementRef
  selectedContent:string|null = null;

  private initSwipper(){
    return new Swiper(this.swiperContainer.nativeElement, {

      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,

      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
       }
      }
    })
  }

  setHoverMovie(movie:IvideoContent){
     this.selectedContent = movie.title ?? movie.name
  }

  clearHoverMovie(){
    this.selectedContent = null
  }
}
