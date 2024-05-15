export default function Footer() {
  return (
    <div className='container-fluid from-bottom'>
      <div className='row mt-5'>
        <div className='col d-flex justify-content-center'>
          <a
            className='mx-3'
            href='https://github.com/jaredbartos'
            target='_blank'
            rel='noreferrer'
            title='GitHub Profile'
          >
            GitHub
          </a>
          <a
            className='mx-3'
            href='https://www.linkedin.com/in/jared-bartos-726762272'
            target='_blank'
            rel='noreferrer'
            title='LinkedIn Profile'
          >
            LinkedIn
          </a>
          <a
            className='mx-3'
            href='https://app.codesignal.com/profile/jaredbartos'
            target='_blank'
            rel='noreferrer'
            title='CodeSignal Profile'
          >
            CodeSignal
          </a>
        </div>
      </div>
      <div className='row'>
        <p className='col text-center'>&copy; 2024 - Built by Jared Bartos</p>
      </div>
    </div>
  );
}
