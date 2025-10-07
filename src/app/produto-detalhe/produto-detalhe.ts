import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produto-detalhe',
  standalone: false,
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe implements OnInit {
  id: number = 0;

  listaProdutos: Produto [] | null = [
      {id: 1, nome:'Tablet', preco: 890, descricao:'Tablet da Samsung', emEstoque: true},
      {id: 2, nome:'Celular', preco: 1490, descricao:'Celular Xiaomi', emEstoque: true},
      {id: 3, nome:'Notebook', preco: 3000, descricao:'Lenovo Thinkpad', emEstoque: true},
      {id: 4, nome:'Mouse', preco: 120, descricao:'Mouse Logitech', emEstoque: true},
      {id: 5, nome:'Mousepad', preco: 250, descricao:'Mousepad com led e carregamento indução', emEstoque: false},
    ]

  constructor(private route: ActivatedRoute) { }

 ngOnInit(): void {
    this.id = this.route.snapshot.params['id'] ?? 0;
  }

}
