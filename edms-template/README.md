---
pageClass: edm-page
---

<div class="edm-wrap">
  <a href="/edm-template/template-1.html" target="_blank">
    <img src="./images/template-1.png" width="100" /> 
  </a>

  <a href="/edm-template/template-2.html" target="_blank">
    <img src="./images/template-2.png" width="100" /> 
  </a>

  <a href="/edm-template/template-3.html" target="_blank">
    <img src="./images/template-3.png" width="100" /> 
  </a>

  <a href="/edm-template/template-4.html" target="_blank">
    <img src="./images/template-4.png" width="100" /> 
  </a>

  <a href="/edm-template/template-5.html" target="_blank">
    <img src="./images/template-5.png" width="100" /> 
  </a>

  <a href="/edm-template/template-6.html" target="_blank">
    <img src="./images/template-6.png" width="100" /> 
  </a>

  <a href="/edm-template/template-7.html" target="_blank">
    <img src="./images/template-7.png" width="100" /> 
  </a>

  <a href="/edm-template/template-8.html" target="_blank">
    <img src="./images/template-8.png" width="100" /> 
  </a>

  <a href="/edm-template/template-9.html" target="_blank">
    <img src="./images/template-9.png" width="100" /> 
  </a>

  <a href="/edm-template/template-10.html" target="_blank">
    <img src="./images/template-10.png" width="100" /> 
  </a>
</div>


<style lang="scss" scoped>
  .theme-default-content:not(.custom) {
    max-width: 100% !important;  
  }  

  .edm-wrap {
    display: flex;
    flex-wrap: wrap;

    a {
      display: block;
      padding: 5px;
      width: calc(100% / 4 - 32px);
      border: 1px solid #ccc;
      border-radius: 4px;
      margin: 10px;
      max-height: 300px;
      overflow: auto;
      transition: all .2s ease-in-out;

      &:hover {
        box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.5);
      }

      img {
        width: 100%;
      }
    }
  }
  
</style>