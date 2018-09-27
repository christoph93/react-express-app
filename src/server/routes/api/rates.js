import { Controller, Post } from '@decorators/express';
import rp from 'request-promise';

@Controller('/')
class Rates {
  constructor() {
    this.rates = 'Rates go here';
  }

  @Post('/getSymbol')
  async getSymbol(req, res) {
    const json = req.body;
    const conf = JSON.parse(await rp.get('http://localhost:8080/api/getApiConfig'));

    const url = `https://www.alphavantage.co/query?function=${json.apiFunction}&symbol=${json.symbol}&interval=${json.interval}&apikey=${
      conf.apiKey
    }`;

    const proxiedRequest = rp.defaults({ proxy: 'http://websurfing1-htl1.esi.adp.com:8080' });

    this.rates = await proxiedRequest.get(url);

    console.log('Sending rates...');

    return res.send(this.rates);
  }
}

export default Rates;
