import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'Item',
  templateUrl: './Item.component.html',
})
export class ItemComponent implements OnInit {
  showForm: boolean = false;
  filter: any = {
    keyword: '',
  };
  dataItem: any = {};

  constructor() {}

  ngOnInit(): void {}
}


// import { Component, OnInit, Input, HostListener } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
// @Component({
// 	selector: 'app-users',
// 	templateUrl: './users.component.html',
// 	styleUrls: ['./users.component.scss']
// })
// export class UsersComponent implements OnInit {

// 	showForm: boolean = false;
// 	filter: any = {
// 		keyword: ""
// 	}
// 	dataItem: any = {};

// 	constructor(
// 	) { }

// 	ngOnInit(): void {

// 	}

// 	openFormAdd() {
// 		this.dataItem = {};
// 		this.showForm = true;
// 	}

// 	search() {

// 	}

// 	next(data: any) {

// 	}
// }
