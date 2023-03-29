import { ClinicaYapurLayout } from '../layouts';
import { DoctorList } from '../components'
import { doctores } from '../data';


export const EspecealidadPage = () => {


  return (
    <ClinicaYapurLayout>
      <section className="section-especialidad">
        <div className="container-title">
          <img src="./assets/icon-doctor.png" alt="" />
          <h2>ESPECIALDAD</h2>
        </div>
        <div className="container" style={{ backgroundColor: 'white', height: '100%'}}>
          <DoctorList doctors={ doctores }/>
        </div>
      </section>
    </ClinicaYapurLayout>
  )
}
