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
        symbol: 'BVMF: PETR4',
        apiFunction: 'TIME_SERIES_INTRADAY',
        interval: '15min'
      })
    });
    let newRates = '';

    console.log(response);

    if (response.status !== 200) {
      this.setState({ rates: 'Error on API call. See console' });
      throw new Error('Error on API call');
    }

    const jsonResponse = await response.json();

    let timeSeriesName = '';

    Object.keys(jsonResponse).forEach(element => {
      if (element.substr(0, 11) === 'Time Series') {
        timeSeriesName = element.toString();
      }
    });

    const timeStamps = Object.keys(jsonResponse[timeSeriesName]);
    const intervals = jsonResponse[timeSeriesName];

    newRates = (
      <div>
        {timeStamps.map(e => (
          <li>
            {e}
            {Object.keys(intervals[e]).map(el => (
              <p key={e.toString() + el.toString()}>
                {el} {intervals[e][el]}
              </p>
            ))}
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
