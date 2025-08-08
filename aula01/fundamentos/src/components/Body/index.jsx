import Card from "./Card"
import styles from "./Body.module.css";

function Body() {
    const usuarios = [
        { nome: "Elis", idade: "20", cidade: "São Paulo" },
        { nome: "Juan", idade: "21", cidade: "Guarapuava" },
        { nome: "Fabio", idade: "23", cidade: "Florianopolis" }
    ]

    return (
        <main className={styles.body}>
            <h2>Usuarios Cadastrados</h2>
            <div className={styles.cardContianer}>
                {usuarios.map((user) => (
                    <Card nome={user.nome} idade={user.idade} cidade={user.cidade}/>
             ))}

            </div>
        </main>
    )
}

export default Body;