import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  exibindo: boolean = false;


  exibir(): void {
    if(this.exibindo === true){
      this.exibindo = false;
    } else {
      this.exibindo = true;
    }
  }
}
