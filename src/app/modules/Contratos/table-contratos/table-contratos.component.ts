import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-contratos',
  templateUrl: './table-contratos.component.html',
  styleUrls: ['./table-contratos.component.scss']
})
export class TableContratosComponent implements OnInit {
  displayedColumns: string[] = ['cod_cont', 'nombre', 'cod_cli', 'fec_ini','fec_fin', 'estado'];
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  length: any;
  pageSize: any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  lista = new MatTableDataSource();
  page = 1;
  constructor() { }

  ngOnInit() {
  }
  pageEvent(event: any): void {
    this.pageSize = event.pageSize;
    this.page = event.pageIndex + 1;
   
  }
  resetPaginator(): void {
      this.length = 0;
      this.pageSize = 5;
      this.page = 1;
      this.paginator.firstPage();
    }
}
