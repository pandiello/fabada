import { useState } from 'react';
import Image from "next/legacy/image";
import { experience } from '@/data/config';
import { format } from 'date-fns';
import { useTheme } from 'next-themes';

export default function Experience() {
  const { theme } = useTheme();

  const sortedProjects = [...experience.projects].sort((a, b) => {
    const dateA = new Date(a.dates.from);
    const dateB = new Date(b.dates.from);
    return dateB - dateA;
  });

  return (
    <div className="bg-inherit">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {experience.title}
        </h2>
      </div>
      <p className="text-lg">{experience.desc}</p>
      <div className="flex flex-wrap gap-4 mt-8">
        {sortedProjects.map((item, index) => (
          <div key={index} className="flex-grow">
            <ExpandableCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ExpandableCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState({});

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const formatDate = (date) => {
    if (date === 'present') {
      return 'Present';
    }
    const [year, month] = date.split('-');
    return format(new Date(year, month - 1), 'MMMM yyyy');
  };

  return (
    <div
      className={`p-6 border border-gray-300 rounded-lg cursor-pointer shadow-md transition-transform transform ${isExpanded ? 'bg-gray-50 scale-105' : 'hover:scale-102'}`}
      onClick={handleCardClick}
      style={{ flexBasis: isExpanded ? '100%' : 'calc(33.333% - 1rem)', marginBottom: isExpanded ? '4rem' : '1rem' }}
    >
      <h3 className="mb-2 text-2xl font-bold ">{item.title}</h3>
      <p className="text-sm  mb-4 italic">{formatDate(item.dates.from)} - {formatDate(item.dates.to)}</p>
      <p className=" leading-relaxed">{item.description}</p>
      {isExpanded && item.content && (
        <div className="mt-6 text-sm ">
          <h4
            className="text-lg font-semibold mb-3 border-b pb-1 border-gray-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleSection('companyInformation');
            }}
          >
            Company Information
          </h4>
          {!collapsedSections.companyInformation && (
            <CompanyProfileCard companyInformation={item.content.companyInformation} />
          )}
          <h4
            className="mt-6 text-lg font-semibold mb-3 border-b pb-1 border-gray-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleSection('businessImpact');
            }}
          >
            🚀 Business Impact
          </h4>
          {!collapsedSections.businessImpact && (
            <ul className="list-disc pl-5 mb-6 space-y-2 ">
              <li><strong>Key Achievements:</strong>
                <ul className="list-disc pl-6 space-y-1 ">
                  {item.content.businessImpact.keyAchievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-blue-500">✔</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </li>
              <li><strong>Metrics & Results:</strong>
                <ul className="list-disc pl-6 space-y-1 ">
                  {item.content.businessImpact.metricsAndResults.map((metric, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-green-500">📊</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          )}
          <h4
            className="text-lg font-semibold mb-3 border-b pb-1 border-gray-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleSection('technicalContributions');
            }}
          >
            ⚡ Technical Contributions
          </h4>
          {!collapsedSections.technicalContributions && (
            <ul className="list-disc pl-5 mb-6 space-y-2 ">
              <li><strong>Key Projects:</strong>
                <ul className="list-disc pl-6 space-y-1 ">
                  {item.content.technicalContributions.keyProjects.map((project, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-purple-500">🔹</span>
                      {project}
                    </li>
                  ))}
                </ul>
              </li>
              <li><strong>Technologies Used:</strong>
                <ul className="list-disc pl-6 space-y-1 ">
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-500">🖥️</span>
                    <strong>Languages:</strong> {item.content.technicalContributions.technologiesUsed.languages.join(', ')}
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-500">🏗️</span>
                    <strong>Frameworks:</strong> {item.content.technicalContributions.technologiesUsed.frameworks.join(', ')}
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-indigo-500">📦</span>
                    <strong>Tools:</strong> {item.content.technicalContributions.technologiesUsed.tools.join(', ')}
                  </li>
                </ul>
              </li>
              <li><strong>Technical Highlights:</strong>
                <ul className="list-disc pl-6 space-y-1 ">
                  {item.content.technicalContributions.technicalHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="mr-2 text-yellow-500">⚡</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          )}
          <h4
            className="text-lg font-semibold mb-3 border-b pb-1 border-gray-300 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              toggleSection('additionalNotes');
            }}
          >
            📚 Additional Notes
          </h4>
          {!collapsedSections.additionalNotes && (
            <ul className="list-disc pl-5 space-y-2 ">
              {item.content.additionalNotes.map((note, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-teal-500">📘</span>
                  {note}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      <div className="mt-6 text-sm ">
        <RefereeCard referee={item.referee} />
      </div>
      <div className="flex items-center flex-wrap -m-3 pt-5">
        {item.link && (
          <a
            href={item.link}
            className="flex items-center py-1 px-3 text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/static/icons/link.svg"
              width={18}
              height={18}
              alt="Link icon"
            />
            <span className="ml-2">{item.link}</span>
          </a>
        )}
        {item.github && (
          <a
            href={`https://github.com/${item.github}`}
            className="flex items-center py-1 px-3 text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/static/icons/github.svg"
              width={18}
              height={18}
              alt="GitHub icon"
            />
            <span className="ml-2">{item.github}</span>
          </a>
        )}
      </div>
    </div>
  );
}

function CompanyProfileCard({ companyInformation }) {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
      <p className="text-sm mb-2"><strong>Industry:</strong> {companyInformation.industry}</p>
      <p className="text-sm mb-2"><strong>Company Size:</strong> {companyInformation.companySize}</p>
      <p className="text-sm mb-2"><strong>Location:</strong> {companyInformation.location}</p>
      <p className="text-sm "><strong>Business Description:</strong> {companyInformation.businessDescription}</p>
    </div>
  );
}

function RefereeCard({ referee }) {
  return (
    <div className="bg-inherit p-4 border border-gray-300 rounded-lg">
      <p>
        <strong>Referee:</strong> {referee.name}, {referee.position} at {referee.company}.
      </p>
      {referee.email && (
        <p className="flex items-center mt-2">
          <a href={`mailto:${referee.email}`} className="text-blue-500 underline ml-1 flex items-center">          
            <Image
              src="/static/icons/email.svg"
              width={16}
              height={16}
              alt="Email icon"
              className="mr-1"
            />
            {referee.email}
          </a>
        </p>
      )}
      {referee.linkedin && (
        <p className="flex items-center mt-2">
          <a href={referee.linkedin} target="_blank" rel="noreferrer" className="text-blue-500 underline ml-1 flex items-center">
            <Image
              src="/static/icons/linkedin.svg"
              width={16}
              height={16}
              alt="LinkedIn icon"
              className="mr-1"
            />
            {referee.linkedin}
          </a>
        </p>
      )}
      <p className="mt-2 text-sm ">Feel free to contact them for more information about this period.</p>
    </div>
  );
}