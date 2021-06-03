import _ from 'lodash'
import { nanoid } from 'nanoid'

export const parties = []

parties.push({
  id: nanoid(),
  createdAt: Date.now() - 10000,
  token: nanoid(),
  name: '約去踢足球！',
  joy: 10,
  angry: 20,
  sad: 30,
  happy: 40
})

parties.push({
  id: nanoid(),
  createdAt: Date.now() - 5000,
  token: nanoid(),
  name: '畢業典體',
  joy: 3,
  angry: 1,
  sad: 0,
  happy: 7
})

parties.push({
  id: nanoid(),
  createdAt: Date.now() - 1000,
  token: nanoid(),
  name: '約去面試',
  joy: 99,
  angry: 100,
  sad: 200,
  happy: 700
})

export const getParties = () => parties

export const createParty = ({ name  }) => {
  const doc = {
    id: nanoid(),
    createdAt: Date.now(),
    token: nanoid(),
    name,
    joy: 0,
    angry: 0,
    sad: 0,
    happy: 0
  }
  parties.push(doc)
  return doc
}

export const getParty = (id) => _.find(parties, { id })

export const editParty = (token, { name, joy, angry, sad, happy }) => {
  const doc = _.find(parties, { token })
  if (name) doc.name = name
  if (joy) doc.joy = joy
  if (angry) doc.angry = angry
  if (sad) doc.sad = sad
  if (happy) doc.happy = happy
  return doc
}
