class API {
  static request (url, method) {
    const promise = new Promise((resolve, reject) => {
      if (!(typeof url === 'string') || !(typeof method === 'string')) return reject(new Error('url, method must be of type string'))
      let params = {
        method: 'GET'
      }
      return fetch('https://cors-anywhere.herokuapp.com/' + url, params)
              .then(res => res.json())
              .then(s => {
                return resolve(s)
              })
              .catch(e => {
                return reject(new Error(e))
              })
    })
    return promise
  }
}

export default class ChuckAPI extends API {
  static get URL () {
    return 'https://api.chucknorris.io/jokes/random'
  }

  static get () {
    return super.request(ChuckAPI.URL, 'GET')
  }
}
