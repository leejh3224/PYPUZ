import hello from 'hellojs'

hello.init({
    facebook: '112360576091849',
}, { redirect_uri: '/redirect.html' })

export default(function () {
    return {
        facebook: () => {
            return new Promise((resolve, reject) => {
                hello.login('facebook', { scope: 'email' }.then(
                    auth => resolve(auth.authResponse.access_token),
                    e => reject(e)
                ))
            })
        }
    }
})()
