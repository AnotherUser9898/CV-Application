import { GeneralInfo } from './general-info'
import { EduInfo } from './educational-info'
import { PracticalInfo } from './practical-info'
import PropTypes from 'prop-types'

function CV({
    general,
    handleChange,
    educational,
    handleEducationalChange,
    practical,
    handlePracticalChange,
    addEducationalRecord,
    addPracticalRecord,
    mode,
    onSubmit,
}) {
    CV.propTypes = {
        general: PropTypes.object,
        handleChange: PropTypes.func,
        educational: PropTypes.array,
        handleEducationalChange: PropTypes.func,
        practical: PropTypes.array,
        handlePracticalChange: PropTypes.func,
        addEducationalRecord: PropTypes.func,
        addPracticalRecord: PropTypes.func,
        mode: PropTypes.string,
        onSubmit: PropTypes.func,
    }
    const educationalList = educational.map((record) => (
        <EduInfo
            key={record.uniqueId}
            uniqueId={record.uniqueId}
            schoolName={record.schoolName}
            dateOfStudy={record.dateOfStudy}
            handleChange={handleEducationalChange}
            titleOfStudy={record.titleOfStudy}
        />
    ))

    const PracitcalList = practical.map((record) => (
        <PracticalInfo
            key={record.uniqueId}
            uniqueId={record.uniqueId}
            companyName={record.companyName}
            positionTitle={record.positionTitle}
            startDate={record.startDate}
            endDate={record.endDate}
            handleChange={handlePracticalChange}
        />
    ))

    return (
        <form
            action=""
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(e, mode)
            }}
        >
            <GeneralInfo info={general} handleChange={handleChange} />

            <fieldset className="educational">
                <legend>Educational Experience</legend>

                {educationalList}
                <button
                    className="addEducationalRecord"
                    onClick={addEducationalRecord}
                >
                    Add School
                </button>
            </fieldset>

            <fieldset className="practical">
                <legend>Practical Experience</legend>

                {PracitcalList}
                <button
                    className="addPracticalRecord"
                    onClick={addPracticalRecord}
                >
                    Add Company
                </button>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    )
}

export { CV }
