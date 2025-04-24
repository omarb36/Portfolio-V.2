import { notFound } from "next/navigation"

export default function ProjetDetails({
    params
}: {
    params: {id: string}
}) {
    if(parseInt(params.id) >= 4) {
        notFound();
    }
    return <h1>Détail du projet {params.id}</h1>
}