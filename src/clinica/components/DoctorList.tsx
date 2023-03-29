import { Doctor } from '../data';
import { CardDoctor } from './CardDoctor';

interface Props {
    doctors: Doctor[]
}
export const DoctorList = ({ doctors }: Props) => {
  return (
    <div className="row">
        {
            doctors.map( doc => (
                <CardDoctor doctor={ doc } key={ doc.nombre }/>
            ))
        }
    </div>
  )
}
