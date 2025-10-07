import { Component } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtos',
  standalone: false,
  templateUrl: './produtos.html',
  styleUrl: './produtos.css'
})
export class Produtos {
  listaProdutos: Produto [] | null = [
    {id: 1, nome:'Tablet', preco: 890, descricao:'Tablet da Samsung', emEstoque: true},
    {id: 2, nome:'Celular', preco: 1490, descricao:'Celular Xiaomi', emEstoque: true},
    {id: 3, nome:'Notebook', preco: 3000, descricao:'Lenovo Thinkpad', emEstoque: true},
    {id: 4, nome:'Mouse', preco: 120, descricao:'Mouse Logitech', emEstoque: true},
    {id: 5, nome:'Mousepad', preco: 250, descricao:'Mousepad com led e carregamento indução', emEstoque: false},
  ]

  comprar(emEstoque: boolean): void {
    if(emEstoque === false){
      alert('Item sem estoque, escolha outro')
    } 
  }
}
