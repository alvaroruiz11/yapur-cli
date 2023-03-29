import { FabWhatsApp, Footer, NavBar, ScrollToTop } from '../components';


interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ClinicaYapurLayout = ({ children }: Props) => {
  return (
    <>
      <ScrollToTop/>
  
      <NavBar/>

      <main
        className="animate__animated animate__fadeIn"
        style={{ marginTop: '100px'}}
      >
        { children }
      </main>
      <FabWhatsApp/>
      <Footer/>
    </>
  )
}
