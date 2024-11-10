import { useState } from "react"


function App() { 
    const [step, setStep] = useState(1)

    return (
        <> 
            <div>
                {
                    step == 1 ? 1 :
                    step == 2 ? 2 : 
                    step == 3 ? 3 : null
                }
            </div>
        </>
    )
}

export default App
