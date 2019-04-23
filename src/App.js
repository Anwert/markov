import React, { Component } from 'react';
import { YMaps, Map, ZoomControl, SearchControl, GeolocationControl } from 'react-yandex-maps';
import Point from './Point';
import GetPoints from './data'
import GetCities from './cities'
import { ButtonToolbar, DropdownButton, Dropdown, Button, Form } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
      radiusInput: 100,
      radius: 100,
      center: [56.8389, 60.6057]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickCity = this.handleClickCity.bind(this);
  }

  componentWillMount() {
    this.setState({ coordinates: GetPoints().data })
  }

  render() {
    return (
      <div className="App">
        <ButtonToolbar>
          <DropdownButton
            title={'Города'}
            variant={'Города'.toLowerCase()}
            id={`dropdown-variants-${'Города'}`}
            key={'Города'}
          >
            {
              GetCities().data.map((item, i) => 
                <Dropdown.Item
                  key = {i}
                  eventKey = {i}
                  onClick = {() => this.handleClickCity(item)}
                >
                  {item}
                </Dropdown.Item>)
            }
          </DropdownButton>
        </ButtonToolbar>
        <Form.Control placeholder="Введите новый статус" onChange = {this.handleChange} />
        <Button variant="outline-success" onClick = {this.handleClick}>Change</Button>
        <YMaps>
          <Map
            defaultState = {{
              zoom: 12,
              center: this.state.center
            }}
            width = "100%"
            height = "688px"
          >
            <SearchControl />
            <GeolocationControl />
            <ZoomControl
              options = {{
                size: 'small',
                zoomDuration: 1000,
              }}
            />
            {
              this.state.coordinates.map((item, i) =>
                <Point key = {i} coordinates = {item} radius = {this.state.radius} />)
            }
          </Map>
        </YMaps>
      </div>
    );
  }

  handleChange(e) {
    this.setState({radiusInput: e.target.value});
  }

  handleClick() {
    this.setState({radius: this.state.radiusInput })
  }

  handleClickCity(city) {
    alert("City: " + city);
  }
}


export default App;
