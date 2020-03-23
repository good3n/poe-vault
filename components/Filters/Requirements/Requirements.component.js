import React from 'react'
import { LevelRequirement } from './LevelRequirement'
import { StrengthRequirement } from './StrengthRequirement'
import { DexterityRequirement } from './DexterityRequirement'
import { IntelligenceRequirement } from './IntelligenceRequirement'
import { StyledRequirements } from './Requirements.styles'

const Requirements = props => {
  return (
    <StyledRequirements>
      <h5>Requirements</h5>
      <LevelRequirement />
      <StrengthRequirement />
      <DexterityRequirement />
      <IntelligenceRequirement />
    </StyledRequirements>
  )
}

export default Requirements
