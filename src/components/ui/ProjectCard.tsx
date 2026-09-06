import { FaLink } from "react-icons/fa";
import SlideViewer from "./SlideViewer";

interface ProjectCardProps {
  data: {
    name: string;
    description: string;
    link: string;
    skills: string[];
  };
  image: string;
  slides?: string[];
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  hoverBorderColor: string;
  buttonColor: string;
  buttonHoverColor: string;
  linkLabel?: string;
}

function ProjectCard({
  data,
  image,
  slides,
  gradientFrom,
  gradientTo,
  borderColor,
  hoverBorderColor,
  buttonColor,
  buttonHoverColor,
  linkLabel = "Visitar",
}: ProjectCardProps) {
  return (
    <div
      className={`group relative bg-gradient-to-br ${gradientFrom} ${gradientTo} border ${borderColor} hover:${hoverBorderColor} card p-4 hover:shadow-xl shadow-black/20 rounded flex flex-col md:flex-row gap-4 items-center`}
    >
      {data.link ? (
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          title={linkLabel + " proyecto"}
          className={`absolute top-4 right-4 ${buttonColor} hover:${buttonHoverColor} text-white rounded-full w-fit h-fit px-4 py-2 z-10 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl flex items-center gap-2`}
        >
          <FaLink className="text-sm" />
          <span className="text-sm font-medium">{linkLabel}</span>
        </a>
      ) : null}
      {slides ? (
        <SlideViewer images={slides} name={data.name} />
      ) : (
        <img src={image} alt={data.name} loading="lazy" className="w-full md:w-1/2 rounded object-cover aspect-video" />
      )}
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h1 className="text-2xl mb-2 font-serif text-white">{data.name}</h1>
        <p className="text-white text-sm">{data.description}</p>
        <ul className="flex flex-wrap gap-2 text-justify">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className={`${buttonColor} text-white text-xs px-3 py-1 rounded-full hover:${buttonHoverColor} transition-colors`}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
