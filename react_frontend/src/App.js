// App.js

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ServerTimeComponent from './ServerTimeComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Hey Team! 👋</h1>
        <ServerTimeComponent api="http://localhost:8000/" />
        {/* Other components or content */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
