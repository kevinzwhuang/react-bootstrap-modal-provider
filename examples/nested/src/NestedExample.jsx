import React from 'react';
import { modalProviderShape, withModalProvider } from 'react-bootstrap-modal-provider';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import childModal from './childModal';

class NestedExample extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>React-Bootstrap-Modal-Provider nested modal example</h1>
          <p>
            This is an example of using React-Bootstrap-Modal-Provider to render nested modals
          </p>
          <Button onClick={() => this.props.modalProvider.showModal(childModal)}>
            Click me
          </Button>
        </Jumbotron>
      </Grid>
    );
  }
}

NestedExample.propTypes = { modalProvider: modalProviderShape.isRequired };

export default withModalProvider(NestedExample);
