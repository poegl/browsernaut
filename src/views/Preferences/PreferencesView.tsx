import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants';
import { HeaderBar } from './components/header-bar';
import { AboutPane } from './components/pane-about';
import { AppsPane } from './components/pane-apps';
import { GeneralPane } from './components/pane-general';
import { DraggableTitleBar } from '../../components/DraggableTitleBar';
import { getCurrent } from '@tauri-apps/api/window';

export const PreferencesView = () => {
  React.useEffect(() => {
    //* Supposed workaround to the flashing white screen on load
    getCurrent().show();
    getCurrent().setFocus();
  }, []);
  return (
    <Container>
      <div className="flex h-screen w-screen flex-col text-gray-800 dark:text-gray-300">
        <DraggableTitleBar />
        <HeaderBar className="shrink-0" />
        <div className="flex grow flex-col overflow-hidden p-8">
          <GeneralPane />
          <AppsPane />
          <AboutPane />
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  align-items: center;
  background: ${colors.background};
  color: ${colors.text};
`;
