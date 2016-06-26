import { Component } from '@angular/core';
import { Caracteristique } from './app.caracteristique';

@Component({
  selector: 'my-app',
  template: `<h1>Creation du héros pas-à-pas</h1>
  <p>Points en reserve {{datas.stockPoints}}</p>
  <caracteristique [title]="'Force'" [bigTitle]="'FOR'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Constitution'" [bigTitle]="'CON'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Dexterité'" [bigTitle]="'DEX'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Intelligence'" [bigTitle]="'INT'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Sagesse'" [bigTitle]="'SAG'" [character]="datas"></caracteristique>
  <caracteristique [title]="'Charisme'" [bigTitle]="'CHA'" [character]="datas"></caracteristique>
  `,
   directives:[Caracteristique]
})
export class AppComponent {
    datas={'FOR':5, 'CON':'3', 'DEX':6, stockPoints:10}
}
