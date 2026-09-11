'use client';
import Link from 'next/link';
import { ArrowUpRight, Menu, X, Mail, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function SiteNav({caseStudy=false}:{caseStudy?:boolean}){
 const [open,setOpen]=useState(false);
 const href=(id:string)=>caseStudy?`/#${id}`:`#${id}`;
 return <>
  <nav className="nav">
   <Link className="brand" href="/" onClick={()=>setOpen(false)}>TF<span>®</span></Link>
   <div className="navlinks desktop-nav">
    <Link href={href('work')}>Work</Link><Link href={href('about')}>About</Link><Link href={href('capabilities')}>Capabilities</Link><Link href={href('contact')}>Contact</Link>
   </div>
   <div className="nav-right"><a className="nav-mini" href="mailto:tayyabafakhar.biz@gmail.com"><Mail size={14}/> Email</a><Link className="navcta" href={href('contact')}>Let’s talk <ArrowUpRight size={15}/></Link><button className="menu-button" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(v=>!v)}>{open?<X size={20}/>:<Menu size={20}/>}</button></div>
  </nav>
  <div className={`mobile-menu ${open?'open':''}`} aria-hidden={!open}>
    <Link href={href('work')} onClick={()=>setOpen(false)}>Work</Link><Link href={href('about')} onClick={()=>setOpen(false)}>About</Link><Link href={href('capabilities')} onClick={()=>setOpen(false)}>Capabilities</Link><Link href={href('contact')} onClick={()=>setOpen(false)}>Contact</Link>
    <div className="mobile-links"><a href="mailto:tayyabafakhar.biz@gmail.com"><Mail size={15}/> Email</a><a href="https://www.linkedin.com/in/tayyaba-fakhar" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a><a href="https://www.behance.net/Tayyabafakhar" target="_blank" rel="noreferrer">Behance ↗</a></div>
  </div>
 </>;
}
