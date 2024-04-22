import React from "react";
import { Select, Input } from "@chakra-ui/react";
import { Button } from "@/components/Button";
import { PhotoData, RevealData } from "../Options/data";

const StepOne = ({ data, setData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  return (
    <>
      <Input placeholder="Event Hashtag" size={"lg"} />
      <Select size={"lg"}>
        <option value=" Mode of Event" disabled hidden>
          Mode of Event
        </option>
        <option value="Physical">Physical</option>
        <option value="Virtual">Virtual</option>
        <option value="Hybrid">Hybrid</option>
      </Select>
      <Input placeholder="Event Date" type="date" size={"lg"} />
      <Select placeholder="Time of event" size={"lg"}>
        <option>heyy</option>
      </Select>
      <Input placeholder="Event Location" size={"lg"} />
      <Select
        value={data.photosPerPerson}
        placeholder="How many cliqs per person"
        size={"lg"}
      >
        {PhotoData.map((photo) => (
          <option value={photo.value}>{photo.label}</option>
        ))}
      </Select>
      <Select size={"lg"}>
        <option value="" disabled hidden>
          Select Currency
        </option>
        {RevealData.map((reveal) => (
          <option key={reveal.id} value={reveal.value}>
            {reveal.label}
          </option>
        ))}
      </Select>
      {/* <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton
                    style={{
                      background: "none",
                      border: "none",
                      gap: "10px",
                    }}
                  >
                    <div className="item">
                      <EndIcon />
                      <div className="sub-item">
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h2-b"}
                        >
                          Start Date
                        </CustomText>{" "}
                        {data.startDate && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.startDate}
                          </CustomText>
                        )}
                      </div>
                    </div>
                  </AccordionButton>
                  <AccordionPanel background="none" p={10}>
                    <p style={{ margin: "2% 0" }}>
                      Select the start date and time for the event
                    </p>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      name="startDate"
                      type="datetime-local"
                      value={data.startDate}
                      onChange={handleChange}
                      className="input"
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton
                    style={{
                      background: "none",
                      border: "none",
                      gap: "10px",
                    }}
                  >
                    <div className="item">
                      <EndIcon />
                      <div className="sub-item">
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h2-b"}
                        >
                          End Date
                        </CustomText>{" "}
                        {data.endDate && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.endDate}
                          </CustomText>
                        )}
                      </div>
                    </div>
                  </AccordionButton>
                  <AccordionPanel background="none" p={10}>
                    <p style={{ margin: "2% 0" }}>
                      Select the end date and time for the event
                    </p>
                    <Input
                      placeholder="Select Date and Time"
                      size="md"
                      name="endDate"
                      type="datetime-local"
                      value={data.endDate}
                      onChange={handleChange}
                      className="input"
                    />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton
                    style={{
                      background: "none",
                      border: "none",
                      gap: "10px",
                    }}
                  >
                    <div className="item">
                      <RevealIcon />
                      <div className="sub-item">
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h2-b"}
                        >
                          Reveal Photo
                        </CustomText>{" "}
                        {data.revealTime && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.revealTime} hours
                          </CustomText>
                        )}
                      </div>
                    </div>
                  </AccordionButton>
                  <AccordionPanel background="none" p={10}>
                  
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle>
                <AccordionItem>
                  <AccordionButton
                    style={{
                      background: "none",
                      border: "none",
                      gap: "10px",
                    }}
                  >
                    <div className="item">
                      <PIcon />
                      <div className="sub-item">
                        <CustomText
                          weight={"500"}
                          type={"Htype"}
                          variant={"h2-b"}
                        >
                          Photo per person
                        </CustomText>{" "}
                        {data.photosPerPerson && (
                          <CustomText
                            weight={"500"}
                            type={"Htype"}
                            variant={"h2-b"}
                          >
                            {data.photosPerPerson} photos
                          </CustomText>
                        )}
                      </div>
                    </div>
                  </AccordionButton>
                  <AccordionPanel background="none" p={10}>
                    <ItemStyle>
                     
                    </ItemStyle>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion> */}
      <Button
        // onClick={handleNext}
        type={"submit"}
        variant={"defaultButton"}
        // disabled={!isStepOneValid()}
      >
        Continue
      </Button>
    </>
  );
};

export { StepOne };
