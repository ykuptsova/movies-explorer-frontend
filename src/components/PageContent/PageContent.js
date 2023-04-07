import './PageContent.css';

function PageContent(props) {
  return (
    <main className="page-content">
      { props.children }
      <section className="page-spacer"/>
    </main>
  );
}

export default PageContent; 