import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  projectsImages = [
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(135).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(135).jpg", description: "Image 1" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(128).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(128).jpg", description: "Image 2" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(133).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(133).jpg", description: "Image 3" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(131).jpg", description: "Image 4" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(130).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(130).jpg", description: "Image 5" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(132).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(132).jpg", description: "Image 6" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(134).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(134).jpg", description: "Image 7" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(1).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(1).jpg", description: "Image 8" },
    { img: "https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(131).jpg", thumb: "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(131).jpg", description: "Image 9" }
];

  constructor() { }

  ngOnInit(): void {
  }

}
