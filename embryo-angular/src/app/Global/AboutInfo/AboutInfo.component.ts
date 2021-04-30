import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'embryo-AboutInfo',
  templateUrl: './AboutInfo.component.html',
  styleUrls: ['./AboutInfo.component.scss']
})
export class AboutInfoComponent implements OnInit {

   @Input() data : any;
   @Input() isRTL : any;
   slideConfig : any;
   data1 = {
      img: "assets/images/hair.jpg",
      content:"<h4>New Arrival</h4><h1 class='text-main'>Biggest Sale</h1><h1 class='text-bold mb-4'>50% <sup class='bold-sup'>Flat Off</sup></h1>"
   } ;

   slides = [
    {
       img: "assets/images/about-us.jpg",
       content:"<h4>New Arrival</h4><h1 class='text-main'>Biggest Sale</h1><h1 class='text-bold mb-4'>50% <sup class='bold-sup'>Flat Off</sup></h1>"
    },
    {
       img: "assets/images/about-us.jpg",
       content:"<h4>Women's Special</h4><h1 class='text-main'>Winter Sale </h1><h1 class='text-bold mb-4'>40% <sup class='bold-sup'>Off</sup></h1>"
    },
    {
       img: "assets/images/about-us.jpg",
       content:"<h4>Special Deal</h4><h1 class='text-main'>Mens Collection</h1><h1 class='text-bold mb-4'>30% <sup class='bold-sup'>Off</sup></h1>"
    }
 ];
   
   constructor() { }

   ngOnInit() {
     console.log("testdfd" + JSON.stringify(this.slides));
     
   }
   ngOnChanges() {
    this.slideConfig = {
       infinite: true,
       centerMode: true,
       slidesToShow: 5,
       slidesToScroll: 2,
       autoplay: true,
       autoplaySpeed: 2000,
       rtl: this.isRTL,
       responsive: [
          {
             breakpoint: 768,
             settings: {
                centerMode: true,
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: true,
                autoplaySpeed: 2000
             }
          },
          {
             breakpoint: 480,
             settings: {
                centerMode: true,
                slidesToShow: 1,
                autoplay: true,
                autoplaySpeed: 2000
             }
          }
       ]
    };
 }

}
