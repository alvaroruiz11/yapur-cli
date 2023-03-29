import { Servicio } from '../data';

interface Props {
    servicio: Servicio
}

export const ServicioCard = ({ servicio }: Props) => {
  return (
    <div className="card-servicio">
        <img src={ servicio.src } alt={ servicio.title } />
        <div className="card-servicio-body">
            <h3 className="card-servicio-title">
                { servicio.title }
            </h3>
            <p className="card-servicio-text">
                { servicio.desc }
            </p>
        </div>
    </div>
  )
}
