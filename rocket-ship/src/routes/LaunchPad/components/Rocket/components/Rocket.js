import React, { useState, Component, PureComponent } from 'react';
import RocketCore from './RocketCore';

// export function FunctionalRocket() {
//   const [initialLaunchTime] = useState(Date.now());
//   console.log(FunctionalRocket);
//   return <RocketCore initialLaunchTime={initialLaunchTime} />;
// }

const FunctionalRocket = React.memo(function FunctionalRocket() {
  const [initialLaunchTime] = useState(Date.now());
  console.log(FunctionalRocket);
  return <RocketCore initialLaunchTime={initialLaunchTime} />;
});

export class ClassRocket extends PureComponent {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now(),
    };
    console.log(this.state);
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}

export { FunctionalRocket };
