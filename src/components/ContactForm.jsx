import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

// Botón reutilizable para descargar catálogo
function CatalogoButton({ children, ...props }) {
  return (
    <a
      href="https://drive.google.com/file/d/1YCKV_gW459CVV1tE--MGH-QGsD4gicjb/view?usp=sharing"
      target="_blank"
      className="inline-flex items-center gap-2 bg-[#C9BCA4] text-white px-6 py-2 rounded-full
        text-sm md:text-base shadow-sm hover:opacity-90 hover:scale-105 hover:cursor-pointer
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-[#C9BCA4] focus:ring-offset-2"
      download
      {...props}
    >
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3v12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
        <path
          d="M8 11l4 4 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M5 20h14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        ></path>
      </svg>
      {children}
    </a>
  );
}

export default function CatalogoForm() {
  const [showForm, setShowForm] = useState(false);
  const [state, handleSubmit] = useForm("mldweboq");

  // Mensaje de éxito
  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center gap-4 mt-6">
        <div className="text-green-700 bg-green-100 border border-green-300 px-4 py-2 rounded-lg font-medium">
          ¡Muchas gracias! Ahora puedes descargar el catálogo.
        </div>
        <CatalogoButton>Descargar catálogo</CatalogoButton>
      </div>
    );
  }

  // Botón inicial
  if (!showForm) {
    return (
      <div className="flex flex-col items-center gap-4 mt-6">
        <button
          type="button"
          className="inline-flex items-center gap-2 bg-primary-1 text-white px-6 py-2 rounded-full
            text-sm md:text-base shadow-sm hover:opacity-90 hover:scale-105 hover:cursor-pointer
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-primary-1 focus:ring-offset-2"
          onClick={() => setShowForm(true)}
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 3v12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
            <path
              d="M8 11l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M5 20h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>
          </svg>
          Solicitar catálogo
        </button>
      </div>
    );
  }

  // Formulario
  return (
    <form
      onSubmit={handleSubmit}
      className=" mx-auto mt-6 flex flex-col gap-4 bg-white border border-[#C9BCA4]/30 rounded-xl shadow-md p-6"
    >
      <div className="text-gray-700 bg-gray-100 border border-gray-200 px-4 py-2 rounded-lg font-medium mb-2">
        Completa el formulario para habilitar la descarga del catálogo.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="nombre"
            className="text-sm font-semibold text-[#C9BCA4]"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            required
            className="px-3 py-2 border border-[#C9BCA4]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9BCA4] transition"
          />
          <ValidationError
            prefix="Nombre"
            field="nombre"
            errors={state.errors}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="apellido"
            className="text-sm font-semibold text-[#C9BCA4]"
          >
            Apellido
          </label>
          <input
            id="apellido"
            type="text"
            name="apellido"
            required
            className="px-3 py-2 border border-[#C9BCA4]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9BCA4] transition"
          />
          <ValidationError
            prefix="Apellido"
            field="apellido"
            errors={state.errors}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[#C9BCA4]"
          >
            Correo electrónico
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="px-3 py-2 border border-[#C9BCA4]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9BCA4] transition"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="telefono"
            className="text-sm font-semibold text-[#C9BCA4]"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            name="telefono"
            required
            className="px-3 py-2 border border-[#C9BCA4]/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C9BCA4] transition"
          />
          <ValidationError
            prefix="Teléfono"
            field="telefono"
            errors={state.errors}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex items-center bg-primary-1 text-white px-6 py-2 rounded-full mt-2 font-semibold shadow-sm
        hover:opacity-90 hover:scale-105 hover:cursor-pointer transition-all duration-200 focus:outline-none
        focus:ring-2 focus:ring-primary-1 focus:ring-offset-2"
        >
          {state.submitting ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </form>
  );
}
