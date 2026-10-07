import { config, fields, collection, singleton } from '@keystatic/core';

const logoOptions = [
  { label: 'Animepol', value: 'animepol' },
  { label: 'Tonela', value: 'tonela' },
  { label: 'Ordenna', value: 'ordenna' },
  { label: 'Lámpara', value: 'lampara' },
];

const educationEntry = {
  modalidad: fields.text({ label: 'Modalidad' }),
  grado: fields.text({ label: 'Centro' }),
  ciudad: fields.text({ label: 'Ciudad' }),
  graduacion: fields.text({ label: 'Graduación' }),
};

const skillItem = {
  name: fields.text({ label: 'Nombre' }),
  icon: fields.text({ label: 'Icono (URL)' }),
};

function projectCollection(label: string, locale: 'es' | 'en') {
  return collection({
    label,
    path: `src/content/projects/${locale}/*`,
    slugField: 'name',
    format: { data: 'yaml' },
    schema: {
      name: fields.slug({ name: { label: 'Nombre' } }),
      link: fields.url({
        label: 'Enlace',
        validation: { isRequired: false },
      }),
      logo: fields.select({
        label: 'Logo',
        options: logoOptions,
        defaultValue: 'animepol',
      }),
      skills: fields.array(fields.text({ label: 'Tecnología' }), {
        label: 'Stack',
        itemLabel: (props) => props.value,
      }),
      locale: fields.select({
        label: 'Idioma',
        options: [
          { label: 'ES', value: 'es' },
          { label: 'EN', value: 'en' },
        ],
        defaultValue: locale,
      }),
      order: fields.integer({ label: 'Orden', defaultValue: 0 }),
      description: fields.text({ label: 'Descripción', multiline: true }),
    },
  });
}

const siteSchema = {
  name: fields.text({ label: 'Nombre' }),
  bio: fields.text({ label: 'Bio', multiline: true }),
  contacts: fields.object(
    {
      phone: fields.text({ label: 'Teléfono' }),
      email: fields.text({ label: 'Email' }),
      github: fields.text({ label: 'GitHub' }),
      twitter: fields.text({ label: 'Twitter' }),
      linkedin: fields.text({ label: 'LinkedIn' }),
      location: fields.text({ label: 'Ubicación' }),
    },
    { label: 'Contacto' },
  ),
  education: fields.object(
    {
      bach: fields.object(educationEntry, { label: 'Bachillerato' }),
      fp: fields.object(educationEntry, { label: 'Formación Profesional' }),
    },
    { label: 'Educación' },
  ),
  experience: fields.array(
    fields.object({
      from: fields.integer({ label: 'Desde (timestamp ms)' }),
      to: fields.integer({
        label: 'Hasta (timestamp ms)',
        validation: { isRequired: false },
      }),
      company: fields.text({ label: 'Empresa' }),
      role: fields.text({ label: 'Puesto' }),
      logo: fields.text({ label: 'Logo (URL)' }),
      descriptions: fields.array(fields.text({ label: 'Descripción' }), {
        label: 'Descripciones',
        itemLabel: (props) => props.value,
      }),
    }),
    {
      label: 'Experiencia',
      itemLabel: (props) => props.fields.company.value || 'Experiencia',
    },
  ),
  participaciones: fields.array(
    fields.object({
      name: fields.text({ label: 'Nombre' }),
      description: fields.text({ label: 'Descripción', multiline: true }),
      clave: fields.text({ label: 'Clave' }),
    }),
    {
      label: 'Participaciones',
      itemLabel: (props) => props.fields.name.value || 'Participación',
    },
  ),
};

const skillsSchema = {
  languages: fields.array(fields.object(skillItem), {
    label: 'Lenguajes',
    itemLabel: (props) => props.fields.name.value || 'Lenguaje',
  }),
  frameworks: fields.array(fields.object(skillItem), {
    label: 'Frameworks',
    itemLabel: (props) => props.fields.name.value || 'Framework',
  }),
  tools: fields.array(fields.object(skillItem), {
    label: 'Herramientas',
    itemLabel: (props) => props.fields.name.value || 'Herramienta',
  }),
};

export default config({
  storage: { kind: 'local' },
  collections: {
    projects_es: projectCollection('Proyectos (ES)', 'es'),
    projects_en: projectCollection('Projects (EN)', 'en'),
  },
  singletons: {
    site_es: singleton({
      label: 'Sitio (ES)',
      path: 'src/content/site/es',
      format: { data: 'yaml' },
      schema: siteSchema,
    }),
    site_en: singleton({
      label: 'Site (EN)',
      path: 'src/content/site/en',
      format: { data: 'yaml' },
      schema: siteSchema,
    }),
    skills: singleton({
      label: 'Habilidades',
      path: 'src/content/skills/skills',
      format: { data: 'yaml' },
      schema: skillsSchema,
    }),
  },
});
