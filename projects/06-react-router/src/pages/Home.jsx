import { Link } from '../Link';

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ad
        asperiores ratione molestiae, modi quia obcaecati impedit perspiciatis
        facilis natus, dolorum praesentium consequuntur vero odit nobis animi
        reiciendis ut veniam.
      </p>

      <Link to='/about' href='/'>
        About
      </Link>
    </>
  );
}
