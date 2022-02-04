
import {Component, OnInit} from '@angular/core';
import {DataSharingService} from "./data-sharing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'e-commerce-angular-node';
  public productos = [];

  constructor( private dataSharingService: DataSharingService) {
    // Comunicación entre componentes
    this.dataSharingService.currentMessage.subscribe(mensaje => {

    })
  }



  public total() {
    // Quién te conoce reduce
    let total = 0;
    this.productos.forEach(p => total += p.price);
    return total;
  }

  ngOnInit(): void {
   // this.refrescarCarrito();
  }


}
