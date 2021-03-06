import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-customer-editor',
  templateUrl: './customer-editor.component.html',
  styleUrls: ['./customer-editor.component.scss']
})
export class CustomerEditorComponent implements OnInit {

  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm): void {
    this.customerService.create(form.value).subscribe(
      () => this.router.navigate([''])
    );
  }

}
