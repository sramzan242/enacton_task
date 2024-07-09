import React, { useRef, useEffect } from 'react';
import paper from 'paper';
import { createNoise2D } from 'simplex-noise';
import './SmoothCursor.css'; // Create and import this CSS file

const SmoothCursor = () => {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const innerCursor = cursorRef.current;
    let clientX = 100;
    let clientY = 100;
    let lastX = 0;
    let lastY = 0;

    const initCursor = () => {
      document.addEventListener('mousemove', (e) => {
        clientX = e.clientX;
        clientY = e.clientY;
      });

      const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };

    initCursor();

    let group;

    const initCanvas = () => {
      const canvas = canvasRef.current;
      paper.setup(canvas);
      // const shapeBounds = { width: 75, height: 75 };
      const strokeColor = 'rgba(0, 0, 0, 0.5)';
      const strokeWidth = 1;
      const segments = 8;
      const radius = 20;

      const noiseScale = 150;
      const noiseRange = 4;
      let isNoisy = false;

      const polygon = new paper.Path.RegularPolygon(
        new paper.Point(0, 0),
        segments,
        radius
      );
      polygon.strokeColor = strokeColor;
      polygon.strokeWidth = strokeWidth;
      polygon.smooth();
      group = new paper.Group([polygon]);
      group.applyMatrix = false;

      const noiseObjects = polygon.segments.map(() => createNoise2D());

      const lerp = (a, b, n) => (1 - n) * a + n * b;

      paper.view.onFrame = () => {
        lastX = lerp(lastX, clientX, 0.2);
        lastY = lerp(lastY, clientY, 0.2);
        group.position = new paper.Point(lastX, lastY);

        if (isNoisy) {
          polygon.segments.forEach((segment, i) => {
            const noiseX = noiseObjects[i](lastX / noiseScale, lastY / noiseScale);
            const noiseY = noiseObjects[i](lastX / noiseScale, lastY / noiseScale);
            segment.point.x = lastX + noiseX * noiseRange;
            segment.point.y = lastY + noiseY * noiseRange;
          });
        } else {
          polygon.segments.forEach((segment) => {
            segment.point.x = lastX;
            segment.point.y = lastY;
          });
        }

        polygon.smooth();
      };
    };

    initCanvas();
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor--small" />
      <canvas ref={canvasRef} className="cursor--canvas" />
    </>
  );
};

export default SmoothCursor;
