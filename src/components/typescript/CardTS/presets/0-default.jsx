import React from 'react';
import CardTS from '../CardTS';
import CardActionsTS from '../../CardActionsTS/CardActionsTS';
import CardActionAreaTS from '../../CardActionAreaTS/CardActionAreaTS';
import CardContentTS from '../../CardContentTS/CardContentTS';
import CardHeaderTS from '../../CardHeaderTS/CardHeaderTS';
import CardMediaTS from '../../CardMediaTS/CardMediaTS';
import ButtonTS from '../../ButtonTS/ButtonTS';
import TypographyTS from '../../TypographyTS/TypographyTS';

export default (
  <CardTS uxpId="Card-1">
    <CardHeaderTS
      uxpId="Card-Header-1"
      avatar="R"
      color="grey"
      action="add"
      title="Design Insights"
      subheader="December 6, 2021"
    />
    <CardMediaTS
      uxpId="Card-Media-1"
      component="img"
      height={140}
      image="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      alt="Cool art"
    />
    <CardContentTS uxpId="Card-Content-1" component="div">
      <TypographyTS uxpId="Typograhpy-1" gutterBottom variant="h4" component="div">
        Trends
      </TypographyTS>
      <TypographyTS uxpId="TypographyTS-2" variant="body2" color="text.secondary">
        Learn about the recent top design trends and get inspired. See what you can experiment with in your future
        designs.
      </TypographyTS>
    </CardContentTS>
    <CardActionAreaTS uxpId="Card-Action-Area-1">
      <CardActionsTS uxpId="Card-Action-1">
        <ButtonTS uxpId="ButtonTS-1" size="small" color="primary" variant="outlined">
          Share
        </ButtonTS>
      </CardActionsTS>
    </CardActionAreaTS>
  </CardTS>
);
