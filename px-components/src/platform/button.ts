import { Texture } from '@pixi/core';
import { NineSlicePlane } from '@pixi/mesh-extras';
import { Text } from '@pixi/text';

export default class Button extends NineSlicePlane {

  private settings: any;

  private label: Text;

  constructor(settings) {
    const texture = Texture.from('hexagon');
    const notScalableArea = 5 // Indent from left, top, right and bottom sides in pixels
    super(texture, notScalableArea, notScalableArea, notScalableArea, notScalableArea)
    this.settings = {
      // Default values
      width: settings.width,
      height: settings.height,

      fontSize: 30
    }

    this.label = new Text('');
    this.addChild(this.label)
    // Update visual appearance
    this.update(settings)
  }

  update(settings) {
    // Creating new settings which include old ones and apply new ones over it
    this.settings = {
      ...this.settings, // including old settings
      ...settings, // including new settings
    }

    this.label.text = this.settings.label
    this.label.style = {
      fontSize: this.settings.fontSize + 'px',
      fill: '#fafafa',
      letterSpacing: 5
    }

    this.onResize()
  }

  onResize() {
    this.width = this.settings.width
    this.height = this.settings.height

    this.label.x = this.width * 0.5 - this.label.width / 2
    this.label.y = this.height * 0.5 - this.label.height / 2

    this.pivot.set(this.width * 0.5, 0)
  }

}