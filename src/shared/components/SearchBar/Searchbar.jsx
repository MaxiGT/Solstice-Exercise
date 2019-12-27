import React, { Component } from 'react';

const ENTER_KEY = 'Enter';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      value: value,
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = ({ key }) => {
    if (key !== ENTER_KEY) return;
    this.handleSubmit();
  }

  handleSubmit = (ev) => {
    this.props.onChange(this.state.value);
  };

  handleInputchange = ({value}) => {
    this.setState({
      value,
    });
  }

  clearSearch = () => {
    const value = '';
    this.setState({
      value,
    }, () => this.handleSubmit());
  }
  
  render() {
    return(
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="input-group mb-3">
              <input type="text"
                className="form-control"
                placeholder="Contact's Name"
                aria-label="Contact's Name"
                name='value'
                aria-describedby="basic-addon2"
                value={this.state.value}
                onChange={(ev) => {this.handleInputchange(ev.target)}} />
              <div className="input-group-append">
                <button
                  id='primary-button'
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.handleSubmit}>Search</button>
                <button
                  id='secondary-button'
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.clearSearch}>Clear</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Searchbar;