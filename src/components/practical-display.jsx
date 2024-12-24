import PropTypes from 'prop-types'
function PracticalDisplay({ companyName, positionTitle, startDate, endDate }) {
    PracticalDisplay.propTypes = {
        companyName: PropTypes.string,
        positionTitle: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
    }
    return (
        <dl>
            <dt>Company Name</dt>
            <dd>{companyName}</dd>

            <dt>Position Title</dt>
            <dd>{positionTitle}</dd>

            <dt>Start Date</dt>
            <dd>{startDate}</dd>

            <dt>End Date</dt>
            <dd>{endDate}</dd>
        </dl>
    )
}

export { PracticalDisplay }
