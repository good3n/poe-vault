import React from 'react'
import { RequirementWrapper } from '../Requirements.styles'

const DexterityRequirement = props => {
  return (
    <>
      <form action="">
        <label htmlFor="">Dexterity</label>
        <RequirementWrapper>
          <input type="number" placeholder="min" />
          <input type="number" placeholder="max" />
        </RequirementWrapper>
      </form>
    </>
  )
}

export default DexterityRequirement
