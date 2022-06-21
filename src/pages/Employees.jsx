import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getMaxPage, numberOfEntries, sortByCity, sortByDepartment, sortByStreet, sortByState, sortByZipCode, sortByBirthDate, sortByStartDate } from "../redux/actions"
import { nextPage, previousPage, sortByFirstName, sortByLastName} from "../redux/actions"
import { saveSearch, filter } from "../redux/actions"


const Employees = ()=>{
const dispatch=useDispatch()

let employees = useSelector(state => state.employeeList)
const firstEntry = useSelector(state => state.firstEntry)
const selectedEntries = useSelector(state => state.entries)
const currentPage = useSelector(state => state.currentPage)

// Manage the input search in order to filter results of the employee search
const handleChange = (e)=>{
    dispatch(saveSearch(e.target.value))
    dispatch(filter(e.target.value))
}


// Sort employee table depending on the table label and the sort direction ("<"" or "">"")
const sort = (e)=>{
    const id = e.target.id
    if(e.target.className === "table-label-descending" ){
        e.target.className = "table-label-ascending" 
        switch(id){
            case "firstName" :
                dispatch(sortByFirstName("<"))
            break
            case "lastName" :
                dispatch(sortByLastName("<"))
            break
            case "department" :
                dispatch(sortByDepartment("<"))
            break
            case "street" :
                dispatch(sortByStreet("<"))
            break
            case "city" :
                dispatch(sortByCity("<"))
            break
            case "state" :
                dispatch(sortByState("<"))
            break
            case "zipCode" :
                dispatch(sortByZipCode("<"))
            break
            case "birthDate" :
                dispatch(sortByBirthDate("<"))
            break
            case "startDate" :
                dispatch(sortByStartDate("<"))
            break
            default: console.log("error")
        }
    }
    else{
        e.target.className = "table-label-descending"
        switch(id){
            case "firstName" :
            dispatch(sortByFirstName(">"))
            break
            case "lastName" :
                dispatch(sortByLastName(">"))
            break
            case "department" :
                dispatch(sortByDepartment(">"))
            break
            case "street" :
                dispatch(sortByStreet(">"))
            break
            case "city" :
                dispatch(sortByCity(">"))
            break
            case "state" :
                dispatch(sortByState(">"))
            break
            case "zipCode" :
                dispatch(sortByZipCode(">"))
            break
            case "birthDate" :
                dispatch(sortByBirthDate(">"))
            break
            case "startDate" :
                dispatch(sortByStartDate(">"))
            break
            default: console.log("error")
        }
    }
}

// Calculate the first entry
const showFirstEntry = ()=>{
    if(employees.length === 0){
        return 0
    }
    return firstEntry
}

// Calculate the last entry
const showLastEntry = ()=>{
    if(employees.length <= selectedEntries){
        return employees.length
    }
    return selectedEntries
}

// Calculate the first employee to show on the page
const firstId = ()=>{
    if(currentPage === 1){
        return 0
    }
    return ((currentPage -1) * selectedEntries) 
}

// Calculate the last employee to show on the page
const lastId = ()=>{
    if(currentPage === 1){
        return selectedEntries -1
    }
    return ((currentPage -1) * selectedEntries) - 1 + selectedEntries
}


// Display employee table rows
const rows = employees.map((employee, id)=>{
    while(id>= firstId() && id <= lastId() ){
       return <tr className="line" key = {id}>
        <td className="cell">{employee.firstName}</td>
        <td className="cell">{employee.lastName}</td>
        <td className="cell">{employee.startDate}</td>
        <td className="cell">{employee.department}</td>
        <td className="cell">{employee.birthDate}</td>
        <td className="cell">{employee.street}</td>
        <td className="cell">{employee.city}</td>
        <td className="cell">{employee.state}</td>
        <td className="cell">{employee.zipCode}</td>
    </tr> 
    }
})

// Calculate the maximum of pages to display
const maxPages = ()=>{
    if(employees.length === 0 || employees.length <= selectedEntries ){
        return 1
    }
    return Math.ceil(employees.length / selectedEntries)
}


dispatch(getMaxPage(maxPages()))


    return(
        <div>
            <h1 className="title">Current Employees</h1>
            <div className="parameters">
                <div className="views">
                    <p className="label">View</p>
                    <select className="input-box" onChange={(e)=>dispatch(numberOfEntries(parseInt(e.target.value)))}>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <p className="label">entries</p>
                </div>
                <div>
                    <label className="label" htmlFor="search">Search</label>
                    <input className="input-box" type="text" name="search" id="search" onChange={handleChange} required/>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                       <th onClick={sort} className="table-label-ascending" id="firstName">First Name</th> 
                       <th onClick={sort} className="table-label-ascending" id="lastName">Last Name </th> 
                       <th onClick={sort} className="table-label-ascending" id="startDate">Start Date</th> 
                       <th onClick={sort} className="table-label-ascending" id="department">Department</th> 
                       <th onClick={sort} className="table-label-ascending" id="birthDate">Date of Birth</th> 
                       <th onClick={sort} className="table-label-ascending" id="street">Street</th> 
                       <th onClick={sort} className="table-label-ascending" id="city">City</th> 
                       <th onClick={sort} className="table-label-ascending" id="state">State</th> 
                       <th onClick={sort} className="table-label-ascending" id="zipCode">Zip Code</th> 
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <div className="pages">
                <p className="label">Showing <span className="span-number">{showFirstEntry()}</span> to <span className="span-number">{showLastEntry()}</span> of <span className="span-number">{employees.length}</span> entries</p>
                <div className="nav">
                    <button onClick={()=>{dispatch(previousPage())}} className="btn">Previous</button>
                    <p><span className="span-number">{currentPage}</span></p>
                    <button onClick={()=>{dispatch(nextPage())}} className="btn">Next</button>
                </div>
            </div>
            <div className="link-frame">
                <NavLink className="link" to="/">Home</NavLink>
            </div>
        </div>
    )
}

export default Employees