
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdbTableDirective, MdbTablePaginationComponent } from 'angular-bootstrap-md';
import { Observable } from 'rxjs';
import { Gallery } from 'src/app/models/gallery';
import { UploadFilesService } from 'src/app/upload-files.service';

@Component({
  selector: 'app-gallery-settings',
  templateUrl: './gallery-settings.component.html',
  styleUrls: ['./gallery-settings.component.scss']
})
export class GallerySettingsComponent implements OnInit {



  galleryForm: FormGroup;
  gallery: Gallery = new Gallery();

  demandeFile: any = File;
  demandeFiles: Array<File> = [];

  galleries: any;






  selectedFiles: FileList;
  progressInfos = [];
  message = '';

  fileInfos: Observable<any>;

  constructor(private cdRef: ChangeDetectorRef,private _formBuilder: FormBuilder, private uploadService: UploadFilesService) { }



  ngOnInit(): void {
    this.galleryForm = this._formBuilder.group({
      name:([this.gallery.name, Validators.required]),
      description:([this.gallery.description, Validators.required]),

    });
  }

  selectFiles(event) {
    this.progressInfos = [];

    const files = event.target.files;
    let isImage = true;

    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
      event.srcElement.percentage = null;
    }
  }


  uploadFiles() {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(idx, file) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }



  saveGallery(){
    this.gallery.name = this.galleryForm.value.name;
    this.gallery.description = this.galleryForm.value.description;

    const formData = new FormData() ;

  }





}
