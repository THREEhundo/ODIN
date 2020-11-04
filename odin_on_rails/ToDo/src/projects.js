import ToDoItem from './todoItem';
import { format } from 'date-fns';

const Projects = (arr) => {
  // Add Task to todoArray from CreateTask
    const title = document.querySelector('#list-name').value;
    const priority = 'low';
    const note = document.querySelector('#notes').value;
    const project = document.querySelector('#project').value;
    let dueDate = document.querySelector('input[type="date"]').value;

    // Change date format ex. Oct 22nd
    // let reformatDueDate = format(new Date(dueDate), 'LLL do');

    let newTask = ToDoItem(title, dueDate, priority, note, project);
    arr.push(newTask);

    // If nothing is stored create new array
    if (localStorage.getItem('TaskList') == null) {
      localStorage.setItem('TaskList', '[]');
    }

    // Get old data and add it to new data
    const oldTasks = JSON.parse(localStorage.getItem('TaskList'));
    oldTasks.push(newTask);

    // Add to localStorage
    localStorage.setItem('TaskList', JSON.stringify(oldTasks));

  return {  }
}

export default Projects