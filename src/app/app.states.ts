import { Transition } from '@uirouter/core';
import { AppComponent } from './app.component';
import { DetailComponent } from './components/detail/detail.component';
import { EmptyComponent } from './components/empty/empty.component';


export function returnTo ($transition$: Transition): any {
  if ($transition$.redirectedFrom() != null) {
    // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
    // Return to the original attempted target state (e.g., contacts)
    return $transition$.redirectedFrom().targetState();
  }

  const $state = $transition$.router.stateService;

  // The user was not redirected to the login state; they directly activated the login state somehow.
  // Return them to the state they came from.
  if ($transition$.from().name !== '') {
    return $state.target($transition$.from(), $transition$.params('from'));
  }

  // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
  return $state.target('home');
}


export const appState = {

  name: 'app',
  views: {
    '!$default': {component : AppComponent}
  }
  
};
export const homeState = {
  parent: 'app',
  name: 'home',
  url: '/',
  views: {
    'content@app': {component : EmptyComponent}
  }
};
export const detailState = {
  parent: 'app',
  name: 'detail',
  url: '/:name',
  views: {
    'content@app': {component : DetailComponent}
  }
};


export const APP_STATES = [
  appState,
  homeState,
  detailState

]