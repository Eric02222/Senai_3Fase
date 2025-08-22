import { useEffect, useState } from "react"
import styles from "./Card.module.css"


export const CardApi = () => {
    // let contador = 0
    // const [contador, setContador] = useState(0);

    // const incrementaValor = () => {
    //     // contador++
    //     // console.log(contador)
    //     setContador(prev => prev + 1)
    // }

    const [users, setUsers] = useState([]);
    const [filtro, setFiltro] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                const filtrados = data.filter((user) => user.name.toLowerCase().includes(filtro.toLowerCase()))
                setUsers(filtrados)
            })
        console.log(users)
    }, [filtro])

    return (
        <div className={styles.cardContainerApi}>
            {/* <p>{contador}</p>
            <button onClick={incrementaValor}>Incrementa</button> */}
            <div>
                <input type="text" className={styles.inputFiltro} placeholder="Filtrar por nome..." value={filtro} onChange={(e) => setFiltro(e.target.value)} />
            </div>

            <div className={styles.cardApi}>
                {users.map((user) => (
                    <div className={styles.card} key={user.id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </div>
                ))
                }
            </div>
        </div>
    )
}


// export default CardApi;