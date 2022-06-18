import React, { Fragment } from 'react'
import { RedSection } from '../Sections/Sections.styled';
import { HorariosGrid } from './Horarios.styled';

const defaultHours = [
  { day: 'Lunes', hora: '10:30 - 23:00' },
  { day: 'Martes', hora: 'Cerrado' },
  { day: 'Miércoles', hora: '18:00 - 23:00' },
  { day: 'Jueves', hora: '10:30 - 23:00' },
  { day: 'Viernes', hora: '10:30 - 23:00' },
  { day: 'Sábado', hora: '10:30 - 23:00' },
  { day: 'Domingo', hora: '10:30 - 23:00' }
]

const Horarios = () => {
  return (
    <RedSection id='horarios'>
      <h3>Horarios</h3>
      <HorariosGrid>
        {
          defaultHours.map((wrk) => (
            <Fragment key={`horarios-${wrk.day}`}>
              <div>
                <p>{wrk.day}</p>
              </div>
              <div>
                <p>{wrk.hora}</p>
              </div>
            </Fragment>
          ))
        }
      </HorariosGrid>
    </RedSection>
  )
}

export default Horarios;