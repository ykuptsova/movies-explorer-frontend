import './PageContent.css';

function PageContent(props) {
  return (
    <main className="page-content">{ props.children }</main>
  );
}

export default PageContent; 