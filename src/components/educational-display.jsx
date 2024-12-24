import PropTypes from 'prop-types'
function EduDisplay({ schoolName, titleOfStudy, dateOfStudy }) {
    EduDisplay.propTypes = {
        schoolName: PropTypes.string,
        titleOfStudy: PropTypes.string,
        dateOfStudy: PropTypes.string,
    }
    return (
        <dl>
            <dt>School Name</dt>
            <dd>{schoolName}</dd>

            <dt>Title Of Study</dt>
            <dd>{titleOfStudy}</dd>

            <dt>Date of Study</dt>
            <dd>{dateOfStudy}</dd>
        </dl>
    )
}

export { EduDisplay }
