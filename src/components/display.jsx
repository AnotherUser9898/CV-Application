import PropTypes from 'prop-types'
import { GenDisplay } from './general-display'
import { EduDisplay } from './educational-display'
import { PracticalDisplay } from './practical-display'
function Display({
    generalInformation,
    educationalInformation,
    practicalInformation,
    mode,
    onEdit,
}) {
    Display.propTypes = {
        generalInformation: PropTypes.object,
        educationalInformation: PropTypes.array,
        practicalInformation: PropTypes.array,
        mode: PropTypes.string,
        onEdit: PropTypes.func,
    }

    const general = (
        <GenDisplay
            name={generalInformation.name}
            email={generalInformation.email}
            phone={generalInformation.phone}
        />
    )

    const educational = educationalInformation.map((record) => (
        <EduDisplay
            key={record.uniqueId}
            schoolName={record.schoolName}
            titleOfStudy={record.titleOfStudy}
            dateOfStudy={record.dateOfStudy}
        />
    ))

    const practical = practicalInformation.map((record) => (
        <PracticalDisplay
            key={record.uniqueId}
            companyName={record.companyName}
            positionTitle={record.positionTitle}
            startDate={record.startDate}
            endDate={record.endDate}
        />
    ))

    return (
        <div className="cvDisplay">
            <h1 className="cvTitle">CV</h1>
            <section className="general">
                <h2 className="generalHeading">General Information</h2>
                {general}
            </section>

            <section className="educational">
                <h2 className="educationalHeading">Educational Information</h2>
                {educational}
            </section>

            <section className="practical">
                <h2 className="practicalHeading">Practical Heading</h2>
                {practical}
            </section>

            <button className="edit" onClick={(e) => onEdit(e, mode)}>
                Edit
            </button>
        </div>
    )
}

export { Display }
