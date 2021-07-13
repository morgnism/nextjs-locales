import Head from 'next/head'
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()
  const t = useTranslations('Home');

  const onChangeLanguage = (lang) => (e)=> {
    e.preventDefault()
    if(lang === 'ja') {
      router.push('ja')
    } else {
      router.back();
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          {t('hello', {
            link: (children) => <a href="https://nextjs.org">{children}</a>,
          })}
        </h1>
        <div className="flex row button-box">
          <button onClick={onChangeLanguage('en')} className="primary">English</button>
          <button onClick={onChangeLanguage('ja')} className="secondary">Japanese</button>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title {
          text-align: center;
        }

        .flex {
          width: 50%;
          display: flex;
        }

        .row {
          flex-direction: row;
        }

        .button-box {
          justify-content: space-evenly;
        }

        button {
          width: 40%;
          justify-content: space-evenly;
          margin-top: 50px;
          padding: 8px;
          border-radius: 5px;
          border: none;
        }

        .primary {
          background-color: #0070f3;
          color: #fff;
        }

        .secondary {
          border: 1px solid #e2e2e2;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
