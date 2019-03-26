import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class CrewMember extends Component {
  render() {
    const { member, onUp, onDown } = this.props;
    const { name, login } = member;

    return (
      <div data-test={`crew-member-card-${login.uuid}`} className="CrewMember-container">
        <div className="CrewMember-info">
          <div className="CrewMemeber-photo" style={{ backgroundImage: `url(${member.picture.medium})` }} />
          <div className="CrewMemeber-name">
            <div>{`${name.first} ${name.last}`}</div>
            <div>{member.location.city}</div>
          </div>
        </div>
        <div className="CrewMember-toolbar">
          {onDown && <button onClick={onDown} data-test="prev-btn" type="button">&lt;</button>}
          {onUp && <button onClick={onUp} data-test="next-btn" className="CrewMember-up" type="button">&gt;</button>}
        </div>
      </div>
    );
  }
}

CrewMember.defaultProps = {
  member: null,
  onUp: null,
  onDown: null,
};

CrewMember.propTypes = {
  member: PropTypes.object,
  onUp: PropTypes.func,
  onDown: PropTypes.func,
};

export default CrewMember;
