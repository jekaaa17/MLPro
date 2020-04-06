import React, { Component } from "react";
import Field from "../field.jsx";
import "../heroesPage.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchMarksman } from "../../../../actions/index.jsx";

class Marksman extends Component {
  render() {
    return (
      <div>
        <div className="searchbox-layout">
          <div id="cover">
            <form>
              <div className="tb">
                <div className="td">
                  <input
                    type="text"
                    onChange={(e) => this.props.searchMarksman(e.target.value)}
                    placeholder="Heroes Search"
                  />
                </div>
                <div className="td" id="s-cover">
                  <button className="search-button" type="submit">
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="content-container">
          <Field
            heroesCard={this.props.data}
            heroesCardCategory={this.props.data.marksman}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.marksman };
}

//action creator
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchMarksman }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Marksman);
