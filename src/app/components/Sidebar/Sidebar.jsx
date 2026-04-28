'use client';
import './Sidebar.scss'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function Sidebar() {
  
  return (
    <aside className="sidebar">
      <h2>Другие проекты</h2>
      <nav>
        <ul>
          <li><Link href="/video-section" className='link-project'><Image className='project-image' src="/images/gif/videoAn.gif" alt="project" width={320} height={180}/></Link></li>
          <li><Link href="https://www.glk.md/ru/index.php" className='link-project'><Image className='project-image' src="/images/gif/videoGlk.gif" alt="project" width={320} height={180}/></Link></li>
          <li><Link href="/gagauz-dili" className='link-project'><Image className='project-image' src="/images/gif/gagauz_dili.gif" alt="project" width={320} height={180}/></Link></li>
          <li><Link href="/dictionary" className='link-project'><Image className='project-image' src="/images/gif/dictionary.gif" alt="project" width={320} height={180}/></Link></li>
          <li><Link href="https://oldgbm.md/" className='link-project'><Image className='project-image' src="/images/old_web.jpg" alt="project" width={320} height={180}/></Link></li>
          <li><Link href="http://www.gagauzia.md/" className='link-project'><Image className='project-image' src="/images/BAKANNIK KOMTET.jpg" alt="BAKANNIK KOMTET" width={320} height={180}/></Link></li>
          <li><Link href="http://halktoplushu.md/" className='link-project'><Image className='project-image' src="/images/HALK TOPLUU.jpg" alt="HALK TOPLUU" width={320} height={180}/></Link></li>
          <li><Link href="https://kdu.md/ru/" className='link-project'><Image className='project-image' src="/images/KDU.jpg" alt="HALK TOPLUU" width={320} height={180}/></Link></li>
        </ul>
      </nav>
    </aside>
  );
}