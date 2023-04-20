import {Link} from 'react-router-dom';

const Page404 = () => {
  return (
    <div style={{height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <h1 style={{color: '#222', fontWeight: 'bold', textAlign: 'center', fontSize: '18vmin', textShadow: '12px -8px 0px rgba(0, 0, 0, .1)',}}>404</h1>
      <p style={{color: '#222', fontSize: '5.5vmin'}}>Page Not Found</p>
      <Link to="/" style={{fontSize: '3.5vmin'}}>Back To Home Page</Link>
    </div>
  )
}

export default Page404;
