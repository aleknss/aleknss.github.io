import { createElement } from 'react';
import * as fa from 'react-icons/fa';
import * as ai from 'react-icons/ai';
import * as md from 'react-icons/md';
import * as hi from 'react-icons/hi';
import * as gi from 'react-icons/gi';

const wanted = {
  fa: [
    'FaGithub','FaLinkedin','FaTwitter','FaEnvelope','FaPhone','FaAward',
    'FaBrain','FaGraduationCap','FaHome','FaPaperPlane','FaPeopleCarry',
    'FaFileDownload','FaCalendar','FaMapMarkerAlt','FaCertificate','FaSpinner',
    'FaCheck','FaExclamationTriangle','FaArrowLeft','FaExternalLinkAlt','FaLink',
    'FaChevronLeft','FaChevronRight',
  ],
  ai: ['AiOutlineFundProjectionScreen'],
  md: ['MdLightMode','MdDarkMode'],
  hi: ['HiLocationMarker'],
  gi: ['GiPineTree'],
};

function walk(node, acc) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { for (const n of node) walk(n, acc); return; }
  const p = node.props || {};
  if (p.attr && p.attr.viewBox) acc.viewBox = p.attr.viewBox;
  if (p.attr && p.attr.fill) acc.svgFill = p.attr.fill;
  if (node.type === 'svg') {
    acc.viewBox = p.viewBox;
    if (p.fill) acc.svgFill = p.fill;
  } else if (node.type === 'path') {
    acc.paths.push({ d: p.d, fill: p.fill || null });
  } else if (node.type === 'circle') {
    acc.circles.push({ cx: p.cx, cy: p.cy, r: p.r, fill: p.fill || null });
  }
  if (p.children) walk(p.children, acc);
}

const out = {};
for (const [pkg, names] of Object.entries(wanted)) {
  const mod = { fa, ai, md, hi, gi }[pkg];
  for (const name of names) {
    const fn = mod[name];
    if (!fn) { console.error('MISSING', pkg, name); continue; }
    const el = fn({});
    const acc = { viewBox: '0 0 24 24', svgFill: null, paths: [], circles: [] };
    walk(el, acc);
    out[name] = acc;
  }
}
console.log(JSON.stringify(out, null, 2));
