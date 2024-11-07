import React from 'react';
import PropTypes from 'prop-types';

const ProjectComponent = ({ projectsArray1, projectsArray2 }) => {
  // Step 1: Merge the two arrays into one array
  const mergedProjects = [...projectsArray1, ...projectsArray2];

  // Step 2: Filter out projects that have a budget of less than $10,000
  const filteredProjects = mergedProjects.filter((project) => project.budget >= 10000);

  // Step 3: Increase the budget of each remaining project by 20%
  const updatedProjects = filteredProjects.map((project) => ({
    ...project,
    budget: project.budget * 1.2,
  }));

  // Step 4: Find the first project that is marked as "completed"
  const firstCompletedProject = updatedProjects.find((project) => project.completed);

  // Step 5: Check if all remaining projects have a budget of at least $15,000
  const allProjectsAbove15k = updatedProjects.every((project) => project.budget >= 15000);

  return (
    <div>
      <h1>Updated Projects</h1>
      <ul>
        {updatedProjects.map((project, index) => (
          <li key={index}>
            {project.title} - Lead: {project.lead}, Budget: ${project.budget.toFixed(2)}, Completed: {project.completed.toString()}
          </li>
        ))}
      </ul>

      <h2>First Completed Project</h2>
      {firstCompletedProject ? (
        <p>{firstCompletedProject.title} - Lead: {firstCompletedProject.lead}</p>
      ) : (
        <p>No project completed yet.</p>
      )}

      <h2>All Projects Above $15,000?</h2>
      <p>{allProjectsAbove15k ? 'Yes' : 'No'}</p>
    </div>
  );
};

// PropTypes validation
ProjectComponent.propTypes = {
  projectsArray1: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      lead: PropTypes.string.isRequired,
      budget: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  projectsArray2: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      lead: PropTypes.string.isRequired,
      budget: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ProjectComponent;
