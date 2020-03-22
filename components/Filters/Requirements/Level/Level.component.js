import React, { useState } from 'react'

const Level = props => {
  const [requiredMinValue, setRequiredMinValue] = useState(1)
  const [requiredMaxValue, setRequiredMaxValue] = useState(100)
  const { requiredMinLevel, setRequiredMinLevel } = props
  const { requiredMaxLevel, setRequiredMaxLevel } = props

  return (
    <>
      <form action="">
        <label htmlFor="">Level</label>
        <span
          css={`
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          `}
        >
          <input
            type="number"
            placeholder="min"
            onChange={e => setRequiredMinLevel(e.target.value)}
          />
          <input
            type="number"
            placeholder="max"
            onChange={e => setRequiredMaxValue(e.target.value)}
          />
        </span>
      </form>
    </>
  )
}

export default Level
