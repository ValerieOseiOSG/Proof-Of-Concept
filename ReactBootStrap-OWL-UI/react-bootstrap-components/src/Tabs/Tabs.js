import { useState } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import './styles.css';

const OWLUITabs = ({ data }) => {
    const [selected, setSelected] = useState(0);
    return (
        <div className="owl-ui-tabs border-bottom">
            <h3 className="mb-5">Owl UI Tabs</h3>
            <Tabs
                defaultActiveKey={0}
                id="uncontrolled-tab-example"
                className="">
                {data.map((item, index) => {
                    return (
                        <Tab
                            className={`${
                                item.id === selected ? 'active ' : ' '
                            }p-3`}
                            eventKey={index}
                            title={item.label}
                            onClick={() => setSelected(item.id)}
                            key={item.id}>
                            <p>{item.view}</p>
                        </Tab>
                    );
                })}
            </Tabs>
        </div>
    );
};

export default OWLUITabs;
