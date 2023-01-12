import './App.css';
import DataTable from './DataTable' ;
import { Container} from 'reactstrap';

function App() {
  return (
   <div className="App">
 <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - Jan 10 2023 Edition</h1>
          <p className="lead">My Name Pooja Soni  </p>
          <p className="lead"><a href="https://github.com/sonipooja2023">Here</a> is my Github Link  </p>
          <p className="lead"><a href="http://webdevnotes.wynisco.com">Here</a> Here is Class Notes Link </p>
          <p className="lead"><a href="http://webdevhw.wynisco.com">Here</a> Here is Homeworks Link </p>
          <p className="lead"><a href="https://docs.google.com/spreadsheets/d/1I75Kt78QSCRSAiF74yBttNyWVI4bq2ONsTWnN_ai9iA/edit?usp=sharing">Here</a> Main Google Spreadsheet </p>

     <DataTable />
     </Container>
    </div>
  );
}

export default App;
