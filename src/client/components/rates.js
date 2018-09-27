import React, { Component } from 'react';

class Rates extends Component {
  state = {
    rates: 'Olá'
  };

  async componentDidMount() {
    const response = await fetch('/api/getSymbol', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        symbol: 'MSFT',
        apiFunction: 'TIME_SERIES_INTRADAY',
        interval: '60min'
      })
    });

    console.log(response);

    if (response.status !== 200) throw new Error('Error on API call');
    const jsonResponse = await response.json();

    let timeSeriesName = '';

    Object.keys(jsonResponse).forEach(element => {
      if (element.substr(0, 11) === 'Time Series') {
        timeSeriesName = element.toString();
      }
    });

    const timeStamps = Object.keys(jsonResponse[timeSeriesName]);
    const intervals = jsonResponse[timeSeriesName];
    let newRates = '';

    newRates = (
      <div>
        {timeStamps.map(e => (
          <li>
            {e}
            <p> {JSON.stringify(intervals[e])} </p>
          </li>
        ))}
      </div>
    );

    this.setState({ rates: newRates });
  }

  render() {
    const { rates } = this.state;

    return <div>{rates}</div>;
  }
}

export default Rates;
