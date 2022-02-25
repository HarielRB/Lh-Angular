import { Component, OnInit } from '@angular/core';
import { VagasService } from '../vagas.service';
import { vagas } from '../listaVagas';

@Component({
  selector: 'app-bloco-vagas',
  templateUrl: './bloco-vagas.component.html',
  styleUrls: ['./bloco-vagas.component.css']
})
export class BlocoVagasComponent implements OnInit {

  //public vagas: Vaga[] = [];
  vagas = vagas;

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
    //this.listarVagas();
  }

  /*listarVagas(){
    this._vagasService.getVagas()
      .subscribe( 
        retornaVaga =>{
          this.vagas = retornaVaga.map(
            item => {
              return new Vaga();
            }
          )
        }
      )
  }*/

}
