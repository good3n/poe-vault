import React, { useState } from 'react'
import { Items } from '../Item/Item.styles'
import { Item } from '../Item'
import { Sidebar } from '../Sidebar'

const App = props => {
  const [leagueType, setLeagueType] = useState('Hardcore')
  const [requiredMinLevel, setRequiredMinLevel] = useState(1)
  const [requiredMaxLevel, setRequiredMaxLevel] = useState(100)

  return (
    <>
      <Sidebar
        stashes={props}
        leagueType={leagueType}
        setLeagueType={setLeagueType}
        requiredMinLevel={requiredMinLevel}
        requiredMaxLevel={requiredMaxLevel}
        setRequiredMinLevel={setRequiredMinLevel}
        setRequiredMaxLevel={setRequiredMaxLevel}
      />
      <Items>
        <Item
          stashes={props}
          leagueType={leagueType}
          requiredMinLevel={requiredMinLevel}
          requiredMaxLevel={requiredMaxLevel}
        />
      </Items>
    </>
  )
}

export default App
