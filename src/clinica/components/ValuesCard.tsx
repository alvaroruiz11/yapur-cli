import { ValoresClinica } from '../data'

interface Props {
  value: ValoresClinica
}

export const ValuesCard = ({ value }: Props ) => {
  return (
    <div className="card-values">
        <div className="card-values-img">
            <img src={ value.src } alt="valores" />
        </div>
        <div className="card-values-boyde">
            <p className="card-values-text">
            <b>{ value.title }:</b> { value.text }
            </p>
        </div>
    </div>
  )
}
