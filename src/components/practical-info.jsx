import PropTypes from 'prop-types'
function PracticalInfo({
    handleChange,
    uniqueId,
    companyName,
    positionTitle,
    startDate,
    endDate,
}) {
    PracticalInfo.propTypes = {
        info: PropTypes.array,
        handleChange: PropTypes.func,
        uniqueId: PropTypes.string,
        companyName: PropTypes.string,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        positionTitle: PropTypes.string,
    }

    return (
        <div id={uniqueId} className="info-container">
            <div className="field-container">
                <label htmlFor={`companyName${uniqueId}`}>Company Name</label>
                <input
                    type="text"
                    id={`companyName${uniqueId}`}
                    name="companyName"
                    value={companyName}
                    onChange={(e) => {
                        handleChange(e, uniqueId)
                    }}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor={`positionTitle${uniqueId}`}>
                    Position Title
                </label>
                <input
                    type="text"
                    id={`positionTitle${uniqueId}`}
                    name="positionTitle"
                    value={positionTitle}
                    onChange={(e) => {
                        handleChange(e, uniqueId)
                    }}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor={`startDate${uniqueId}`}>Start Date</label>
                <input
                    type="date"
                    name="startDate"
                    id={`startDate${uniqueId}`}
                    value={startDate}
                    onChange={(e) => {
                        handleChange(e, uniqueId)
                    }}
                    required
                />
            </div>
            <div className="field-container">
                <label htmlFor={`endDate${uniqueId}`}>End Date</label>
                <input
                    type="date"
                    name="endDate"
                    id={`endDate${uniqueId}`}
                    value={endDate}
                    onChange={(e) => {
                        handleChange(e, uniqueId)
                    }}
                    required
                />
            </div>
        </div>
    )
}

export { PracticalInfo }
