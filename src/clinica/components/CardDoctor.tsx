import { Doctor } from '../data'

interface Props {
  doctor: Doctor;
}
export const CardDoctor = ({ doctor }: Props) => {
  return (
    <div className="col-sm-4">

      <div className="card-doctor">
          <img src="./assets/logo-yapur.png" alt="" style={{ width: '120px' }} className="card-doctor-logo"/>
          <div className="card-doctor-img">
              <div className="card-doctor-container-img">
                <img src={ doctor.path } alt={ doctor.nombre } />
              </div>
          </div>
          <div className="card-doctor-img-body">
              <h3>{ doctor.nombre }</h3>
              <p>Especialidad { doctor.especialidad }</p>
          </div>
          <div className="card-doctor-body">
            <ul>
              <li>
                  <p>
                    <b>Horario: </b>
                    { doctor.horario }
                  </p>
              </li>
              <li>
                <p>
                  <b>
                    Email: </b>
                    { doctor.email }
                </p>
              </li>
              <li>
                <p>
                  <b>
                    Celular: 
                  </b>
                  { doctor.celular }
                </p>
              </li>
              <li>
                <b>{ doctor.piso }</b>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}
