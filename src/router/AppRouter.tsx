import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage, NostrosPage, EspecealidadPage, BlogsPage, ServicioPage } from '../clinica';

export const AppRouter = () => {
  return (

    <Routes>
        <Route path='/' element={ <HomePage/> } />
        <Route path='/nosotros' element={ <NostrosPage/> } />

        <Route path='/especialidad' element={ <EspecealidadPage/> } />
        <Route path='/servicio' element={ <ServicioPage/> } />

        <Route path='/blog' element={ <BlogsPage/> } />

        <Route path='*' element={ <Navigate to="/" />} />
    </Routes>

  )
}
