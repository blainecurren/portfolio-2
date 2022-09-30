import "./projectList.scss";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl" id="productList">
      <div className="pl-texts">
        <h1 className="pl-title">Take a look at a couple of my projects!</h1>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
