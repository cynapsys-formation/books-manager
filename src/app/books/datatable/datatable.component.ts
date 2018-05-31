import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DatatableDataSource } from './datatable-datasource';
import {BooksService} from '../books.service';

@Component({
  selector: 'cyn-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DatatableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'title'];


  ngOnInit() {
    this.dataSource = new DatatableDataSource(this.paginator, this.sort, null);
  }
}
