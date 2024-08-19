import Button from '@app/components/atoms/Button';

function App() {
  return (
    <div className="border w-screen h-screen flex justify-center items-center">
      <Button size='md' children={'Click Me'} variant={'primary'} />
    </div>
  );
}

export default App;
