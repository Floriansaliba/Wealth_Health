import { useDispatch } from "react-redux"
import { filter, saveBirthDate, saveFirstName, saveSearch, saveStartDate } from "../redux/actions"
import { saveLastName } from "../redux/actions"
import { saveStreet } from "../redux/actions"
import { saveCity } from "../redux/actions"
import { saveZipCode } from "../redux/actions"

// Create an input element with specific type, id and label

const Input = ({type, id, label})=>{
    const dispatch = useDispatch()

    const saveData = (e)=>{
        if(id === "first-name"){
            dispatch(saveFirstName(e.target.value))
        }
        if(id === "last-name"){
            dispatch(saveLastName(e.target.value))
        }
        if(id === "date-of-birth"){
            dispatch(saveBirthDate(e.target.value))
        }
        if(id === "start-date"){
            dispatch(saveStartDate(e.target.value))
        }
        if(id === "street"){
            dispatch(saveStreet(e.target.value))
        }
        if(id === "city"){
            dispatch(saveCity(e.target.value))
        }
        if(id === "zip-code"){
            dispatch(saveZipCode(e.target.value))
        }
        if(id === "search"){
            dispatch(saveSearch(e.target.value))
            dispatch(filter(e.target.value))
        }

    }

    return(
        <div className="input">
            <label className="label" htmlFor={id}>{label}</label>
            <input className="input-box" type={type} name={id} id={id} onChange={saveData} required/>
        </div>
    )
}

export default Input