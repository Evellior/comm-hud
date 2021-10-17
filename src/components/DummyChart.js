// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from '@nivo/line'
import { useEffect, useState } from 'react';
import { data } from './data'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export function MyResponsiveLine() {
  const [myData, setMyData] = useState(null);

  useEffect(() => {
    setMyData(data)
  }, []);

  return (
    <div style={{ height: '10em', width: '10em' }}>
      <ResponsiveLine
        data={myData}
      />
    </div>
  );
}