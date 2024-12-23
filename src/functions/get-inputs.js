function getInputs(objectArray, uniqueId) {
    const object = objectArray.find((i) => i.id == uniqueId)

    if (object) {
        return object
    } else {
        return ''
    }
}

export { getInputs }
