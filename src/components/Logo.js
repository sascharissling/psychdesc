import React from "react";
import styled from "@emotion/styled";

const AppName = styled.h1`
  margin: 5px;
  color: #eef1fa;
  font-size: 1.2rem;
`;

const CountryName = styled.span`
  margin: 5px;
  color: #e15a5a;
  font-size: 1.5rem;
`;

export default function Logo({ chartCountry }) {
  return (
    <AppName>
      Top 50 alltime last.fm Artists <CountryName>{chartCountry}</CountryName>
    </AppName>
  );
}
