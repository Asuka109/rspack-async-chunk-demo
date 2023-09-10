import { ComponentType, FC } from 'react';

const _taskMapping = new Map();

export interface LazyProps {
  component: Promise<ComponentType>;
}

export const Lazy: FC<LazyProps> = ({ component }) => {
  if (_taskMapping.has(component)) {
    const Component = _taskMapping.get(component);
    return <Component />;
  } else {
    component.then(Component => _taskMapping.set(component, Component));
    throw component;
  }
};
