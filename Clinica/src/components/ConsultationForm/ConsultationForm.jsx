import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

import Modal from "../Modal/Modal.jsx"

function ConsultationForm() {
    //variaveis e estados
    const [searchTerm, setSearchTerm] = useState("")
    const [patients, setPatients] = useState([])
    const [selectedPatient, setSelectedPatient] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSaving, setIsSaving] = useState(false)

    const [formData, setFormData] = useState(
        {
            reason: "",
            date: "",
            time: "",
            description: "",
            medication: "",
            dosagePrecaution: ""
        }
    )

    //busca pacientes

    const fetchPatients = async () => {
        try {
            const res = await axios.get("http://localhost:3000/patients")
            setPatients(res.data)
        } catch (e) {
            console.error("Erro ao obter dados", e)
        }
    }

    useEffect(() => {
        fetchPatients()
    }, [])

    //funções auxiliares

    const handleSearchChange = (e) => searchTerm(e.target.value)
    const filteredPatients = patients.filter(
        (patients) => patients.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || patients.id.toString().includes(searchTerm)
    )
    

    const handleSelectPatients = (patient) => {
        setSelectedPatient(patient)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedPatient(null)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target.value()
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const resetForm = () => {
        setFormData({
            reason: "",
            date: "",
            time: "",
            description: "",
            medication: "",
            dosagePrecaution: ""
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedPatient) return;

        try {
            setIsSaving(true)
            const dataToSave = {
                patientId: selectedPatient.id,
                ...formData
            }

            await axios.post("http://localhost:3000/consults", dataToSave)
            toast.success("Consulta Cadastrada com sucesso", {
                autoClose: 3000,
                hideProgressBar: true
            })

            resetForm()
            handleCloseModal()
        } catch (e) {
            toast.error("Erro a ocadastrar Consulta!", {
                autoClose: 3000,
                hideProgressBar: true
            })
        }
    }


    return (
        <section className='p-6 text-gray-800'>
            {/*Campo Busca*/}
            <div className='mb-6'>
                <label htmlFor="searchBar" className='block text-sm font-semibold mb-2'>Busca paciente para cadastrar consulta</label>
                <input
                    type="text"
                    id="searchBar"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className='w-full border p-2 rounded-lg focus:ring-2 focus:ring-cyan-600 outiline-none'
                    placeholder='Digite nome ou registro do paciente'
                />
            </div>

            {/* Lista de pacientes */}

            <ul className='apace-y-3'>
                {filteredPatients.map((patient) => (
                    <li
                        key={patient.id}
                        className="p-4 borde rounded-lg shadow-sm flex justify-between items-center hover:bg-gray-50 transition"
                    >
                        <div>
                            <p className='text-sm'>
                                <strong>Registro:</strong>{patient.id}
                            </p>
                            <p className='text-sm'>
                                <strong>Nome:</strong>{patient.name}
                            </p>
                            <p className='text-sm'>
                                <strong>convênio:</strong>{patient.heathInsurance}
                            </p>
                        </div>
                        <button onClick={() => handleSelectPatients(patient)} className='bg-cyan-700 text-white px-3 py-2 rounded-lg hover:bg-cyan-600 transition'>Selecionar</button>
                    </li>
                ))}
            </ul>

            {/* Modal de cadastro consulta */}

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                {selectedPatient && (
                    <>
                        <h2 className='text-lg font-bold mb-4 text-cyan-700 '>
                            Cadastrar consulta para {selectedPatient.fullName}
                        </h2>

                        <div className='mb-4 text-sm text-gray-700'>
                            <p>
                                <strong>Email: </strong>{selectedPatient.email}
                            </p>
                            <p>
                                <strong>Telefone: </strong>{selectedPatient.phone}
                            </p>
                        </div>
                    </>
                )}
            </Modal>
        </section>
    )
}

export default ConsultationForm