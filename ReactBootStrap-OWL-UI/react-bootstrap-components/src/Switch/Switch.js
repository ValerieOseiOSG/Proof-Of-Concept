import { useState } from 'react';
import { Form } from 'react-bootstrap';
import './styles.css';

const OWLUISwitch = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="switch-container">
            <h3 className="mb-3">OWL UI Switch</h3>
            <Form className="form-container">
                {/* <span>Check this switch</span> */}
                <label
                    htmlFor="custom-switch"
                    className={`label p-2 ${toggle ? 'active-switch' : ''}`}>
                    <span aria-hidden="true">Reduced Motion</span>
                    <Form.Check
                        onClick={() => setToggle(!toggle)}
                        checked={toggle}
                        type="switch"
                        id="custom-switch"
                        label={toggle ? 'ON' : 'OFF'}
                    />
                </label>
            </Form>
        </div>
    );
};

export default OWLUISwitch;
