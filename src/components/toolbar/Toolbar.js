import { ButtonToolbar, ButtonGroup, Button, InputGroup, Form } from 'react-bootstrap';
import './Toolbar.scss';

const Toolbar = ({onFilterChange, onUpdateSearch, searchTerm}) => {
  const filterBtns = document.querySelectorAll('.our-coffee-section .btn');
  
  const onFilter = e => {
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    onFilterChange(e);
  }

  const handleChange = e => {
    const term = e.target.value;
    onUpdateSearch(term);
  }

  return (
    <ButtonToolbar
      className="section__toolbar"
      aria-label="Toolbar with Button groups"
      >
      <InputGroup>
        <label 
          className="section__label"
          id="btnGroupAddon2">Lookiing for</label>
        <Form.Control
          className="section__search-input"
          type="text"
          placeholder="start typing here..."
          aria-label="start typing here..."
          aria-describedby="btnGroupAddon2" 
          value={searchTerm}
          onChange={e => handleChange(e)}
        />
      </InputGroup>
      <ButtonGroup aria-label="First group">
        <span
          className="section__label">Or filter</span>
        <Button 
          onClick={e => onFilter(e)}>Brazil</Button>
        <Button onClick={e => onFilter(e)}>Kenya</Button>
        <Button onClick={e => onFilter(e)}>Columbia</Button>
      </ButtonGroup>
    </ButtonToolbar>
  );
};

export default Toolbar;