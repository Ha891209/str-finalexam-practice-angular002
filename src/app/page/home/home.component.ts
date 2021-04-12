import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerServiceService } from 'src/app/service/customer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list$: Observable<Customer[]> = this.customerService.getAll();

  constructor(
    private customerService: CustomerServiceService
  ) { }

  ngOnInit(): void {
  }

  onClickDelete(id: number) {
    this.customerService.delete(id).subscribe(
      p => this.list$ = this.customerService.getAll(),
    );
  }

}