import PropTypes from 'prop-types'
function EduInfo({
    handleChange,
    uniqueId,
    schoolName,
    titleOfStudy,
    dateOfStudy,
}) {
    EduInfo.propTypes = {
        handleChange: PropTypes.func,
        uniqueId: PropTypes.string,
        schoolName: PropTypes.string,
        titleOfStudy: PropTypes.string,
        dateOfStudy: PropTypes.string,
    }

    return (
        <div id={uniqueId} className="info-container">
            <div className="field-container">
                <label htmlFor={`schoolName${uniqueId}`}>School Name</label>
                <input
                    type="text"
                    id={`schoolName${uniqueId}`}
                    name="schoolName"
                    value={schoolName}
                    onChange={(e) => {
                        handleChange(e, uniqueId)
                    }}
                    required
                />
            </div>

            <div className="field-container">
                <label htmlFor={`titleOfStudy${uniqueId}`}>
                    Title of Study
                </label>
                <input
                    type="text"
                    id={`titleOfStudy${uniqueId}`}
                    name="titleOfStudy"
                    value={titleOfStudy}
                    onChange={(e) => {
                        handleChange(e, uniqueId)
                    }}
                    required
                />
            </div>

            <div className="field-container">
                <label htmlFor={`dateOfStudy${uniqueId}`}>Date of Study</label>
                <input
                    type="date"
                    id={`dateOfStudy${uniqueId}`}
                    name="dateOfStudy"
                    value={dateOfStudy}
                    onChange={(e) => {
                        handleChange(e, uniqueId)
                    }}
                    required
                />
            </div>
        </div>
    )
}

export { EduInfo }
