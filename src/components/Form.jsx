/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomSpinner from './Spinner';
import '../css/components/Form.css';

const toFieldName = (name) => `${name.replace(
  /\w\S*/g,
  (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
)}:`;

function Form({
  fields, onSubmit, loading, width = '', onSubmitAction = '',
}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <div className="form-component" style={width.length ? { width } : {}}>
      <form className="form-component-section" onSubmit={handleSubmit(onSubmit)}>
        <p className="form-component-req-legend">* Required</p>
        {Object.entries(fields).map(([field, props], idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="form-component-field" key={idx}>
            <div className="form-component-field-heading">
              <p className="form-component-field-heading-text">{toFieldName(field)}</p>
              {props.required && <p className="form-component-field-heading-req">*</p>}
            </div>
            {props.description && <p className="form-component-field-heading-description">{props.description}</p>}
            <input
              className="form-component-field-input"
              disabled={loading}
              type={props.type}
              style={width.length ? { width: '100%' } : {}}
              {...register(field, { required: props.required })}
            />
            {errors[field] && (
              <div className="form-component-field-error">
                <p className="form-component-field-error-message">{errors[field].message}</p>
              </div>
            )}
          </div>
        ))}
        <div className="form-component-submit-section">
          {onSubmitAction.length > 0
            && (loading
              ? (<button type="button" disabled aria-label="loading" className="form-component-submit-button"><CustomSpinner/></button>)
              : (<input className="form-component-submit-button" type="submit" value={onSubmitAction}/>))}
        </div>
      </form>
    </div>
  );
}

export default Form;
