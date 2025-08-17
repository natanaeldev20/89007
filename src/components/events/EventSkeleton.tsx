const EventSkeleton = () => {
  return (
    <div className="space-y-6">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl bg-white shadow-lg animate-pulse"
        >
          {/* Imagen grande */}
          <div className="h-56 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

          {/* Contenido */}
          <div className="space-y-4 p-6">
            {/* Categoría */}
            <div className="h-5 w-24 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

            {/* Título */}
            <div className="h-7 w-3/4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />

            {/* Descripción (3 líneas) */}
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
              <div className="h-4 w-5/6 rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
              <div className="h-4 w-2/3 rounded bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            </div>

            {/* Botones */}
            <div className="flex gap-3 pt-2">
              <div className="h-9 w-24 rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
              <div className="h-9 w-20 rounded-xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventSkeleton;
