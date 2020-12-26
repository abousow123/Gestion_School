import { Lightbox } from 'ng-gallery/lightbox';
import { Gallery, GalleryItem, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Component, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';

@Component({
  selector: 'app-conroe',
  templateUrl: './conroe.component.html',
  styleUrls: ['./conroe.component.scss']
})
export class ConroeComponent implements OnInit {

  items: GalleryItem[];

  imageData = data1;

  name = 'Angular ' + VERSION.major;
  dataimage:any;

   @ViewChild('fileInput') fileInput: ElementRef;
  fileAttr = 'Choose File';


  constructor(public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {

     /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
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
