import React from "react";
import Modal from "react-modal";
import "./Modal/modal.css";
import "./heroesPage.css";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap_white.css";

Modal.setAppElement(document.getElementById("app"));

function HeroCard(props) {
  const hero = props.heroCard;
  const bot = "bottom";

  const {
    firstItem,
    secondItem,
    thirdItem,
    fourthItem,
    fifthItem,
    sixthItem,
    spell,
  } = props.heroCard;

  const itemDesc = [
    firstItem,
    secondItem,
    thirdItem,
    fourthItem,
    fifthItem,
    sixthItem,
  ];

  const spellDesc = spell + "Desc";

  for (var i = 0; i < itemDesc.length; i++) {
    itemDesc[i] = (itemDesc[i] + "Desc")
      .replace(/-/g, " ")
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(" ")
      .trim()
      .replace(/ /g, "")
      .split(" ")
      .map((s) => s.charAt(0).toLowerCase() + s.substring(1))
      .join(" ");
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-font">
          <img src={"../assets/" + hero.name + "Card" + ".png"} />
          <h1>{hero.name}</h1>
          <table className="hero-stats">
            <tbody>
              <tr>
                <td style={{ width: "80px" }}>Battle Point Cost:</td>
                <td style={{ width: "50px" }}>
                  <img src={"../assets/battle-point.png"} />{" "}
                  {hero.battlePointCost}
                </td>
              </tr>
              <tr>
                <td>{hero.diamondOrTicket} Cost:</td>
                <td>
                  <img src={"../assets/" + hero.diamondOrTicket + ".png"} />{" "}
                  {hero.cost}
                </td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td>{hero.rating}</td>
              </tr>
            </tbody>
          </table>
          <p>
            <button onClick={openModal}>View Pro Preparation</button>
          </p>
          <Modal
            className="modal-content"
            overlayClassName="modal-overlay"
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <div className="modal-header">
              <p> Pro Preparation </p>
              <div className="close-button" onClick={closeModal}>
                &#10006;
              </div>
            </div>
            <div className="pro-preparation">
              <Tooltip
                placement={bot}
                overlay={
                  <div className="tooltip-container">{hero[itemDesc[0]]}</div>
                }
              >
                <img src={"../assets/" + hero.firstItem + ".png"} />
              </Tooltip>
              <Tooltip
                placement={bot}
                overlay={
                  <div className="tooltip-container">
                    <span>{hero[itemDesc[1]]}</span>
                  </div>
                }
              >
                <img src={"../assets/" + hero.secondItem + ".png"} />
              </Tooltip>
              <Tooltip
                placement={bot}
                overlay={
                  <div className="tooltip-container">
                    <span>{hero[itemDesc[2]]}</span>
                  </div>
                }
              >
                <img src={"../assets/" + hero.thirdItem + ".png"} />
              </Tooltip>
              <Tooltip
                placement={bot}
                overlay={
                  <div className="tooltip-container">
                    <span>{hero[itemDesc[3]]}</span>
                  </div>
                }
              >
                <img src={"../assets/" + hero.fourthItem + ".png"} />
              </Tooltip>
              <Tooltip
                placement={bot}
                overlay={
                  <div className="tooltip-container">
                    <span>{hero[itemDesc[4]]}</span>
                  </div>
                }
              >
                <img src={"../assets/" + hero.fifthItem + ".png"} />
              </Tooltip>
              <Tooltip
                placement={bot}
                overlay={
                  <div className="tooltip-container">
                    <span>{hero[itemDesc[5]]}</span>
                  </div>
                }
              >
                <img src={"../assets/" + hero.sixthItem + ".png"} />
              </Tooltip>
            </div>
            <div className="second-row">
              <div className="first-column">
                <Tooltip
                  placement={"top"}
                  overlay={
                    <div className="tooltip-container">
                      <span>{hero[spellDesc]}</span>
                    </div>
                  }
                >
                  <img src={"../assets/" + hero.spell + ".png"} />
                </Tooltip>
              </div>
              <div className="second-column">
                <img src={"../assets/" + hero.firstEmblem + ".png"} />
                <img src={"../assets/" + hero.secondEmblem + ".png"} />
                <img src={"../assets/" + hero.thirdEmblem + ".png"} />
                <img src={"../assets/" + hero.fourthEmblem + ".png"} />
                <img src={"../assets/" + hero.fifthEmblem + ".png"} />
                <img src={"../assets/" + hero.sixthEmblem + ".png"} />
                <img src={"../assets/" + hero.firstTalent + ".png"} />
                <img src={"../assets/" + hero.secondTalent + ".png"} />
                <img src={"../assets/" + hero.thirdTalent + ".png"} />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
