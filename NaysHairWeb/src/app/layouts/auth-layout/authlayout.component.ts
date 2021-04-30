import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-auhtlayout',
    templateUrl: './authlayout.component.html',
    styleUrls: ['./authlayout.component.scss']
})

export class AuthLayoutComponent implements OnInit {

    ngOnInit(): void {
        // throw new Error("Method not implemented.");
        console.log('OnInit method of AuthLayoutComponent');
    }

    constructor() { }
}