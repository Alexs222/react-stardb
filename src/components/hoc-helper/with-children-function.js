import React from 'react';

const withChildrenFunction = (fn) => (Wrapped) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn} 
      </Wrapped>
    )
  }
}

export default withChildrenFunction