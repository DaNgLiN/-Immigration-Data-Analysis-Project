import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { initialData, formKey } from "./data";
import Title from "../../components/Title";
import InputField from "../../components/InputField";

const ComprehensiveRankingSystem = () => {
  const [data, setData] = useState(initialData);
  const [showModal, setShowModal] = useState(false);
  const [crsScore, setCrsScore] = useState(0);

  const getData = (key) => data.find((option) => option.name === key);

  const handleSelect = (e) => {
    const { name, value } = e.target;
    setData((data) =>
      data.map((option) =>
        option.name === name ? { ...option, value } : option
      )
    );
  };

  const calculateCrsScore = () => {
    // Replace this with your actual CRS score calculation logic
    let score = 450;
    data.forEach((option) => {
      if (option.value) {
        score += parseInt(option.value, 10) || 0;
      }
    });
    setCrsScore(score);
  };

  const handleCalculateClick = () => {
    calculateCrsScore();
    setShowModal(true);
  };

  return (
    <div className="pb-4">
      <Title>
        Comprehensive Ranking System (CRS) tool: skilled immigrants (Express
        Entry)
      </Title>
      <div>
        {data.map((option) => {
          const inputField = (
            <InputField
              key={option.name}
              name={option.name}
              label={option.label}
              options={option.options}
              value={option.value}
              onSelect={handleSelect}
            />
          );
          switch (option.name) {
            case formKey.spouseResident: {
              return (
                getData(formKey.maritalStatus).value === "married" && inputField
              );
            }
            case formKey.spouseComeCanada: {
              const isMarried =
                getData(formKey.maritalStatus).value === "married";
              const isOutside = getData(formKey.spouseResident).value === "no";

              return isMarried && isOutside && inputField;
            }

            case formKey.age: {
              const maritalStatus = getData(formKey.maritalStatus).value;
              const isMarried = maritalStatus === "married";
              const spouseResident = getData(formKey.spouseResident).value;
              if (maritalStatus) {
                if (isMarried) {
                  if (spouseResident === "yes") return inputField;
                  else if (getData(formKey.spouseComeCanada).value)
                    return inputField;
                  else return null;
                }
                return inputField;
              }
              return null;
            }

            case formKey.education: {
              return getData(formKey.age).value && inputField;
            }

            case formKey.canadianDegree: {
              return getData(formKey.education).value && inputField;
            }

            case formKey.levelOfEducation: {
              return (
                getData(formKey.canadianDegree).value === "yes" && inputField
              );
            }

            case formKey.languageTestYears: {
              const canadianDegree = getData(formKey.canadianDegree).value;
              if (!canadianDegree) return null;
              else if (canadianDegree === "no") return inputField;
              else if (
                canadianDegree === "yes" &&
                getData(formKey.levelOfEducation).value
              )
                return inputField;
              return null;
            }

            case formKey.officialLanguage: {
              const languageTestYears = getData(
                formKey.languageTestYears
              ).value;
              if (languageTestYears === "yes") return inputField;
              return null;
            }

            case formKey.speakingScore:
            case formKey.listeningScore:
            case formKey.readingScore:
            case formKey.writingScore: {
              return getData(formKey.officialLanguage).value && inputField;
            }

            case formKey.workExperienceInCanada:
            case formKey.workExperienceInForeign: {
              return (
                getData(formKey.speakingScore).value &&
                getData(formKey.listeningScore).value &&
                getData(formKey.readingScore).value &&
                getData(formKey.writingScore).value &&
                inputField
              );
            }

            case formKey.certificateOfQualification: {
              return (
                getData(formKey.workExperienceInCanada).value &&
                getData(formKey.workExperienceInForeign).value &&
                inputField
              );
            }

            case formKey.jobOfferLMIA: {
              return (
                getData(formKey.certificateOfQualification).value && inputField
              );
            }

            case formKey.jobOfferNOC_TEER: {
              return (
                getData(formKey.jobOfferLMIA).value === "yes" && inputField
              );
            }

            case formKey.provinceNomineCertificate: {
              const jobOfferLMIA = getData(formKey.jobOfferLMIA).value;
              if (!jobOfferLMIA) return null;
              return jobOfferLMIA === "yes"
                ? getData(formKey.jobOfferNOC_TEER).value
                  ? inputField
                  : undefined
                : inputField;
            }

            case formKey.bloodRelationship: {
              return (
                getData(formKey.provinceNomineCertificate).value && inputField
              );
            }

            default:
              return inputField;
          }
        })}
      </div>
      <Button
        variant="primary"
        disabled={!getData(formKey.bloodRelationship).value}
        onClick={handleCalculateClick}
      >
        Calculate CRS
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Comprehensive Ranking System Score</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 style={{ color: "#fd7e14" }}>Your CRS score is: {crsScore}</h2>
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

export default ComprehensiveRankingSystem;
