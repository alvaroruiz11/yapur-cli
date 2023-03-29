export interface Blog {
    title: string;
    keyword: string[];
    src: string;
}

export const blogs: Blog[] = [
    {
        title: 'Tratamiento para la gripe o resfriado común',
        keyword: ['Resfriado', 'Resfriado comun'],
        src: './assets/blogs/resfriado.jpg'
    },
    {
        title: '¿El vino tinto es bueno para la salud?',
        keyword: ['Vino tinto', 'El vino tinto es bueno'],
        src: './assets/blogs/vino.jpg'
    },
    {
        title: 'Cómo funciona la máquina de  hemodiálisis',
        keyword: ['Máquina de hemodiálisis', 'Hemodiálisis'],
        src: './assets/blogs/maquina.jpg'
    },
    {
        title: 'Caso clínico: cuidados post cirugía de apéndice',
        keyword: ['Cirugia de apendice', 'Cirugia'],
        src: './assets/blogs/cirugia.jpg'
    }
]