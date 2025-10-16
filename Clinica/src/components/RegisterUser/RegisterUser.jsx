import React from 'react'

const RegisterUser = () => {
    return (
        <div className='w-full max-w-md p-6 bg-white rounded-xl shadow-lg '>
            <form action="" className='space-y-4'>
                <div>
                    <label htmlFor="nome" className='block text-sm font-medium mb-1'>Nome</label>
                    <input type="text" id='nome' value={''} className='' />
                </div>

                <div>
                    <label htmlFor="email" className='block text-sm font-medium mb-1'>Email</label>
                    <input type="email" id='email' value={''} required className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                <div>
                    <label htmlFor="senha" className='block text-sm font-medium mb-1'>Senha</label>
                    <input type="password" id='senha' value={''} required className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                <div>
                    <label htmlFor="senhaVf" className='block text-sm font-medium mb-1'>Confirmar senha Senha</label>
                    <input type="password" id='senhaVf' value={''} required className='w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>


            </form>
        </div>
    )
}

export default RegisterUser