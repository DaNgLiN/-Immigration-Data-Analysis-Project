import { Alert, Button, Modal, Table } from "react-bootstrap";
import InputField from "../../components/InputField";
import Title from "../../components/Title";
import { useState } from "react";
import { initialData } from "./initialData.jsx";
import { predict } from "../../api/index.js";
import { formKey } from "./formKey.js";

const Prediction = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState("");

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setData((data) => data.map((x) => (x.name === name ? { ...x, value } : x)));
  };

  const handleSubmit = async () => {
    try {
      // Convert data to the required format
      const payload = {};
      data.forEach((x) => {
        // Use the correct field names here
        if (x.name === formKey.year) {
          payload["EN_YEAR"] = Number(x.value);
        } else if (x.name === formKey.quater) {
          payload["EN_QUARTER"] = x.value;
        } else if (x.name === formKey.month) {
          payload["EN_MONTH"] = x.value;
        } else if (x.name === formKey.province) {
          payload["EN_PROVINCE_TERRITORY"] = x.value;
        } else if (x.name === formKey.division) {
          payload["EN_CENSUS_DIVISION"] = x.value.toLowerCase();
        } else if (x.name === formKey.subDivision) {
          payload["EN_CENSUS_SUBDIVISION"] = x.value.toLowerCase();
        }
      });

      // Log the payload to verify its structure
      console.log(payload);

      // Send the data to the server
      const response = await predict(payload);

      // Display the result in a modal
      setResult(response.data.predicted_total);
      setShowModal(true);
    } catch (error) {
      console.error("Error predicting total:", error);
      setResult("An error occurred while fetching the prediction.");
      setShowModal(true);
    }
  };

  return (
    <div>
      <Title>Immigration Prediction</Title>
      <div>
        {initialData.map((option) => (
          <InputField
            key={option.name}
            name={option.name}
            label={option.label}
            options={[{ label: "Select...", value: "" }, ...option.options]}
            value={option.value}
            onSelect={handleSelect}
          />
        ))}
      </div>
      <Button className="my-4" onClick={handleSubmit}>
        Submit
      </Button>

      {/* Modal for displaying results */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Prediction Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Options</th>
                <th>Selected value</th>
              </tr>
            </thead>
            <tbody style={{ textTransform: "capitalize" }}>
              {data.map((selectedValue) => (
                <tr key={selectedValue.name}>
                  <td>{selectedValue.name}</td>
                  <td>
                    {
                      selectedValue.options.find(
                        (y) =>
                          y.value ===
                          (selectedValue.name === "year"
                            ? Number(selectedValue.value)
                            : selectedValue.value)
                      )?.label
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Alert>
            <span style={{ fontWeight: 700 }}>
              Predicted Total number of immigrants that get PR:{" "}
              {parseInt(result)}
            </span>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Prediction;
