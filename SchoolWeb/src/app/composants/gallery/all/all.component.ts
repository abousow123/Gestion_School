import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];


  isEditable = false;
  numGallery: number = 0;


  items: GalleryItem[];

  imageData = data;
  imageData1 = data1 ;

  slides = [
    {
      url: 'https://source.unsplash.com/1600x900/?nature,water'
    },
    {
      url: 'https://source.unsplash.com/1600x1600/?nature,forest'
    }
  ]

  images = [
    {path: 'assets/images/5.png'},
    {path: 'assets/images/2.jpg'},
    {path: 'assets/images/3.jpg'},
    {path: 'assets/images/gallery/4.jpeg'},
    {path: 'assets/images/gallery/6.jpeg'},
    {path: 'assets/images/gallery/7.jpeg'}

]

  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/gallery/1.jpeg',
        medium: 'assets/images/gallery/1.jpeg',
        big: 'assets/images/gallery/1.jpeg'
      },
      {
        small: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        medium: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        big: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
      },
      {
        small: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        medium: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        big: 'https://preview.ibb.co/mwsA6R/img7.jpg'
      },{
        small: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        medium: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        big: 'https://preview.ibb.co/kZGsLm/img8.jpg'
      },
    ];


  }


  All(){
    this.imageData = data
    this.numGallery = 0 ;

  }

  Conroe(){
    this.imageData = data1
    this.numGallery = 1 ;
  }
  Boxbraids(){
    this.imageData = data2
    this.numGallery = 2 ;
  }
  Twist(){
    this.imageData = data3
    this.numGallery = 3 ;
  }
  Crochet(){
    this.imageData = data4
    this.numGallery = 4 ;
  }
  Sewin(){
    this.imageData = data5
    this.numGallery = 5 ;
  }
  Dreadlocs(){
    this.numGallery = 6 ;
  }

}


const data = [
  {
    srcUrl: 'assets/images/gallery/1.jpeg',
    name: 'Conroe',
    previewUrl: 'assets/images/gallery/1.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/2.jpeg',
    name: 'Conroe',
    previewUrl: 'assets/images/gallery/2.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/3.jpeg',
    name: 'Conroe',
    previewUrl: 'assets/images/gallery/3.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/4.jpeg',
    previewUrl: 'assets/images/gallery/4.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/5.jpeg',
    previewUrl: 'assets/images/gallery/5.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/11.jpeg',
    name: 'Conroe',
    previewUrl: 'assets/images/gallery/11.jpeg'
  }
];


const data1 = [
  {
    srcUrl: 'assets/images/gallery/1.jpeg',
    name: 'Conroe',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/2.jpeg',
    name: 'Conroe',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/3.jpeg',
    name: 'Conroe',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpeg'
  },

  {
    srcUrl: 'assets/images/gallery/11.jpeg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpeg'
  }
];

const data2 = [
  {
    srcUrl: 'assets/images/gallery/4.jpeg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/5.jpeg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/6.jpeg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpeg'
  },

  {
    srcUrl: 'assets/images/gallery/7.jpeg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpeg'
  }
];

const data3 = [
  {
    srcUrl: 'assets/images/gallery/8.jpeg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/9.jpeg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/10.jpeg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpeg'
  },

  {
    srcUrl: 'assets/images/gallery/11.jpeg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpeg'
  }
];

const data4 = [
  {
    srcUrl: 'assets/images/gallery/12.jpeg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/13.jpeg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/14.jpeg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpeg'
  },

  {
    srcUrl: 'assets/images/gallery/15.jpeg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpeg'
  }
];

const data5 = [
  {
    srcUrl: 'assets/images/gallery/16.jpeg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/17.jpeg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpeg'
  },
  {
    srcUrl: 'assets/images/gallery/18.jpeg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpeg'
  }
];
