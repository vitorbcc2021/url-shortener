import { randomU32 } from 'hyperdyperid/lib/randomU32.js'
import { UrlModel } from '../models/url-model.js'
import { UrlUpdateDto } from '../dto/url-update-dto.js'


export async function shortenUrl(req, res) {
    const { originalUrl } = req.body
    const id = randomU32(0, 10000)

    const model = new UrlModel({
        originalUrl: originalUrl,
        shortUrl: id
    })

    await model.save()
    return res.status(201).json({ 'originalUrl': originalUrl, 'shortenUrl': id })
}

export async function goToUrl(req, res) {
    const { shortUrl } = req.params

    const urlFound = await UrlModel.findOne({ shortUrl: shortUrl })

    if (urlFound) {
        return res.redirect(urlFound.originalUrl)
    } else {
        return res.status(404).json({ 'res': 'url not found' })
    }
}

export async function editUrl(req, res) {
    const urlUpdateDto = new UrlUpdateDto(req.body)
    const { shortUrl } = req.params

    const filter = { shortUrl }

    const url = await UrlModel.findOneAndUpdate(filter, urlUpdateDto, { new: true })

    if (url) {
        return res.status(201).json(urlUpdateDto)
    } else {
        return res.status(404).json({ 'res': 'Not found!' })
    }
}

export async function deleteUrl(req, res) {
    const { shortUrl } = req.params

    const url = await UrlModel.findOneAndDelete({ shortUrl: shortUrl })

    if (url) {
        return res.status(200).json('Deleted!')
    } else {
        return res.status(404).json({ 'res': 'Not found!' })
    }
}