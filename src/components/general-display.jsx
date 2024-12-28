import PropTypes from 'prop-types'
import '../styles/display.css'
function GenDisplay({ name, email, phone }) {
    GenDisplay.propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
    }

    return (
        <dl>
            <div className="style-container">
                <dt>Name</dt>
                <dd>{name}</dd>
            </div>

            <div className="style-container">
                <dt>Email</dt>
                <dd>{email}</dd>
            </div>

            <div className="style-container">
                <dt>Phone Number</dt>
                <dd>{phone}</dd>
            </div>
        </dl>
    )
}

export { GenDisplay }
