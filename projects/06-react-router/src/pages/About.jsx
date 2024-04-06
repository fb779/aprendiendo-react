import { Link } from '../Link';

export default function About() {
  return (
    <>
      <h1>Mi Nombre </h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <img src='https://picsum.photos/seed/picsum/200' alt='User' />
      <div>
        <Link to='/'>Home</Link>
      </div>
    </>
  );
}
