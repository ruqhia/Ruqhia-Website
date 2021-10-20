import logo from './logo.svg';
import './App.css';

import { Layout, Menu, Divider } from 'antd';

const { Header, Content, Footer } = Layout;


const App = () => (
  <div className="App">
 <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} className="menu2">
        <Menu.Item key="Top">
          <a href="#Top2">
            Top
          </a>
        </Menu.Item>
        <Menu.Item key="Aboutme">
          <a href="#Top3">
            About me
          </a>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 0px' }} id="Top2">
      <div className="site-layout-content">
        <img src="https://www.techgrapple.com/wp-content/uploads/2016/09/cool-Black-background-3d-1024x576.jpg" alt="Cinque Terre" width="1000" height="500" class="bigImage"/>
        <div class="nameheader">Ruqhia Frozaan</div>
        <div class="resumeheader">Portfolio/Resume</div>
      </div>
    </Content>
    <Content style={{ padding: '0 0px' }} id="Top3">
      <div className="Aboutme">
        <h1>About Me</h1> 
        <p>If opportunity doesn’t knock, build a door!</p>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}> Created by Ruqhia Frozaan</Footer>
  </Layout>
  </div>
);

export default App;