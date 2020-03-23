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
            const { id, frameType, name, typeLine, requirements } = item
            console.log(item)
            return (
              <StyledItem key={id}>
                <Header>
                  <h2 className={`type-${frameType}`}>
                    {name != null ? name : null}
                    {` `}
                    {typeLine != null ? typeLine : null}
                  </h2>
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
                      {item.implicitMods != null ? (
                        item.implicitMods.map(implicitMod => {
                          return <li className="implicit">{implicitMod}</li>
                        })
                      ) : (
                        <span className="nomods"></span>
                      )}
                      {item.explicitMods != null ? (
                        item.explicitMods.map(explicitMod => {
                          if (explicitMod.includes('% to Fire Resistance')) {
                            return (
                              <li
                                className="explicit"
                                css={`
                                  color: var(--color__orange);
                                `}
                              >
                                {explicitMod}
                              </li>
                            )
                          }
                          if (explicitMod.includes('% to Cold Resistance')) {
                            return (
                              <li
                                className="explicit"
                                css={`
                                  color: var(--color__cyan);
                                `}
                              >
                                {explicitMod}
                              </li>
                            )
                          }
                          if (
                            explicitMod.includes('% to Lightning Resistance')
                          ) {
                            return (
                              <li
                                className="explicit"
                                css={`
                                  color: var(--color__yellow);
                                `}
                              >
                                {explicitMod}
                              </li>
                            )
                          }
                          if (explicitMod.includes('to maximum Life')) {
                            return (
                              <li
                                className="explicit"
                                css={`
                                  color: var(--color__red);
                                `}
                              >
                                {explicitMod}
                              </li>
                            )
                          } else {
                            return <li className="explicit">{explicitMod}</li>
                          }
                        })
                      ) : (
                        <span className="nomods">No Mods</span>
                      )}
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
