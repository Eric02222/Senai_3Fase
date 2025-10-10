import React from 'react'

const RegisterUser = () => {
  return (
    <div className='w-full max-w-md p-6 bg-white rounded-xl shadow-lg '>
        <form action="" className='space-y-4'>
            {/* <div>
                <label htmlFor="nome" className='block text-sm font-medium mb-1'>Nome</label>
                <input type="text" id='nome' value={nome} className=''/>
            </div> */}

            <div>
                <label htmlFor="email" className='block text-sm font-medium mb-1'>Email</label>
                <input type="email" id='email' value={''} required className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            </div>

            {/* <div>
                //email senha user
            </div>

            <div>
                //email confirmar senha user
            </div> */}


        </form>
    </div>
  )
}

export default RegisterUser