import View from './index.vue'
import serverRender from '~/app/web/entry-server.js'
import clientRender from '~/app/web/entry-client.js'

export default EASY_ENV_IS_NODE ? serverRender({ ...View }) : clientRender({ ...View })
