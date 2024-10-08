import './App.css';
import Header from './components/Header/Header';
import Information from './components/Information/Information';
import QuestionEditor from './components/QuestionEditor/QuestionEditor';
import Sidebar from './components/Sidebar/Sidebar';
import SidebarMenu from './components/SidebarMenu/SidebarMenu';

function App() {
  const productInfo = {
    catalog: "Television",
    subCatalog: "Q LED",
    brandName: "Sony",
    modelNo: "A80L Series",
    deviceCategory: "Android TV",
    manufacturer: "Sony Corp.",
    manufacturedIn: "Japan",
    productCapability: 80
  };
  return (
    <div className="app">
      <Sidebar className="sidebar" />
      <div className="main-content">
        <Header className="header" />
        <hr style={{width: "100%" , border: "1px solid #353535" , marginTop: "25px"}}/>
        <div style={{paddingTop: '20px'}}>
        <Information className="information" productInfo={productInfo} />
        </div>
        <div className="editor-container">
          <SidebarMenu className="sidebar-menu" />
          <QuestionEditor className="question-editor" />
        </div>
      </div>
    </div>
  );
}

export default App;
