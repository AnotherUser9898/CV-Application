import PropTypes from 'prop-types'
function EduDisplay({ schoolName, titleOfStudy, dateOfStudy }) {
    EduDisplay.propTypes = {
        schoolName: PropTypes.string,
        titleOfStudy: PropTypes.string,
        dateOfStudy: PropTypes.string,
    }
    return (
        <dl>
            <div className="style-container">
                <dt>School Name</dt>
                <dd>{schoolName}</dd>
            </div>

            <div className="style-container">
                <dt>Title Of Study</dt>
                <dd>{titleOfStudy}</dd>
            </div>

            <div className="style-container">
                <dt>Date of Study</dt>
                <dd>{dateOfStudy}</dd>
            </div>
        </dl>
    )
}

export { EduDisplay }
