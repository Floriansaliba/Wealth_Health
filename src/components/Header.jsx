import { useNavigate } from "react-router-dom"

const Header = ()=>{
    const navigate = useNavigate()

return(
    <header className="header">
        <h1 className="title">HRnet</h1>
        <h2 className="link" onClick={()=>{navigate("/employees")}}>View Current Employees</h2>
        <h2 className="create">Create Employee</h2>
    </header>
)

}

export default Header