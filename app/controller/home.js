const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async server() {
    const { ctx } = this
    await ctx.render('home/index.js', { message: 'egg vue server side render' })
  }

  async client() {
    const { ctx } = this
    await ctx.renderClient('home/index.js', { message: 'egg vue client side render' })
  }
}

module.exports = HomeController;
