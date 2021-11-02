import './App.css';
import useField from './Hooks/useField';

const Input = ({ label, data }) => {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">{label} :</label>
        <input {...data} className="form-control" />
      </div>
    </form>
  )
}


function App() {
  const name = useField('text');
  const born = useField('date');
  const height = useField('number');

  return (
    <div className="App">
      <form>
        <Input label="name" data={name} />
        <Input label="birthdate" data={born} />
        <Input label="height" data={height} />

        {
          (name.value || born.value || height.value) && (
            <pre>
              <ul>
                {name.value && <li>Name : {name.value}</li>}
                {born.value && <li>Birthdate : {born.value}</li>}
                {height.value && <li>Height : {height.value}</li>}
              </ul>
            </pre>
          )
        }
      </form>
    </div>
  );
}

export default App;
