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
function MyComponent() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    // Simulate an asynchronous data fetch
    setTimeout(() => {
      setData({ message: 'Data fetched!' });
    }, 1000);
  }, []);

  if (data === null) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{data.message}</p>
    </div>
  );
}
```