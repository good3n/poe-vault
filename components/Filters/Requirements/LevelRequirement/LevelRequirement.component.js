import React from 'react'
import { RequirementWrapper } from '../Requirements.styles'

const LevelRequirement = props => {
  return (
    <>
      <form action="">
        <label htmlFor="">Level</label>
        <RequirementWrapper>
          <input type="number" placeholder="min" />
          <input type="number" placeholder="max" />
        </RequirementWrapper>
      </form>
    </>
  )
}

export default LevelRequirement
