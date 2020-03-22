import React from 'react'
import { StyledItem, Header, Inner, Footer } from './Item.styles'

const Item = props => {
  const stashes = props.stashes.data
  console.log('League Type: ' + props.leagueType)
  console.log('Min level: ' + props.requiredMinLevel)
  return (
    <>
      {stashes.slice(0, 5).map(stash => {
        if (stash.league === props.leagueType) {
          return stash.items.map(item => {
            const { id, name, typeLine, requirements } = item
            return (
              <StyledItem key={id}>
                <Header>
                  <h3>
                    {name ? name : null}
                    {` `}
                    {typeLine ? typeLine : null}
                  </h3>
                  <div className="requirements">
                    {requirements != null
                      ? requirements.map(req => {
                          const { name, values } = req
                          return (
                            <div className="requirement">
                              <span className="req-name">
                                {name}
                                {`: `}
                              </span>
                              {values.map(value => {
                                return (
                                  <span className="req-value">{value[0]}</span>
                                )
                              })}
                            </div>
                          )
                        })
                      : null}
                  </div>
                </Header>
                <Inner>
                  <div className="item-image">
                    <span>
                      <img src={item.icon} alt={item.name} loading="lazy" />
                    </span>
                  </div>
                  <div className="stats">
                    <ul>
                      {item.implicitMods
                        ? item.implicitMods.map(implicitMod => {
                            return <li>{implicitMod}</li>
                          })
                        : null}
                      {item.explicitMods
                        ? item.explicitMods.map(explicitMod => {
                            return <li>{explicitMod}</li>
                          })
                        : null}
                      {item.identified ? null : (
                        <li className="unidentified">Unidentified</li>
                      )}
                    </ul>
                  </div>
                </Inner>
                <Footer></Footer>
              </StyledItem>
            )
          })
        }
      })}
    </>
  )
}

export default Item
