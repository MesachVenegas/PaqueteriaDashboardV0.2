import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AsideWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
}


export default function AsideWrapper({ title, description, children } : AsideWrapperProps) {


  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="flex items-center gap-2 hover:text-blue-500">
          <FontAwesomeIcon icon={faEdit} className="w-4 h-4" />
          editar
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mt-6">
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {description}
          </SheetDescription>
        </SheetHeader>
          {children}
      </SheetContent>
    </Sheet>
  )
}
