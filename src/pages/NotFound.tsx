import { Link } from "react-router";
import { routes } from "../routes/routes";



export const NotFound = () => {
    return (
      <>
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-h2 font-semibold text-primary-dark">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Pagina no encontrada
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                Parece que la página que buscas no existe o ha sido movida.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to={routes.HOME}
                className="rounded-md bg-primary-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Regresar a inicio
              </Link>
              <Link to="https://wa.link/6yc5wl" className="text-sm font-semibold text-white">
                Contáctame <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </main>
      </>
    )
  }
  