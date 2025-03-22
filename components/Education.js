import { education } from '@/data/config';

export default function Education() {
  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {education.title}
        </h2>
      </div>
      <p className="text-lg">{education.desc}</p>
      <div className="mt-8">
        {education.hints.map((item, index) => (
          <EducationCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

function EducationCard({ item }) {
  return (
    <div className="p-6 border border-lightText rounded-xl mb-4">
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p className="mt-2 text-sm text-gray-500">{item.date}</p>
    </div>
  );
}