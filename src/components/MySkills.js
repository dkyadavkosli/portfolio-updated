import React, { useRef, useEffect } from 'react';

const MovingCirclesComponent = () => {
  const words = [
    'C++',
    'HTML5',
    'CSS',
    'Tailwind',
    'Javascript',
    'React Js',
    'Node Js',
    'MongoDB',
    'DSA',
    'OOPS',
    'Solidity',
    'Blockchain',
    'Ether.js',
    'Web3.js',
    'Express Js'
  ]; 

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      // Set canvas dimensions based on its parent's size
      canvas.width = canvas.parentNode.clientWidth;
      canvas.height = canvas.parentNode.clientHeight;

      // Redraw circles on resize
      drawCircles();
    };

    const drawCircles = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const winSize = window.innerWidth;

      // Initialize circles with equal size and random positions
      const circleSize = winSize>1240?140:winSize>1024?120:90; // Diameter of circles
      const circles = words.map((word, index) => ({
        id: index,
        word,
        size: circleSize,
        x: Math.random() * (canvas.width - circleSize * 2) + circleSize, // Ensure circles spawn fully inside canvas
        y: Math.random() * (canvas.height - circleSize * 2) + circleSize,
        speedX: (Math.random() - 0.2) * 0.8, // Decrease movement speed
        speedY: (Math.random() - 0.2) * 0.8,
        color: 'transparent', // Transparent background
        borderColor: '#FFFFFF', // Border color
        fontSize: 1,
      }));

      const updateCircles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        circles.forEach(circle => {
          // Update circle position
          circle.x += circle.speedX;
          circle.y += circle.speedY;

          // Check collision with other circles
          circles.forEach(otherCircle => {
            if (circle.id !== otherCircle.id) {
              const dx = circle.x - otherCircle.x;
              const dy = circle.y - otherCircle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              // If circles are colliding
              if (distance < circle.size / 2 + otherCircle.size / 2) {
                // Reverse directions to bounce off each other
                const angle = Math.atan2(dy, dx);
                const sine = Math.sin(angle);
                const cosine = Math.cos(angle);

                // Rotate circle positions
                const x1 = 0;
                const y1 = 0; 

                // Rotate otherCircle positions
                const x2 = dx * cosine + dy * sine;
                const y2 = dy * cosine - dx * sine;

                // Rotate circle speeds
                const vx1 = circle.speedX * cosine + circle.speedY * sine;
                const vy1 = circle.speedY * cosine - circle.speedX * sine;

                // Rotate otherCircle speeds
                const vx2 = otherCircle.speedX * cosine + otherCircle.speedY * sine;
                const vy2 = otherCircle.speedY * cosine - otherCircle.speedX * sine;

                // Update velocities
                circle.speedX = vx2 * cosine - vy1 * sine;
                circle.speedY = vy1 * cosine + vx2 * sine;
                otherCircle.speedX = vx1 * cosine - vy2 * sine;
                otherCircle.speedY = vy2 * cosine + vx1 * sine;

                // Move circles apart to prevent sticking
                const moveDistance = circle.size / 2 + otherCircle.size / 2 - distance + 1;
                circle.x += moveDistance * Math.cos(angle);
                circle.y += moveDistance * Math.sin(angle);
                otherCircle.x -= moveDistance * Math.cos(angle);
                otherCircle.y -= moveDistance * Math.sin(angle);
              }
            }
          });

          // Check boundaries and update positions
          if (circle.x + circle.size / 2 >= canvas.width || circle.x - circle.size / 2 <= 0) {
            circle.speedX *= -1;
          }
          if (circle.y + circle.size / 2 >= canvas.height || circle.y - circle.size / 2 <= 0) {
            circle.speedY *= -1;
          }

          // Draw circle border
          ctx.beginPath();
          ctx.arc(circle.x, circle.y, circle.size / 2, 0, Math.PI * 2);
          ctx.strokeStyle = circle.borderColor;
          ctx.stroke();
          ctx.closePath();

          // Center text in the circle
          ctx.fillStyle = '#FFFFFF'; // Text color
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.font = 'bold 16px Arial'; // Font size
          ctx.fillText(circle.word, circle.x, circle.y);
        });

        // Request next frame
        requestAnimationFrame(updateCircles);
      };

      // Start animation loop
      requestAnimationFrame(updateCircles);
    };

    // Initialize canvas size and draw circles
    resizeCanvas();

    // Handle window resize to resize canvas accordingly
    window.addEventListener('resize', resizeCanvas);

    // Clean up
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='py-10 lg:px-10 md:px-8 sm:px-6 px-3 h-screen bg-black flex flex-col justify-between'>
      <section className='rounded-3xl border-[1px] border-slate-500 h-full relative overflow-hidden'>
        <canvas ref={canvasRef} className='absolute inset-0 w-full h-full' />
      </section>
    </div>
  );
};

export default MovingCirclesComponent;

