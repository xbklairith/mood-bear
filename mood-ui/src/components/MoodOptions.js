
/* eslint-disable global-require */
import React from 'react';
import styled from 'styled-components';


const RoundImage = styled.img`
  border-radius: 50% 50% 50% 50%;
  filter: grayscale(50%);
  &:hover{
    box-shadow: 0px 0px 10px 1px #fbce4f;
    cursor: pointer;
    filter: grayscale(0%);
  }
`;

const Radio = styled.input`
  &:checked + img{
    /* background: blue; */
    /* border: solid 5px #c6426e; */
    filter: grayscale(0%);
    box-shadow: 2px 2px 20px 1px #888888
  }
  opacity: 0;
`;
const MoodObject = params => (
  <label>
    <Radio
      type="radio"
      name="emotion"
      className="input-hidden"
      id={params.name}
      value={params.name}
      onChange={(e) => {
        params.onChange(e.target.value);
      }}
    />
    <RoundImage
      height="100"
      width="100"
      src={params.img}
      alt={params.alt}
    />
  </label>
);


class MoodOptions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(value) {
    console.log(value);
  }


  render() {
    return (
      <div>
        <MoodObject onChange={this.handleOnChange} name="mood1" img={require('./images/mood1.png')} alt="I am happy"></MoodObject>
        <MoodObject onChange={this.handleOnChange} name="mood2" img={require('./images/mood2.png')} alt="I am happy"></MoodObject>
        <MoodObject onChange={this.handleOnChange} name="mood3" img={require('./images/mood3.png')} alt="I am happy"></MoodObject>
        <MoodObject onChange={this.handleOnChange} name="mood4" img={require('./images/mood4.png')} alt="I am happy"></MoodObject>
        <MoodObject onChange={this.handleOnChange} name="mood5" img={require('./images/mood5.png')} alt="I am happy"></MoodObject>
      </div>
    );
  }
}


export default MoodOptions;
