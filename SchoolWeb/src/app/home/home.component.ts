import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  numGallery: number = 0;


  items: GalleryItem[];

  imageData = data;
  imageData1 = data1 ;



  constructor(private _formBuilder: FormBuilder,public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


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
