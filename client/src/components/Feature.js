import React, { Component } from 'react';
import { requireAuth } from 'components';

class Feature extends Component {
  render() {
    return <div>User is authenticated</div>;
  }
}

export default requireAuth(Feature);
