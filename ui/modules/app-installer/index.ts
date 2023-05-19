import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to AppInstaller.web.ts
// and on native platforms to AppInstaller.ts
import AppInstallerModule from './src/AppInstallerModule';
import AppInstallerView from './src/AppInstallerView';
import { ChangeEventPayload, AppInstallerViewProps } from './src/AppInstaller.types';

// Get the native constant value.
export const PI = AppInstallerModule.PI;

export function hello(): string {
  return AppInstallerModule.hello();
}

export async function setValueAsync(value: string) {
  return await AppInstallerModule.setValueAsync(value);
}

const emitter = new EventEmitter(AppInstallerModule ?? NativeModulesProxy.AppInstaller);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { AppInstallerView, AppInstallerViewProps, ChangeEventPayload };
