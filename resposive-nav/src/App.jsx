
import './App.css'
import Footer from './Component/Footer'
import NavBar from './Component/Navbar/NavBar'
import ProductContainer from './Component/product/ProductContainer'

function App() {


  return (
    <>

      <NavBar></NavBar>
      <ProductContainer></ProductContainer>




      <h1 className=' text-center py-4'>Component build by <span className='text-sm text-slate-400' >JoyHasan</span></h1>
      <Footer></Footer>
    </>
  )
}

export default App
