<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/">Go to Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">Go to About</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<style scoped>
div{
    justify-content: center;
}
ul {
  width: 90%;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  border: 1px solid red;
}

li {
  padding: 15px;
}

a {
  text-decoration: none;
}
</style>
