import ToDoItem from './todoItem';
import Sidebar from './sidebar';
import Projects from './projects';
import ShowAllTasks from './showAllTasks';

const startUp = () => {
  var todoArray = [];

  Sidebar(todoArray);
  // allTasks.addEventListener('click', (e) => {
  //   console.log(todoArray);
  //   const taskMaster = ShowAllTasks();
  //   taskMaster.allTaskContainer();
  // });

}
startUp();

export default startUp
