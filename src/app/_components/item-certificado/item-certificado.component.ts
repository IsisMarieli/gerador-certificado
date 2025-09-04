import { Component } from '@angular/core';
import { SecondaryButtonComponent } from "../secondary-button/secondary-button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButtonComponent,],
  templateUrl: './item-certificado.component.html',
  styleUrl: './item-certificado.component.css'
})
export class ItemCertificadoComponent {
  id: string = '6'

  // outra forma de navegar nas rotas(via typescript)
    constructor(private router:Router){ }

    redirecionaCertificado(){
      // this.router.navigate(['/certificados' + this.id]); // -> /certificados/2 , em alguns casos
      this.router.navigate(['/certificados',2]); // -> /certificados/2 , dinâmico
      // this.router.navigateByUrl("/certificados/2"); // -> /certificados/2 , fixo
    }
}
