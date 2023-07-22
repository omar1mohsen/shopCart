import Categories from "./components/Categories"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import SubForm from '@/app/components/SubForm'
import ScrollTopBtn from "./components/assets/ScrollTopBtn"

const page = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <Categories />
    <SubForm/>
    <ScrollTopBtn/>
    <Footer/>
    </>
  )
}

export default page