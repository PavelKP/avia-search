import React from 'react';

const trimText = (text) => {
  if (text.length > 19) {
    text = `${text.slice(0, 14)}....`
  }
    return text;
}

const CompanyItem = ({company, price}) => {
  return (
    <label className="form__label">
      <input className="visually-hidden form__input-hidden" type="checkbox" name="company-filter" value="company-name" data-company-name={company}/>
      <span className="form__input form__input--box"></span>
      <span className="form__description form__description--company">
        -&nbsp;<span className="form__company">{trimText(company)}</span> от
        <span className="form__price">{price}</span>&nbsp;р.
      </span>
    </label>
  );
};

export default CompanyItem;
