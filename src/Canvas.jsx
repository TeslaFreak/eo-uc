import React, { useEffect, useRef } from "react";

const Canvas = () => {
  const canvasRef = useRef(null);

  const col = (ctx, x, y, r, g, b) => {
    ctx.fillStyle = `rgb(${r},${g},${b})`;
    ctx.fillRect(x, y, 1, 1);
  };

  const R = (x, y, t) => {
    return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
  };

  const G = (x, y, t) => {
    return Math.floor(
      192 +
        64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  const B = (x, y, t) => {
    return Math.floor(
      192 +
        64 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    let ctx = canvas.getContext("2d");
    let t = 0;
    const run = () => {
      for (let x = 0; x <= 35; x++) {
        for (let y = 0; y <= 35; y++) {
          col(ctx, x, y, R(x, y, t), G(x, y, t), B(x, y, t));
        }
      }
      t = t + 0.01;
      window.requestAnimationFrame(run);
    };

    run();
  }, []);

  return (
    <canvas
      imageSmoothingEnabled
      className="Canvas"
      ref={canvasRef}
      width={32}
      height={32}
    />
  );
};

export default Canvas;
