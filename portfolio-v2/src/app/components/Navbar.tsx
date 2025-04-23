export default function Navbar() {
    return(
        <>
        <nav className="flex justify-between items-center p-5 border-b-2 sticky">
            
                <div className="text-xl font-bold">Logo</div>
                <div className="flex gap-4">
                    <a href="/accueil">Accueil</a>
                    <a href="/projets">Projets</a>
                    <a href="">Contact</a>
                </div>
                <div className="flex gap-4">
                    <button>inscritpion</button>
                    <button>connexion</button>
                </div>
        </nav>
        </>
    )
}