import React from 'react';
import { HStack, RadioGroup } from "@chakra-ui/react";

const Radio = () => {
    
    const RecommendBook = () => {
        return (
          <RadioGroup.Root defaultValue="1">
            <HStack gap="6">
              {items.map((item) => (
                <RadioGroup.Item key={item.value} value={item.value}>
                  <RadioGroup.ItemHiddenInput />
                  <RadioGroup.ItemIndicator />
                  <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
                </RadioGroup.Item>
              ))}
            </HStack>
          </RadioGroup.Root>
        )
      }
      
      <h2>Would you recommend this book to a friend?</h2>
      
      const items = [
        { label: "Must Read", value: "1" },
        { label: "Should Read", value: "2" },
        { label: "Flip a Coin", value: "3" },
        { label: "Probably Pass", value:"4"},
        { label: "Hard Pass", value:"5"}
      ]
      
} 

export default Radio;
