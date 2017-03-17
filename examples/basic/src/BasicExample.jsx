import React from 'react';
import { modalProviderShape, withModalProvider } from 'react-bootstrap-modal-provider';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import basicModal from './basicModal';
import anotherBasicModal from './anotherBasicModal';

const mathExplanation = `//BasicExample.jsx
import React from 'react';
import { modalProviderShape, withModalProvider } from 'react-bootstrap-modal-provider';
...

class BasicExample extends React.Component {
  render() {
    return (
      ...
      <Button onClick={() => this.props.modalProvider.showModal({ title: Math.random(), body: Math.random(), footer: <pre className="text-left">{ mathExplanation }</pre> })}>
        Click here for a modal with its contents generated at runtime by random numbers
      </Button>
      ...
    )
  }
}

BasicExample.propTypes = { modalProvider: modalProviderShape.isRequired };

export default withModalProvider(BasicExample);
`;

const inlineExplanation = `//BasicExample.jsx
import React from 'react';
import { modalProviderShape, withModalProvider } from 'react-bootstrap-modal-provider';
...

class BasicExample extends React.Component {
  render() {
    return (
      ...
      <Button onClick={() => this.props.modalProvider.showModal({ title: "This string was hardcoded in here", body: "No extra markup needed here! Just pass in these strings and we're good to go!", footer: <pre className="text-left">{ inlineExplanation }</pre> })}>
        Click here for a modal with its contents defined inline
      </Button>
      ...
    )
  }
}

BasicExample.propTypes = { modalProvider: modalProviderShape.isRequired };

export default withModalProvider(BasicExample);
`;

class BasicExample extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h1>Basic React-Bootstrap-Modal-Provider example</h1>
          <p>
            This is a basic example of a modals being rendered by
            React-Bootstrap-Modal-Provider
          </p>
          <p>
            Note: There are 4 examples here - but <strong>only 1 react-bootstrap modal</strong> is
            actually being rendered here :)
          </p>
          <p>
            <Button onClick={() => this.props.modalProvider.showModal(basicModal)}>
              Click me for a modal predefined by an imported function
            </Button>
          </p>
          <p>
            <Button onClick={() => this.props.modalProvider.showModal(anotherBasicModal)}>
              Click here for another modal - but this time defined by a simple object
            </Button>
          </p>
          <p>
            <Button onClick={() => this.props.modalProvider.showModal({ title: Math.random(), body: Math.random(), footer: <pre className="text-left">{ mathExplanation }</pre> })}>
              Click here for a modal with its contents generated at runtime by random numbers
            </Button>
          </p>
          <p>
            <Button onClick={() => this.props.modalProvider.showModal({ title: "This string was hardcoded in here", body: "No extra markup needed here! Just pass in these strings and we're good to go!", footer: <pre className="text-left">{ inlineExplanation }</pre> })}>
              Click here for a modal with its contents defined inline
            </Button>
          </p>
        </Jumbotron>
      </Grid>
    );
  }
}

BasicExample.propTypes = { modalProvider: modalProviderShape.isRequired };

export default withModalProvider(BasicExample);
