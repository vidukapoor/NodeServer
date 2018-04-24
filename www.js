import { DEFAULT_PORT } from './server/utils/constants';
import app from './server/server';
// import { consoleLog } from './server/utils/logging';

const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
    console.log('url: ', `http://localhost:${port}`);
    // consoleLog('url: ', `http://localhost:${port}`);
});
