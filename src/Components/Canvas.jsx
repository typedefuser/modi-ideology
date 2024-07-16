import React, { useEffect, useRef, useState } from "react"
import { Download } from "./Download";
import image from '../assets/OIP.png'

const Canvas = ({ xPosition, yPosition }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myCanvas = canvasRef.current;
    if (!myCanvas) return;

    const width = myCanvas.width;
    const height = myCanvas.height;
    
    const ctx = myCanvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    // Fill with white background
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);
    
    // Add planes
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = '#000';
    ctx.stroke();

    // Plot point
    console.log(xPosition+" "+yPosition)
    const plotX = 40+(xPosition + 1) * width / 2;
    const plotY = 40+height - (yPosition + 1) * height / 2;
    console.log(plotX,plotY)
    ctx.beginPath();
    ctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();

    // Add labels
    ctx.fillStyle = 'black';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Economic Left', 50, height / 2 - 10);
    ctx.fillText('Economic Right', width - 50, height / 2 - 10);
    ctx.fillText('Social Liberal(Liberatarian)', width / 2 + 10, 15);
    ctx.fillText('Social Conservative(Authoritarian)', width / 2 + 10, height - 5);

    // Add image
    const img = new Image();
    img.src = image; 
    img.onload = function() {
      ctx.drawImage(img, width / 2 - img.width / 2, height / 2 - img.height / 2);
    };
  }, [xPosition, yPosition]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = url;
    link.download = 'canvas-image.png';
    link.click();
  };

  return (
    <>
      <canvas className="canvas" ref={canvasRef} width="500" height="500"></canvas>
      <Download handledownload={handleDownload} />
      <div>
      
      </div>
    </>
  );
};

export default Canvas;