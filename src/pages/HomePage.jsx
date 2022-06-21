import Header from "../components/Header"
import Form from "../components/Form"
// import ModalAlert from "../components/ModalAlert"
// import {Modal} from "react-modal-p14-openclassrooms"
import ModalAlert from "../components/ModalAlert"
import { useState } from "react"
import { Modal } from "react-modal-p14-openclassrooms"




const HomePage = ()=>{

const [modal, setModal]= useState(false)


    return modal ? (
        <div>
        <Header />
        <Form />
        <Modal text = "Employee Created!"  closeModal={()=>{setModal(false)}}/>
        {/* <ModalAlert text = "Employee Created!" closeModal={()=>{setModal(false)}} />  */}
        </div>
    ) : (
        <div>
        <Header />
        <Form openModal={()=>{setModal(true)}}  />
        </div>
    )
}

export default HomePage