import "./style.css";
import React, { Component } from "react";

class Form extends Component {
  render() {
    const { formQuery, onSubmit, onChange } = this.props;
    return (
      <div>
        <form className="c-form">
          <label htmlFor="formQuery">Compose tweed:</label>
          <input
            type="text"
            name="formQuery"
            id="formQuery"
            value={formQuery}
            onChange={onChange}
          />
          <input type="submit" onClick={onSubmit} />
        </form>
      </div>
    );
  }
}
export default Form;
