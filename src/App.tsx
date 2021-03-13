import React, {Fragment, useState} from 'react';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITask {
  name: string;
  done: boolean;
}

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('');
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: FormElement) => {
    e.preventDefault()
    addTask(newTask)
    setNewTask('')
  }

  const addTask = (name: string) => {
    const newT: ITask[] = [...tasks, {name, done: false}]
    setTasks(newT)
  }

  return (
    <Fragment>
      <div className="card">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={e => setNewTask(e.target.value)} value={newTask} />
            <button>Save</button>
          </form>  
        </div>
      </div>
      {
        tasks.map((t: ITask, index: number) => (
          <div key={index}>
            <h1>{t.name}</h1>
          </div>
          
        ))
      }
    </Fragment>
  );
}

export default App;
