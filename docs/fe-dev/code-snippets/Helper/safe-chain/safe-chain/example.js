const {safeChain} = require('./index')

const backendApi = {
  fetchResponse() {
    this.response = {
      result: { message: 'Success' },
      status: 200,
      statusCode: 'Ok'
    }
  },
  response: null,
  get result () {
    return safeChain(this.response, ({result}) => result)
  }
}

console.log(backendApi.result) // undefined
backendApi.fetchResponse()
console.log(backendApi.result) // { message: 'Success' }