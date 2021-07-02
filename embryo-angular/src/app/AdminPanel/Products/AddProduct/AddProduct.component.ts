import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-add-product',
	templateUrl: './AddProduct.component.html',
	styleUrls: ['./AddProduct.component.scss']
})

export class AddProductComponent implements OnInit {

   form			  : FormGroup;
   mainImgPath   : string;
	colorsArray   : string[] = ["Red", "Blue", "Yellow", "Green"];
   sizeArray     : number[] = [36,38,40,42,44,46,48];
   quantityArray : number[] = [1,2,3,4,5,6,7,8,9,10];
   public imagePath;
   fileToUpload: any;

   fileData: File = null;
   previewUrl:any = null;

    "data" : any = [
      {
         "image": "https://via.placeholder.com/625x800",
         "image_gallery": [
            "https://via.placeholder.com/625x800",
            "https://via.placeholder.com/625x800",
            "https://via.placeholder.com/625x800",
            "https://via.placeholder.com/625x800"
         ]
      }
   ] 

 /*   "data" : any = [
      {
         "image": "assets/images/hair.jpg",
         "image_gallery": [
            "https://via.placeholder.com/625x800"
            
         ]
      }
   ]  */

	constructor(public formBuilder : FormBuilder) { }

	ngOnInit() {

      this.mainImgPath = this.data[0].image;
      this.form = this.formBuilder.group({
			name					: ['Add product Name'],
			price 				: ['Add Price'],
			availablity   		: [],
			product_code 		: [],
			description 		: ['Add Description'],
			tags					: [],
			features				: ['Add features']
      });
   }

   /**
    * getImagePath is used to change the image path on click event.
    */
   public getImagePath(imgPath: string, index:number) {
      document.querySelector('.border-active').classList.remove('border-active');
      this.mainImgPath = imgPath;
      document.getElementById(index+'_img').className += " border-active";
   }



  uploadFileEvt(imgFile: any) {
  
   //this.fileToUpload = imgFile.item(0);
   
   
   let reader = new FileReader();
   reader.onload = (event: any) => {
      console.log("test ===");
     //this.imageUrl = event.target.result;
     this.data[0].image_gallery.push(event.target.result)
     console.log("test ==="+ this.data[0].image_gallery );

   }
   //reader.readAsDataURL(this.fileToUpload);

  /*  this.data[0].image_gallery.push(""+imgFile.target.files[0])
   console.log("test data ===="+ this.data[0].image_gallery); */

   
   
 
   
   //imgFile.target.files && imgFile.target.files[0]


 }

 uploadFile(event) {
   let reader = new FileReader(); // HTML5 FileReader API
   let file = event.target.files[0];
   if (event.target.files && event.target.files[0]) {
     //reader.readAsDataURL(file);


     // When file uploads set it to file formcontrol
      console.log("test ==="+  this.data[0].image_gallery.includes('https://via.placeholder.com/625x800'));
     reader.onload = () => {
     // console.log("test ==="+  this.data[0].image_gallery.includes('https://via.placeholder.com/625x800'));

       //this.imageUrl = reader.result;
       this.data[0].image_gallery.push(event.target.result)
       //console.log("test ==="+  this.data[0].image_gallery.includes('https://via.placeholder.com/625x800'));
       /* this.registrationForm.patchValue({
         file: reader.result
       });
       this.editFile = false;
       this.removeUpload = true; */
     }
     // ChangeDetectorRef since file is loading outside the zone
     //this.cd.markForCheck();        
   }
 }

 fileProgress(fileInput: any) {
   this.fileData = <File>fileInput.target.files[0];
   this.preview();
}

preview() {
 // Show preview 
 var mimeType = this.fileData.type;
 if (mimeType.match(/image\/*/) == null) {
   return;
 }

 console.log("test position: "+ this.data[0].image_gallery.indexOf("https://via.placeholder.com/625x800"));

 var reader = new FileReader();      
 reader.readAsDataURL(this.fileData); 
 reader.onload = (_event) => { 
   this.previewUrl = reader.result; 
   if(!this.data[0].image_gallery.includes(this.previewUrl)){
     
     
     this.data[0].image_gallery.push(this.previewUrl)
     console.log("test position: "+ this.data[0].image_gallery.indexOf(this.previewUrl));
   }
   
  
 }
 console.log("test ==="+ this.data[0].image_gallery);
}

}
