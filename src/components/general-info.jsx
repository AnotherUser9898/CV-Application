import PropTypes from 'prop-types'
function GeneralInfo({ info, handleChange }) {
    GeneralInfo.propTypes = {
        info: PropTypes.object,
        handleChange: PropTypes.func,
    }

    return (
        <fieldset id="general">
            <legend>General Information</legend>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                required
                value={info.name}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                required
                value={info.email}
                onChange={handleChange}
            />

            <label htmlFor="phone">Phone Number</label>
            <input
                type="tel"
                name="phone"
                id="phone"
                required
                value={info.phone}
                onChange={handleChange}
            />
        </fieldset>
    )
}

export { GeneralInfo }
