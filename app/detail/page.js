import React from 'react'

import Header from '@/components/Header'
import Form from '@/components/Form'
import Cards from '@/components/Cards'
import Footer from '@/components/Footer'
import DetailCard from '@/components/DetailCard'

export default function Detail() {
  return (
    <div className='bg-site w-full bg-cover bg-no-repeat h-[100vh]'>
      <Header/>
      <DetailCard/>
      <Footer/>
    </div>
  )
}
