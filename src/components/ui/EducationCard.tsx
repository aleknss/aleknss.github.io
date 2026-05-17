import {
  FaCalendar,
  FaCertificate,
  FaMapMarkerAlt,
} from "react-icons/fa";
import SecondaryTitle from "./SecondaryTitle";
import dayjs from "dayjs";

interface EducationCardProps {
  image: string;
  alt: string;
  grado: string;
  ciudad: string;
  modalidad: string;
  graduacion: string;
  language: "es" | "en";
}

export default function EducationCard({
  image,
  alt,
  grado,
  ciudad,
  modalidad,
  graduacion,
  language,
}: EducationCardProps) {
  return (
    <div className="flex flex-col gap-4 py-8 px-6">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="w-2/3 h-32 object-cover mx-auto rounded-lg"
      />
      <SecondaryTitle>{grado}</SecondaryTitle>
      <p className="flex items-center gap-1 text-sm">
        <span className="flex items-center gap-1 font-bold">
          <FaMapMarkerAlt />
          {language === "es" ? "Ciudad:" : "City:"}
        </span>
        {ciudad}
      </p>
      <p className="flex items-center gap-1 text-sm">
        <span className="flex items-center gap-1 font-bold">
          <FaCertificate />
          {language === "es" ? "Grado:" : "Degree:"}
        </span>
        {modalidad}
      </p>
      <p className="flex items-center gap-1 text-sm">
        <span className="flex items-center gap-1 font-bold">
          <FaCalendar />
          {language === "es" ? "Graduado en:" : "Graduated in:"}
        </span>
        {graduacion ? dayjs(graduacion).format("MMMM YYYY") : "N/A"}
      </p>
    </div>
  );
}
