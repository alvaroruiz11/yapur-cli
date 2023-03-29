export interface Doctor {
    nombre: string;
    especialidad: string;
    horario: string;
    email: string;
    celular: string;
    piso: string;
    path:string;
}

export interface Servicio {
    title: string;
    desc: string;
    src: string;
}

export const doctores: Doctor[] = [
    {
        nombre: 'Dr. Oscar Vargas Maire',
        especialidad: 'Oculista',
        horario: 'Lunes, mírcoles y viernes 8:00 a 10:00 am',
        email: 'oscarxx@gmail.com',
        celular: '7XXXXXX',
        piso: '2do Piso',
        path: './assets/doctores/oscar-vargas.png'
    },
    {
        nombre: 'Dr. Ricardo Soruco',
        especialidad: 'Cardiología',
        horario: 'Martes, jueves y sábado 11:15 a 12:30 am - 5:30 a 6:30 pm',
        email: 'ricardoxx@gmail.com',
        celular: '7XXXXXX',
        piso: '3do Piso',
        path: './assets/doctores/ricardo-soruco.png'
    },
    {
        nombre: 'Dra. María Esther Valdiviezo',
        especialidad: 'Gastroenterología/ Endoscopia.',
        horario: 'Lunes, miércoles y viernes 8:00 a 10:00 am',
        email: 'mariaxx@gmail.com',
        celular: '7XXXXXX',
        piso: '1er Piso',
        path: './assets/doctores/maria-valdiviezo.png'
    },
    {
        nombre: 'Dr. Luis Omar Yapur Ferrufino',
        especialidad: 'Médico cirujano',
        horario: 'Lunes a viernes 8:00 a 10:00 am - 3:00 a 6:30 pm',
        email: 'luisxx@gmail.com',
        celular: '7XXXXXX',
        piso: '1er Piso',
        path: './assets/doctores/luis-yapur.png'
    },
]

export const servicios: Servicio[] = [
    {
        title: 'Ecografias',
        desc: 'Las ecografías son una técnica de diagnóstico médico no invasiva que utiliza ondas sonoras de alta frecuencia para crear imágenes en tiempo real del interior del cuerpo. Esta herramienta de diagnóstico es muy útil para visualizar y evaluar diferentes órganos y tejidos, incluyendo el corazón, los riñones, el hígado, el útero y los ovarios, entre otros',
        src: './assets/servicio/ecografia.jpg'
    },
    {
        title: 'Rayos X',
        desc: 'Los rayos X son un tipo de radiación llamada ondas electromagnéticas. Las imágenes de rayos X muestran el interior de su cuerpo en diferentes tonos de blanco y negro. Esto es debido a que diferentes tejidos absorben diferentes cantidades de radiación.',
        src: './assets/servicio/rayos-x.jpg'
    },
    {
        title: 'Tomografias',
        desc: 'Esta herramienta de diagnóstico es muy útil para detectar enfermedades, lesiones y tumores en diferentes partes del cuerpo, incluyendo el cerebro, el tórax, el abdomen y los huesos. En resumen, los tomógrafos son una herramienta valiosa para los médicos para evaluar el estado de diferentes órganos y estructuras del cuerpo.',
        src: './assets/servicio/tomografia.jpg'
    },
]