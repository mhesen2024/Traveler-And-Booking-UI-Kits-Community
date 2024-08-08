import CheckOut from '../components/molecules/CheckOut'
import Footer from '../components/organisem/Footer'
import Header from '../components/organisem/Header'
import OffersLink from '../components/organisem/offersLink'

export default function Home() {
  return (
    <div className=''>
      <Header/>
      <OffersLink/>
      <CheckOut/>
      <Footer/>
    </div>
  )
}
