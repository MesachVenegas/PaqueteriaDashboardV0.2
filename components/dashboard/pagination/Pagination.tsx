import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination() {
  return (
    <div className="flex justify-between px-5 mt-5">
      <button className="flex gap-2 items-center bg-blue-500 py-1 px-3 rounded-lg text-white hover:bg-blue-400">
        <FontAwesomeIcon icon={faCircleArrowLeft} className="w-4 h-4"/>
        Volver
      </button>
      <button className="flex gap-2 items-center bg-blue-500 py-1 px-3 rounded-lg text-white hover:bg-blue-400">
        Siguiente
        <FontAwesomeIcon icon={faCircleArrowRight} className="w-4 h-4"/>
      </button>
    </div>
  )
}
