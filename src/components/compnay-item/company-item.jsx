import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

const trimText = (text) => {
  if (text.length > 19) {
    text = `${text.slice(0, 14)}....`
  }
    return text;
}

class CompanyItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
    }
  }

  render() {
    return (
      <label className="form__label">
        <input className="visually-hidden form__input-hidden" type="checkbox"
          name={this.props.company}
          checked={this.state.checked}
          onChange={(evt) => {
            this.setState((state) => ({checked: !state.checked}))
            this.props.setCompany(evt.target.name)
          }} />
        <span className="form__input form__input--box"></span>
        <span className="form__description form__description--company">
          -&nbsp;<span className="form__company">{trimText(this.props.company)}</span> от
          <span className="form__price">{this.props.price}</span>&nbsp;р.
        </span>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCompany(company) {
    dispatch(ActionCreator.setCompany(company));
  }
});

export default connect(null, mapDispatchToProps)(CompanyItem);
