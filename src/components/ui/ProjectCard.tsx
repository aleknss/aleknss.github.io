import { FaLink } from "react-icons/fa";

interface ProjectCardProps {
  data: {
    name: string;
    description: string;
    link: string;
    skills: string[];
  };
  image: string;
  gradientFrom: string;
  gradientTo: string;
  borderColor: string;
  hoverBorderColor: string;
  buttonColor: string;
  buttonHoverColor: string;
}

function ProjectCard({
  data,
  image,
  gradientFrom,
  gradientTo,
  borderColor,
  hoverBorderColor,
  buttonColor,
  buttonHoverColor,
}: ProjectCardProps) {
  return (
    <div
      className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} border ${borderColor} hover:${hoverBorderColor} card p-4 hover:shadow-xl shadow-black/20 rounded flex flex-col md:flex-row gap-4 items-center`}
    >
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`absolute top-6 right-6 ${buttonColor} hover:${buttonHoverColor} text-white rounded w-fit h-fit p-3 z-10 shadow-lg transition-colors`}
      >
        <FaLink />
      </a>
      <img src={image} alt={data.name} loading="lazy" className="w-full md:w-1/2 rounded object-cover aspect-video" />
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
