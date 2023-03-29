import { Servicio } from '../data';
import { ServicioCard } from './ServicioCard';



interface Props {
    servicios: Servicio[]
}

export const ServicioList = ({ servicios }: Props ) => {
  return (
    <div className="row">
        {
            servicios.map( serv => (
                <div className="col-sm-4" key={ serv.title }>
                    <ServicioCard servicio={ serv } />
                </div>
            ))
        }
    </div>
  )
}
