import React from 'react'
import { RequirementWrapper } from '../Requirements.styles'

const IntelligenceRequirement = props => {
  return (
    <>
      <form action="">
        <label htmlFor="">Intelligence</label>
        <RequirementWrapper>
          <input type="number" placeholder="min" />
          <input type="number" placeholder="max" />
        </RequirementWrapper>
      </form>
    </>
  )
}

export default IntelligenceRequirement
