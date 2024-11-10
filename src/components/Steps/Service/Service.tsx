import Button from '../../UI/Button/Button'
import style from './Service.module.scss'
export default function Service(){


    return(
        <div>
            <div className={style.list}> 
                <button type='button' className={style.item}>Маникюр</button>
                <button type='button' className={style.item}>Стрижка</button>
                <button type='button' className={style.item}>Массаж</button>
            </div>
            <Button className={style.btn}>далее</Button>
        </div>
    )
}