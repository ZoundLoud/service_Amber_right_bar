import React from 'react';
import style, { css } from 'styled-components';
// const { styled } = window;


const ProfileImage = style.div`
  border-radius: 50%;
  ${props => props.src && css`background-image: ${props.src}`};
  height: 50px;
  width: 50px;
  background-size: 50px 50px;
`;

export default ProfileImage;
