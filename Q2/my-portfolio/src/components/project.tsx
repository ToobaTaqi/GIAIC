"use client";

interface ProjectProps {
  title: string;
  url: string;
  description: string;
}

export default function Project({ title, url, description }: ProjectProps) {
  return (
    <div className="border rounded p-3 gap-3 flex flex-col w-[300px] project">
      <h3>{title}</h3>
      <a href={url} target="_blank" >
        <h1 className="url" >Visit</h1>
      </a>
      <p>{description}</p>
    </div>
  );
}
