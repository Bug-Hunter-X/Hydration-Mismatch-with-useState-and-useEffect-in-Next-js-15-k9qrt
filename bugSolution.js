```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a sample page.</p>
      <MyComponent />
    </div>
  );
}

// components/MyComponent.js
import { Suspense } from 'react';

function MyComponent() {
  const data = useData();

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}

function useData() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  if (data === null) {
    throw new Error('Data not available yet');
  }
  return data;  
}

// pages/api/data.js
export default async function handler(req, res) {
  res.status(200).json({ message: 'Data fetched from API!' });
}
```