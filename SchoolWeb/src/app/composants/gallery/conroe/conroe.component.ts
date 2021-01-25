import { Lightbox } from 'ngx-lightbox';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Component, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';

@Component({
  selector: 'app-conroe',
  templateUrl: './conroe.component.html',
  styleUrls: ['./conroe.component.scss']
})
export class ConroeComponent implements OnInit {

  items: GalleryItem[];

  private imageData = [];
   _album: Array<any> = [];

  name = 'Angular ' + VERSION.major;
  dataimage:any;

   @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';


  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {

   //this.imageData = data1
   this._album = data1



  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }


  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name ;
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          let imgBase64Path = e.target.result;
          console.log(imgBase64Path);
          this.dataimage = imgBase64Path;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);

      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }


}

const data1 = [
  {
    srcUrl: 'assets/images/gallery/1.jpeg',
    name: 'Conroe',
    src: 'assets/images/gallery/1.jpeg',
  },
  {
    srcUrl: 'assets/images/gallery/2.jpeg',
    name: 'Conroe',
    src: 'assets/images/gallery/2.jpeg',
  },
  {
    srcUrl: 'assets/images/gallery/3.jpeg',
    name: 'Conroe',
    src: 'assets/images/gallery/3.jpeg',
  },

  {
    srcUrl: 'assets/images/gallery/3.jpeg',
    name: 'Conroe',
    src: 'assets/images/gallery/3.jpeg',
  },

  {
    srcUrl: 'assets/images/gallery/3.jpeg',
    name: 'Conroe',
    src: 'assets/images/gallery/3.jpeg',
  },

  {
    srcUrl: 'assets/images/gallery/11.jpeg',
    src: 'assets/images/gallery/11.jpeg',
  }
];
