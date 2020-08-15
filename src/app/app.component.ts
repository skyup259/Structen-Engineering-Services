import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AutomateCivil';
  imgNum = 1;
  imagePath = '../assets/img' + this.imgNum + '.jpg';

  // slideImg(status): void {
  //   if(status === 'nxt') {
  //     this.imgNum += 1;
  //   } else {
  //     this.imgNum -= 1;
  //   }
  //   this.imgNum = Math.abs(this.imgNum) % 2;
  //   this.imagePath = '../assets/img' + this.imgNum + '.jpg';
  // }
}


