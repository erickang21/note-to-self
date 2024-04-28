import React from 'react';
import { Spinner } from 'react-bootstrap';

function CustomSpinner() {
  return <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>;
}

export default CustomSpinner;
