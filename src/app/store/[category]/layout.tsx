export default function Layout({children}: {children: React.ReactNode}){
    // Layout de la tienda
    return (
        <main>
            <nav>Navegación de las categorias</nav>
            {children}
        </main>
    )
}