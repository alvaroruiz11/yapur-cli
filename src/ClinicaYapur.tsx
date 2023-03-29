import { BrowserRouter } from 'react-router-dom';

import { AppRouter } from './router/AppRouter';

export const ClinicaYapur = () => {
  return (
      <BrowserRouter basename='/yapur-cli'>
          <AppRouter/>
      </BrowserRouter>
  )
}
