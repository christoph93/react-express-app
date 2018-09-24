import { Controller, Get } from '@decorators/express';
// import util from 'util';
import apiConfigModel from '../../db/models/apiConfigModel';

@Controller('/')
class Config {
  // constructor() {
  //   const config = {};
  //   // this.find = util.promisify(apiConfig.find);
  // }

  @Get('/getApiConfig')
  async sendMessage(req, res) {
    try {
      this.config = await apiConfigModel.findOne();

      return res.send(this.config);
    } catch (err) {
      console.log(err);

      return res.send(err);
    }
  }

  //   @Get('/getApiKey')
  //   async sendMessage(req, res) {
  //   try {
  //     const conf = await this.find({});

  //     this.config = conf;

  //     return this.config;
  //   } catch (err) {
  //     if (err) {
  //       console.log(err);

  //       return res.send(err);
  //     }
  //   }

  //   return res.send(this.config);
  // }

  // apiConfigModel.find({ }, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.send(err);
  //   } else {
  //     console.log(result);
  //     res.send(result);
  //   }
  // });
}

export default Config;
