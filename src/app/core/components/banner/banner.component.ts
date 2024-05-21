import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
 @Input({required:true}) bannerTitle:string = '';
 @Input() bannerOverview:string = '';
 @Input() key:string = '';
}
