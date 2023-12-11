'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Pagination({ count } : { count: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const page = searchParams.get('page') || '1';
  const params = new URLSearchParams(searchParams);
  const itemPerPage = 1;

  const hasPrev = itemPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemPerPage * (parseInt(page) - 1) + itemPerPage < count -1;

  const handlePage = (type: string) => {
    type === 'prev'
      ? params.set('page', (parseInt(page) - 1).toString())
      : params.set('page', (parseInt(page) + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex justify-between px-5 mt-5">
      <button
        className={`flex gap-2 items-center bg-blue-500 py-1 px-3 rounded-lg text-white hover:bg-blue-400 ${!hasPrev ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!hasPrev}
        onClick={() => handlePage('prev') }
      >
        <FontAwesomeIcon icon={faCircleArrowLeft} className="w-4 h-4"/>
        Volver
      </button>
      <button
        className={`flex gap-2 items-center bg-blue-500 py-1 px-3 rounded-lg text-white hover:bg-blue-400 ${!hasNext ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!hasNext}
        onClick={() => handlePage('next') }
      >
        Siguiente
        <FontAwesomeIcon icon={faCircleArrowRight} className="w-4 h-4"/>
      </button>
    </div>
  )
}
