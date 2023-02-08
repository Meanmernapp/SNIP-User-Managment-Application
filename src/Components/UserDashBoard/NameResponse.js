import React from 'react'
import { Button, Modal, Nav } from "react-bootstrap";

const NameResponse = () => {
  return (
    <div className='side-filter-bar'>
      <Nav defaultActiveKey='/home' className='flex-column'>
        <Nav.Link eventKey='disabled' disabled>
          Resultados para:
        </Nav.Link>
        <Nav.Link href=''>Javier Islas</Nav.Link>
        <Nav.Link eventKey=''>Javier Benítez</Nav.Link>
        <Nav.Link eventKey='disabled' disabled>
          Filtros:
        </Nav.Link>
      </Nav>
      <div className='check-box-containers'>
        <span className='parent-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>Todas las direcciones</label>
        </span>
        <span className='parent-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>Estados Unidos</label>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'> I have a bike</label>
          <br></br>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'> I have a bike</label>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'> I have a bike</label>
        </span>
        <span className='parent-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>México</label>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'> I have a bike</label>
          <br></br>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'> I have a bike</label>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'> I have a bike</label>
        </span>
        <span className='parent-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>Todas las edades</label>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>18-30 años</label>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>30-40 años</label>
        </span>{' '}
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>50-60 años</label>
        </span>
        <span className='sub-check-box'>
          <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' />
          <label for='vehicle1'>más de 60 años</label>
        </span>
      </div>
    </div>
  )
}

export default NameResponse
