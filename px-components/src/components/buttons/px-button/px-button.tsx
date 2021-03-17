import { Component, ComponentDidLoad, h, Prop } from '@stencil/core';
import { Application } from 'pixi.js';
import Button from '../../../platform/button';


@Component({
  tag: 'px-button',
  styleUrl: 'px-button.css',
  assetsDirs: ['./assets']
})
export class PxButton implements ComponentDidLoad {

  public parentEl: HTMLDivElement;
  componentDidLoad(): void {
    const canvas: HTMLCanvasElement = document.getElementById('px-button') as HTMLCanvasElement;
    const app = new Application({ view: canvas, backgroundAlpha: 0, width: this.parentEl.clientWidth, height: this.parentEl.clientHeight });
    app.loader.add('hexagon', './assets/hexagon.png')
    app.loader.load(() => this.draw(app))

  }

  draw(app: Application) {
    const button1 = new Button({
      label: 'Bandito',
      width: this.parentEl.clientWidth, 
      height: this.parentEl.clientHeight

    })

    app.stage.addChild(button1);
    this.onResize(app, button1)
  }

  onResize(app: Application, button1: Button) {
    app.renderer.resize(this.parentEl.clientWidth, this.parentEl.clientHeight)
    const width = app.renderer.width, height = app.renderer.height

    const btnMargin = 0
    button1.x = width * 0.5
    button1.y = height * 0.5 - button1.height * 0.5 - btnMargin
  }

  @Prop({
    reflect: true
  }) public value: string

  render() {
    return (
      <div class='px-button-wrapper' ref={(el) => this.parentEl = el}>
        <canvas id="px-button"></canvas>
      </div>
    );
  }
}