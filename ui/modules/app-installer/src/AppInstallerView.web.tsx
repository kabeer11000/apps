import * as React from 'react';

import { AppInstallerViewProps } from './AppInstaller.types';

export default function AppInstallerView(props: AppInstallerViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
