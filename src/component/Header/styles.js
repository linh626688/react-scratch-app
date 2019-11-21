import styled from 'styled-components'

export const WrapperHeader = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  .app-header {
    height: 60px;
    position: relative;
    z-index: 10;
  }
  
  .app-title {
      line-height: 60px;
      vertical-align: middle;
      font-size: 1.35em;
  }
  
  .app-branding {
      float: left;
  }
  
  .app-options {
      float: right;
  }
  
  .app-nav ul {
      list-style-position: none;
      margin: 0;
      padding: 0;
  }
  
  .app-nav ul li {
      list-style-type: none;
      display: inline-block;
  }
  
  .app-nav ul li a {
      display: inline-block;
      line-height: 60px;
      vertical-align: middle;
      padding-left: 15px;
      padding-right: 15px;
      color: rgba(0,0,0,0.65);
  }
  
  .app-nav ul li a:hover {
      color: #0f96f6;
  }
  
  .app-nav ul li a.active {
      color: #0f96f6;
  }
`;
