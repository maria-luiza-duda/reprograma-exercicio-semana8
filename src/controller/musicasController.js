const musicas = require('../model/musicas.json')
const artists = require('../model/artists.json')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(musicas)
}

const getByID = (req, res) => {
    const id = req.parameters.id

    const musicaFound = musicas.find((musicas) => musicas.id == id)

    res.status(200).send(musicaFound)
}

const getAllArtist = (req, res) => {
    console.log(req.url)
    res.status(200).send(artists)
}

const getByLanguage = (req, res) => {
    const id = req.parameters.languages

    const languageFound = languages.find((languages) => languages.id == id)

    res.status(200).send(languageFound)
}

const getAllBands = (req, res) => {
    console.log(req.url)
    res.status(200).send(bands)
}

module.exports = {getAll, getByID, getAllArtist, getByLanguage, getAllBands}