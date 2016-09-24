import koa from 'koa';
import Router from 'koa-router';
import views from 'co-views';
import webpack from 'webpack';
import {devMiddleware, hotMiddleware} from 'koa-webpack-middleware';
import config from './webpack.config.babel';
const compile = webpack(config);
const app = new koa();

let render = views('./views', {
    map: {html: 'swig'}
  }),
  router = Router();

router.get('/', async ctx => ctx.body = await render('index'));

app.use(router.routes());

app.use(devMiddleware(compile, {
  publicPath: config.output.path
}));

app.use(hotMiddleware(compile));

app.listen(3000, function () {
  console.log("listen at port http://localhost:3000");
});
