import { useState } from 'react'
import { GeneralInfo } from './general-info'
import { EduInfo } from './educational-info'
import { PracticalInfo } from './practical-info'

function CV() {
    const [general, setGeneral] = useState({
        name: '',
        email: '',
        phone: '',
    })
    const [educational, setEducational] = useState([
        {
            uniqueId: crypto.randomUUID(),
            schoolName: '',
            titleOfStudy: '',
            dateOfStudy: '',
        },
    ])
    const [practical, setPractical] = useState([
        {
            uniqueId: crypto.randomUUID(),
            companyName: '',
            positionTitle: '',
            startDate: '',
            endDate: '',
        },
    ])

    function handleChange(e) {
        const targetAttribute = String(e.target.id)
        const targetValue = String(e.target.value)
        setGeneral({ ...general, [targetAttribute]: targetValue })
    }

    function handleEducationalChange(e, uniqueId) {
        const targetAttribute = String(e.target.name)
        const targetValue = String(e.target.value)
        const object = educational.find((o) => o.uniqueId == uniqueId)
        if (object) {
            object[targetAttribute] = targetValue
            setEducational(
                educational.map((edu) => {
                    if (edu.uniqueId == uniqueId) {
                        return { ...edu, [targetAttribute]: targetValue }
                    } else {
                        return edu
                    }
                })
            )
        } else {
            setEducational([
                ...educational,
                {
                    uniqueId: uniqueId,
                    schoolName: '',
                    titleOfStudy: '',
                    dateOfStudy: '',
                    [targetAttribute]: targetValue,
                },
            ])
        }
    }

    function handlePracticalChange(e, uniqueId) {
        const targetAttribute = String(e.target.name)
        const targetValue = String(e.target.value)
        const object = practical.find((o) => o.uniqueId == uniqueId)

        if (object) {
            object[targetAttribute] = targetValue
            setPractical(
                practical.map((pr) => {
                    if (pr.uniqueId == uniqueId) {
                        return { ...pr, [targetAttribute]: targetValue }
                    } else {
                        return pr
                    }
                })
            )
        } else {
            setPractical([
                ...practical,
                {
                    uniqueId: uniqueId,
                    companyName: '',
                    positionTitle: '',
                    startDate: '',
                    endDate: '',
                    [targetAttribute]: targetValue,
                },
            ])
        }
    }

    const educationalList = educational.map((record) => (
        <EduInfo
            key={record.uniqueId}
            uniqueId={record.uniqueId}
            schoolName={record.schoolName}
            dateOfStudy={record.dateOfStudy}
            handleChange={handleEducationalChange}
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
        <form action="">
            <GeneralInfo info={general} handleChange={handleChange} />

            <fieldset className="educational">
                <legend>Educational Experience</legend>

                {educationalList}
            </fieldset>

            <fieldset className="practical">
                <legend>Practical Experience</legend>

                {PracitcalList}
            </fieldset>
        </form>
    )
}

export { CV }
