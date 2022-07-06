import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Song } from '../../entity/Song.js'

// Escribiendo un test
describe('Testing class Song', () => {
// setup class
  const song = new Song({
    title: 'title',
    uri: 'uri',
    duration: 'duration',
    img: 'img',
    idArtist: 'idArtist',
    idGenre: 'idGenre'
  })

  it('Testing class is not null', () => {
    // eslint-disable-next-line no-unused-expressions
    expect(song).to.not.be.null
  })
  it('Testing recieve a title in class', () => {
    expect(song.title).to.equal('_title')
  })
  it('Testing i have a number?', () => {
    const result = song.returnNumber()
    expect(result).to.equal(5)
  })
})
