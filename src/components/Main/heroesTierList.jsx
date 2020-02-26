import * as React from "react";
import { Component } from "react";
import "./heroesTierList.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

importAll(require.context("./assets", false, /.png/));

class HeroesTierList extends Component {
  render() {
    return (
      <div className="body">
        <h2 className="title">Heroes Tier List</h2>
        <table>
          <tbody>
            <tr>
              <th style={{ width: "15px" }}>Rating</th>
              <th style={{ width: "180px" }}>Marksman</th>
              <th style={{ width: "180px" }}>Assasin</th>
              <th style={{ width: "180px" }}>Mage</th>
              <th style={{ width: "180px" }}>Fighter</th>
              <th style={{ width: "180px" }}>Tank</th>
              <th style={{ width: "180px" }}>Support</th>
            </tr>
            <tr>
              <td>S+</td>
              <td>
                <img src={"./assets/Karrie.png"} />
                <img src={"./assets/Granger.png"} />
                <img src={"./assets/Bruno.png"} />
              </td>
              <td>
                <img src={"./assets/Ling.png"} />
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>
                <img src={"./assets/Kimmy.png"} />
                <img src={"./assets/Wanwan.png"} />
              </td>
              <td>
                <img src={"./assets/Helcurt.png"} />
                <img src={"./assets/Gusion.png"} />
                <img src={"./assets/Selena.png"} />
              </td>
            </tr>
            <tr>
              <td>A+</td>
              <td>
                <img src={"./assets/Claude.png"} />
                <img src={"./assets/Moskov.png"} />
                <img src={"./assets/Lesley.png"} />
              </td>
              <td>
                <img src={"./assets/Lancelot.png"} />
                <img src={"./assets/Hayabusa.png"} />
                <img src={"./assets/Fanny.png"} />
              </td>
              <td>
                <img src={"./assets/Lylia.png"} />
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>
                <img src={"./assets/Clint.png"} />
                <img src={"./assets/Irithel.png"} />
              </td>
              <td>
                {" "}
                <img src={"./assets/Natalia.png"} />
                <img src={"./assets/Hanzo.png"} />
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>
                <img src={"./assets/Hanabi.png"} />
                <img src={"./assets/Miya.png"} />
                <img src={"./assets/Yi Sun-shin.png"} />
              </td>
              <td>
                <img src={"./assets/Saber.png"} />
                <img src={"./assets/Karina.png"} />
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                <img src={"./assets/Layla.png"} />
                <img src={"./assets/Dyroth.png"} />
                <img src={"./assets/Dyroth.png"} />
                <img src={"./assets/Dyroth.png"} />
                <img src={"./assets/Dyroth.png"} />
              </td>
              <td></td>
              <td>
                <img src={"./assets/Vale.png"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default HeroesTierList;
