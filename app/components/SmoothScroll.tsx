'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll(){
  useEffect(()=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.05,
    });
    const onClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!target) return;
      const hash = target.getAttribute('href');
      if (!hash || hash === '#') return;
      const el = document.querySelector(hash);
      if (!el) return;
      event.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -76, duration: 1.15 });
      history.replaceState(null, '', hash);
    };
    document.addEventListener('click', onClick);
    let frame = 0;
    const raf=(time:number)=>{ lenis.raf(time); frame=requestAnimationFrame(raf); };
    frame=requestAnimationFrame(raf);
    return ()=>{ cancelAnimationFrame(frame); document.removeEventListener('click', onClick); lenis.destroy(); };
  },[]);
  return null;
}
