import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }


  private converteInteiroBinario(valor) {
    return (valor >>> 0).toString(2);
  }

  private converteBinarioInteiro(valor: string) {
    return parseInt(valor, 2);
  }

  operar(expressao: any) {
    let resultado;
    let ladoE = this.converteBinarioInteiro(expressao.leftValue);
    let operador = expressao.operator;
    let ladoD = this.converteBinarioInteiro(expressao.rightValue);
    
    if(operador === '+'){
      resultado = this.converteInteiroBinario(ladoE+ladoD);
    } else if(operador === '-'){
      resultado = this.converteInteiroBinario(ladoE-ladoD);
    } else if(operador === '/'){
      if(ladoD == 0) {
        resultado = "invalido";
      } else {
        resultado = this.converteInteiroBinario(ladoE/ladoD);
      }
    } else if(operador === '*'){
      resultado = this.converteInteiroBinario(ladoE*ladoD);
    } else if(operador === '%'){
      if(ladoD == 0) {
        resultado = "invalido";
      } else {
        resultado = this.converteInteiroBinario(ladoE%ladoD);
      }
    }
    return resultado;
  }
}
