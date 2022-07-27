const handleError = (res, message = "Has been an error", code = 401) => {
    res.status(code)
    res.send({error: message})
}

module.exports = handleError