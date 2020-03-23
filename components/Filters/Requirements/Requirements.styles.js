import styled from 'styled-components'

export const RequirementWrapper = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`

export const StyledRequirements = styled.div`
  margin: 30px 0;
  padding: 30px 0;
  border-top: 1px solid var(--color__dark);
  border-bottom: 1px solid var(--color__dark);

  h5 {
    margin-top: 0;
  }

  label {
    margin-top: 20px;
  }
`
