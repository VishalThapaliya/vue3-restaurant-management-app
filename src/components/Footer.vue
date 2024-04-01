<template>
    <footer>
        <p>A VUE 3 Restaurant Management CRUD App | &copy; Bishal Thapaliya</p>
    </footer>
</template>
  
  <script>
  export default {
      name: 'Footer'
  }
  </script>
  
  <style>
  footer {
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      width: 100%;
      bottom: 0;
      background-color: lightgreen;
      padding-block: 1rem;  
  }
  
  footer p {
      font-weight: 600;
      color: rgba(6, 3, 173, 0.473);
  }
  </style>