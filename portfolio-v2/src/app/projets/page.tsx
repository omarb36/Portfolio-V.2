import Link from "next/link"

export default function ProjetsList() {
    return(
        <>
        <h1>Liste de projets</h1>
        <Link href="projets/1">Projet 1</Link>
        <Link href="projets/2">Projet 2</Link>
        <Link href="projets/3">Projet 3</Link>
        </>
    )
}