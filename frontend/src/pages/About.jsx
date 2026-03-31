import React from 'react'
import Title from '../components/Title'
import about_img from '../assets/about_img.png'; 
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever, we blend timeless style with modern trends to create clothing that speaks confidence and comfort. Our collections are designed for those who value quality, individuality, and effortless fashion. From everyday essentials to standout pieces, we craft looks that move with you. Discover your signature style with us</p>
          <p>Founded in 2005 , Forever began with a simple vision — to redefine everyday fashion with a bold, authentic edge. What started as a small passion project has grown into a trusted brand loved by style-forward individuals. Over the years, we’ve stayed true to our roots, focusing on quality, creativity, and customer connection. Our journey is stitched with innovation, and we're just getting started.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to empower individuals through fashion that blends style, comfort, and self-expression. We’re committed to creating high-quality, sustainable clothing that inspires confidence in every look. At Forever, we believe fashion should be inclusive, innovative, and always evolving with you. We’re here to make everyday wear anything but ordinary.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>At Forever, quality isn’t just a promise — it’s our standard. Every piece we create undergoes careful inspection, from fabric selection to final stitching, ensuring durability, comfort, and flawless design. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>At Forever, convenience is at the heart of everything we do. From easy online shopping and secure payments to fast delivery and hassle-free returns, we make fashion effortless. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>At Forever, we believe great style deserves great service. Our dedicated support team is always ready to assist you — whether it’s sizing help, order updates, or styling tips.  </p>
        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
