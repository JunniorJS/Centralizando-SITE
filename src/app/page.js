import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../components/Header'
import Section from '../../components/Section'
import Pequenas from '../../components/Pequenas'
import Footer from '../../components/Footer'
import Section2 from '../../components/Section2'

export default function Home() {
  return (
    <>
    
      <Header></Header>

      <Pequenas></Pequenas>
      
      <Section></Section>
      <Section2></Section2>


      <Footer></Footer>


    </>
  )
}
