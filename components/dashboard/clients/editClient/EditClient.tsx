'use client'

import { useState } from 'react';
import Button from '../../button/Button';
import FormClient from '../form/FormClient';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export default function EditClient() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <Button text="Agregar Cliente" icon={faUserPlus} action={ () => setOpenModal(true)}/>
      {
        openModal && <FormClient handleModal={setOpenModal} title='Agregar Nuevo Cliente'/>
      }
    </div>
  )
}
