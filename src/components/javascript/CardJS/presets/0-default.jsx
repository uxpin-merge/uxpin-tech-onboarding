import React from 'react';
import CardJS from '../CardJS';
import CardActionsJS from '../../CardActionsJS/CardActionsJS';
import CardActionAreaJS from '../../CardActionAreaJS/CardActionAreaJS';
import CardContentJS from '../../CardContentJS/CardContentJS';
import CardHeaderJS from '../../CardHeaderJS/CardHeaderJS';
import CardMediaJS from '../../CardMediaJS/CardMediaJS';
import ButtonJS from '../../ButtonJS/ButtonJS';
import TypographyJS from '../../TypographyJS/TypographyJS';

export default (
  <CardJS uxpId="Card-1">
    <CardHeaderJS
      uxpId="Card-Header-1"
      avatar="R"
      color="grey"
      action="add"
      title="Design Insights"
      subheader="December 6, 2021"
    />
    <CardMediaJS
      uxpId="Card-Media-1"
      component="img"
      height={140}
      image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Cool art"
    />
    <CardContentJS uxpId="Card-Content-1" component="div">
      <TypographyJS uxpId="Typograhpy-1" gutterBottom variant="h4" component="div">
        Trends
      </TypographyJS>
      <TypographyJS uxpId="TypographyJS-2" variant="body2" color="text.secondary">
        Learn about the recent top design trends and get inspired. See what you can experiment with in your future
        designs.
      </TypographyJS>
    </CardContentJS>
    <CardActionAreaJS uxpId="Card-Action-Area-1">
      <CardActionsJS uxpId="Card-Action-1">
        <ButtonJS uxpId="ButtonJS-1" size="small" color="primary" variant="outlined">
          Share
        </ButtonJS>
      </CardActionsJS>
    </CardActionAreaJS>
  </CardJS>
);
