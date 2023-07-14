import { Briefcase, ListTask, People, Bullseye } from "react-bootstrap-icons";

export const ProjectsStats = [
  {
    id: 1,
    title: "Stat 1",
    value: "178",
    icon: <Briefcase size={18} />,
    statInfo: '<span className="text-dark me-2">2</span> Completed',
  },
  {
    id: 2,
    title: "Stat 2",
    value: "100",
    icon: <ListTask size={18} />,
    statInfo: '<span className="text-dark me-2">28</span> Completed',
  },
  {
    id: 3,
    title: "Stat 3",
    value: "$45.06K",
    icon: <People size={18} />,
    statInfo: '<span className="text-dark me-2">1</span> Completed',
  },
  {
    id: 4,
    title: "Stat 4",
    value: "89",
    icon: <Bullseye size={18} />,
    statInfo: '<span className="text-dark me-2">5%</span> Completed',
  },
];
export default ProjectsStats;
