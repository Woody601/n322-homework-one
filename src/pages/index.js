import React from 'react';
import { Card, Image, Grid, Button } from 'semantic-ui-react';

export default function Home() {
  return (
    <>
      <Grid>
        <Grid.Row column='1'>
          <Grid.Column>
            <h1>Home</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns='4'>
          <Grid.Column width='8'>
            <Card fluid>
              <Image src='/blossom-place.jpg' wrapped ui={false} />
              <Card.Content>
                <Card.Header>Floral Haven</Card.Header>
                <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <p>This is placeholder text so that we can see what the content looks like.</p>
            <Button color='yellow' basic>Info</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}