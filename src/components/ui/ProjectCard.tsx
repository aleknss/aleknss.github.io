import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  data: {
    name: string;
    description: string;
    link: string;
    skills: string[];
    logo: string;
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
  const cardVars = {
    "--project-border": borderColor,
    "--project-hover-border": hoverBorderColor,
    "--project-btn": buttonColor,
    "--project-btn-hover": buttonHoverColor,
  } as React.CSSProperties;

  return (
    <div
      style={cardVars}
      className={`relative bg-gradient-to-br ${gradientFrom} ${gradientTo} border border-[var(--project-border)] hover:border-[var(--project-hover-border)] card p-4 hover:shadow-xl shadow-black/20 rounded-xl flex flex-col md:flex-row gap-4 items-center transition-colors`}
    >
      <Link
        to={`/projects/${data.logo}`}
        className="absolute top-6 right-6 text-white rounded w-fit h-fit p-3 z-10 shadow-lg transition-colors"
        style={{ backgroundColor: buttonColor }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverColor)}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonColor)}
      >
        <FaLink />
      </Link>
      <img src={image} alt={data.name} loading="lazy" className="w-full md:w-1/2 rounded object-cover aspect-video" />
      <div className="flex flex-col gap-2 w-full md:w-1/2">
        <h1 className="text-2xl mb-2 font-serif text-white">{data.name}</h1>
        <p className="text-white text-sm leading-relaxed">{data.description}</p>
        <ul className="flex flex-wrap gap-2 text-justify">
          {data.skills.map((skill, index) => (
            <li
              key={index}
              className="text-white text-xs px-3 py-1 rounded-full transition-colors"
              style={{ backgroundColor: buttonColor }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverColor)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonColor)}
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
