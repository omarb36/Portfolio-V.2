export default function ProjetDetails({
    params
}: {
    params: {id: string}
}) {
    return <h1>Détail du projet {params.id}</h1>
}