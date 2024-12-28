import PropTypes from 'prop-types'
function GeneralInfo({ info, handleChange }) {
    GeneralInfo.propTypes = {
        info: PropTypes.object,
        handleChange: PropTypes.func,
    }

    return (
        <div className="info-container">
            <div className="field-container">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={info.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={info.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={info.phone}
                    onChange={handleChange}
                    required
                />
            </div>
        </div>
    )
}

export { GeneralInfo }
