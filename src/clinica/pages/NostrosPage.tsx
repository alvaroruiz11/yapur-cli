import { valoresClinica } from '../data';
import { ValuesCard } from '../components';
import { ClinicaYapurLayout } from '../layouts';


export const NostrosPage = () => {
  return (
    <ClinicaYapurLayout>
        <div className="container-title">
          <img src="./assets/icon-nosotros.png" alt="" />
          <h2>SOBRE NOSOTROS</h2>
        </div>
        <section className="home-section-2">
          <div className="container">
            <div className="row container-values" data-aos="fade-right">
                <div className="col-sm-6 border-left">
                    <h3>Nuestra Mision</h3>
                    <p>Contribuir al cuidado de la vida y la recuperación de la salud, a través de la prestación de servicios de atención integral, eficaces y eficientes, centrados en la persona con un equipo humano cálido y calificado, promoviendo la participación de la población en su propio bienestar.</p>
                </div>
                <div className="col-sm-6">
                    <h3>Nuestra Visión</h3>
                    <p>Ser referentes en atención integral del Sur de Bolivia, aportando calidad, confianza y seguridad, con los mejores profesionales certificados;  que brinde servicios ágiles, eficientes y eficaces, respondiendo a las expectativas de pacientes.</p>
                </div>
                <div className="col" data-aos="fade-left">
                  <h3>Nuestros Valores Corporativos</h3>
                  {
                      valoresClinica.map( value => <ValuesCard key={ value.id } value={ value }/> )
                  }
                  <button className="btn-values me-4 mt-4">
                      Contactenos
                  </button>
                  <button className="btn-values mt-4">
                      Linea Gratuita
                  </button>
                </div>
            </div>
          </div>
        </section>
    </ClinicaYapurLayout>
  )
}
