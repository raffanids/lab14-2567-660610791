
import { Text } from '@mantine/core';
import { FooterProps } from "@lib/types";

export default function Footer({ year, name, studentId }: FooterProps) {
  return (
    <div>
      <Text> Copyright © {year} {name} {studentId} </Text>
    </div>
  );
}
