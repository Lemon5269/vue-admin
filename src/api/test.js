// 封装调用接口api
// 1.先要导入request
import request from '@/utils/request'

export default {
  test() {
    return request({ // return 回去的是一个promise对象
      url: '/test', // request.js中已经配置好了会自动加上/dev-api，然后会被vue.config.js里的代理配置拦截到
      method: 'get'
    })
  },
  getAllData() {
    return request({ // return 回去的是一个promise对象
      url: '/getAllData', // request.js中已经配置好了会自动加上/dev-api，然后会被vue.config.js里的代理配置拦截到
      method: 'get'
    })
  },
  status() {
    return request({ // return 回去的是一个promise对象
      url: '/status', // request.js中已经配置好了会自动加上/dev-api，然后会被vue.config.js里的代理配置拦截到
      method: 'get'
    })
  },
  getLinkData() {
    return request({ // return 回去的是一个promise对象
      url: '/getLinkData', // request.js中已经配置好了会自动加上/dev-api，然后会被vue.config.js里的代理配置拦截到
      method: 'get'
    })
  },
  getEntry() {
    return request({ // return 回去的是一个promise对象
      url: '/getEntry', // request.js中已经配置好了会自动加上/dev-api，然后会被vue.config.js里的代理配置拦截到
      method: 'get'
    })
  }
}
