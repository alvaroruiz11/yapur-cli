import { servicios } from '../data'
import { ServicioList } from '../components';
import { ClinicaYapurLayout } from '../layouts';


export const ServicioPage = () => {
  return (
    <ClinicaYapurLayout>
      <section className="section-especialidad">
        <div className="container-title">
            <img src="./assets/icon-servicio.png" alt="" />
            <h2>SERVICIO</h2>
        </div>
        <div className="container" style={{ backgroundColor: 'white', height: '100%'}}>
          <ServicioList servicios={ servicios }/>
        </div>
      </section>
    </ClinicaYapurLayout>
  )
}
