export {}

let url

if (process.env.REACT_APP_ENV === 'debug') {
    url = 'http://127.0.0.1:8000'
} else {
    url = '/api'
}