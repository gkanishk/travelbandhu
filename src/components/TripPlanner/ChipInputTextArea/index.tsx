// ChipInput.js
import React, { useState } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";

const ChipInputTextArea = () => {
  const [chips, setChips] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      setChips([...chips, inputValue.trim()]);
      setInputValue("");
      event.preventDefault(); // Prevents the default behavior of the Enter key
    }
  };

  const handleRemoveChip = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };

  return (
    <div>
      {chips.length > 0 && (
        <>
          <div className="mt-4">
            <Text>Recommended: </Text>
          </div>
          <Flex className="mt-4">
            {chips.map((chip, index) => (
              <div
                key={index}
                style={{
                  background: "#EDF2F7",
                  borderRadius: "5px",
                  padding: "5px",
                  marginRight: "5px",
                  marginBottom: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Text>{chip}</Text>
                <div
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                  onClick={() => handleRemoveChip(index)}
                >
                  x
                </div>
              </div>
            ))}
          </Flex>
        </>
      )}

      <Flex flexWrap="wrap" alignItems="center">
        <Input
          placeholder="Enter your preferences here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          height={100}
          style={{
            border: "1px solid #EDF2F7",
            outline: "none",
            background: "transparent",
            flexGrow: 1,
            marginRight: "5px",
            marginTop: "4px",
          }}
        />
      </Flex>
    </div>
  );
};

export default ChipInputTextArea;
