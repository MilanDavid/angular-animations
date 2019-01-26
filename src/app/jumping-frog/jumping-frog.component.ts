import { Component, ViewChild, ElementRef } from '@angular/core';
import { style, animate, keyframes, AnimationBuilder } from '@angular/animations';

@Component({
  selector: 'app-jumping-frog',
  templateUrl: './jumping-frog.component.html',
  styleUrls: ['./jumping-frog.component.css']
})
export class JumpingFrogComponent {
  @ViewChild('img') frog: ElementRef;

  positionX;
  positionY;

  constructor(private _builder: AnimationBuilder) { }

  frogClick() {
    if (!this.positionX || !this.positionY) {
      this.positionX = 0;
      this.positionY = 0;
    }
    let X;
    let Y;
    console.log('start position X', this.positionX)
    console.log('start position Y', this.positionY)
    if((this.positionX + 300) >= window.innerWidth
      || (this.positionY + 300) >= window.innerHeight) {
      X = Math.round(Math.random() * 300) * -1;
      Y = Math.round(Math.random() * 300) * -1;
    }
    if ((this.positionX - 300) <= 0
      || (this.positionY - 300) <= 0) {
      X = Math.round(Math.random() * 300);
      Y = Math.round(Math.random() * 300);
    }
    if(this.positionX >= 300 && this.positionY >= 300){
      X = Math.round(Math.random() * 300) * -1;
      Y = Math.round(Math.random() * 300) * -1;
    }
    if(this.positionX <= 300 && this.positionY <= 300){
      X = Math.round(Math.random() * 300);
      Y = Math.round(Math.random() * 300);
    }
    let quaterX = X / 4;
    let halfX = X / 2;
    let quaterY = Y / 4
    let halfY = Y / 2;


    const jumpingFrog = this._builder.build([
      animate(500, keyframes([
        style({
          transform: 'translateX(' + this.positionX + 'px) translateY(' + this.positionY + 'px) scale(1)',
          backgroundImage: 'url("../../assets/jump-frog.png")',
          backgroundSize: '100px 100px',
          offset: 0
        }),
        style({
          transform: 'translateX(' + (this.positionX + quaterX) + 'px) translateY(' + (this.positionY + quaterY) + 'px) scale(1.5)',
          backgroundImage: 'url("../../assets/jump-frog.png")',
          backgroundSize: '100px 100px',
          offset: 0.25
        }),
        style({
          transform: 'translateX(' + (this.positionX + halfX) + 'px) translateY(' + (this.positionY + halfY) + 'px) scale(2)',
          backgroundImage: 'url("../../assets/jump-frog.png")',
          backgroundSize: '100px 100px',
          offset: 0.5
        }),
        style({
          transform: 'translateX(' + (this.positionX + (quaterX * 3)) + 'px) translateY(' + (this.positionY + (quaterY * 3)) + 'px) scale(1.5)',
          backgroundImage: 'url("../../assets/jump-frog.png")',
          backgroundSize: '100px 100px',
          offset: 0.75
        }),
        style({
          transform: 'translate(' + (this.positionX + X) + 'px) translateY(' + (this.positionY + Y) + 'px) scale(1)',
          backgroundImage: 'url("../../assets/jump-frog.png")',
          backgroundSize: '100px 100px',
          offset: 0.95
        }),
        style({
          transform: 'translate(' + (this.positionX + X) + 'px) translateY(' + (this.positionY + Y) + 'px) scale(1)',
          backgroundImage: 'url("../../assets/sitting-frog.png")',
          backgroundSize: '100px 100px',
          offset: 1
        })
      ]))
    ]);
    const player = jumpingFrog.create(this.frog.nativeElement);
    player.play();

    // then create a player from it

    console.log('jumping distance X',X)
    console.log('jumping distance Y',Y)
    this.positionX = this.positionX + X;
    this.positionY = this.positionY + Y;
    console.log('new X position after jump', this.positionX)
    console.log('new Y position after jump', this.positionY)
    console.log('==============================')

  }

}
