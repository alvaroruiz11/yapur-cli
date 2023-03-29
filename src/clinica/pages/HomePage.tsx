import { ValuesCard } from '../components';
import { valoresClinica } from '../data';
import { ClinicaYapurLayout } from '../layouts';



export const HomePage = () => {
  return (
    <ClinicaYapurLayout>
        <header className="home-header">
          <div>
              <h2>
                Cuidamos tu salud como si fuera la nuestra, con soluciones medicas para cada etapa de tu vida.
              </h2>
          </div>
        </header>
        <section className="home-section-1">
          <div className="container" data-aos="fade-up">
            <h3 className="text-center">
                Donde tu salud es nuestra razón de ser
            </h3>
            <p className="text-center">
              La Clínica Yapur cuenta con todos los estándares de calidad, con una amplia infraestructura, tecnología moderna además de procesos clínicos y asistenciales acordes a los requerimientos de nuestros pacientes.
            </p>
          </div>
        </section>
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
                  
                </div>
            </div>
          </div>
        </section>
        <section className="home-section-3">
          <div className="container">
            <div className="row"  >
              <div className="col-sm-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3711.262940278564!2d-64.72988959637324!3d-21.536571614841392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x940647e31415e9d1%3A0x8f90186ed9f68d44!2sClinica%20Yapur!5e0!3m2!1ses!2sbo!4v1670422532262!5m2!1ses!2sbo" width="600" height="450" style={{border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="col-sm-6">
                <ul>
                  <li>
                    <h5>
                      Dirección
                    </h5>
                    <p>
                      Calle Virginio Lema entre Issac Attie y Delgadillo.
                    </p>
                  </li>
                  <li>
                    <h5>
                      Telefono:
                    </h5>
                    <p>
                      4 6632556
                    </p>
                  </li>
                  <li>
                    <h5>
                      Celular:
                    </h5>
                    <p>
                      +591 70217693
                    </p>
                  </li>
                  <li>
                    <h5>Email:</h5>
                    <p>
                      yapurclinica@gmail.com
                    </p>
                  </li>
                </ul>
              </div>
          </div>
          </div>
        </section>
    </ClinicaYapurLayout>
  )
}