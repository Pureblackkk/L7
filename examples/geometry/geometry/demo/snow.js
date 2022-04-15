import { Scene, GeometryLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

const scene = new Scene({
  id: 'map',
  map: new GaodeMap({
    pitch: 40,
    style: 'dark',
    center: [120, 30],
    zoom: 6,
  })
});

scene.on('loaded', () => {
  let layer = new GeometryLayer()
      .shape('sprite')
      .size(10)
      .style({
        opacity: 0.3,
        mapTexture:
          'https://gw.alipayobjects.com/mdn/rms_816329/afts/img/A*zLQwQKBSagYAAAAAAAAAAAAAARQnAQ', // snow
        center: [120, 30],
        spriteCount: 60,
        spriteRadius: 10,
        spriteTop: 2500000,
        spriteScale: 0.6,
      })
  scene.addLayer(layer);
});