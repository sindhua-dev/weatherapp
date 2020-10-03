import React, {Component} from 'react';
import './Weather.css';

const apikey = "8ddceeacaf8b95fe943c88fc8389dee0";

const TopPageFn = () =>
{
    return (
        <div>
            <h1 className = "App-header">
                My Weather App
            </h1>

            <h9>
                Know the weather in your locality using this App
            </h9>
        </div>
    )
}

const LocalityFn = ({ outputGet }) =>
{
    return (
        <form onSubmit={inp => outputGet(inp)}>
            <input type = "text" name = "city" placeholder = "type your location name"/>
            <input type = "text" name = "country" placeholder = "type your country name"/>
            <button>
                Submit
            </button>

        </form>
    )
}


class CoreClass extends Component
{


    state =
        {
            ci:"" ,
            co:"",
            t:"",
            h: undefined,
            d:"It is "
        };



     OutputSecFn = () =>
{
    return(
        <div>
            <p>
                City: {this.state.ci}
            </p>
            <p>
                Country: {this.state.co}

            </p>
            <p >
                Temperature: {this.state.t}
            </p>

            <p className="snowflake">
                Humidity: {this.state.h}
            </p>

            <p>
                Description: {this.state.d}
            </p>
        </div>
    )
}


    LookUpFn = async inp =>
{
    inp.preventDefault();

    const cty = inp.currentTarget.elements.city.value;
    const cnt = inp.currentTarget.elements.country.value;

    const ReceivingResult = await fetch( `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${cty},${cnt}&appid=${apikey}&units=metric`);

    const ResultJSON = await ReceivingResult.json();

    const {main, sys, name, weather} = ResultJSON;

    // default is "Akyar, Russia"
if (sys === undefined) {
    this.setState(
        {
            ci: "please enter city",
            co: "please enter country",
            t: "please enter data",
            h: "please enter data",
            d: "please enter data",
        }
    );
}
else {
    this.setState(
        {
            ci: name,
            co: sys.country,
            t: main.temp,
            h: main.humidity,
            d: weather[0].description,
        }
    );
}

}

  render()
  {
      return (
        <div className="App">
          <header className="App-header">
              <TopPageFn></TopPageFn>
              <LocalityFn outputGet = {this.LookUpFn}></LocalityFn>
              <this.OutputSecFn></this.OutputSecFn>

          </header>
        </div>
    );

  }

}



export default CoreClass;

