import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  calculatorForm: FormGroup;
  resultadoOperacao;
  constructor(private formBuilder: FormBuilder, private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.calculatorForm = this.formBuilder.group({
      leftValue: [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.pattern(/^\b[01]+\b$/)])],
      operator: ['', Validators.required],
      rightValue: ['', [Validators.required, Validators.minLength(1), , Validators.pattern(/^\b[01]+\b$/)]]
    });
  }

  get formValue() { return this.calculatorForm.controls; }

  calculate() {
    console.log("calcula", this.calculatorForm.value);
    this.resultadoOperacao = this.calculatorService.operar(this.calculatorForm.value);

  }

}
