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
            <div className="style-container">
                <dt>Company Name</dt>
                <dd>{companyName}</dd>
            </div>

            <div className="style-container">
                <dt>Position Title</dt>
                <dd>{positionTitle}</dd>
            </div>

            <div className="style-container">
                <dt>Start Date</dt>
                <dd>{startDate}</dd>
            </div>

            <div className="style-container">
                <dt>End Date</dt>
                <dd>{endDate}</dd>
            </div>
        </dl>
    )
}

export { PracticalDisplay }
