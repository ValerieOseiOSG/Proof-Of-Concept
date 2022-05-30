import './App.css';
import OWLUITabs from './Tabs/Tabs';
import OWLUISwitch from './Switch/Switch';
import { items } from './data';

function App() {
    return (
        <div className="app-container">
            <OWLUITabs data={items} />
            <OWLUISwitch data={items} />
        </div>
    );
}

export default App;
