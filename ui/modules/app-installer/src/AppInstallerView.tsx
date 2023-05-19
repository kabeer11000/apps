import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { AppInstallerViewProps } from './AppInstaller.types';

const NativeView: React.ComponentType<AppInstallerViewProps> =
  requireNativeViewManager('AppInstaller');

export default function AppInstallerView(props: AppInstallerViewProps) {
  return <NativeView {...props} />;
}
