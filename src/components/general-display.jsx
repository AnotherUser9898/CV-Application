import PropTypes from 'prop-types'
function GenDisplay({ name, email, phone }) {
    GenDisplay.propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
    }

    return (
        <dl>
            <dt>Name</dt>
            <dd>{name}</dd>

            <dt>Email</dt>
            <dd>{email}</dd>

            <dt>Phone Number</dt>
            <dd>{phone}</dd>
        </dl>
    )
}

export { GenDisplay }
