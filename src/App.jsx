import { useState } from 'react'
import { CV } from './components/CV'
import { Display } from './components/display'
import './App.css'

function App() {
    const [mode, setMode] = useState('Submit')

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
        setEducational(
            educational.map((edu) => {
                if (edu.uniqueId == uniqueId) {
                    return { ...edu, [targetAttribute]: targetValue }
                } else {
                    return edu
                }
            })
        )
    }

    function handlePracticalChange(e, uniqueId) {
        const targetAttribute = String(e.target.name)
        const targetValue = String(e.target.value)
        setPractical(
            practical.map((pr) => {
                if (pr.uniqueId == uniqueId) {
                    return { ...pr, [targetAttribute]: targetValue }
                } else {
                    return pr
                }
            })
        )
    }

    function addEducationalRecord(e) {
        e.preventDefault()
        setEducational([
            ...educational,
            {
                uniqueId: crypto.randomUUID(),
                schoolName: '',
                titleOfStudy: '',
                dateOfStudy: '',
            },
        ])
    }

    function addPracticalRecord(e) {
        e.preventDefault()
        setPractical([
            ...practical,
            {
                uniqueId: crypto.randomUUID(),
                companyName: '',
                positionTitle: '',
                startDate: '',
                endDate: '',
            },
        ])
    }

    function onSubmit(e, currMode) {
        e.preventDefault()
        if (currMode == 'Edit') {
            setMode('Submit')
        } else {
            setMode('Edit')
        }
    }

    return (
        <>
            {mode == 'Submit' ? (
                <CV
                    general={general}
                    educational={educational}
                    practical={practical}
                    handleChange={handleChange}
                    handleEducationalChange={handleEducationalChange}
                    handlePracticalChange={handlePracticalChange}
                    addEducationalRecord={addEducationalRecord}
                    addPracticalRecord={addPracticalRecord}
                    mode={mode}
                    onSubmit={onSubmit}
                />
            ) : (
                <Display
                    generalInformation={general}
                    educationalInformation={educational}
                    practicalInformation={practical}
                    mode={mode}
                    onEdit={onSubmit}
                />
            )}
        </>
    )
}

export default App
