import React from 'react';
import { Avatar, HStack, RatingGroup, Stack, Text } from "@chakra-ui/react"

const QuickRating = () => {
const user = {user};
const title = {title};
const author = {author};
  return (
    <Stack maxW="320px" gap="4">
      <RatingGroup.Root
        colorPalette="orange"
        readOnly
        count={5}
        defaultValue={5}
        size="xs"
      >
        <RatingGroup.HiddenInput />
        <RatingGroup.Control />
      </RatingGroup.Root>

      <Text>
       Review text here...
      </Text>

      <HStack gap="4">
        <Avatar.Root>
          <Avatar.Fallback name={ user } />
        </Avatar.Root>
        <Stack textStyle="sm" gap="0">
          <Text fontWeight="medium">Reviewing { title }</Text>
          <Text color="fg.muted">by { author }</Text>
        </Stack>
      </HStack>
    </Stack>
  )
}


export default QuickRating;