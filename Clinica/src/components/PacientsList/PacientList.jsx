import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router";

const PatientsList = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [ages, setAges] = useState({});

  useEffect(() => {
    const fetchPatients = async () => {
<<<<<<< HEAD
      try {
        const response = await axios.get("http://localhost:3000/patients", {
                headers: {
                    'Authorization': `Bearer ${BEARER_TOKEN}`
=======
        try {
            const res = await axios.get("http://localhost:3000/patients")
            setPatients(res.data)
        } catch (e) {
            console.error("Erro ao obter dados do paticente", e)
        }
    }

    useEffect(() => {
        fetchPatients()
    }, []);

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const filteredPatients = patients.filter((patient) => {
        return (
            patient.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.id.toString().includes(searchTerm)
        )
    })

    return (
        <section className='p-6 bg-gray-50 rounded-lg shadow-md'>
            <h2 className='text-2x-l font-bold mb-6 text-gray-800'>
                Informações Rapidas de Pacientes
            </h2>
            {/* campo busca */}

            <div className='mb-6 flex flex-col sm:flex=row sm:items-center sm:justify-between gap-3'>
                <label htmlFor="" className='text-gray-700 font-medium'>Buscar Paciente:</label>
                <input type="text" id="search" value={searchTerm} onChange={handleSearchTerm} placeholder='Digite o nome ou o Indentificador' className='w-full sm:w1/2 p-2 border roumded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600' />
            </div>

            {/* Lista de Pacientes */}

            <ul className='space-y-4'>
                {
                    filteredPatients.length > 0 ? (
                        filteredPatients.map((patients) => (
                            <li key={patients.id} className='p-4 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow'>
                                <p className='text-sm text-gray-700'>
                                    <strong className='text-gray-500'>Nome:</strong> {patients.fullName}
                                </p>
                                <p className='text-sm text-gray-700'>
                                    {patients.email}
                                </p>
                                <p className='text-sm text-gray-700'>
                                    {patients.phone}
                                </p>

                                <p className='text-sm text-gray-700'>
                                    <strong className='text-gray-500'>Idade:</strong> {patients.birthdate}
                                </p>
                                <p className='text-sm text-gray-700'>
                                    <strong className='text-gray-500'>Plano:</strong> {patients.Unimed}
                                </p>


                                <Link to={`/paciente/${patients.id}`} className='inline-block mt-2 text-cyan-700 font-semibold hover:underline'>Ver detalhes</Link>
                            </li>
                        ))
                    ) : (
                        <p className='text-gray-600'>Nenhum Paciente Encontrado.</p>
                    )
>>>>>>> 3d7995eb401155a9ef8c043549d9eba43e9ba045
                }
            });
        const patientsData = response.data;

        // Calcula a idade de cada paciente e armazena no estado
        const calculatedAges = {};
        patientsData.forEach((patient) => {
          calculatedAges[patient.id] = calculateAge(patient.birthdate);
        });

        setAges(calculatedAges);
        setPatients(patientsData);
      } catch (error) {
        console.error("Erro ao obter dados dos pacientes:", error);
      }
    };

    fetchPatients();
  }, []);

  const calculateAge = (birthdate) => {
    if (!birthdate) return "-";
    const today = new Date();
    const birthdateDate = new Date(birthdate);
    let age = today.getFullYear() - birthdateDate.getFullYear();
    const monthDiff = today.getMonth() - birthdateDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPatients = patients.filter((patient) =>
    [patient.fullName, patient.email, patient.phone]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white shadow rounded-2xl p-6 mt-8">
      <h2 className="text-xl font-semibold text-cyan-800 mb-4">
        Informações Rápidas de Pacientes
      </h2>

      {/* Campo de busca */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
        <label htmlFor="search" className="text-gray-700 font-medium">
          Buscar Paciente:
        </label>
        <input
          type="text"
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Digite o nome, email ou telefone"
          className="border rounded-lg px-3 py-2 w-full sm:w-80 focus:ring-2 focus:ring-cyan-600 outline-none"
        />
      </div>

      {/* Lista de pacientes */}
      {filteredPatients.length > 0 ? (
        <ul className="divide-y divide-gray-200">
          {filteredPatients.map((patient) => (
            <li
              key={patient.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4"
            >
              <div className="flex items-center gap-4">
                <div className="bg-cyan-100 text-cyan-700 p-3 rounded-full">
                  <FaUserAlt size={20} />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{patient.fullName}</p>
                  <p className="text-sm text-gray-600">{patient.email}</p>
                  <p className="text-sm text-gray-600">{patient.phone}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 mt-2 sm:mt-0 text-right">
                <p>
                  <strong>Idade:</strong> {ages[patient.id] || "-"} anos
                </p>
                <p>
                  <strong>Plano:</strong> {patient.healthInsurance || "—"}
                </p>
                <Link
                  to={`/paciente/${patient.id}`}
                  className="text-cyan-700 font-semibold hover:underline"
                >
                  Ver detalhes →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center py-6">
          Nenhum paciente encontrado.
        </p>
      )}
    </div>
  );
};

export default PatientsList;
