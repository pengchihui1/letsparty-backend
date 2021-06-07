import ajax from './axios'

export function
get (url, query) {
  return ajax({
    url: url,
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    data: query
  })
}

export function
post (url, query) {
  return ajax({
    url: url,
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    data: {}
  })
}

export function
mock (url, query) {
  return ajax({
    url: url,
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    data: query
  })
}
