import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chessground } from 'chessground';
import { Api } from 'chessground/api';
import { Config } from 'chessground/config';

@Component({
  selector: 'app-chess-board',
  template: `
    <div class="perspective-[1000px] group">
      <div class="cg-wrap-container mb-4 shadow-xl transform group-hover:rotate-y-6 group-hover:rotate-x-6 transition-transform duration-500 border border-gray-200 rounded-lg overflow-hidden">
        <div #board class="cg-wrap"></div>
      </div>
    </div>
  `,
  styles: [`
    .cg-wrap-container {
      width: 100%;
      aspect-ratio: 1 / 1;
    }
    
    .cg-wrap {
      width: 100%;
      height: 100%;
    }
    
    /* Perspective pour l'effet 3D */
    .perspective-\\[1000px\\] {
      perspective: 1000px;
    }
    
    /* Transformation 3D */
    .rotate-y-6 {
      transform: rotateY(6deg);
    }
    
    .rotate-x-6 {
      transform: rotateX(6deg);
    }

    /* Styles essentiels de Chessground (inclus directement) */
    :host ::ng-deep .cg-wrap {
      width: 100%;
      height: 100%;
      position: relative;
      display: block;
    }

    :host ::ng-deep cg-board {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      line-height: 0;
      background-size: cover;
      cursor: pointer;
    }

    :host ::ng-deep .cg-board-wrap {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    /* Couleurs de l'échiquier */
    :host ::ng-deep cg-board {
    }

    :host ::ng-deep cg-board square.white {
      background-color: #f0d9b5;
    }

    :host ::ng-deep cg-board square.black {
      background-color: #b58863;
    }

    /* Styles des pièces */
    :host ::ng-deep .cg-wrap piece {
      position: absolute;
      top: 0;
      left: 0;
      width: 12.5%;
      height: 12.5%;
      background-size: cover;
      z-index: 2;
      pointer-events: none;
    }

    /* Styles des coordonnées */
    :host ::ng-deep coords {
      position: absolute;
      display: flex;
      pointer-events: none;
      opacity: 0.8;
      font-family: sans-serif;
      font-size: 10px;
    }
    :host ::ng-deep coords.ranks {
      right: 0;
      top: 0;
      flex-flow: column-reverse;
      height: 100%;
      width: 12px;
    }
    :host ::ng-deep coords.ranks.black {
      flex-flow: column;
    }
    :host ::ng-deep coords.ranks coord {
      transform: translateY(39%);
    }
    :host ::ng-deep coords.files {
      bottom: 0;
      left: 0;
      flex-flow: row;
      width: 100%;
      height: 16px;
      text-transform: uppercase;
    }
    :host ::ng-deep coords.files.black {
      flex-flow: row-reverse;
    }
    :host ::ng-deep coords.files coord {
      transform: translateX(39%);
    }
    :host ::ng-deep coords coord {
      flex: 1 1 auto;
    }
  `]
})
export class ChessBoardComponent implements AfterViewInit {
  @ViewChild('board', { static: true }) boardElement!: ElementRef;
  
  private cg!: Api;
  private config: Config = {
    fen: 'r1bqk2r/1p1p1pp1/p1n1pn1p/8/3PP3/P1BB1N2/1P3PPP/R2Q1RK1 w - - 0 1',
    viewOnly: true,
    coordinates: true,
    disableContextMenu: true
  };

  constructor() {}

  ngAfterViewInit(): void {
    // Initialiser Chessground après la vue
    this.cg = Chessground(this.boardElement.nativeElement, this.config);
    
    // Créer manuellement le plateau avec cases alternées
    this.createBoard();
    
    // Charger les styles des pièces
    this.loadPieceStyle();
  }

  private createBoard(): void {
    // Créer un élément de plateau
    const boardWrap = document.createElement('div');
    boardWrap.className = 'cg-board-wrap';
    
    const board = document.createElement('cg-board');
    boardWrap.appendChild(board);
    
    // Ajouter des cases (8x8)
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const square = document.createElement('square');
        square.className = (row + col) % 2 === 0 ? 'white' : 'black';
        square.setAttribute('data-key', String.fromCharCode(97 + col) + (8 - row));
        board.appendChild(square);
      }
    }
    
    // Ajouter les coordonnées si nécessaire
    if (this.config.coordinates) {
      // Coordonnées des rangs (1-8)
      const ranks = document.createElement('coords');
      ranks.className = 'ranks';
      for (let i = 8; i >= 1; i--) {
        const coord = document.createElement('coord');
        coord.textContent = i.toString();
        ranks.appendChild(coord);
      }
      
      // Coordonnées des colonnes (a-h)
      const files = document.createElement('coords');
      files.className = 'files';
      for (let i = 0; i < 8; i++) {
        const coord = document.createElement('coord');
        coord.textContent = String.fromCharCode(97 + i);
        files.appendChild(coord);
      }
      
      boardWrap.appendChild(ranks);
      boardWrap.appendChild(files);
    }
    
    // Insérer le plateau au début du conteneur
    if (this.boardElement.nativeElement.firstChild) {
      this.boardElement.nativeElement.insertBefore(boardWrap, this.boardElement.nativeElement.firstChild);
    } else {
      this.boardElement.nativeElement.appendChild(boardWrap);
    }
    
    // Ajouter les styles CSS pour le plateau
    const style = document.createElement('style');
    style.textContent = `
      .cg-wrap {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      
      .cg-board-wrap {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      
      cg-board {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        line-height: 0;
        background-size: cover;
        cursor: pointer;
        display: grid;
        grid-template-columns: repeat(8, 12.5%);
        grid-template-rows: repeat(8, 12.5%);
      }
      
      cg-board square {
        position: relative;
      }
      
      cg-board square.white {
        background-color: #f0d9b5;
      }
      
      cg-board square.black {
        background-color: #b58863;
      }
      
      /* Styles des coordonnées */
      coords {
        position: absolute;
        display: flex;
        pointer-events: none;
        opacity: 0.8;
        font-family: sans-serif;
        font-size: 10px;
      }
      
      coords.ranks {
        right: 0;
        top: 0;
        flex-flow: column-reverse;
        height: 100%;
        width: 12px;
      }
      
      coords.files {
        bottom: 0;
        left: 0;
        flex-flow: row;
        width: 100%;
        height: 16px;
        text-transform: uppercase;
      }
      
      coords coord {
        flex: 1 1 auto;
        text-align: center;
      }
    `;
    document.head.appendChild(style);
  }

  private loadPieceStyle(): void {
    // Chargement des images des pièces style cburnett
    const pieceBaseUrl = 'https://lichess1.org/assets/piece/cburnett/';
    
    // Ajout des règles CSS pour les pièces
    const style = document.createElement('style');
    style.textContent = `
      .cg-wrap piece {
        position: absolute;
        top: 0;
        left: 0;
        width: 12.5%;
        height: 12.5%;
        background-size: cover;
        z-index: 2;
        pointer-events: none;
        will-change: transform;
      }
      
      .cg-wrap piece.pawn.white {
        background-image: url('${pieceBaseUrl}wP.svg');
      }
      .cg-wrap piece.bishop.white {
        background-image: url('${pieceBaseUrl}wB.svg');
      }
      .cg-wrap piece.knight.white {
        background-image: url('${pieceBaseUrl}wN.svg');
      }
      .cg-wrap piece.rook.white {
        background-image: url('${pieceBaseUrl}wR.svg');
      }
      .cg-wrap piece.queen.white {
        background-image: url('${pieceBaseUrl}wQ.svg');
      }
      .cg-wrap piece.king.white {
        background-image: url('${pieceBaseUrl}wK.svg');
      }
      .cg-wrap piece.pawn.black {
        background-image: url('${pieceBaseUrl}bP.svg');
      }
      .cg-wrap piece.bishop.black {
        background-image: url('${pieceBaseUrl}bB.svg');
      }
      .cg-wrap piece.knight.black {
        background-image: url('${pieceBaseUrl}bN.svg');
      }
      .cg-wrap piece.rook.black {
        background-image: url('${pieceBaseUrl}bR.svg');
      }
      .cg-wrap piece.queen.black {
        background-image: url('${pieceBaseUrl}bQ.svg');
      }
      .cg-wrap piece.king.black {
        background-image: url('${pieceBaseUrl}bK.svg');
      }
    `;
    document.head.appendChild(style);
  }
} 