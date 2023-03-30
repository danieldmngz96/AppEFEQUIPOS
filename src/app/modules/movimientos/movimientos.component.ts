import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss']
})
export class MovimientosComponent implements OnInit {
displayedColumns: string[] = ['Id', 'Tipo de inventario', 'Nombre del inventario', 'Fecha del registro', 'cantidad de material', 'Herramienta de suelo', ];
  dataSource =  [
    {position: 1, name: 'Inventario de tablas ', weight: "22/03/2023", symbol: 'H',w: 1.0079, s: 'H'},
    {position: 2, name: 'Inventario de tableros', weight: "22/03/2023", symbol: 'He'
    ,w: 1.0079, s: 'H'},
    {position: 3, name: 'Inventario pie', weight: "22/03/2023", symbol: 'Li'
    ,w: 1.0079, s: 'H'},
    {position: 4, name: 'Inventario para cali', weight: "22/03/2023", symbol: 'Be'
    ,w: 1.0079, s: 'H'},
    {position: 5, name: 'Invnetario de Carbon', weight: "22/03/2023", symbol: 'B',w: 1.0079, s: 'H'},
    {position: 6, name: 'Inventario 6', weight: "22/03/2023", symbol: 'C',w: 1.0079, s: 'H'},
    {position: 7, name: 'Inventario 7', weight: "22/03/2023", symbol: 'N',w: 1.0079, s: 'H'},
    {position: 8, name: 'Inventario 8', weight: "22/03/2023", symbol: 'O',w: 1.0079, s: 'H'},
    {position: 9, name: 'Inventario 9', weight: "22/03/2023", symbol: 'F',w: 1.0079, s: 'H'},
    {position: 10, name: 'Inventario 10', weight: "22/03/2023", symbol: 'Ne',w: 1.0079, s: 'H'},
  ];;
  constructor() { }

  ngOnInit() {

  }


}
