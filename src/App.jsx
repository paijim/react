function App () {
  return (
    <div style={{ textAlign:'center', marginTop:'50 px', fontFamily:'sans-serif'}}>
      <h1>Test deploiement reussi</h1>
      <p>Deploiement via docker & alpine</p>
      <div style={{display:'flex', justifyContent:'center', gap:'20px'}}>
        <div style={{border:'1px solid #ccc', padding:'10px'}}>Linux / Bash</div>
        <div style={{border:'1px solid #ccc', padding:'10px'}}>Docker </div>
        <div style={{border:'1px solid #ccc', padding:'10px'}}>React</div>
      </div>
    </div>
  );
}

export default App;