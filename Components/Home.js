import React from 'react'
import Link from 'next/link'
import './Home.css'


const Home = () => {
  return (

    
    <div className='main' >
        <Link href="/Event">
        <div className='heading'>
<img alt="settings" loading="lazy" width="40" height="40" decoding="async" data-nimg="1" class="h-[50px] " src="/images/img_settings.svg"></img>

        <h1 className='font-bold top-0 text-3rem' >Astrix.</h1>
       
        </div>
        <div className='first'>
           <h1>WE</h1>
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_143.png&w=750&q=75'></img>
            <h1>ORGANIZE THE</h1> 
        </div>
        <div className='first'>
            <h1>CONNECTION</h1>
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_141.png&w=1080&q=75'></img>
        </div>
        <div className='first'>
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_144.png&w=640&q=75'></img>
            <h1>BETWEEN</h1>
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_145.png&w=384&q=75
'></img>
            <h1> MUSIC</h1> 
        </div>
        <div className='first'>
            <h1>ARTIST</h1>
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_147.png&w=640&q=75'></img>
            <h1>CULTURE</h1> 
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_146.png&w=384&q=75'></img>
        </div>
        <div className='first'>
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_139.png&w=384&q=75'></img>
            <h1>ART</h1>
            <img width='200px' src='_next/image?url=%2Fimages%2Fimg_image_137.png&w=384&q=75'></img>

            <h1>& COLLECTIONS</h1> 
            
        </div>
        
        </Link>
    </div>
  )
}

export default Home