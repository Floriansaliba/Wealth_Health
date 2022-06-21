
import { useDispatch } from "react-redux"
import { saveHistory, submitForm } from "../redux/actions"
import { useState } from "react"
import { states } from "../data/states"
import { departments } from "../data/departments"



const Form = ({openModal})=>{
    const dispatch = useDispatch()
    const [profile, setProfile] = useState({firstName : "", lastName : "", birthDate : "", startDate : "", street : "", city : "", state : "", zipCode : "", department : ""})


    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch(submitForm(profile.firstName, profile.lastName, profile.birthDate, profile.startDate, profile.street, profile.city, profile.state, profile.zipCode, profile.department))
        dispatch(saveHistory())
        openModal()
    }

    // Get sates select options
    const stateOptions = states.map((state, id) => {
        return <option key={id} value={state.name}>{state.name}</option>;
      })

    // Get department select options
    const departmentOptions = departments.map((department, id)=>{
        return <option key={id} value={department}>{department}</option>;
    })

    return(
        <form onSubmit={handleSubmit} className="form">
            <label className="label" htmlFor="first-name">First Name</label>
            <input className="input-box" type="text" name="first-name"  id="first-name" onChange={e => setProfile({...profile, firstName : e.target.value})} required/>
            <label className="label" htmlFor="last-name">Last Name</label>
            <input className="input-box" type="text" name="last-name"  id="last-name" onChange={e => setProfile({...profile, lastName : e.target.value})} required/>
            <label className="label" htmlFor="date-of-birth">Date of Birth</label>
            <input className="input-box" type="date" name="date-of-birth"  id="date-of-birth" onChange={e => setProfile({...profile, birthDate : e.target.value})} required/>
            <label className="label" htmlFor="start-date">Start Date</label>
            <input className="input-box" type="date" name="start-date"  id="start-date" onChange={e => setProfile({...profile, startDate : e.target.value})} required/>
            <div className="adress">
                <h3 className="adress-title">Adress</h3>
                <label className="label" htmlFor="street">Street</label>
                <input className="input-box" type="text" name="street"  id="street" onChange={e => setProfile({...profile, street : e.target.value})} required/>
                <label className="label" htmlFor="city">City</label>
                <input className="input-box" type="text" name="city"  id="city" onChange={e => setProfile({...profile, city : e.target.value})} required/>
                <label className="label" htmlFor="state">State</label>
                <select className="input-box" name="state" id="state" onChange={e => setProfile({...profile, state : e.target.value})} required>
                <option></option>
                {stateOptions}
                </select>
                <label className="label" htmlFor="zip-code">Zip Code</label>
                <input className="input-box" type="number" name="zip-code"  id="zip-code" onChange={e => setProfile({...profile, zipCode : e.target.value})} required/>
            </div>
            <label className="label" htmlFor="department">Department</label>
            <select className="input-box" name="department" id="department" onChange={e => setProfile({...profile, department : e.target.value})} required>
            <option></option>
            {departmentOptions}
            </select>
            <button className="btn">Save</button>
        </form>
    )
}

export default Form