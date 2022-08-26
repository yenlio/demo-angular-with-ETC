import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'ItemForm',
  templateUrl: './Item-form.component.html',
})
export class ItemformComponent implements OnInit {
  showForm: boolean = false;
  filter: any = {
    keyword: '',
  };
  dataItem: any = {};

  constructor() {}

  ngOnInit(): void {}
}


// import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';

// @Component({
// 	selector: 'app-form-user',
// 	templateUrl: './form-user.component.html',
// 	styleUrls: ['./form-user.component.scss']
// })
// export class FormUserComponent implements OnInit {

// 	userGroups: any;
// 	changePassword = false;
// 	@Input() data: any = {};
// 	@Input() showForm: boolean = false;
// 	@Output() showFormChange = new EventEmitter<any>();
// 	@Output() search = new EventEmitter<any>();

// 	constructor(
// 	) {
// 	}

// 	errorForm: any = {

// 	}


// 	ngOnInit(): void {
// 	}
     


// 	clickCheck(){
		
		
// 	}
	

// 	checkFullname() {
// 		if (!this.data.fullname) {
// 			this.errorForm.fullname = "Họ và tên không được bỏ trống";
// 			return;
// 		}

// 		this.errorForm.fullname = "";
// 		return;
// 	}

// 	checkUsername() {
// 		if (!this.data.username) {
// 			this.errorForm.username = "Tên đăng nhập không được bỏ trống";
// 			return;
// 		}

// 		if (!/^(?=.{8,}$)[a-z0-9]+$/.test(this.data.username)) {
// 			this.errorForm.username = "Tên đăng nhập không đúng định dạng";
// 			return;
// 		}

// 		this.errorForm.username = "";
// 		return;
// 	}

// 	checkPassword() {
// 		if (!this.data.password) {
// 			this.errorForm.password = "Mật khẩu không được bỏ trống";
// 			return;
// 		}

// 		if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.data.password)) {
// 			this.errorForm.password = "Mật khẩu không đúng định dạng";
// 			return;
// 		}

// 		this.errorForm.password = "";
// 		return;
// 	}

// 	save(close: boolean = false) {
// 		this.checkFullname();
// 		this.checkUsername();
// 		if (this.data.id) {
// 			if (this.changePassword) {
// 				this.checkPassword();
// 			}
// 		} else {
// 			this.checkPassword();
// 		}

// 		for (let key of Object.keys(this.errorForm)) {
// 			if (this.errorForm[key]) {
// 				return;
// 			}
// 		}
// 		if (this.data.id) {

// 		} else {

// 		}

// 	}

// 	getDataById(id: string) {

// 	}

// 	closeForm() {

// 		this.showForm = false;
// 		console.log(this.showForm,"show form");
		
// 		this.showFormChange.emit(this.showForm);
// 		this.search.emit();
// 	}
// }
