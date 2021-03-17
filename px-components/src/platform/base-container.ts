import { IApplicationOptions, Application } from '@pixi/app'
export default class BaseContainer {
  private app: Application;

  public get view(): HTMLCanvasElement {
    return this.app.view;
  }

  constructor(options: IApplicationOptions) {
    this.app = new Application(options);
  }
}