import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();
  id: String = '';

  constructor(private etudiantService: SchoolService,private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'] ;

    this.etudiantService.getOneUser(this.id)
    .subscribe(data=>{
      this.user = data as User;

    },err=>{
      console.log(err);

    }) ;
  }

  onRemove(el){

  }

}
