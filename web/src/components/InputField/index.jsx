import { Card, Form } from "react-bootstrap";

const InputField = ({ name, label, value, options = [], onSelect }) => {
  return (
    <Card className="my-2">
      <Card.Body>
        <Form.Group className="mb-3" controlId={name}>
          <Form.Label>{label}</Form.Label>
          <Form.Select name={name} value={value} onChange={onSelect}>
            {options.map((option = {}) => (
              <option key={option.label} value={option.value ?? ""}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Card.Body>
    </Card>
  );
};

export default InputField;
