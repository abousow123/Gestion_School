import { blogs, abouInfos, slides } from './dataSource';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmbryoService } from '../../../Services/Embryo.service';

@Component({
  selector: 'app-HomeTwo',
  templateUrl: './HomeTwo.component.html',
  styleUrls: ['./HomeTwo.component.scss']
})
export class HomeTwoComponent implements OnInit {

   topProducts             : any;
   lighteningDealsProducts : any;
   blogList              : any;
   missionVisionData : any;
   aboutInfo         : any;
   slides            : any;
   productsArray         : any;
   productReviews        : any;
   newProductsSliderData : any;
   productsSliderData    : any;


   slideConfig = {
      slidesToShow: 4,
      slidesToScroll:4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:2
            }
            },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll:1
            }
         }
      ]
   };

   rtlSlideConfig = {
      slidesToShow: 4,
      slidesToScroll:4,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      rtl: true,
      responsive: [
         {
            breakpoint: 992,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2,
               slidesToScroll:1
            }
         },
         {
            breakpoint: 480,
            settings: {
               arrows: false,
               slidesToShow: 1,
               slidesToScroll:1
            }
         }
      ]
   };
   
   constructor(public embryoService : EmbryoService,private cdRef : ChangeDetectorRef) {
      this.getBlogList();

      this.getFeaturedProducts();
      this.getBlogList();
      this.getProductRevies();

      this.embryoService.featuredProductsSelectedTab = 0;
      this.embryoService.newArrivalSelectedTab = 0;
    }

   ngOnInit() {
      this.lighteningDeals();
      this.getProducts();
      this.getMissionVision();
      this.getAboutInfo();
   }

   public lighteningDeals() {
      this.embryoService.getProducts().valueChanges()
         .subscribe(res => this.getLighteningDealsResponse(res));
   }

   public getLighteningDealsResponse(res) {
      let productsArray : any = [];
      this.lighteningDealsProducts = null;
      productsArray.push(this.last(res.men));
      productsArray.push(this.last(res.women));
      productsArray.push(this.last(res.gadgets));
      productsArray.push(this.last(res.accessories));

      this.lighteningDealsProducts = productsArray;
   }

   last(array) {
      return array[array.length - 1];
   }

   public getProducts() {
      this.embryoService.getProducts().valueChanges()
         .subscribe(res => this.getProductsResponse(res));
   }

   public getProductsResponse(res) {
      this.topProducts = null;
      let products = ((res.men.concat(res.women)).concat(res.gadgets)).concat(res.accessories);
      this.topProducts = products;
   }

   public addToCart(value) {
      this.embryoService.addToCart(value);
   }

   public getBlogList() {
     // this.embryoService.getBlogList().valueChanges().subscribe(res => {this.blogList = res});
     this.blogList = blogs;
   }

   public getMissionVision() {
      this.embryoService.getMissionVision().valueChanges().subscribe(res => {this.missionVisionData = res});
   }
   public getAboutInfo() {
      //this.embryoService.getAboutInfo().valueChanges().subscribe(res => {this.aboutInfo = res});
      this.aboutInfo = abouInfos;
      this.slides = slides;
   }

   ngAfterViewChecked() : void {
      this.cdRef.detectChanges();
   }

   public getFeaturedProducts() {
      this.embryoService.getProducts().valueChanges().subscribe(res => {this.productsArray = res});
   }

   public getProductRevies() {
      this.embryoService.getProductReviews().valueChanges().subscribe(res => {this.productReviews = res});
   }

   public addToWishlist(value) {
      this.embryoService.addToWishlist(value);
   }

   public onFeaturedSelectedTab(tabIndex) {
      this.productsSliderData = null;
      switch (tabIndex) {
         case 0:
            this.productsSliderData = this.productsArray.men;
         break;

         case 1:
            this.productsSliderData = this.productsArray.women;
         break;

         case 2:
            this.productsSliderData = this.productsArray.gadgets;
         break;

         case 3:
            this.productsSliderData = this.productsArray.accessories;
         break;
         
         default:
            // code...
            break;
      }

      return true;
   }

   public onNewArrivalsSelectedTab(tabIndex) {
      this.newProductsSliderData = null;
      switch (tabIndex) {
         case 0:
            this.newProductsSliderData = this.productsArray.men;
         break;

         case 1:
            this.newProductsSliderData = this.productsArray.women;
         break;

         case 2:
            this.newProductsSliderData = this.productsArray.gadgets;
         break;

         case 3:
            this.newProductsSliderData = this.productsArray.accessories;
         break;

         case 4:
            this.newProductsSliderData = this.productsArray.accessories;
         break;

         case 5:
            this.newProductsSliderData = this.productsArray.accessories;
         break;

         case 6:
            this.newProductsSliderData = this.productsArray.accessories;
         break;

         case 7:
            this.newProductsSliderData = this.productsArray.accessories;
         break;
         
         default:
            // code...
            break;
      }

      return true;
   }


}
