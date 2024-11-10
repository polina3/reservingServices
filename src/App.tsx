import { useState } from "react"
import './global.scss'
import style from './App.module.scss'
import Service from "./components/Steps/Service/Service"

function App() {
    const [step, setStep] = useState(1)

    return (
        <>
            <div className={style.box}>
                <div className={style.title}>
                    {
                        step == 1 ? 'Услуги' :
                            step == 2 ? 2 :
                                step == 3 ? 3 : null
                    }
                </div>
                <div className={style.main}>
                    {
                        step == 1 ? <Service /> :
                            step == 2 ? 2 :
                                step == 3 ? 3 : null
                    }
                </div>
            </div>
        </>
    )
}

export default App
