import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const TextSummorize = ({ children, maxChars = 300 }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;
  if (children.length <= maxChars) return <Text>{children}</Text>;

  const content = expanded ? children : children.substring(0, maxChars) + "...";
  return (
    <>
      <Text>
        {content}
        <Button
          size="xs"
          marginLeft={1}
          borderRadius={10}
          fontWeight="bold"
          colorPalette="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </>
  );
};

export default TextSummorize;
