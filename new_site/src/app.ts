import './acrylic.scss';
import './base.scss';

import { IRenderable, Renderer } from './renderer';

const renderer: IRenderable = new Renderer();

const el = document.getElementById('grid');
if (el) {
  renderer.renderGravityGrid(el);
}
