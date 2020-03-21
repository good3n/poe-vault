import React from "react";
import { StyledItem, Header, Inner, Footer } from "./Item.styles";

const Item = props => {
  let i = "";
  return (
    <>
      {props.data.users.slice(0, 5).map(user => {
        return user.items.map(item => {
          const { id, name, typeLine, requirements } = item;
          return (
            <StyledItem key={id} className={i++}>
              <Header>
                <h3>
                  {name ? name : null}
                  {` `}
                  {typeLine ? typeLine : null}
                </h3>
                <div className="requirements">
                  {requirements != null
                    ? requirements.map(req => {
                        const { name, values } = req;
                        return (
                          <div className="requirement">
                            <span className="req-name">
                              {name}
                              {`: `}
                            </span>
                            {values.map(value => {
                              return (
                                <span className="req-value">{value[0]}</span>
                              );
                            })}
                          </div>
                        );
                      })
                    : null}
                </div>
              </Header>
              <Inner>
                <div className="item-image">
                  <span>
                    <img src={item.icon} alt={item.name} />
                  </span>
                </div>
                <div className="stats">
                  <ul>
                    {item.implicitMods
                      ? item.implicitMods.map(implicitMod => {
                          return <li>{implicitMod}</li>;
                        })
                      : null}
                    {item.explicitMods
                      ? item.explicitMods.map(explicitMod => {
                          return <li>{explicitMod}</li>;
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
          );
        });
      })}
    </>
  );
};

export default Item;
