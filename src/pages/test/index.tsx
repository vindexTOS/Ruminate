import React from 'react'
import { UseGeneralContext } from '../../contexts/GeneralContext'

const test = () => {
  const { testState, testDispatch } = UseGeneralContext()
  return (
    <div className="bg-red-600">
      <input
        onChange={(e) =>
          testDispatch({ type: 'test', payload: e.target.value })
        }
        placeholder="test"
      />
      <p>Test Case:{testState.test}</p>
    </div>
  )
}

export default test
