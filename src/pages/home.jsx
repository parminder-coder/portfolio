import Hero from "../components/hero/hero"
import ProjectCards from "../components/project Cards/proCard"
import Contacts from "../components/contact/contacts"
import myimage from "../images/comp2.png"

export default function Home() {
  const projects = [
    {
      title: "Resource Management System",
      desc: "A fullstack solution for tracking, assigning, and monitoring departmental assets and workflows.",
      gitUrl: "https://github.com/parminder-coder/resource_management",
      imgUrl: "null",
    },
    {
      title: "ee-gndec-website",
      desc: "Departmental portal featuring events, faculty updates, and academic resources.",
      gitUrl: "https://github.com/parminder-coder/ee-gndec-website",
      imgUrl: "null",
    },
    {
      title: "Cloudshare",
      desc: "Secure cloud-based file sharing and synchronization platform built for speed and reliability.",
      gitUrl: "https://github.com/parminder-coder/cloudshare",
      imgUrl: "null",
    },
  ];

  return (
    <div>
      <Hero imageURL={myimage} />

      {/* High-Contrast Projects Section */}
      <section className="projects-section">
        <h2 className="projects-heading">Featured Projects</h2>
        {projects.map((project) => (
          <ProjectCards
            key={project.title}
            title={project.title}
            desc={project.desc}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
          />
        ))}
      </section>

      <Contacts />
    </div>
  );
}
