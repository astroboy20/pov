import React from "react";
import { Select, Input } from "@chakra-ui/react";
import { Button } from "@/components/Button";
import { PhotoData, RevealData } from "../Options/data";

const StepOne = ({ data, setData, handleNext,isStepOneValid  }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Input
        value={data.eventHashtag}
        onChange={handleChange}
        name="eventHashtag"
        placeholder="Event Hashtag"
        size={"lg"}
      />
      <Select
        size="lg"
        value={data.eventMode}
        onChange={handleChange}
        name="eventMode"
        placeholder="Mode of Event"
      >
        <option value="Physical">Physical</option>
        <option value="Virtual">Virtual</option>
        <option value="Hybrid">Hybrid</option>
      </Select>

      <Input
        placeholder="Event Date"
        type="datetime-local"
        onfocus="(this.type='date')"
        size={"lg"}
        value={data.startDate}
        name="startDate"
        onChange={handleChange}
      />
      <Input
        value={data.location}
        onChange={handleChange}
        name="location"
        placeholder="Event Location"
        size={"lg"}
      />
      <Select
        value={data.photosPerPerson}
        placeholder="How many cliqs per person ?"
        size={"lg"}
        name="photosPerPerson"
        onChange={handleChange}
      >
        {PhotoData.map((photo) => (
          <option key={photo.id} value={photo.value}>
            {photo.label}
          </option>
        ))}
      </Select>
      <Select
        value={data.revealTime}
        onChange={handleChange}
        name="revealTime"
        size={"lg"}
        placeholder="cliq per person ?"
      >
        {RevealData.map((reveal) => (
          <option key={reveal.id} value={reveal.value}>
            {reveal.label}
          </option>
        ))}
      </Select>
     
      <Button
        onClick={handleNext}
        type={"submit"}
        variant={"defaultButton"}
        disabled={!isStepOneValid()}
      >
        Continue
      </Button>
    </>
  );
};

export { StepOne };
