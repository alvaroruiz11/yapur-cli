
export interface ValoresClinica {
    id: number;
    title: string;
    text: string;
    src: string;
}


export const valoresClinica: ValoresClinica[] = [
    {
        id: 1,
        title: 'Respeto',
        text: 'Ofrecer un trato humano con transparencia y honestidad a los pacientes, familiares y compañeros de trabajo. Respetando sus derechos individuales y colectivos, su autonomía y su diversidad.',
        src: './assets/respeto.png'
    },
    {
        id: 2,
        title: 'Equidad',
        text: 'Asegurar igualdad en el acceso de los ciudadanos a la prestación asistencial, con independencia de su condición social.',
        src: './assets/equidad.png'
    },
    {
        id: 3,
        title: 'Responsabilidad',
        text: 'Hacernos responsables como organización y como individuos que actúan con ética y responsabilidad en todo lo que hacemos, para ser excelentes administradores de nuestros recursos y ser transparentes en nuestras acciones.',
        src: './assets/responsabilidad.png'
    },
    {
        id: 4,
        title: 'Calidez',
        text: 'Asistir a nuestros pacientes y sus familias con gentileza y compasión, con esfuerzo por comprender y responder mejor a sus necesidades.',
        src: './assets/calidez.png'
    },
]