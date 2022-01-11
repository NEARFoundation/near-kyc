import type { NextPage } from 'next';
import Layout from '../components/main';

const Home: NextPage = () => {
  return (
    <Layout>
      <p>
        We will use{' '}
        <a href="https://onfido.com/" target="_blank">
          Onfido
        </a>
        .
      </p>
      <p>To verify their identity, people will submit photos, documents, etc through a process like the one shown here.</p>
      <p className="ps-3">
        <a href="https://documentation.onfido.com/#sample-document-photo" target="_blank">
          sample UK driver license and photo
        </a>
      </p>
      <p>
        We then receive email notifications about the identity checks and can peruse the details in the{' '}
        <a href="https://dashboard.onfido.com/library?_sandbox_[0]=true" target="_blank">
          dashboard
        </a>
        .
      </p>
      <p>
        We can also set up webhook endpoints that are notified of events (see{' '}
        <a href="https://webhook.site/#!/13429196-3c56-434e-8a18-563a76ddf7c0/45554de6-d0ed-410f-b2cb-f708e30b61af/1" target="_blank">
          sample
        </a>
        ).
      </p>
      <p>
        <a href="/start" className="btn btn-lg btn-primary">
          Start
        </a>
      </p>
    </Layout>
  );
};

export default Home;
