import firebase from 'firebase/app';
import 'firebase/auth';
import config from '../config';

// eslint-disable-next-line import/no-mutable-exports
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(config.firebase);
}

export default app;
