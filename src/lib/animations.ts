import { gsap } from 'gsap';

export const magneticButton = (element: HTMLElement) => {
  const bound = element.getBoundingClientRect();
  const anchorX = bound.left + bound.width / 2;
  const anchorY = bound.top + bound.height / 2;

  return (e: MouseEvent) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const deltaX = mouseX - anchorX;
    const deltaY = mouseY - anchorY;
    
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const magnetism = 0.2;
    
    gsap.to(element, {
      x: deltaX * magnetism,
      y: deltaY * magnetism,
      duration: 0.3,
    });
  };
};

export const glitchText = (element: HTMLElement) => {
  const text = element.textContent || '';
  element.textContent = '';
  
  return text.split('').map((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    element.appendChild(span);
    
    gsap.from(span, {
      opacity: 0,
      duration: 0.1,
      delay: i * 0.05,
      ease: 'power2.out',
    });
    
    return span;
  });
};