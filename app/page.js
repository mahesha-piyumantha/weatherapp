import Image from 'next/image'
// home page

import Header from '../components/Header'
import Form from '../components/Form'
import Cards from '../components/Cards'
import Footer from '../components/Footer'


export default function App() {
  return (
    <div className='bg-site w-full bg-cover bg-no-repeat'>
      <Header/>
      <Form/>
      <Cards/>
      <Footer/>
    </div>
  )
}
