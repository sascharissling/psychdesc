import React from "react";
import styled from "@emotion/styled";

const AppName = styled.h1`
  margin: 5px;
  color: #eef1fa;
  font-size: 1.3rem;
`;

const CountryName = styled.span`
  margin: 5px;
  color: #e15a5a;
  font-size: 1.3rem;
`;

export default function Logo({ text }) {
  return (
    <AppName>
      Top 50 last.fm Artists <CountryName>country name</CountryName>
    </AppName>
  );
}
