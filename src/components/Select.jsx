
import { states } from "../data/states";
import { departments } from "../data/departments";
import { useDispatch } from "react-redux";
import { saveDepartment, saveState } from "../redux/actions";

// Create a select element with specific label and Id

const Select = ({label, id})=>{
    const dispatch = useDispatch()

    const stateOptions = states.map((state, id) => {
        return <option key={id} value={state.name}>{state.name}</option>;
      })
    
    const departmentOptions = departments.map((department, id)=>{
        return <option key={id} value={department}>{department}</option>;
    })

    const handleChange= (e)=>{
        if(id === "state"){
            dispatch(saveState(e.target.value))
        }
        dispatch(saveDepartment(e.target.value))
    }

    return(
        <div className="input">
            <label className="label" htmlFor={id}>{label}</label>
            <select className="input-box" onChange={handleChange} name={id} id={id} required>
            {id === "state" ? stateOptions : departmentOptions}
            </select>
        </div>
    )
}

export default Select